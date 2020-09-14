<template>
    <div class="content">
        <div class="querybar">
            <a-form layout="inline" :form="condition">
                <a-form-item label="企业名称：">
                    <a-input allow-clear="allow-clear" v-model="condition.名称" />
                </a-form-item>
                <a-form-item label="企业类型：">
                    <a-input allow-clear="allow-clear" v-model="condition.类型" />
                </a-form-item>
                <a-form-item label="统一社会信用代码：">
                    <a-input allow-clear="allow-clear" v-model="condition.统一社会信用代码" />
                </a-form-item>
                <a-form-item>
                    <a-button type="primary" @click="query">查询</a-button>
                </a-form-item>
                <a-form-item>
                    <a-button type="primary" @click="addEnterprise">新增</a-button>
                </a-form-item>
                <a-form-item>
                    <a-button type="primary" @click="importEnterprise">导入</a-button>
                </a-form-item>
            </a-form>
        </div>
        <div class="dataTable">
            <a-table :columns="enterpriseColumn" :data-source="enterpriseData" :rowKey="(record,index)=>{return index}" :pagination="pagination" :scroll="{ y: 800 }">
                <span slot="object" slot-scope="text, record, index">
                    <a-button-group>
                        <a-button type="link" @click="detailEnterprise(record)">查看</a-button>
                        <a-button type="link" @click="updateEnterprise(record)">修改</a-button>
                        <a-button type="link" style="color:red;" @click="deleteItem(record, index)">删除</a-button>
                    </a-button-group>
                </span>
            </a-table>
        </div>
        <a-modal v-model="modalVisible" :title="Modaltile" :body-style="modalStyle" width="1100px" centered :footer="null" :maskClosable="false" @ok="() => (modalVisible = false)" :afterClose="query">
            <detailEnterpriseModal :form="selectedItem" v-if="Modaltile == '查看'"></detailEnterpriseModal>
            <addEnterpriseModal :item="selectedItem" :type="Modaltile" v-if="Modaltile == '新增' || Modaltile == '修改'"></addEnterpriseModal>
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
import addEnterpriseModal from '@/components/object/Enterprise/editForm.vue'
import detailEnterpriseModal from '@/components/object/Enterprise/detailForm.vue'
import { Modal } from 'ant-design-vue';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { mapState } from 'vuex';
import { importExcel } from '../../js/import.js' //引入导入文件
import verify from '../../js/verify.js' //引入行政检查文件
// import $ from "jquery"
export default {
    components: {
        addEnterpriseModal,
        detailEnterpriseModal
    },
    data: function () {
        return {
            fileList: [],
            importData: [],
            uploading: true,
            modalVisible: false,
            popVisible: false,
            condition: {
                名称: "",
                类型: "",
                统一社会信用代码: ""
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
                    this.current = current,
                        this.pagesize = size
                }
            },
            enterpriseColumn: [
                {
                    title: '序号',
                    width: '5%',
                    customRender: (text, record, index) => `${(this.current - 1) * (this.pagesize) + (index + 1)}`
                }, {
                    title: '主体身份代码',
                    width: '30%',
                    key: 'ztsfdm',
                    dataIndex: '主体身份代码',
                },
                {
                    title: '企业名称',
                    width: '40%',
                    key: 'qymc',
                    dataIndex: '企业名称',
                },
                {
                    title: '法定代表人',
                    key: 'fddbr',
                    dataIndex: '法定代表人',
                },
                {
                    title: '操作',
                    width: '15%',
                    key: 'object',
                    dataIndex: 'object',
                    scopedSlots: {
                        customRender: 'object',
                        align: 'center'
                    },
                    align: 'center'
                }
            ],
            enterpriseData: [],
            selectedItem: {}
        }

    },
    computed: {
        ...mapState({
            user: state => state.currentUser
        })
    },
    mounted() {
        var height = document.body.clientHeight;
        this.modalStyle.height = (height * 0.7) + 'px';
        this.modalUploadStyle.height = (height * 0.3) + 'px';
        this.query();
    },
    beforeMount() {
        this.closeModalVisible();
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

            var _this = this;
            this.axios.post('object/enterprise/query', this.condition).then(res => {
                console.log(res);
                if (res.data.code == 200) {
                    _this.enterpriseData = res.data.data;
                } else {
                    // this.$message.error('新增失败');
                }
            });

        },
        // 新增检查行为
        addEnterprise() {
            this.modalVisible = true;
            this.Modaltile = "新增";
            this.selectedItem = {};
            // this.query();
        },
        // 修改检查行为
        updateEnterprise(e) {
            this.modalVisible = true;
            this.Modaltile = "修改";
            this.selectedItem = e;
            // this.query();
        },
        //查看检查行为详情
        detailEnterprise(e) {
            this.modalVisible = true;
            this.Modaltile = '查看';
            this.selectedItem = e;
        },
        // 删除检查行为
        deleteItem(item, index) {
            var _this = this;
            this.$confirm({
                content: '是否删除这条记录',
                okText: '确认',
                okType: 'danger',
                cancelText: '取消',
                onOk() {
                    _this.axios.get('object/enterprise/delete/' + item.id).then(res => {
                        if (res.data.code == 200) {
                            _this.query();
                            // _this.enterpriseData.splice(index, 1);
                        } else {
                            _.$message.error('删除失败');
                        }
                    });
                },
                onCancel() {
                    console.log('Cancel');
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
            importExcel(a.file).then(data => {
                dataList = data.slice();
                dataList.splice(index, 1)
                _this.importData = dataList;
                let result = verify.verify(_this.importData, '企业法人');
                if (result.pass) {
                    _this.uploading = false;
                }
                else {
                    _this.uploading = true;
                    this.$message.error(result.message);
                }
            });
        },
        solve() {
            for (let i = 0; i < this.importData.length; i++) {
                for (let key in this.importData[i]) {
                    if (key == "企业类型（中文名称）") {
                        this.importData[i]["企业类型名称"] = this.importData[i][key];
                        delete this.importData[i]["企业类型（中文名称）"];
                    }
                     if (key == "法定代表人/负责人/投资人") {
                        this.importData[i]["法定代表人"] = this.importData[i][key];
                        delete this.importData[i]["法定代表人/负责人/投资人"];
                    }
                     if (key == "注册资本/注册资金/成员出资总额") {
                        this.importData[i]["注册资本"] = this.importData[i][key];
                        delete this.importData[i]["注册资本/注册资金/成员出资总额"];
                    }
                     if (key == "营业场所/主要经营场所/经营场所") {
                        this.importData[i]["营业场所"] = this.importData[i][key];
                        delete this.importData[i]["营业场所/主要经营场所/经营场所"];
                    }
                     if (key == "经营期限自/营业期限自/合伙期限自") {
                        this.importData[i]["经营期限自"] = this.importData[i][key];
                        delete this.importData[i]["经营期限自/营业期限自/合伙期限自"];
                    }
                     if (key == "经营期限至/营业期限至/合伙期限至") {
                        this.importData[i]["经营期限至"] = this.importData[i][key];
                        delete this.importData[i]["经营期限至/营业期限至/合伙期限至"];
                    }
                     if (key == "业务范围类型（中文名称）") {
                        this.importData[i]["业务范围类型名称"] = this.importData[i][key];
                        delete this.importData[i]["业务范围类型（中文名称）"];
                    }
                     if (key == "登记机关（中文名称）") {
                        this.importData[i]["登记机关名称"] = this.importData[i][key];
                        delete this.importData[i]["登记机关（中文名称）"];
                    }
                     if (key == "登记状态（中文名称）") {
                        this.importData[i]["登记状态名称"] = this.importData[i][key];
                        delete this.importData[i]["登记状态（中文名称）"];
                    }
                }
            }
        },
        handleUpload: function () {
            this.solve();
            this.axios.post('object/enterprise/insert', this.importData).then(res => {
                if (res.data.code == 200) {
                    this.$message.success('新增成功');
                    this.query();
                    this.fileList=[];
                    this.popVisible = false;
                } else {
                    this.$message.error('新增失败');
                    this.fileList=[];
                    this.popVisible = false;
                }

            });
        },
        //导入检查行为
        importEnterprise: function () {
            this.popVisible = true;
        },
    }
}
</script>

<style lang="scss" scoped>
@import "../style";
</style>