<template>
    <div class="content">
        <a-form-model class="form" ref="ruleForm" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-form-model-item label="行政相对人名称" prop="行政相对人名称" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-input v-model="form.行政相对人名称" />
            </a-form-model-item>
            <a-form-model-item label="行政相对人编码" prop="行政相对人编码">
                <a-input v-model="form.行政相对人编码" />
            </a-form-model-item>
            <a-form-model-item label="性别" prop="性别">
                <a-select v-model="form.性别" placeholder="请选性别">
                    <a-select-option v-for="(item, index) in dicFilter('性别')" :key="index" :value="item.编号">{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>
            <a-form-model-item label="民族" prop="民族">
                <a-select v-model="form.民族" placeholder="请选民族">
                    <a-select-option v-for="(item, index) in dicFilter('民族')" :key="index" :value="item.编号">{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>
            <a-form-model-item label="出生日期" prop="出生日期">
                <a-date-picker v-model="form.出生日期" type="date" placeholder="请选择出生日期" style="width: 100%;" />
            </a-form-model-item>
            <a-form-model-item label="户籍地址" prop="户籍地址" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-textarea v-model="form.户籍地址" :rows="2" />
            </a-form-model-item>
            <a-form-model-item label="政治面貌" prop="政治面貌">
                <a-select v-model="form.政治面貌" placeholder="请选政治面貌">
                    <a-select-option v-for="(item, index) in dicFilter('政治面貌')" :key="index" :value="item.编号">{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>
            <a-form-model-item label="行政区划代码" prop="行政区划代码">
                <a-select v-model="form.行政区划代码" placeholder="请选行政区划代码">
                    <a-select-option v-for="(item, index) in dicFilter('行政区划代码')" :key="index" :value="item.编号">{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>
            <a-form-model-item label="常住地址" prop="常住地址" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-input v-model="form.常住地址" />
            </a-form-model-item>
            <a-form-model-item label="联系电话" prop="联系电话">
                <a-input v-model="form.联系电话" />
            </a-form-model-item>
            <a-form-model-item label="从业证书类型" prop="从业证书类型">
                <a-select v-model="form.从业证书类型" placeholder="请选从业证书类型">
                    <a-select-option v-for="(item, index) in dicFilter('从业证书类型')" :key="index" :value="item.编号">{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>
            <a-form-model-item label="从业证书名称" prop="从业证书名称">
                <a-input v-model="form.从业证书名称" />
            </a-form-model-item>
            <a-form-model-item label="从业证书编码" prop="从业证书编码">
                <a-input v-model="form.从业证书编码" />
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
                性别: "",
                民族: "",
                出生日期: undefined,
                户籍地址: "",
                政治面貌:"",
                行政区划代码:"",
                常住地址:"",
                联系电话:"",
                从业证书类型:"",
                从业证书名称:"",
                从业证书编码:"",
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
                        max: 100,
                        message: "请填写100个字符以内的行政相对人名称",
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
                // 性别
                性别: [],
                // 民族
                民族: [],
                // 出生日期
                出生日期: [],
                // 户籍地址
                户籍地址: [
                    {
                        min: 0,
                        max: 200,
                        message: "请填写200个字符以内的户籍地址",
                        trigger: "blur",
                    },
                ],
                // 政治面貌
                政治面貌: [],
                // 行政区划代码
                行政区划代码: [],
                // 常住地址
                常住地址: [
                    {
                        min: 0,
                        max: 100,
                        message: "请填写100个字符以内的常住地址",
                        trigger: "blur",
                    },
                ],
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
                // 从业证书类型
                从业证书类型: [],
                // 从业证书名称
                从业证书名称: [
                    {
                        min: 0,
                        max: 50,
                        message: "请填写50个字符以内的从业证书名称",
                        trigger: "blur",
                    },
                ],
                // 从业证书编码
                从业证书编码: [
                    {
                        min: 0,
                        max: 30,
                        message: "请填写30个字符以内的从业证书编码",
                        trigger: "blur",
                    },
                ],

            },
        };
    },
    methods: {
        moment,
        // 选择地区编码
        handleChange(value) {
            console.log(`selected ${value}`);
            if (this.form.地区名 != null) {
                this.form.地区名 = this.form.地区名.replace(/\s+/g, "");
            }
            if (this.form.地区名 == "") {
                if (value == "000000") {
                    this.form.地区名 = "全国";
                } else {
                    this.form.地区名 = this.$options.filters["dictionary"](
                        value,
                        "行政区划代码"
                    );
                }
            }
        },
        // 选择日期方法
        onChange() {
            return this.setState({ time: null });
        },
        // 确认按钮
        onSubmit() {
            console.log(this.form);
            this.$refs.ruleForm.validate((valid) => {
                this.form.出生日期 = moment(this.form.出生日期).format(
                    "YYYY-MM-DD"
                );
                this.data = [this.form];
                if (valid) {
                    if (this.type == "新增") {
                        console.log(this.form);
                        this.axios
                            .post("object/person/insert", this.data)
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
                            .post("object/person/update", this.data[0])
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
            this.$root.$emit("closeModalVisiblePerson", "false");
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
                    性别: "",
                    民族: "",
                    出生日期: undefined,
                    户籍地址: "",
                    政治面貌:"",
                    行政区划代码:"",
                    常住地址:"",
                    联系电话:"",
                    从业证书类型:"",
                    从业证书名称:"",
                    从业证书编码:"",
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