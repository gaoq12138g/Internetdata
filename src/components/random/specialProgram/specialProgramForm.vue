<template>
    <div class="content">
        <a-form-model class="form" ref="ruleForm" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-form-model-item label="计划ID" prop="计划ID" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-input v-model="form.计划ID" />
            </a-form-model-item>
            <a-form-model-item label="计划名称" prop="计划名称" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-textarea v-model="form.计划名称" :rows="2" />
            </a-form-model-item>
            <a-form-model-item label="年度" prop="年度">
                <a-date-picker ref="year" mode="year" format="YYYY" v-model="form.年度" type="date" style="width: 100%;" :open="yearPickShow"  @panelChange="handlePanelChange" @openChange="handleOpenChange" :allowClear="false"/>
            </a-form-model-item>
            <a-form-model-item label="地区行政编码" prop="地区行政编码">
                <a-select v-model="form.地区行政编码" placeholder="请选地区行政编码" @change="handleChange">
                    <a-select-option value="000000">全国</a-select-option>
                    <a-select-option v-for="(item, index) in dicFilter('行政区划代码')" :key="index" :value="item.编号">{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>
            <a-form-model-item label="地区名" prop="地区名" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-textarea v-model="form.地区名" :rows="2" />
            </a-form-model-item>

            <a-form-model-item label="监管部门" prop="监管部门">
                <a-select v-model="form.监管部门" placeholder="请选监管部门">
                    <a-select-option v-for="(item, index) in dicFilter('江苏省监管部门代码')" :key="index" :value="item.编号">{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>
            <a-form-model-item label="监管部门统一社会信用代码" prop="监管部门统一社会信用代码">
                <a-input v-model="form.监管部门统一社会信用代码" />
            </a-form-model-item>
            <a-form-model-item label="抽查比例" prop="抽查比例">
                <a-input-number v-model="form.抽查比例" :min="0" :max="100" :formatter="value => `${value}%`" :parser="parser" style="width: 100%;" />
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
            yearPickShow: false, //年选择器的显示隐藏
            layout: "inline",
            labelCol: { span: 9 },
            wrapperCol: { span: 13 },
            blockRowLable: { span: 4 },
            blockRowWrapper: { span: 19 },
            other: "",
            form: {
                id: "",
                计划ID: "",
                地区行政编码: "",
                地区名: "",
                年度: undefined,
                计划名称: "",
                监管部门: "",
                监管部门统一社会信用代码: "",
                抽查比例: null,
            },
            rules: {
                // 计划ID
                计划ID: [
                    {
                        required: true,
                        message: "请填写计划ID",
                    },
                    {
                        min: 0,
                        max: 100,
                        message: "请填写100个字符以内的计划ID",
                        trigger: "blur",
                    },
                ],
                // 地区行政编码
                地区行政编码: [
                    {
                        required: true,
                        message: "请选择地区行政编码",
                    },
                ],
                // 地区名
                地区名: [
                    {
                        required: true,
                        message: "请填写地区名",
                    },
                    {
                        min: 0,
                        max: 200,
                        message: "请填写200个字符以内的地区名",
                        trigger: "blur",
                    },
                ],
                // 年度
                年度: [
                    {
                        required: true,
                        message: "请填写年度",
                        trigger: 'change'
                    },
                    // {
                    //     min: 0,
                    //     max: 50,
                    //     message: "请填写50个字符以内的年度",
                    //     trigger: "blur",
                    // },
                ],
                // 计划名称
                计划名称: [
                    {
                        required: true,
                        message: "请填写计划名称",
                    },
                    {
                        min: 0,
                        max: 500,
                        message: "请填写500个字符以内的计划名称",
                        trigger: "blur",
                    },
                ],
                // 监管部门
                监管部门: [
                    {
                        required: true,
                        message: "请选择监管部门",
                    },
                ],
                // 监管部门统一社会信用代码
                监管部门统一社会信用代码: [
                    {
                        required: false,
                        message: "请填写监管部门统一社会信用代码",
                    },
                    {
                        min: 18,
                        max: 18,
                        pattern: [global.expression.社会统一信用代码],
                        message: "请填写18位监管部门统一社会信用代码",
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
        handleOpenChange(status) {
            this.yearPickShow = status;
        },
        // 得到年份选择器的值
        handlePanelChange(value) {
            this.yearPickShow = false;
            this.form.年度 = value;
            this.form.年度 = moment(this.form.年度).format("YYYY");
            console.log(this.form);
            // this.$refs.year.onFieldBlur();
        },
        parser(value) {
            this.form.抽查比例 = value.replace("%", "");
            return this.form.抽查比例;
        },
        // 确认按钮
        onSubmit() {
            console.log(this.form);
            this.$refs.ruleForm.validate((valid) => {
                if(this.form.抽查比例){
                    this.form.抽查比例 = this.form.抽查比例+'%' ;
                }
                this.data = [this.form];
                if (valid) {
                    if (this.type == "新增") {
                        console.log(this.form);
                        this.axios
                            .post("random/specialProgram/insert", this.data)
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
                            .post("random/specialProgram/update", this.data[0])
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
            this.$root.$emit("closeModalVisibleSpecialProgram", "false");
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
                    计划ID: "",
                    地区行政编码: "",
                    地区名: "",
                    年度: undefined,
                    计划名称: "",
                    监管部门: "",
                    监管部门统一社会信用代码: "",
                    抽查比例: null,
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