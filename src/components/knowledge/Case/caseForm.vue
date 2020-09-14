<template>
    <div class="content">
        <a-form-model class="form" ref="ruleForm" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-form-model-item label="案例编号" prop="案例编号">
                <a-input v-model="form.案例编号" />
            </a-form-model-item>
            <a-form-model-item label="部门类别" prop="部门类别">
                <a-input v-model="form.部门类别" />
            </a-form-model-item>
            <a-form-model-item label="业务类别" prop="业务类别">
                <a-input v-model="form.业务类别" />
            </a-form-model-item>
            <a-form-model-item label="监测事项" prop="监测事项">
                <a-input v-model="form.监测事项" />
            </a-form-model-item>
            <a-form-model-item label="案例名称" prop="案例名称"  class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-textarea v-model="form.案例名称" :rows="2" />
            </a-form-model-item>
            <a-form-model-item label="案情简介" prop="案情简介"  class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-textarea v-model="form.案情简介" :rows="2" />
            </a-form-model-item>
            <a-form-model-item label="领域" prop="领域">
                <a-input v-model="form.领域" />
            </a-form-model-item>
            <a-form-model-item label="起因" prop="起因">
                <a-input v-model="form.起因" />
            </a-form-model-item>
            <a-form-model-item label="过程" prop="过程">
                <a-input v-model="form.过程" />
            </a-form-model-item>
            <a-form-model-item label="处置" prop="处置">
                <a-input v-model="form.处置" />
            </a-form-model-item>
            <a-form-model-item label="结果" prop="结果"  class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-textarea v-model="form.结果" :rows="2" />
            </a-form-model-item>
            <a-form-model-item label="结论" prop="结论" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-textarea v-model="form.结论" :rows="2" />
            </a-form-model-item>
            <a-form-model-item label="发布日期" prop="发布日期">
                <a-date-picker v-model="form.发布日期" type="date" placeholder="请选择发布日期" style="width: 100%;" />
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
                案例编号: "",
                部门类别: "",
                业务类别: "",
                监测事项: "",
                案例名称: "",
                案情简介: "",
                领域: "",
                起因: "",
                过程: "",
                处置: "",
                结果: "",
                发布日期: undefined,
                施行日期: undefined,
                法律法规内容: "",
                法律法规名称: "",
                法律法规类别: "",
            },
            rules: {
                // 案例编号
                案例编号: [
                    {
                        required: true,
                        message: "请填写案例编号",
                    },
                    {
                        min: 0,
                        max: 50,
                        message: "请填写50个字符以内的案例编号",
                        trigger: "blur",
                    },
                ],
                // 部门类别
                部门类别: [
                    {
                        required: true,
                        message: "请填写部门类别",
                    },
                    {
                        min: 0,
                        max: 50,
                        message: "请填写50个字符以内的部门类别",
                        trigger: "blur",
                    },
                ],
                // 业务类别
                业务类别: [
                    {
                        required: true,
                        message: "请填写业务类别",
                    },
                    {
                        min: 0,
                        max: 50,
                        message: "请填写50个字符以内的业务类别",
                        trigger: "blur",
                    },
                ],
                // 监测事项
                监测事项: [
                    {
                        min: 0,
                        max: 50,
                        message: "请填写50个字符以内的监测事项",
                        trigger: "blur",
                    },
                ],
                // 案例名称
                案例名称: [
                    {
                        required: true,
                        message: "请填写案例名称",
                    },
                    {
                        min: 0,
                        max: 300,
                        message: "请填写300个字符以内的案例名称",
                        trigger: "blur",
                    },
                ],
                // 案情简介
                案情简介: [
                    {
                        min: 0,
                        max: 500,
                        message: "请填写500个字符以内的案情简介",
                        trigger: "blur",
                    },
                ],
                // 领域
                领域: [
                    {
                        min: 0,
                        max: 50,
                        message: "请填写50个字符以内的领域",
                        trigger: "blur",
                    },
                ],
                // 起因
                起因: [
                    {
                        required: true,
                        message: "请填写起因",
                    },
                    {
                        min: 0,
                        max: 50,
                        message: "请填写50个字符以内的起因",
                        trigger: "blur",
                    },
                ],
                // 过程
                过程: [
                    
                ],
                // 处置
                处置: [
                    
                ],
                // 结果
                结果: [
                    {
                        required: true,
                        message: "请填写结果",
                    },
                    {
                        min: 0,
                        max: 500,
                        message: "请填写500个字符以内的结果",
                        trigger: "blur",
                    },
                ],
                // 结论
                结论: [
                    {
                        min: 0,
                        max: 500,
                        message: "请填写500个字符以内的结论",
                        trigger: "blur",
                    },
                ],
                // 发布日期
                发布日期: [
                    {
                        required: true,
                        message: "请填写发布日期",
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
                            .post("knowledge/case/insert", this.data)
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
                            .post("knowledge/case/update", this.data[0])
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
            this.$root.$emit("closeModalVisibleCase", "false");
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
                    案例编号: "",
                    部门类别: "",
                    业务类别: "",
                    监测事项: "",
                    案例名称: "",
                    案情简介: "",
                    领域: "",
                    起因: "",
                    过程: "",
                    处置: "",
                    结果: "",
                    结论: "",
                    发布日期: moment(new Date().toLocaleDateString()).format(
                        "YYYY-MM-DD"
                    ),
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

};
</script>

<style lang="scss" scoped>
@import "../../edit";
</style>