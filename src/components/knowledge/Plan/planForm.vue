<template>
    <div class="content">
        <a-form-model class="form" ref="ruleForm" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-form-model-item label="预案编号" prop="预案编号">
                <a-input v-model="form.预案编号" />
            </a-form-model-item>
             <a-form-model-item label="事件级别" prop="事件级别">
                <a-input v-model="form.事件级别" />
            </a-form-model-item>
             <a-form-model-item label="紧急类型" prop="紧急类型">
                <a-input v-model="form.紧急类型" />
            </a-form-model-item>
             <a-form-model-item label="应急机构" prop="应急机构">
                <a-input v-model="form.应急机构" />
            </a-form-model-item>
            <a-form-model-item label="应急措施" prop="应急措施"  class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-input v-model="form.应急措施" />
            </a-form-model-item>
            <a-form-model-item label="应急资源" prop="应急资源"  class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-textarea v-model="form.应急资源" :rows="2" />
            </a-form-model-item>
            <a-form-model-item label="紧急规模" prop="紧急规模"  class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-textarea v-model="form.紧急规模" :rows="2" />
            </a-form-model-item>
            <a-form-model-item label="应急预案" prop="应急预案"  class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-textarea v-model="form.应急预案" :rows="2" />
            </a-form-model-item>
            <a-form-model-item label="触发条件" prop="触发条件"  class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-textarea v-model="form.触发条件" :rows="2" />
            </a-form-model-item>
            <a-form-model-item label="所属行业" prop="所属行业"  class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-input v-model="form.所属行业" />
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
                预案编号: "",
                事件级别: "",
                紧急类型: "",
                应急机构: "",
                应急措施: "",
                应急资源: "",
                紧急规模: "",
                应急预案: "",
                触发条件: "",
                所属行业: "",
            },
            rules: {
                // 预案编号
                预案编号: [
                    {
                        required: true,
                        message: "请填写预案编号",
                    },
                    {
                        min: 0,
                        max: 50,
                        message: "请填写50个字符以内的预案编号",
                        trigger: "blur",
                    },
                ],
                // 事件级别
                事件级别: [
                    {
                        required: true,
                        message: "请填写事件级别",
                    },
                    {
                        min: 0,
                        max: 50,
                        message: "请填写50个字符以内的事件级别",
                        trigger: "blur",
                    },
                ],
                // 紧急类型
                紧急类型: [
                    {
                        required: true,
                        message: "请填写紧急类型",
                    },
                    {
                        min: 0,
                        max: 50,
                        message: "请填写50个字符以内的紧急类型",
                        trigger: "blur",
                    },
                ],
                // 应急机构
                应急机构: [
                    {
                        required: true,
                        message: "请填写应急机构",
                    },
                    {
                        min: 0,
                        max: 50,
                        message: "请填写50个字符以内的应急机构",
                        trigger: "blur",
                    },
                ],
                // 应急措施
                应急措施: [
                    {
                        required: true,
                        message: "请填写应急措施",
                    },
                    {
                        min: 0,
                        max: 100,
                        message: "请填写100个字符以内的应急措施",
                        trigger: "blur",
                    },
                ],
                // 应急资源
                应急资源: [
                    {
                        min: 0,
                        max: 200,
                        message: "请填写200个字符以内的应急资源",
                        trigger: "blur",
                    },
                ],
                // 紧急规模
                紧急规模: [
                    {
                        required: true,
                        message: "请填写紧急规模",
                    },
                    {
                        min: 0,
                        max: 500,
                        message: "请填写500个字符以内的紧急规模",
                        trigger: "blur",
                    },
                ],
                // 应急预案
                应急预案: [
                    {
                        min: 0,
                        max: 500,
                        message: "请填写500个字符以内的应急预案",
                        trigger: "blur",
                    },
                ],
                // 触发条件
                触发条件: [
                    {
                        min: 0,
                        max: 500,
                        message: "请填写500个字符以内的触发条件",
                        trigger: "blur",
                    },
                ],
                // 所属行业
                所属行业: [
                    {
                        required: true,
                        message: "请填写所属行业",
                    },
                    {
                        min: 0,
                        max: 100,
                        message: "请填写100个字符以内的所属行业",
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
                this.form.发布日期 = moment(this.form.发布日期).format(
                    "YYYY-MM-DD"
                );
                this.form.施行日期 = moment(this.form.施行日期).format(
                    "YYYY-MM-DD"
                );
                this.data = [this.form];
                if (valid) {
                    if (this.type == "新增") {
                        this.axios
                            .post("knowledge/plan/insert", this.data)
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
                            .post("knowledge/plan/update", this.data[0])
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
            this.$root.$emit("closeModalVisiblePlan", "false");
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
                    预案编号: "",
                    事件级别: "",
                    紧急类型: "",
                    应急机构: "",
                    应急措施: "",
                    应急资源: "",
                    紧急规模: "",
                    应急预案: "",
                    触发条件: "",
                    所属行业: "",
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

