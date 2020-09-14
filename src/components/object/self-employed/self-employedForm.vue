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
            <a-form-model-item label="主体身份代码" prop="主体身份代码">
                <a-input v-model="form.主体身份代码" />
            </a-form-model-item>

            <a-form-model-item label="注册号" prop="注册号">
                <a-input v-model="form.注册号" />
            </a-form-model-item>

            <a-form-model-item
                label="名称"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="名称"
            >
                <a-textarea v-model="form.名称" :rows="2" />
            </a-form-model-item>

            <a-form-model-item label="统一社会信用代码" prop="统一社会信用代码">
                <a-input v-model="form.统一社会信用代码" />
            </a-form-model-item>

            <a-form-model-item label="类型" prop="类型">
                <a-input v-model="form.类型" />
            </a-form-model-item>

            <a-form-model-item
                label="类型（中文名称）"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="类型名称"
            >
                <a-textarea v-model="form.类型名称" :rows="2" />
            </a-form-model-item>

            <a-form-model-item
                label="经营者"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="经营者"
            >
                <a-textarea v-model="form.经营者" :rows="1" />
            </a-form-model-item>

            <a-form-model-item
                label="经营场所"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="经营场所"
            >
                <a-textarea v-model="form.经营场所" :rows="2" />
            </a-form-model-item>

            <a-form-model-item
                label="经营范围"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="经营范围"
            >
                <a-textarea v-model="form.经营范围" :rows="3" />
            </a-form-model-item>

            <a-form-model-item label="组成形式" prop="组成形式">
                <a-input v-model="form.组成形式" />
            </a-form-model-item>

            <a-form-model-item label="登记机关" prop="登记机关">
                <a-input v-model="form.登记机关" />
            </a-form-model-item>

            <a-form-model-item
                label="组成形式（中文名称）"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="组成形式名称"
            >
                <a-textarea v-model="form.组成形式名称" :rows="3" />
            </a-form-model-item>

            <a-form-model-item
                label="登记机关（中文名称）"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="登记机关名称"
            >
                <a-textarea v-model="form.登记机关名称" :rows="3" />
            </a-form-model-item>

            <a-form-model-item label="登记状态" prop="登记状态">
                <a-input v-model="form.登记状态" />
            </a-form-model-item>

            <a-form-model-item label="注册日期" prop="注册日期">
                <a-date-picker
                    v-model="form.注册日期"
                    format="YYYY-MM-DD"
                    type="date"
                    placeholder="选择日期"
                    style="width:100%"
                />
            </a-form-model-item>

            <a-form-model-item
                label="登记状态（中文名称）"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="登记状态名称"
            >
                <a-textarea v-model="form.登记状态名称" :rows="3" />
            </a-form-model-item>

            <a-form-model-item label="核准日期" prop="核准日期">
                <a-date-picker
                    v-model="form.核准日期"
                    format="YYYY-MM-DD"
                    type="date"
                    placeholder="选择日期"
                    style="width:100%"
                />
            </a-form-model-item>

            <a-form-model-item label="吊销日期" prop="吊销日期">
                <a-date-picker
                    v-model="form.吊销日期"
                    format="YYYY-MM-DD"
                    type="date"
                    placeholder="选择日期"
                    style="width:100%"
                />
            </a-form-model-item>

            <a-form-model-item
                label="吊销原因"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="吊销原因"
            >
                <a-textarea v-model="form.吊销原因" :rows="2" />
            </a-form-model-item>

            <a-form-model-item label="经营地址经度" prop="经营地址经度">
                <a-input-number :max="180" :min="0" :step="0.000001" v-model="form.经营地址经度" style="width:100%" />
            </a-form-model-item>

            <a-form-model-item label="经营地址纬度" prop="经营地址纬度">
                <a-input-number :max="90" :min="0" :step="0.000001"  v-model="form.经营地址纬度" style="width:100%" />
            </a-form-model-item>

            <a-form-model-item
                label="联络员姓名"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="联络员姓名"
            >
                <a-textarea v-model="form.联络员姓名" :rows="1" />
            </a-form-model-item>

            <a-form-model-item
                label="联络员手机号码"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="联络员手机号码"
            >
                <a-textarea v-model="form.联络员手机号码" :rows="1" />
            </a-form-model-item>

            <a-form-model-item label="联络员身份证号码" prop="联络员身份证号码">
                <a-input v-model="form.联络员身份证号码" />
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
                主体身份代码: "",
                吊销原因: "",
                吊销日期: undefined,
                名称: "",
                核准日期: undefined,
                注册号: "",
                注册日期: undefined,
                登记机关: "",
                登记机关名称: "",
                登记状态: "",
                登记状态名称: "",
                类型: "",
                类型名称: "",
                组成形式: "",
                组成形式名称: "",
                经营地址纬度: "",
                经营地址经度: "",
                经营场所: "",
                经营者: "",
                经营范围: "",
                统一社会信用代码: "",
                联络员姓名: "",
                联络员手机号码: "",
                联络员身份证号码: "",
            },
            global,
            rules: {
                主体身份代码: [
                    {
                        required: true,
                        message: "请填写姓名",
                    },
                    {
                        max: 60,
                        message: "最长60字符",
                        trigger: "blur",
                    },
                ],
                注册号: [
                    {
                        max: 50,
                        message: "最长50个字符",
                    },
                ],
                统一社会信用代码: [
                    {
                        max: 18,
                        min: 18,
                        parrern: [global.expression.社会统一信用代码],
                        message: "请填写正确的统一社会信用代码",
                    },
                ],
                名称: [
                    {
                        required: true,
                        message: "请填写名称",
                    },
                    {
                        max: 300,
                        message: "最长300字符",
                    },
                ],
                类型: [
                    {
                        max: 20,
                        message: "最长20字符",
                    },
                ],
                类型名称: [
                    {
                        max: 400,
                        message: "最长400字符",
                    },
                ],
                经营者: [
                    {
                        required: true,
                        message: "请填写经营者",
                    },
                    {
                        max: 200,
                        message: "最长200字符",
                    },
                ],
                经营场所: [
                    {
                        required: true,
                        message: "请填写经营场所",
                    },
                    {
                        max: 200,
                        message: "最长200字符",
                    },
                ],
                经营范围: [
                    {
                        required: true,
                        message: "请填写经营范围",
                    },
                    {
                        max: 3000,
                        message: "最长3000字符",
                    },
                ],
                组成形式: [
                    {
                        max: 80,
                        message: "最长80字符",
                    },
                ],
                组成形式名称: [
                    {
                        max: 600,
                        message: "最长600字符",
                    },
                ],
                登记机关: [
                    {
                        required: true,
                        message: "请填写登记机关",
                    },
                    {
                        max: 80,
                        message: "最长80字符",
                    },
                ],
                登记机关名称: [
                    {
                        max: 600,
                        message: "最长600字符",
                    },
                ],
                登记状态: [
                    {
                        max: 80,
                        message: "最多80个字符",
                    },
                ],
                登记状态名称: [
                    {
                        max: 600,
                        message: "最多600个字符",
                    },
                ],
                注册日期: [
                    {
                        required: true,
                        message: "请选择注册日期",
                    },
                ],
                核准日期: [
                    {
                        required: false,
                        message: "请选择核准日期",
                    },
                ],
                吊销日期: [
                    {
                        required: false,
                        message: "请选择核吊销日期",
                    },
                ],
                吊销原因: [
                    {
                        max: 200,
                        message: "最多200个字符",
                    },
                ],
                经营地址经度: [
                    {
                        required: false,
                        message: "请选择证件有效期",
                    },
                ],
                经营地址纬度: [
                    {
                        required: false,
                        message: "请选择证件有效期",
                    },
                ],
                联络员姓名: [
                    {
                        max: 150,
                        message: "最长150字符",
                    },
                ],
                联络员身份证号码: [
                    {
                        min: 18,
                        max: 18,
                        parrern: [global.expression.身份证号],
                        message: "请填写正确的联络员身份证号码",
                    },
                ],
                联络员手机号码: [
                    {
                        max: 300,
                        message: "最长300字符",
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
                    主体身份代码: "",
                    吊销原因: "",
                    吊销日期: "",
                    名称: "",
                    核准日期: "",
                    注册号: "",
                    注册日期: "",
                    登记机关: "",
                    登记机关名称: "",
                    登记状态: "",
                    登记状态名称: "",
                    类型: "",
                    类型名称: "",
                    组成形式: "",
                    组成形式名称: "",
                    经营地址纬度: "",
                    经营地址经度: "",
                    经营场所: "",
                    经营者: "",
                    经营范围: "",
                    统一社会信用代码: "",
                    联络员姓名: "",
                    联络员手机号码: "",
                    联络员身份证号码: "",
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
                this.form.吊销日期 = moment(this.form.吊销日期).format(
                    "YYYY-MM-DD"
                );
                this.form.注册日期 = moment(this.form.注册日期).format(
                    "YYYY-MM-DD"
                );
                this.form.核准日期 = moment(this.form.核准日期).format(
                    "YYYY-MM-DD"
                );
                this.data = [this.form];
                console.log(this.data); // 12320100425800919F

                if (valid) {
                    console.log("新增食品!");
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
            this.$root.$emit("updataCLoseEmployed", "close关闭modal");
        },

        // 新增
        add() {
            this.axios
                .post("object/individual/insert", this.data)
                .then((res) => {
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
                .post("object/individual/update", this.data[0])
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
        this.form.吊销日期 = moment(this.form.吊销日期).format("YYYY-MM-DD");
        this.form.注册日期 = moment(this.form.注册日期).format("YYYY-MM-DD");
        this.form.核准日期 = moment(this.form.核准日期).format("YYYY-MM-DD");
    },
};
</script>
<style lang="scss" scoped>
@import "../../edit";
</style>