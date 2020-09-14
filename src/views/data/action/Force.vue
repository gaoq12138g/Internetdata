<template>
    <!-- 模板管理页面 -->
    <div class="content">
        <!-- 模板管理头部搜索 -->
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
                    <a-button type="primary" @click="queryListData">查询</a-button>
                </a-form-item>
                <a-form-item>
                    <a-button type="primary" @click="addForce">新增</a-button>
                </a-form-item>
                <a-form-item>
                    <a-button type="primary" @click="importForce">导入</a-button>
                </a-form-item>
            </a-form>
        </div>
        <!-- 模板管理表格 -->
        <div class="dataTable">
            <a-table :columns="columns" :data-source="forceData" :rowKey="(record,index)=>{return index}" :pagination="pagination" :rowClassName="rowClassName" :scroll="{y:800}">
                <span slot="action" slot-scope="text,record,index">
                    <a-button type="link" @click="detailForce(record)">查看</a-button>
                    <a-button type="link" @click="updateForce(record)">修改</a-button>
                    <a-button type="link" style="color:red;" @click="deleteItem(record, index)">删除</a-button>
                </span>
            </a-table>
        </div>
        <!-- 新增 -->
        <a-modal v-model="modalVisible" :title="title" :body-style="modalStyle" width="1100px"  centered :footer="null" :maskClosable="false" :afterClose="queryListData">
            <detailXzqzxwForm :form="selectedItem" v-if="title == '查看'"></detailXzqzxwForm>
            <xzqzxwForm :item="selectedItem" :type="title" v-if="title == '新增' && modalVisible || title == '修改' && modalVisible"></xzqzxwForm>
        </a-modal>
        <!-- 上传 -->
        <a-modal v-model="popVisible" title="导入" :body-style="modalUploadStyle" width="800px" centered :footer="null" :maskClosable="false" @ok="() => (popVisible = false)">
            <a-upload :file-list="fileList" :remove="handleRemove" :before-upload="beforeUpload" @change="handleChange">
                <a-button>
                    <a-icon type="upload" />选择上传文件
                </a-button>
            </a-upload>
            <a-button type="primary" :disabled="fileList.length === 0" style="margin-top: 16px" @click="handleUpload">上传</a-button>
        </a-modal>
    </div>
</template>

<script>
import xzqzxwForm from "@/components/action/Force/xzqzxwForm.vue";
import detailXzqzxwForm from "@/components/action/Force/detailXzqzxwForm.vue";
import { Modal } from "ant-design-vue";
import moment from "moment";
import "moment/locale/zh-cn";
import { mapState } from "vuex";
import { importExcel } from '../../js/import.js'; //引入导入文件
import verify from "../../js/verify.js"; //引入行政检查文件

