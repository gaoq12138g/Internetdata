<template>
    <div class="content">
        <div class="querybar">
            <a-form layout="inline" :form="condition">
                <a-form-item label="产品名称：">
                    <a-input allow-clear="allow-clear" v-model="condition.产品名称" />
                </a-form-item>
                <a-form-item label="企业名称：">
                    <a-input allow-clear="allow-clear" v-model="condition.生产企业名称" />
                </a-form-item>
                <a-form-item label="统一社会信用代码：">
                    <a-input allow-clear="allow-clear" v-model="condition.生产企业统一社会信用代码" />
                </a-form-item>
                <a-form-item>
                    <a-button type="primary" @click="query">查询</a-button>
                </a-form-item>
                <a-form-item>
                    <a-button type="primary" @click="addList">新增</a-button>
                </a-form-item>
                <a-form-item>
                    <a-button type="primary" @click="importCheck">导入</a-button>
                </a-form-item>
            </a-form>
        </div>
        <div class="dataTable">
            <a-table
                :columns="checkColumn"
                :data-source="data"
                :rowKey="(record,index)=>{return index}"
                :pagination="pagination"
                :scroll="{ y: 800 }"
            >
            <span slot="scqyxzqhdm" slot-scope="scqyxzqhdm">
                {{ scqyxzqhdm |  dictionary('行政区划代码')  }}
            </span>
                <span slot="action" slot-scope="text, record">
                    <a-button-group>
                        <a-button type="link" @click="lookDetail(record)">查看</a-button>
                        <a-button type="link" @click="modifyList(record)">修改</a-button>
                        <a-button
                            type="link"
                            style="color:red;"
                            @click="showDeleteConfirm(record)"
                        >删除</a-button>
                    </a-button-group>
                </span>
            </a-table>
        </div>
        <a-modal
            v-model="visible"
            :title="title"
            :width="1100"
            :footer="null"
            :maskClosable="false"
            @ok="handleOk"
            :body-style="modalStyle"
        >
            <milkForm v-if="visible && types != 'detail'" :item="selectedItem" :types="types" />
            <detailMilkForm v-if="types == 'detail'" :item="selectedItem" :types="types" />
        </a-modal>

        <a-modal
            v-model="popVisible"
            title="导入"
            :body-style="modalUploadStyle"
            width="800px"
            centered
            :footer="null"
            :maskClosable="false"
            @ok="() => (popVisible = false)"
        >
            <a-upload
                :file-list="fileList"
                :remove="handleRemove"
                :before-upload="beforeUpload"
                @change="handleChange"
            >
                <a-button>
                    <a-icon type="upload" />选择上传文件
                </a-button>
            </a-upload>
            <a-button
                type="primary"
                :disabled="uploading"
                style="margin-top: 46px"
                @click="handleUpload"
            >上传</a-button>
        </a-modal>
    </div>
</template>

<script>
// 导入国际化--中文
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
import milkForm from '@/components/special/special-food/milkForm.vue';
import detailMilkForm from '@/components/special/special-food/detailMilkForm.vue';
import moment from "moment";
import "moment/locale/zh-cn";
import { Modal } from "ant-design-vue";
import { mapState } from "vuex";
import { importExcel } from "../../../js/import.js"; //引入导入文件
import verify from "../../../js/verify.js"; //引入行政处罚文件

