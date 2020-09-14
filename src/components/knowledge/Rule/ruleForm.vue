<template>
    <div class="content">
        <a-form-model class="form" ref="ruleForm" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-form-model-item label="规则名称" prop="规则名称"   class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-input v-model="form.规则名称" />
            </a-form-model-item>
            <a-form-model-item label="领域" prop="领域"  class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-textarea v-model="form.领域" :rows="2" />
            </a-form-model-item>
            <a-form-model-item label="内容" prop="内容" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-input v-model="form.内容" />
            </a-form-model-item>
            <a-form-model-item label="目的" prop="目的" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                 <a-textarea v-model="form.目的" :rows="2" />
            </a-form-model-item>
            <a-form-model-item label="约束条件" prop="约束条件" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                 <a-textarea v-model="form.约束条件" :rows="2" />
            </a-form-model-item>
            <a-form-model-item label="适用范围" prop="适用范围" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                 <a-textarea v-model="form.适用范围" :rows="2" />
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
                规则名称: "",
                领域: "",
                内容: "",
                目的: "",
                约束条件:"",
                适用范围:"",
            },
            rules: {
                // 规则名称
                规则名称: [
                    {
                        required: true,
                        message: "请填写规则名称",
                    },
                    {
                        min: 0,
                        max: 100,
                        message: "请填写100个字符以内的规则名称",
                        trigger: "blur",
                    },
                ],
                // 领域
                领域: [
                    {
                        required: true,
                        message: "请填写领域",
                    },
                    {
                        min: 0,
                        max: 500,
                        message: "请填写500个字符以内的领域",
                        trigger: "blur",
                    },
                ],
                // 内容
                内容: [
                    {
                        required: true,
                        message: "请填写内容",
                    },
                    // {
                    //     min: 0,
                    //     max: 50,
                    //     message: "请填写50个字符以内的内容",
                    //     trigger: "blur",
                    // },
                ],
                // 目的
                目的: [
                    {
                        min: 0,
                        max: 500,
                        message: "请填写500个字符以内的目的",
                        trigger: "blur",
                    },
                ],
                 // 约束条件
                约束条件: [
                    {
                        required: true,
                        message: "请填写约束条件",
                    },
                    {
                        min: 0,
                        max: 500,
                        message: "请填写500个字符以内的约束条件",
                        trigger: "blur",
                    },
                ],
                 // 适用范围
                适用范围: [
                    {
                        min: 0,
                        max: 500,
                        message: "请填写500个字符以内的适用范围",
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
                            .post("knowledge/rule/insert", this.data)
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
                            .post("knowledge/rule/update", this.data[0])
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
            this.$root.$emit("closeModalVisibleRule", "false");
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
                    规则名称: "",
                    领域: "",
                    内容: "",
                    目的: "",
                    约束条件:"",
                    适用范围:"",
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