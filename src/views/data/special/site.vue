<template>
    <div class="content">
        <div class="querybar">
            <a-form layout="inline" :form="condition">
                <!-- <a-form-item label="报送时间：">
                    <a-range-picker v-model="condition.range" />
                </a-form-item>-->
                <a-form-item label="场所场地：">
                    <a-input allow-clear="allow-clear" v-model="condition.场所场地" />
                </a-form-item>
                <a-form-item label="所在地区行政区划代码：">
                    <a-select
                        v-model="condition.所在地区行政区划代码"
                        style="width:205px"
                        placeholder="请选择行政区划代码"
                    >
                        <a-select-option
                            v-for="(item,index) in dicFilter('行政区划代码')"
                            :key="index"
                            :value="item.编号"
                        >{{ item.值 }}</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item label="责任人：">
                    <a-input allow-clear="allow-clear" v-model="condition.责任人" />
                </a-form-item>
                <a-form-item label="责任单位：">
                    <a-input allow-clear="allow-clear" v-model="condition.责任单位" />
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
            <siteForm v-if="visible && types != 'detail'" :item="selectedItem" :types="types" />
            <sitedetail v-if="visible && types == 'detail'" :item="selectedItem" :types="types" />
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

import siteForm from "@/components/special/site/siteForm";
import sitedetail from "@/components/special/site/sitedetail";
import moment from "moment";
import "moment/locale/zh-cn";
import { Modal } from "ant-design-vue";
import { mapState } from "vuex";
import { importExcel } from "../../js/import.js"; //引入导入文件
import verify from "../../js/verify.js"; //引入行政处罚文件

export default {
    components: {
        siteForm,
        sitedetail,
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
                场所场地: "",
                所在地区行政区划代码: "",
                责任人: "",
                责任单位: "",
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
                    title: "所在地区",
                    // width: "40%",
                    key: "szdq",
                    dataIndex: "所在地区",
                },
                {
                    title: "使用寿命",
                    key: "sysm",
                    dataIndex: "使用寿命",
                },
                {
                    title: "责任单位",
                    key: "zrdw",
                    dataIndex: "责任单位",
                },
                {
                    title: "责任人",
                    key: "zrr",
                    dataIndex: "责任人",
                },
                {
                    title: "投入使用开始时间",
                    key: "trsykssj",
                    dataIndex: "投入使用开始时间",
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
            this.$root.$on("updataCLoseSite", (msg) => {
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
                okText: "确定",
                okType: "danger",
                cancelText: "取消",
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
                .post("special/site/query", this.condition)
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
            this.axios.get("special/site/delete/" + id).then((res) => {
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

                let result = verify.verify(_this.importData, "场地场所");
                console.log(result);
                let len = _this.importData.length;

                for (let i = 0; i < len; i++) {
                    _this.importData[i].责任单位统一社会信用代码 =
                        _this.importData[i].单位统一社会信用代码;
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
                .post("special/site/insert", this.importData)
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
        this.modalStyle.height = height * 0.64 + "px";
        this.modalUploadStyle.height = height * 0.3 + "px";

        this.query();
    },
    beforeMount() {
        this.closeModel();
    },
};
</script>


<style lang="scss" scoped>
@import "../style";
</style>