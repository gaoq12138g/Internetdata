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
                    <a-button type="primary" @click="query">查询</a-button>
                </a-form-item>
                <a-form-item>
                    <a-button type="primary" @click="addCheck">新增</a-button>
                </a-form-item>
                <a-form-item>
                    <a-button type="primary" @click="importCheck">导入</a-button>
                </a-form-item>
            </a-form>
        </div>
        <div class="dataTable">
            <a-table :columns="checkColumn" :data-source="checkData" :rowKey="(record,index)=>{return index}" :pagination="pagination" :scroll="{ y: 800 }">
                <span slot="action" slot-scope="text, record, index">
                    <a-button-group>
                        <a-button type="link" @click="detailCheck(record)">查看</a-button>
                        <a-button type="link" @click="updateCheck(record)">修改</a-button>
                        <a-button type="link" style="color:red;" @click="deleteItem(record, index)">删除</a-button>
                    </a-button-group>
                </span>
            </a-table>
        </div>
        <a-modal v-model="modalVisible" :title="Modaltile" :body-style="modalStyle" width="1100px" centered :footer="null" :maskClosable="false" @ok="() => (modalVisible = false)" :afterClose="query">
            <detailCheckModal :form="selectedItem" v-if="Modaltile == '查看'"></detailCheckModal>
            <addCheckModal :item="selectedItem" :type="Modaltile" v-if="Modaltile == '新增' || Modaltile == '修改'"></addCheckModal>
        </a-modal>
        <a-modal v-model="popVisible" title="导入" :body-style="modalUploadStyle" width="800px" centered :footer="null" :maskClosable="false" @ok="() => (popVisible = false)">
            <a-upload :file-list="fileList" :remove="handleRemove" :before-upload="beforeUpload" @change="handleChange">
                <a-button>
                    <a-icon type="upload" />选择上传文件
                </a-button>
            </a-upload>
            <a-button type="primary" :disabled="uploading" style="margin-top: 46px" @click="handleUpload">上传</a-button>
        </a-modal>
    </div>
</template>

<script>
import addCheckModal from "@/components/action/Check/editForm.vue";
import detailCheckModal from "@/components/action/Check/detailForm.vue";
import { Modal } from "ant-design-vue";
import moment from "moment";
import "moment/locale/zh-cn";
import { mapState } from "vuex";
import { importExcel } from "../../js/import.js"; //引入导入文件
import verify from "../../js/verify.js"; //引入行政检查文件
export default {
    components: {
        addCheckModal,
        detailCheckModal,
    },
    data: function () {
        return {
            fileList: [],
            importData: [],
            uploading: true,
            modalVisible: false,
            popVisible: false,
            condition: {
                行政相对人: "",
                行政相对人编码: "",
                报送结束时间: "",
                报送开始时间: "",
                报送人员: "",
                range: [],
            },
            modalStyle: {},
            modalUploadStyle: {},
            pagesize: 10,
            current: 1,
            Modaltile: "",
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
            checkColumn: [
                {
                    title: "序号",
                    width: "5%",
                    customRender: (text, record, index) =>
                        `${(this.current - 1) * this.pagesize + (index + 1)}`,
                },
                {
                    title: "检查行为名称",
                    width: "40%",
                    key: "Jcxwmc",
                    dataIndex: "检查行为名称",
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
            checkData: [],
            selectedItem: {},
        };
    },
    computed: {
        ...mapState({
            user: (state) => state.currentUser,
        }),
    },
    methods: {
        moment,
        closeModalVisible() {
            this.$root.$on("closeModalVisible", (msg) => {
                this.modalVisible = false;
            });
        },
        //根据筛选条件查询
        query() {
            this.condition.报送开始时间 = moment(
                this.condition.range[0]
            ).format("YYYY-MM-DD");
            this.condition.报送结束时间 = moment(
                this.condition.range[1]
            ).format("YYYY-MM-DD");
            var _this = this;
            this.axios
                .post("action/check/query", this.condition)
                .then((res) => {
                    console.log(res);
                    if (res.data.code == 200) {
                        _this.checkData = res.data.data;
                    } else {
                        // this.$message.error('新增失败');
                    }
                });
        },
        // 新增检查行为
        addCheck() {
            this.modalVisible = true;
            this.Modaltile = "新增";
            this.selectedItem = {};
            // this.query();
        },
        // 修改检查行为
        updateCheck(e) {
            this.modalVisible = true;
            this.Modaltile = "修改";
            this.selectedItem = e;
            // this.query();
        },
        //查看检查行为详情
        detailCheck(e) {
            this.modalVisible = true;
            this.Modaltile = "查看";
            this.selectedItem = e;
        },
        // 删除检查行为
        deleteItem(item, index) {
            var _this = this;
            this.$confirm({
                content: "是否删除这条记录",
                okText: "确认",
                okType: "danger",
                cancelText: "取消",
                onOk() {
                    _this.axios
                        .get("action/check/delete/" + item.id)
                        .then((res) => {
                            if (res.data.code == 200) {
                                _this.query();
                                // _this.checkData.splice(index, 1);
                            } else {
                                _.$message.error("删除失败");
                            }
                        });
                },
                onCancel() {
                    console.log("Cancel");
                },
            });
        },
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

                let result = verify.verify(_this.importData, "行政检查行为");
                console.log(result);
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
                .post("action/check/insert", this.importData)
                .then((res) => {
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
        this.modalStyle.height = height * 0.7 + "px";
        this.modalUploadStyle.height = height * 0.3 + "px";
        var myDate = new Date(); //获取系统当前时间
        var endTime = moment(myDate.toLocaleDateString()).format("YYYY-MM-DD");
        var startTime = moment(myDate.toLocaleDateString())
            .subtract("days", 6)
            .format("YYYY-MM-DD");
        this.condition.range = [startTime, endTime];
        console.log(this.condition.range);
        this.condition.报送人员 = this.user.用户名称;
        this.query();
    },
    beforeMount() {
        this.closeModalVisible();
    },
};
</script>

<style lang="scss" scoped>
@import "../style";
</style>