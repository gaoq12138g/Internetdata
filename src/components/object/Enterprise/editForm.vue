<template>
    <div class="content">
        <a-form-model class="form" ref="ruleForm" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-form-model-item class="blockRow" label="主体身份代码" prop="主体身份代码" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-textarea v-model="form.主体身份代码" />
            </a-form-model-item>
            <a-form-model-item label="注册号" prop="注册号">
                <a-input v-model="form.注册号" />
            </a-form-model-item>
            <a-form-model-item label="统一社会信用代码" prop="统一社会信用代码">
                <a-input v-model="form.统一社会信用代码" />
            </a-form-model-item>
            <a-form-model-item label="企业名称" prop="企业名称" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-textarea v-model="form.企业名称" :row="2" />
            </a-form-model-item>

            <a-form-model-item label="企业类型" prop="企业类型" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-textarea v-model="form.企业类型" :row="2" />
            </a-form-model-item>
            <a-form-model-item label="企业类型名称" prop="企业类型名称" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-textarea v-model="form.企业类型名称" :row="2" />
            </a-form-model-item>
            <a-form-model-item label="法定代表人" prop="法定代表人" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-textarea v-model="form.法定代表人" :row="2" />
            </a-form-model-item>
            <a-form-model-item label="行业类别" prop="行业类别">
                <a-select v-model="form.行业类别" placeholder="请选择行业类别">
                    <a-select-option v-for="(item,index) in dicFilter('行业类型')" :key="index" :value="item.编号">{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>
            <a-form-model-item label="组织类别" prop="组织类别">
                <a-select v-model="form.组织类别" placeholder="请选择组织类别">
                    <a-select-option v-for="(item,index) in dicFilter('组织类别')" :key="index" :value="item.编号">{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>
            <a-form-model-item label="国民经济类型" prop="国民经济类型">
                <a-select v-model="form.国民经济类型" placeholder="请选择国民经济类型">
                    <a-select-option v-for="(item,index) in dicFilter('国民经济类型')" :key="index" :value="item.编号">{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>
            <a-form-model-item label="注册资本" prop="注册资本">
                <a-input v-model="form.注册资本" />
            </a-form-model-item>
            <a-form-model-item label="注册资本币种" prop="注册资本币种" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-input v-model="form.注册资本币种" />
            </a-form-model-item>
            <a-form-model-item label="注册资本币种名称" prop="注册资本币种名称" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-textarea v-model="form.注册资本币种名称" />
            </a-form-model-item>
            <a-form-model-item label="住所" prop="住所" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-textarea v-model="form.住所" :row="2" />
            </a-form-model-item>
            <a-form-model-item label="营业场所" prop="营业场所" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-textarea v-model="form.营业场所" :rows="2" />
            </a-form-model-item>

            <a-form-model-item label="经营期限自" prop="经营期限自">
                <a-date-picker v-model="form.经营期限自" type="date" placeholder="请选择经营期限自" style="width: 100%;" />
            </a-form-model-item>
            <a-form-model-item label="经营期限至" prop="经营期限至">
                <a-date-picker v-model="form.经营期限至" type="date" placeholder="请选择经营期限至" style="width: 100%;" />
            </a-form-model-item>
            <a-form-model-item label="经营范围" prop="经营范围" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-textarea v-model="form.经营范围" :row="2" />
            </a-form-model-item>
            <a-form-model-item label="成立日期" prop="成立日期">
                <a-date-picker v-model="form.成立日期" type="date" placeholder="请选择成立日期" style="width: 100%;" />
            </a-form-model-item>
            <a-form-model-item label="核准日期" prop="核准日期">
                <a-date-picker v-model="form.核准日期" type="date" placeholder="请选择核准日期" style="width: 100%;" />
            </a-form-model-item>
            <a-form-model-item label="吊销日期" prop="吊销日期">
                <a-date-picker v-model="form.吊销日期" type="date" placeholder="请选择吊销日期" style="width: 100%;" />
            </a-form-model-item>

            <a-form-model-item label="登记机关" prop="登记机关">
                <a-input v-model="form.登记机关" />
            </a-form-model-item>
            <a-form-model-item label="登记机关名称" prop="登记机关名称" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-textarea v-model="form.登记机关名称" :row="2" />
            </a-form-model-item>
            <a-form-model-item label="登记状态" prop="登记状态">
                <a-input v-model="form.登记状态" />
            </a-form-model-item>
            <a-form-model-item label="登记状态名称" prop="登记状态名称">
                <a-input v-model="form.登记状态名称" />
            </a-form-model-item>
            <a-form-model-item label="业务范围类型" prop="业务范围类型" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-textarea v-model="form.业务范围类型" :row="2" />
            </a-form-model-item>
            <a-form-model-item label="业务范围类型名称" prop="业务范围类型名称" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-textarea v-model="form.业务范围类型名称" :row="2" />
            </a-form-model-item>
            <a-form-model-item label="吊销原因" prop="吊销原因" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-textarea v-model="form.吊销原因" :row="2" />
            </a-form-model-item>
            <a-form-model-item label="联络员姓名" prop="联络员姓名" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-textarea v-model="form.联络员姓名" />
            </a-form-model-item>
            <a-form-model-item label="联络员身份证号码" prop="联络员身份证号码" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-textarea v-model="form.联络员身份证号码" />
            </a-form-model-item>
            <a-form-model-item label="联络员手机号码" prop="联络员手机号码" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-textarea v-model="form.联络员手机号码" />
            </a-form-model-item>
            <a-form-model-item label="经营地址经度" prop="经营地址经度">
                <a-input v-model="form.经营地址经度" />
            </a-form-model-item>
            <a-form-model-item label="经营地址纬度" prop="经营地址纬度">
                <a-input v-model="form.经营地址纬度" />
            </a-form-model-item>
        </a-form-model>
        <div class="btnGroup">
            <a-button type="primary" @click="onSubmit">提交</a-button>
            <a-button style="margin-left: 10px;" @click="closeModalVisible">取消</a-button>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import moment from "moment";
import "moment/locale/zh-cn";
import global from "@/views/js/global";
export default {
    props: {
        item: {
            type: Object,
        },
        type: {
            type: String,
        },
    },
    data() {
        return {
            layout: "inline",
            labelCol: { span: 9 },
            wrapperCol: { span: 13 },
            blockRowLable: { span: 4 },
            blockRowWrapper: { span: 19 },
            other: "",
            form: {
                id: "",
                主体身份代码: "",
                业务范围类型名称: "",
                主体身份代码: "",
                企业名称: "",
                企业类型: "",
                企业类型名称: "",
                住所: "",
                吊销原因: "",
                吊销日期: undefined,
                国民经济类型: "",
                成立日期: undefined,
                核准日期: undefined,
                法定代表人: "",
                注册号: "",
                注册资本: "",
                注册资本币种: "",
                注册资本币种名称: "",
                登记机关: "",
                登记机关名称: "",
                登记状态: "",
                登记状态名称: "",
                组织类别: "",
                经营地址纬度: "",
                经营地址经度: "",
                经营期限自: undefined,
                经营期限至: undefined,
                经营范围: "",
                统一社会信用代码: "",
                联络员姓名: "",
                联络员手机号码: "",
                联络员身份证号码: "",
                营业场所: "",
                行业类别: ""
            },
            rules: {
                业务范围类型: [
                    {
                        min: 0,
                        max: 600,
                        message: "请填写600个字符以内的业务范围类型",
                        trigger: "blur",
                    },
                ],
                业务范围类型名称: [

                ],
                主体身份代码: [
                    {
                        required: true,
                        message: "请填写主体身份代码",
                    },
                    {
                        min: 0,
                        max: 120,
                        message: "请填写120个字符以内的主体身份代码",
                        trigger: "blur",
                    },
                ],
                企业名称: [
                    {
                        required: true,
                        message: "请填写企业名称",
                    },
                ],
                企业类型: [
                    {
                        min: 0,
                        max: 500,
                        message: "请填写500个字符以内的企业类型",
                        trigger: "blur",
                    }
                ],
                企业类型名称: [
                    {
                        min: 0,
                        max: 800,
                        message: "请填写800个字符以内的企业类型名称",
                        trigger: "blur",
                    }
                ],
                住所: [{}],
                吊销原因: [
                    {
                        min: 0,
                        max: 600,
                        message: "请填写600个字符以内的吊销原因",
                        trigger: "blur",
                    },
                ],
                国民经济类型: [
                    {
                        min: 0,
                        max: 60,
                        message: "请填写60个字符以内的国民经济类型",
                        trigger: "blur",
                    },
                ],
                法定代表人: [
                    {
                        required: true,
                        message: "请填写法定代表人",
                    },
                    {
                        min: 0,
                        max: 600,
                        message: "请填写600个字符以内的法定代表人",
                        trigger: "blur",
                    },
                ],
                注册号: [{
                    min: 0,
                    max: 50,
                    message: "请填写50个字符以内的注册号",
                    trigger: "blur",
                }],
                注册资本: [
                    {
                        min: 6,
                        max: 24,
                        message: "请填写6到24个字符以内的注册资本",
                        trigger: "blur",
                    },
                ],
                注册资本币种: [
                    {
                        min: 0,
                        max: 9,
                        message: "请填写6到24个字符以内的注册资本币种",
                        trigger: "blur",
                    },
                ],
                注册资本币种名称: [
                    {
                        min: 0,
                        max: 150,
                        message: "请填写6到24个字符以内的注册资本币种名称",
                        trigger: "blur",
                    },
                ],
                登记机关: [
                    {
                        min: 0,
                        max: 18,
                        message: "请填写18个字符以内的登记机关",
                        trigger: "blur",
                    },
                ],
                登记机关名称: [
                    {
                        min: 0,
                        max: 600,
                        message: "请填写600个字符以内的登记机关名称",
                        trigger: "blur",
                    },
                ],
                登记状态: [
                    {
                        min: 0,
                        max: 6,
                        message: "请填写6个字符以内的登记状态",
                        trigger: "blur",
                    },
                ],
                登记状态名称: [
                    {
                        min: 0,
                        max: 60,
                        message: "请填写60个字符以内的登记状态名称",
                        trigger: "blur",
                    },
                ],
                组织类别: [
                    {
                        min: 0,
                        max: 90,
                        message: "请填写90个字符以内的组织类别",
                        trigger: "blur",
                    },
                ],
                经营地址纬度: [
                    {
                        min: 6,
                        max: 9,
                        message: "请填写6到9个字符以内的经营地址纬度",
                        trigger: "blur",
                    },
                ],
                经营地址经度: [
                    {
                        min: 6,
                        max: 9,
                        message: "请填写6到9个字符以内的经营地址经度",
                        trigger: "blur",
                    },
                ],
                经营范围: [{}],
                统一社会信用代码: [
                    {
                        min: 18,
                        max: 18,
                        message: "请填写18位的统一社会信用代码",
                        trigger: "blur",
                    },
                ],
                联络员姓名: [
                    {
                        min: 0,
                        max: 150,
                        message: "请填写150个字符以内的联络员姓名",
                        trigger: "blur",
                    },
                ],
                联络员手机号码: [
                    {
                        min: 0,
                        max: 300,
                        message: "请填写300个字符以内的联络员手机号码",
                        trigger: "blur",
                    },
                ],
                联络员身份证号码: [
                    {
                        min: 0,
                        max: 120,
                        message: "请填写120个字符以内的联络员身份证号码",
                        trigger: "blur",
                    },
                ],
                营业场所: [{}],
                行业类别: [
                    {
                        min: 0,
                        max: 240,
                        message: "请填写240个字符以内的行业类别",
                        trigger: "blur",
                    },
                ]
            },
        };
    },
    methods: {
        moment,
        // 确认按钮
        onSubmit() {
            console.log(this.form);
            this.$refs.ruleForm.validate((valid) => {
                if (this.form.吊销日期) {
                    this.form.吊销日期 = moment(this.form.吊销日期).format("YYYY-MM-DD")
                }
                if (this.form.成立日期) {
                    this.form.成立日期 = moment(this.form.成立日期).format("YYYY-MM-DD")
                }
                if (this.form.核准日期) {
                    this.form.核准日期 = moment(this.form.核准日期).format("YYYY-MM-DD")
                }
                if (this.form.经营期限自) {
                    this.form.经营期限自 = moment(this.form.经营期限自).format("YYYY-MM-DD")
                }
                if (this.form.经营期限至) {
                    this.form.经营期限至 = moment(this.form.经营期限至).format("YYYY-MM-DD")
                }


                if ((this.form.注册号 == undefined || this.form.注册号 == "") && (this.form.统一社会信用代码 == undefined || this.form.统一社会信用代码 == "")) {
                    this.$message.error("注册号和统一社会信用代码不可同时为空");
                    return;
                }
                this.data = [this.form];
                if (valid) {
                    if (this.type == "新增") {
                        this.axios
                            .post("object/enterprise/insert", this.data)
                            .then((res) => {
                                if (res.data.code == 200) {
                                    this.$message.success("新增成功");
                                    this.closeModalVisible();
                                } else {
                                    this.$message.error("新增失败");
                                }
                            });
                    } else if (this.type == "修改") {
                        this.axios
                            .post("object/enterprise/update", this.data[0])
                            .then((res) => {
                                if (res.data.code == 200) {
                                    this.$message.success("修改成功");
                                    this.closeModalVisible();
                                } else {
                                    this.$message.error("修改失败");
                                }
                            });
                    }
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
        // 取消按钮
        closeModalVisible() {
            this.$root.$emit("closeModalVisible", "false");
        },
        // 新增点击×后清除form表单错误提示
        clearForm() {
            this.$root.$on("clearForm", (msg) => {
                console.log(msg);
                this.resetForm();
            });
        },
        resetForm() {
            // this.$refs.ruleForm.resetFields();
            this.$nextTick(() => {
                if (this.$refs.ruleForm) {
                    this.$refs.ruleForm.resetFields();
                }
            });
        },
    },
    watch: {
        item: {
            deep: true,
            immediate: true,
            handler: function (newVal, oldval) {
                this.form = {
                    id: "",
                    主体身份代码: "",
                    业务范围类型名称: "",
                    主体身份代码: "",
                    企业名称: "",
                    企业类型: "",
                    企业类型名称: "",
                    住所: "",
                    吊销原因: "",
                    吊销日期: undefined,
                    国民经济类型: "",
                    成立日期: undefined,
                    核准日期: undefined,
                    法定代表人: "",
                    注册号: "",
                    注册资本: "",
                    注册资本币种: "",
                    注册资本币种名称: "",
                    登记机关: "",
                    登记机关名称: "",
                    登记状态: "",
                    登记状态名称: "",
                    组织类别: "",
                    经营地址纬度: "",
                    经营地址经度: "",
                    经营期限自: undefined,
                    经营期限至: undefined,
                    经营范围: "",
                    统一社会信用代码: "",
                    联络员姓名: "",
                    联络员手机号码: "",
                    联络员身份证号码: "",
                    营业场所: "",
                    行业类别: ""
                };
                for (var p in newVal) {
                    this.form[p] = newVal[p];
                }
            },
        },
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
    mounted() {
        // this.user = this.$store.state.currentUser;
        // this.form = this.item;
    },
    beforeMount() {
        this.clearForm();
    },
};
</script>

<style lang="scss" scoped>
@import "../../edit";
</style>