export default {
    components: {
        xzqzxwForm,
        detailXzqzxwForm,
    },
    data() {
        return {
            // 查询对象
            condition: {
                行政相对人: null,
                行政相对人编码: null,
                报送结束时间: null,
                报送开始时间: null,
                报送人员: null,
                range: [],
            },
            // 新增对象
            forceList: {},

            // 表格头
            columns: [
                {
                    title: "序号",
                    width: "5%",
                    customRender: (text, record, index) =>
                        `${(this.current - 1) * this.pagesize + (index + 1)}`,
                },
                {
                    title: "强制行为名称",
                    width: "40%",
                    dataIndex: "强制行为名称",
                    key: "qzxwmc",
                },
                {
                    title: "强制行为编号",
                    key: "qzxwbh",
                    dataIndex: "强制行为编号",
                },
                {
                    title: "行政相对人",
                    key: "xzxdr",
                    dataIndex: "行政相对人（单位/个人）",
                },
                {
                    title: "报送人员",
                    key: "bsry",
                    dataIndex: "报送人员",
                },
                {
                    title: "报送时间",
                    key: "bssj",
                    dataIndex: "报送时间",
                    // 按时间排序
                    sorter: (a, b) => Date.parse(a.bssj) - Date.parse(b.bssj),
                },
                {
                    title: "操作",
                    width: "15%",
                    key: "action",
                    align: "center",
                    scopedSlots: { customRender: "action" },
                },
            ],
            // 数据数组
            forceData: [],
            pagesize: 10,
            current: 1,
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

            // 弹窗显示与隐藏
            modalVisible: false,
            // 弹窗样式
            modalStyle: {},
            // 导入弹窗样式
            modalUploadStyle: {},
            // 弹窗头部名称
            title: "",

            selectedItem: {},

            // 上传
            //  显示/隐藏
            popVisible: false,
            // 上传的数组
            fileList: [],
            importData: [],
        };
    },
    methods: {
        moment,
        //根据筛选条件查询
        queryListData() {
            this.condition.报送开始时间 = this.condition.range[0];
            this.condition.报送结束时间 = this.condition.range[1];
            var _this = this;
            this.axios
                .post("action/force/query", this.condition)
                .then((res) => {
                    if (res.data.code == 200) {
                        _this.forceData = res.data.data;
                    } else {
                        // this.$message.error('新增失败');
                    }
                });
        },



        // 新增关闭弹窗
        closeModalVisible() {
            this.$root.$on("closeModalVisibleForce", (msg) => {
                // console.log(msg);
                // this.forceList = msg;
                this.modalVisible = false;
            });
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

        // 新增检查行为
        addForce() {
            this.selectedItem = {};
            this.title = "新增";
            this.modalVisible = true;
            console.log( "新增",this.selectedItem )
            // this.query();
        },
        // 修改
        updateForce(e) {
            console.log("force==>", e);
            this.title = "修改";
            this.modalVisible = true;
            this.selectedItem = e;
        },

        // 查看
        detailForce(e) {
            console.log("force==>", e);
            this.title = "查看";
            this.modalVisible = true;
            this.selectedItem = e;
        },

        // 删除弹窗
        deleteItem(item, index) {
            var _this = this;
            this.$confirm({
                title: "是否删除这条记录?",
                // content: "Some descriptions",
                okText: "确认",
                okType: "danger",
                cancelText: "取消",
                onOk() {
                    _this.axios
                        .get("action/force/delete/" + item.id)
                        .then((res) => {
                            console.log(res);
                            if (res.data.code == 200) {
                                _this.queryListData();
                                _this.$message.success("删除成功");
                            } else {
                                _this.$message.error("删除失败");
                            }
                        });
                },
                onCancel() {
                    console.log("Cancel");
                },
            });
        },

        //导入行为

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
                console.log("_this.importData", _this.importData);
                // return this.importData;
                let result = verify.verify(_this.importData, "行政强制行为");
                console.log("result", result);
                if (result.pass) {
                    _this.uploading = false;
                } else {
                    _this.uploading = true;
                    this.$message.error(result.message);
                }
            });
        },

        handleUpload() {
            const { importData } = this;
            this.axios
                .post("action/force/insert", this.importData)
                .then((res) => {
                    if (res.data.code == 200) {
                        this.$message.success("新增成功");
                        this.queryListData();
                        this.popVisible = false;
                    } else {
                        this.$message.error("新增失败");
                        this.popVisible = false;
                    }
                });
        },
        //导入检查行为
        importForce() {
            this.popVisible = true;
        },
    },
    computed: {
        ...mapState({
            user: (state) => state.currentUser,
        }),
    },
    mounted() {
        var height = document.body.clientHeight;
        // 新增修改的弹窗高度
        this.modalStyle.height = height * 0.7 + "px";
        // 导入的弹窗高度
        this.modalUploadStyle.height = height * 0.3 + "px";
        var myDate = new Date(); //获取系统当前时间
        var endTime = moment(myDate.toLocaleDateString()).format("YYYY-MM-DD");
        var startTime = moment(myDate.toLocaleDateString())
            .subtract("days", 6)
            .format("YYYY-MM-DD");
        this.condition.range = [startTime, endTime];
        console.log(this.condition.range);
        this.condition.报送人员 = this.user.用户名称;
        this.queryListData();
    },
    beforeMount() {
        this.closeModalVisible();
    },
};
</script>

<style lang="scss" scoped>
@import "../style";
</style>