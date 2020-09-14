<template>
    <div class="content">
        <a-form-model class="form" ref="ruleForm" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-form-model-item label="关键字" prop="关键字">
                <a-input v-model="form.关键字" />
            </a-form-model-item>
             <a-form-model-item label="法律法规类别" prop="法律法规类别">
                <a-input v-model="form.法律法规类别" />
            </a-form-model-item>
            
            <a-form-model-item label="发布日期" prop="发布日期">
                <!-- <a-input v-model="form.发布日期" /> -->
                <a-date-picker v-model="form.发布日期" type="date" placeholder="请选择发布日期" style="width: 100%;" />
            </a-form-model-item>
            <a-form-model-item label="发布机关" prop="发布机关">
                <a-input v-model="form.发布机关" />
                <!-- <a-date-picker v-model="form.发布日期" type="date" placeholder="请选择发布日期" style="width: 100%;" /> -->
            </a-form-model-item>
            <a-form-model-item label="施行日期" prop="施行日期">
                <!-- <a-input v-model="form.施行日期" /> -->
                <a-date-picker v-model="form.施行日期" type="date" placeholder="请选择施行日期" style="width: 100%;" />
            </a-form-model-item>
            <a-form-model-item label="法律法规内容" prop="法律法规内容">
                <a-input v-model="form.法律法规内容" />
            </a-form-model-item>
            <a-form-model-item label="发布文号" prop="发布文号" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-textarea v-model="form.发布文号" :rows="2" />
            </a-form-model-item>
            <a-form-model-item label="法律法规名称" prop="法律法规名称" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-textarea v-model="form.法律法规名称" :rows="2" />
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
    name: "legalForm",
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
                关键字: "",
                发布文号: "",
                发布日期: undefined,
                发布机关:"",
                施行日期: undefined,
                法律法规内容: "",
                法律法规名称: "",
                法律法规类别: "",
            },
            rules: {
                // 关键字
                关键字: [
                    {
                        min: 0,
                        max: 50,
                        message: "请填写50个字符以内的关键字",
                        trigger: "blur",
                    },
                ],
                // 发布文号
                发布文号: [
                    {
                        required: true,
                        message: "请填写发布文号",
                    },
                    {
                        min: 0,
                        max: 500,
                        message: "请填写500个字符以内的发布文号",
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
                // 发布机关
                发布机关: [
                    {
                        required: true,
                        message: "请填写发布机关",
                    },
                     {
                        min: 0,
                        max: 50,
                        message: "请填写50个字符以内的发布机关",
                        trigger: "blur",
                    },
                ],
                // 施行日期
                施行日期: [
                    {
                        required: true,
                        message: "请填写施行日期",
                    },
                ],
                // 法律法规内容
                法律法规内容: [
                    // {
                    //     required: true,
                    //     message: "请填写法律法规内容",
                    // }
                ],
                // 法律法规名称
                法律法规名称: [
                    {
                        required: true,
                        message: "请填写法律法规名称",
                    },
                    {
                        min: 0,
                        max: 500,
                        message: "请填写500个字符以内的法律法规名称",
                        trigger: "blur",
                    },
                ],
                // 法律法规类别
                法律法规类别: [
                    {
                        required: true,
                        message: "请填写法律法规类别",
                    },
                    {
                        min: 0,
                        max: 50,
                        message: "请填写50个字符以内的法律法规类别",
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
                            .post("knowledge/law/insert", this.data)
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
                            .post("knowledge/law/update", this.data[0])
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
            this.$root.$emit("closeModalVisibleLegal", "false");
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
                    关键字: "",
                    发布文号: "",
                    发布日期: moment(new Date().toLocaleDateString()).format(
                        "YYYY-MM-DD"
                    ),
                    施行日期: undefined,
                    法律法规内容: "",
                    法律法规名称: "",
                    法律法规类别: "",
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
    },
};
</script>


<style lang="scss" scoped>
@import "../../edit";
</style>