<template>
    <div class="content">
        <a-form-model class="form" ref="ruleForm" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-form-model-item label="行政相对人名称" prop="行政相对人名称" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-input v-model="form.行政相对人名称" />
            </a-form-model-item>
            <a-form-model-item label="行政相对人编码" prop="行政相对人编码">
                <a-input v-model="form.行政相对人编码" />
            </a-form-model-item>
            <a-form-model-item label="是否重点监管" prop="是否重点监管">
                <a-radio-group v-model="form.是否重点监管">
                    <a-radio value="是">是</a-radio>
                    <a-radio value="否">否</a-radio>
                </a-radio-group>
            </a-form-model-item>
            <a-form-model-item label="法人名称" prop="法人名称">
                <a-input v-model="form.法人名称" />
            </a-form-model-item>
            <a-form-model-item label="法人类型" prop="法人类型">
                <a-select v-model="form.法人类型" placeholder="请选法人类型">
                    <a-select-option v-for="(item, index) in dicFilter('法人类型')" :key="index" :value="item.编号">{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>
            <a-form-model-item label="法人设立的批准或核准机关" prop="法人设立的批准或核准机关">
                <a-input v-model="form.法人设立的批准或核准机关" />
            </a-form-model-item>
            <a-form-model-item label="法人设立的批准或核准时间" prop="法人设立的批准或核准时间">
                <a-date-picker v-model="form.法人设立的批准或核准时间" type="date" placeholder="请选择法人设立的批准或核准时间" style="width: 100%;" />
            </a-form-model-item>
            <a-form-model-item label="法定代表人" prop="法定代表人" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-textarea v-model="form.法定代表人" :rows="2" />
            </a-form-model-item>
            <a-form-model-item label="法定代表人证件类型" prop="法定代表人证件类型">
                <a-select v-model="form.法定代表人证件类型" placeholder="请选法定代表人证件类型">
                    <a-select-option v-for="(item, index) in dicFilter('证件类型')" :key="index" :value="item.编号">{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>
            <a-form-model-item label="法定代表人编码" prop="法定代表人编码">
                <a-input v-model="form.法定代表人编码" />
            </a-form-model-item>
            <a-form-model-item label="行业类别" prop="行业类别">
                <a-select v-model="form.行业类别" placeholder="请选行业类别">
                    <a-select-option v-for="(item, index) in dicFilter('行业类型')" :key="index" :value="item.编号">{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>
            <a-form-model-item label="组织类别" prop="组织类别">
                <a-select v-model="form.组织类别" placeholder="请选组织类别">
                    <a-select-option v-for="(item, index) in dicFilter('组织类别')" :key="index" :value="item.编号">{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>
            <a-form-model-item label="国民经济类型" prop="国民经济类型">
                <a-select v-model="form.国民经济类型" placeholder="请选国民经济类型">
                    <a-select-option v-for="(item, index) in dicFilter('国民经济类型')" :key="index" :value="item.编号">{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>
            <a-form-model-item label="行政区划代码" prop="行政区划代码">
                <a-select v-model="form.行政区划代码" placeholder="请选行政区划代码">
                    <a-select-option v-for="(item, index) in dicFilter('行政区划代码')" :key="index" :value="item.编号">{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>
            <a-form-model-item label="经营范围" prop="经营范围" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-textarea v-model="form.经营范围" :rows="2" />
            </a-form-model-item>
            <a-form-model-item label="注册地址" prop="注册地址" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-textarea v-model="form.注册地址" :rows="2" />
            </a-form-model-item>
            <a-form-model-item label="经营地址" prop="经营地址" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-input v-model="form.经营地址" />
            </a-form-model-item>
            <a-form-model-item label="经营地址经度" prop="经营地址经度">
                <a-input-number :max="180" :min="0" :step="0.000001" v-model="form.经营地址经度" style="width:100%"/>
            </a-form-model-item>
            <a-form-model-item label="经营地址纬度" prop="经营地址纬度">
                <a-input-number :max="180" :min="0" :step="0.000001" v-model="form.经营地址纬度" style="width:100%" />
            </a-form-model-item>
            <a-form-model-item label="联系电话" prop="联系电话">
                <a-input v-model="form.联系电话" />
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
                行政相对人名称: "",
                行政相对人编码: "",
                是否重点监管: "",
                法人名称: "",
                法人类型: "",
                法人设立的批准或核准机关: "",
                法人设立的批准或核准时间: undefined,
                法定代表人: "",
                法定代表人证件类型: "",
                法定代表人编码: "",
                行业类别: "",
                组织类别: "",
                国民经济类型: "",
                行政区划代码:"",
                经营范围:"",
                注册地址:"",
                经营地址:"",
                经营地址经度:"",
                经营地址纬度:"",
                联系电话:"",
            },
            rules: {
                // 行政相对人名称
                行政相对人名称: [
                    {
                        required: true,
                        message: "行政相对人名称",
                    },
                    {
                        min: 0,
                        max: 200,
                        message: "请填写200个字符以内的行政相对人名称",
                        trigger: "blur",
                    },
                ],
                // 行政相对人编码
                行政相对人编码: [
                    {
                        required: true,
                        message: "请填写行政相对人编码",
                    },
                    {
                        min: 18,
                        max: 18,
                        pattern: [global.expression.身份证号],
                        message: "请填写18位行政相对人编码",
                        trigger: "blur",
                    },
                ],
                // 是否重点监管
                是否重点监管: [],
                // 法人名称
                法人名称: [
                    {
                        min: 0,
                        max: 200,
                        message: "请填写200个字符以内的法人名称",
                        trigger: "blur",
                    },
                ],
                // 法人类型
                法人类型: [],
                // 法人设立的批准或核准机关
                法人设立的批准或核准机关: [
                    {
                        min: 0,
                        max: 20,
                        message: "请填写20个字符以内的法人设立的批准或核准机关",
                        trigger: "blur",
                    },
                ],
                // 法人设立的批准或核准时间
                法人设立的批准或核准时间: [],
                // 法定代表人
                法定代表人: [
                    {
                        min: 0,
                        max: 200,
                        message: "请填写200个字符以内的法定代表人",
                        trigger: "blur",
                    },
                ],
                // 法定代表人证件类型
                法定代表人证件类型: [],
                // 法定代表人编码
                法定代表人编码: [
                    {
                        min: 0,
                        max: 50,
                        pattern: [
                            global.expression.身份证号,
                        ],
                        message: "请填写正确法定代表人编码",
                        trigger: "blur",
                    },
                ],
                // 行业类别
                行业类别: [],
                // 组织类别
                组织类别: [],
                // 国民经济类型
                国民经济类型: [],
                // 行政区划代码
                行政区划代码: [],
                // 经营范围
                经营范围: [],
                // 注册地址
                注册地址: [
                    {
                        min: 0,
                        max: 500,
                        message: "请填写500个字符以内的注册地址",
                        trigger: "blur",
                    },
                ],
                // 经营地址
                经营地址: [
                    {
                        min: 0,
                        max: 100,
                        message: "请填写100个字符以内的经营地址",
                        trigger: "blur",
                    },
                ],
                // 经营地址经度
                经营地址经度: [],
                // 经营地址纬度
                经营地址纬度: [],
                // 联系电话
                联系电话: [
                    {
                        min: 0,
                        max: 50,
                        pattern:/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
                        message: "请填写正确联系电话",
                        trigger: "blur",
                    },
                ],
            },
        };
    },
    methods: {
        moment,

        // 确认按钮
        onSubmit() {
            console.log(this.form);
            this.$refs.ruleForm.validate((valid) => {
                this.form.法人设立的批准或核准时间 = moment(this.form.法人设立的批准或核准时间).format(
                    "YYYY-MM-DD"
                );
                this.data = [this.form];
                if (valid) {
                    if (this.type == "新增") {
                        console.log(this.form);
                        this.axios
                            .post("object/organization/insert", this.data)
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
                            .post("object/organization/update", this.data[0])
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
            this.$root.$emit("closeModalVisibleLegalPerson", "false");
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
                    行政相对人名称: "",
                    行政相对人编码: "",
                    是否重点监管: "",
                    法人名称: "",
                    法人类型: "",
                    法人设立的批准或核准机关: "",
                    法人设立的批准或核准时间: undefined,
                    法定代表人: "",
                    法定代表人证件类型: "",
                    法定代表人编码: "",
                    行业类别: "",
                    组织类别: "",
                    国民经济类型: "",
                    行政区划代码:"",
                    经营范围:"",
                    注册地址:"",
                    经营地址:"",
                    经营地址经度:"",
                    经营地址纬度:"",
                    联系电话:"",
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
    beforeMount() {},
};
</script>

<style lang="scss" scoped>
@import "../../edit";
</style>