export default {
    components: {
        milkForm,
        detailMilkForm,
    },
    computed: {
        dicFilter() {
            return function (type) {
                let data = this.$store.state.dictionary;
                let result = [];
                for (var i = 0; i < data.length; i++) {
                    if (data[i].类型名称 == type) {
                        result.push(data[i]);
                    }
                }
                return result;
            };
        },
        ...mapState({
            user: (state) => state.currentUser,
        }),
    },
    data() {
        return {
            condition: {
                产品名称: "",
                生产企业名称: "",
                生产企业统一社会信用代码: "",
            },
            modalStyle: {},
            keyWord: "",
            fileList: [],
            importData: [],
            uploading: true,
            popVisible: false,
            modalUploadStyle: {},
            types: "",
            visible: false,
            title: "新增",

            // 国际化-中文
            locale: zhCN,
            行政区划代码: [],

            pagesize: 10,
            current: 1,
            // 表格头
            checkColumn: [
                {
                    title: "序号",
                    width: "5%",
                    customRender: (text, record, index) =>
                        `${(this.current - 1) * this.pagesize + (index + 1)}`,
                },
                
                {
                    title: "产品名称",
                    key: "cpmc",
                    dataIndex: "产品名称",
                },
                {
                    title: "生产企业名称",
                    // width: "40%",
                    key: "scqymc",
                    dataIndex: "生产企业名称",
                },
                {
                    title: "统一社会信用代码",
                    key: "scqytyshxydm",
                    dataIndex: "生产企业统一社会信用代码",
                },
                {
                    title: "生产企业行政区划",
                    key: "scqyxzqhdm",
                    dataIndex: "生产企业行政区划代码",
                    scopedSlots: {
                        customRender: "scqyxzqhdm",
                    },
                },
                {
                    title: "食品生产许可证编号",
                    key: "spscxkzbh",
                    dataIndex: "食品生产许可证编号",
                },
                {
                    title: "操作",
                    width: "15%",
                    key: "action",
                    dataIndex: "action",
                    scopedSlots: {
                        customRender: "action",
                        align: "center",
                    },
                    align: "center",
                },
            ],
            // 数据数组
            data: [],
            // 分页
            pagination: {
                showSizeChanger: false,
                defaultPageSize: 10,
                pageSize: 10,
                showQuickJumper: true,
                showTotal: (total, range) => `共有 ${total}条`,
                onChange: (current, size) => {
                    (this.current = current), (this.pagesize = size);
                },
            },
            selectedItem: {},
        };
    },
    methods: {
        // 点击切换接口类型
        handleChange(value) {
            console.log(`selected ${value}`);
        },

        // 选择日期方法
        onChange(pageNumber) {
            console.log("Page: ", pageNumber);
        },

        // 给table添加className
        rowClassName(record, index) {
            let className = "light-row";
            return className;
        },

        handleOk(e) {
            // console.log(e);
            this.visible = false;
            this.query();
        },
        // 修改
        modifyList(e) {
            console.log(e);
            this.title = "修改";
            this.types = "modify";
            this.visible = true;
            this.selectedItem = e;
        },
        // 新增
        addList() {
            this.title = "新增";
            this.types = "new";
            this.visible = true;
            this.selectedItem = {};
        },
        // 查看详情
        lookDetail(e) {
            this.title = "详情";
            this.types = "detail";
            this.visible = true;
            this.selectedItem = e;
        },

        // 组件内触发关闭弹窗
        closeModel() {
            this.$root.$on("updataCLoseMilk", (msg) => {
                this.handleOk();
            });
        },

        // 删除弹窗
        showDeleteConfirm(e) {
            let id = e.id;
            let deletelist = this.delete;
            this.$confirm({
                title: "你确定要删除这条信息吗?",
                // content: "Some descriptions",
                okText: "Yes",
                okType: "danger",
                cancelText: "No",
                onOk() {
                    console.log("OK");
                    deletelist(id);
                },
                onCancel() {
                    console.log("Cancel");
                },
            });
        },

        // 查询列表
        query() {
            this.axios
                .post("special/milk/query", this.condition)
                .then((res) => {
                    console.log(res);
                    if ((res.data.code = 200)) {
                        this.data = res.data.data;
                    } else {
                        this.$message.error("查询失败");
                    }
                });
        },
        // 删除
        delete(id) {
            this.axios.get("special/milk/delete/" + id).then((res) => {
                console.log(res);
                if ((res.data.code = 200)) {
                    this.$message.success("删除成功");
                    this.query();
                } else {
                    this.$message.error("删除失败");
                }
            });
        },

        // 导入
        handleRemove(file) {
            const index = this.fileList.indexOf(file);
            const newFileList = this.fileList.slice();
            newFileList.splice(index, 1);
            this.fileList = newFileList;
        },
        beforeUpload(file) {
            this.fileList = [...this.fileList, file];
            return false;
        },
        handleChange: function (a) {
            var dataList;
            var index = 0;
            let _this = this;
            importExcel(a.file).then((data) => {
                dataList = data.slice();
                dataList.splice(index, 1);
                _this.importData = dataList;

                let result = verify.verify(_this.importData, "配方奶粉");
                console.log(result);
                let len = _this.importData.length;

                for (let i = 0; i < len; i++) {}

                if (result.pass) {
                    _this.uploading = false;
                } else {
                    _this.uploading = true;
                    this.$message.error(result.message);
                }
            });
        },
        handleUpload: function () {
            this.axios
                .post("special/milk/insert", this.importData)
                .then((res) => {
                    console.log(res);
                    if (res.data.code == 200) {
                        this.$message.success("新增成功");
                        this.query();
                        this.popVisible = false;
                    } else {
                        this.$message.error("新增失败");
                        this.popVisible = false;
                    }
                });
        },
        //导入检查行为
        importCheck: function () {
            this.popVisible = true;
        },
    },
    mounted() {
        var height = document.body.clientHeight;
        this.modalStyle.height = height * 0.33 + "px";
        if(this.types == "detail") {
            this.modalStyle.height = height * 0.2 + "px";
        }
        this.modalUploadStyle.height = height * 0.3 + "px";

        this.query();
    },
    beforeMount() {
        this.closeModel();
    },
};
</script>


<style lang="scss" scoped>
@import "../../style";
</style>