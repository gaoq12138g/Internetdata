<template>
    <div class="content">
        <div class="querybar">
            <a-form layout="inline" :form="condition">
                <a-form-item label="报送时间：">
                    <a-range-picker v-model="condition.range" />
                </a-form-item>
                <a-form-item label="行政相对人：">
                    <a-input allow-clear="allow-clear" v-model="condition.行政相对人" />
                </a-form-item>
                <a-form-item label="行政相对人编码：">
                    <a-input allow-clear="allow-clear" v-model="condition.行政相对人编码" />
                </a-form-item>
                <a-form-item>
                    <a-button type="primary" @click="queryQTXW">查询</a-button>
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
            <qtxwForm v-if="visible && types != 'detail'" :item="selectedItem" :types="types" />
            <qtxwdetail v-if="types == 'detail'" :item="selectedItem" :types="types" />
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

import qtxwForm from "../../../components/action/Other/qtxwForm.vue";
import qtxwdetail from "../../../components/action/Other/qtxwdetail.vue";
import moment from "moment";
import "moment/locale/zh-cn";
import { Modal } from "ant-design-vue";
import { mapState } from "vuex";
import { importExcel } from "../../js/import.js"; //引入导入文件
import verify from "../../js/verify.js"; //引入行政处罚文件

export default {
    components: {
        qtxwForm,
        qtxwdetail,
    },
    computed: {
        ...mapState({
            user: (state) => state.currentUser,
        }),
    },
    data() {
        return {
            condition: {
                行政相对人: "",
                行政相对人编码: "",
                报送结束时间: undefined,
                报送开始时间: undefined,
                报送人员: "",
                range: [],
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
                    title: "其他行为名称",
                    width: "40%",
                    key: "Cfxwmc",
                    dataIndex: "行为名称",
                },
                {
                    title: "监管对象",
                    key: "Jgdx",
                    dataIndex: "监管对象",
                },
                {
                    title: "行政相对人",
                    key: "xzxdr",
                    dataIndex: "行政相对人（单位/个人）",
                },
                {
                    title: "报送人员",
                    key: "Jcry",
                    dataIndex: "报送人员",
                },
                {
                    title: "报送时间",
                    key: "Jcsj",
                    dataIndex: "报送时间",
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
            console.log(e);
            this.visible = false;
            this.queryQTXW();
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
            this.$root.$on("updataCLose", (msg) => {
                this.handleOk();
            });
        },

        // 删除弹窗
        showDeleteConfirm(e) {
            let id = e.id;
            let deletelist = this.deleteQTXW;
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
        queryQTXW() {
            this.condition.报送开始时间 = this.condition.range[0];
            this.condition.报送结束时间 = this.condition.range[1];
            var _this = this;
            this.axios
                .post("action/other/query", this.condition)
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
        deleteQTXW(id) {
            this.axios.get("action/other/delete/" + id).then((res) => {
                console.log(res);
                if ((res.data.code = 200)) {
                    this.$message.success("删除成功");
                    this.queryQTXW();
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

                let result = verify.verify(_this.importData, "其他行为");
                console.log(result);
                let len = _this.importData.length;

                for (let i = 0; i < len; i++) {
                    _this.importData[i]["监管行为监管对象类型"] =
                        _this.importData[i]["监管对象类型"];
                    _this.importData[i]["受委托部门"] =
                        _this.importData[i]["委托部门"];
                    _this.importData[i]["受委托部门编码"] =
                        _this.importData[i]["委托部门编码"];

                }
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
                .post("action/other/insert", this.importData)
                .then((res) => {
                    console.log(res);
                    if (res.data.code == 200) {
                        this.$message.success("新增成功");
                        this.queryQTXW();
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
        this.modalStyle.height = height * 0.7 + "px";
        this.modalUploadStyle.height = height * 0.3 + "px";
        var myDate = new Date(); //获取系统当前时间
        var endTime = moment(myDate.toLocaleDateString()).format("YYYY-MM-DD");
        var startTime = moment(myDate.toLocaleDateString())
            .subtract("days", 6)
            .format("YYYY-MM-DD");
        this.condition.range = [startTime, endTime];
        // console.log(this.condition.range);
        this.condition.报送人员 = this.user.用户名称;

        this.queryQTXW();
    },
    beforeMount() {
        this.closeModel();
    },
};
</script>


<style lang="scss" scoped>
@import "../style";
</style>