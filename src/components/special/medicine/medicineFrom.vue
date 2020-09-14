<template>
    <div class="content">
        <a-form-model
            :model="form"
            :rules="rules"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
            class="form"
            ref="ruleForm"
        >
            <a-form-model-item label="药品生产许可证编号" prop="药品生产许可证编号">
                <a-input v-model="form.药品生产许可证编号" />
            </a-form-model-item>

            <a-form-model-item label="企业名称" prop="企业名称">
                <a-input v-model="form.企业名称" />
            </a-form-model-item>

            <a-form-model-item label="统一社会信用代码" prop="统一社会信用代码">
                <a-input v-model="form['统一社会信用代码']" />
            </a-form-model-item>

            <a-form-model-item label="省份" prop="省份">
                <a-input v-model="form.省份" />
            </a-form-model-item>

            <a-form-model-item
                label="注册地址"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="注册地址"
            >
                <a-textarea v-model="form['注册地址']" :rows="1" />
            </a-form-model-item>

            <a-form-model-item
                label="生产地址"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="生产地址"
            >
                <a-textarea v-model="form['生产地址']" :rows="1" />
            </a-form-model-item>

            <a-form-model-item
                label="发证机关"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="发证机关"
            >
                <a-textarea v-model="form['发证机关']" :rows="1" />
            </a-form-model-item>

            <a-form-model-item label="发证日期" prop="发证日期">
                <a-date-picker
                    v-model="form.发证日期"
                    format="YYYY-MM-DD"
                    type="date"
                    placeholder="选择日期"
                    style="width:100%"
                />
            </a-form-model-item>

            <a-form-model-item label="证书有效期" prop="证书有效期">
                <a-input v-model="form.证书有效期" />
            </a-form-model-item>
        </a-form-model>
        <div class="btnGroup">
            <a-button type="primary" @click="onSubmit">提交</a-button>
            <a-button style="margin-left: 20px;" @click="closeModal()">取消</a-button>
        </div>
    </div>
</template>
<script>
import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";
import moment from "moment";
import axios from "axios";
import { mapState } from "vuex";
import global from "@/views/js/global.js";
export default {
    data() {
        return {
            zh_CN,
            labelCol: { span: 9 },
            wrapperCol: { span: 13 },
            blockRowLable: { span: 4 },
            blockRowWrapper: { span: 19 },
            form: {
                id: "",
                企业名称: "",
                发证日期: "",
                发证机关: "",
                注册地址: "",
                生产地址: "",
                省份: "",
                统一社会信用代码: "",
                药品生产许可证编号: "",
                证书有效期: "",
            },
            global,
            rules: {
                药品生产许可证编号: [
                    {
                        required: true,
                        message: "请填写药品生产许可证编号",
                    },
                    {
                        max: 20,
                        message: "最长20字符",
                        trigger: "blur",
                    },
                ],
                统一社会信用代码: [
                    {
                        required: true,
                        message: "请填写统一社会信用代码",
                    },
                    {
                        min: 18,
                        max:18,
                        pattern: [global.expression.社会统一信用代码],
                        message: "请填写正确的统一社会信用代码",
                    },
                ],
                企业名称: [
                    {
                        required: true,
                        message: "请填写企业名称",
                    },
                    {
                        max: 50,
                        message: "最长50个字符",
                    },
                ],
                注册地址: [
                    {
                        max: 100,
                        message: "最长100个字符",
                    },
                ],
                生产地址: [
                    {
                        max: 100,
                        message: "最长100个字符",
                    },
                ],
                发证日期: [
                    {
                        required: true,
                        message: "请选择发证日期",
                    },
                ],
                证书有效期: [
                    {
                        required: true,
                        message: "请填写证书有效期",
                    },
                    {
                        max: 10,
                        message: "最长10个字符",
                    },
                ],
                省份: [
                    {
                        max: 30,
                        message: "最长30个字符",
                    },
                ],
                发证机关: [
                    {
                        max: 100,
                        message: "最长100个字符",
                    },
                ],
            },
            data: [],
        };
    },
    watch: {
        item: {
            deep: true,
            immediate: true,
            handler: function (newVal, oldval) {
                this.form = {
                    id: "",
                    企业名称: "",
                    发证日期: "",
                    发证机关: "",
                    注册地址: "",
                    生产地址: "",
                    省份: "",
                    统一社会信用代码: "",
                    药品生产许可证编号: "",
                    证书有效期: "",
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
    props: {
        item: {
            type: Object,
        },
        types: {
            type: String,
            required: false,
        },
    },
    methods: {
        onSubmit() {
            console.log("submit");

            this.$refs.ruleForm.validate((valid) => {
                this.form.发证日期 = moment(this.form.发证日期).format(
                    "YYYY-MM-DD"
                );

                this.data = [this.form];
                console.log(this.data); // 12320100425800919F

                if (valid) {
                    if (this.types == "new") {
                        console.log("新增");
                        this.add();
                    } else if (this.types == "modify") {
                        console.log("修改");
                        this.update();
                    }
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
        resetForm() {
            this.$refs.ruleForm.resetFields();
        },
        closeModal() {
            this.$root.$emit("updataCLoseMedicine", "close关闭modal");
        },

        // 新增
        add() {
            this.axios.post("special/medicine/insert", this.data).then((res) => {
                console.log(res);
                if (res.data.code == 200) {
                    this.$message.success("新增成功");
                } else {
                    this.$message.error("新增失败");
                }
                this.closeModal();
            });
        },
        // 修改
        update() {
            this.axios
                .post("special/medicine/update", this.data[0])
                .then((res) => {
                    console.log(res);
                    if (res.data.code == 200) {
                        this.$message.success("修改成功");
                    } else {
                        this.$message.error("修改失败");
                    }
                    this.closeModal();
                });
        },
    },
    mounted() {
        this.form = this.item;
        // this.form.发证日期 = moment(this.form.发证日期).format("YYYY-MM-DD");
    },
};
</script>
<style lang="scss" scoped>
@import "../../edit";
</style>