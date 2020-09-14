<template>
    <div class="content">
        <div class="querybar">
            <a-form layout="inline" :form="condition">
                <a-form-item label="地区行政编码">
                    <a-select v-model="condition.地区行政编码" placeholder="请选择地区行政编码" style="width: 150px">
                        <a-select-option value="000000">全国</a-select-option>
                        <a-select-option v-for="(item, index) in dicFilter('行政区划代码')" :key="index" :value="item.编号">{{ item.值 }}</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item label="年度">
                    <a-date-picker mode="year" placeholder="请选择年份" v-model="condition.年度" format="YYYY" :open="yearPickShow" @panelChange="handlePanelChange" @openChange="handleOpenChange" />
                </a-form-item>
                <a-form-item label="监管部门">
                    <a-select v-model="condition.监管部门" placeholder="请选择监管部门" style="width: 250px">
                        <a-select-option v-for="(item, index) in dicFilter('江苏省监管部门代码')" :key="index" :value="item.编号">{{ item.值 }}</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item label="计划名称">
                    <a-input allow-clear="allow-clear" v-model="condition.计划名称" />
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
        <div class="dataTable">
            <a-table :columns="columns" :data-source="listData" :rowKey="(record,index)=>{return index}" :pagination="pagination" :rowClassName="rowClassName" :scroll="{y:800}">
                <span slot="action" slot-scope="text,record,index">
                    <a-button type="link" @click="detailForce(record)">查看</a-button>
                    <a-button type="link" @click="updateForce(record)">修改</a-button>
                    <a-button type="link" style="color:red;" @click="deleteItem(record, index)">删除</a-button>
                </span>
            </a-table>
        </div>
        <!-- 新增 -->
        <a-modal v-model="modalVisible" :title="title" :body-style="modalStyle" width="1100px" centered :footer="null" :maskClosable="false" :afterClose="queryListData">
            <detailAnnualCheckForm :form="selectedItem" v-if="title == '查看'"></detailAnnualCheckForm>
            <annualCheckForm :item="selectedItem" :type="title" v-if="title == '新增' && modalVisible || title == '修改' && modalVisible"></annualCheckForm>
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
import annualCheckForm from '@/components/random/annualCheck/annualCheckForm.vue'
import detailAnnualCheckForm from '@/components/random/annualCheck/detailAnnualCheckForm.vue'
import { Modal } from "ant-design-vue";
import moment from "moment";
import "moment/locale/zh-cn";
import { mapState } from "vuex";
import { importExcel } from "../../js/import.js"; //引入导入文件
import verify from "../../js/verify.js"; //引入行政检查文件
export default {
    components: {
        annualCheckForm,
        detailAnnualCheckForm,
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
                地区行政编码: null,
                年度: null,
                监管部门: null,
                计划名称: null,
            },
            yearPickShow: false, //年选择器的显示隐藏
            // 表格头
            columns: [
                {
                    title: "序号",
                    width: "5%",
                    customRender: (text, record, index) =>
                        `${(this.current - 1) * this.pagesize + (index + 1)}`,
                },
                {
                    title: "抽查检查对象名称",
                    width: "40%",
                    dataIndex: "抽查检查对象名称",
                    key: "ccjcdxmc",
                },
                {
                    title: "抽查检查对象 ID",
                    key: "ccjcdxid",
                    dataIndex: "抽查检查对象 ID",
                },
                {
                    title: "计划ID",
                    key: "jhid",
                    dataIndex: "计划ID",
                },
                {
                    title: "抽查检查对象统一社会信用代码",
                    key: "ccjcdxtyshxydm",
                    width: "15%",
                    dataIndex: "抽查检查对象统一社会信用代码",
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
            listData: [],
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
        //查询
        queryListData() {
            this.axios
                .post("random/annualCheck/query", this.condition)
                .then((res) => {
                    console.log(res);
                    if (res.data.code == 200) {
                        this.listData = res.data.data;
                    } else {
                        // this.$message.error('新增失败');
                    }
                });
        },

        // 新增关闭弹窗
        closeModalVisible() {
            this.$root.$on("closeModalVisibleAnnualCheck", (msg) => {
                // console.log(msg);
                // this.forceList = msg;
                this.modalVisible = false;
            });
        },

        //新增
        addForce() {
            this.modalVisible = true;
            this.title = "新增";
            this.selectedItem = {};

            // this.query();
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
                for (let i = 0; i < _this.importData.length; i++) {
                    console.log(_this.importData[i].抽查检查对象ID);
                    _this.importData[i]["抽查检查对象" + " " + "ID"] =
                        _this.importData[i].抽查检查对象ID;
                }
                // return this.importData;
                let result = verify.verify(
                    _this.importData,
                    "双随机抽查的监管对象"
                );
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
                .post("random/annualCheck/insert", this.importData)
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
        //导入行为
        importForce() {
            this.popVisible = true;
        },

        // 查看
        detailForce(e) {
            console.log("force==>", e);
            this.title = "查看";
            this.modalVisible = true;
            this.selectedItem = e;
        },

        // 修改
        updateForce(e) {
            console.log("force==>", e);
            this.title = "修改";
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
                        .get("random/annualCheck/delete/" + item.id)
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

        // 选择日期方法
        onChange(pageNumber) {
            console.log("Page: ", pageNumber);
        },
        handleOpenChange(status) {
            this.yearPickShow = status;
        },
        // 得到年份选择器的值
        handlePanelChange(value) {
            console.log(value);
            this.condition.年度 = moment(value).format("YYYY");
            this.yearPickShow = false;
        },

        // 给table添加className
        rowClassName(record, index) {
            let className = "light-row";
            return className;
        },
    },
    mounted() {
        var height = document.body.clientHeight;
        // 新增修改的弹窗高度
        this.modalStyle.height = height * 0.4 + "px";
        // 导入的弹窗高度
        this.modalUploadStyle.height = height * 0.3 + "px";
        var myDate = new Date(); //获取系统当前时间
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