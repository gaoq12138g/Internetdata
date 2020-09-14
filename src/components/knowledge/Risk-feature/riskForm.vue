<template>
    <div class="content">
        <a-form-model class="form" ref="ruleForm" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-form-model-item label="风险特征名称" prop="风险特征名称"   class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-input v-model="form.风险特征名称" />
            </a-form-model-item>
            <a-form-model-item label="业务归类" prop="业务归类">
                <a-input v-model="form.业务归类" />
            </a-form-model-item>
            <a-form-model-item label="特征指标" prop="特征指标">
                <a-input v-model="form.特征指标" />
            </a-form-model-item>
            <a-form-model-item label="关联关系" prop="关联关系">
                <a-input v-model="form.关联关系" />
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
                风险特征名称: "",
                业务归类: "",
                特征指标: "",
                关联关系: "",
            },
            rules: {
                // 风险特征名称
                风险特征名称: [
                    {
                        required: true,
                        message: "请填写风险特征名称",
                    },
                    {
                        min: 0,
                        max: 100,
                        message: "请填写100个字符以内的风险特征名称",
                        trigger: "blur",
                    },
                ],
                // 业务归类
                业务归类: [
                    {
                        required: true,
                        message: "请填写业务归类",
                    },
                    {
                        min: 0,
                        max: 50,
                        message: "请填写50个字符以内的业务归类",
                        trigger: "blur",
                    },
                ],
                // 特征指标
                特征指标: [
                    {
                        required: true,
                        message: "请填写特征指标",
                    },
                    {
                        min: 0,
                        max: 50,
                        message: "请填写50个字符以内的特征指标",
                        trigger: "blur",
                    },
                ],
                // 关联关系
                关联关系: [
                    {
                        min: 0,
                        max: 50,
                        message: "请填写50个字符以内的关联关系",
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
                this.data = [this.form];
                if (valid) {
                    if (this.type == "新增") {
                        this.axios
                            .post("knowledge/risk/insert", this.data)
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
                            .post("knowledge/risk/update", this.data[0])
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
            this.$root.$emit("closeModalVisibleRisk", "false");
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
                    风险特征名称: "",
                    业务归类: "",
                    特征指标: "",
                    关联关系: "",
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