<template>
    <div class="content">
        <a-form-model :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol" class="form" ref="ruleForm">
            <a-form-model-item label="注册证编号" prop="注册证编号">
                <a-input v-model="form.注册证编号" />
            </a-form-model-item>
            <a-form-model-item label="注册人名称" prop="注册人名称">
                <a-input v-model="form.注册人名称" />
            </a-form-model-item>
            <a-form-model-item label="注册人住所" prop="注册人住所" class="blockRow" :labelCol="blockRowLable" :wrapperCol="blockRowWrapper">
                <a-textarea v-model="form.注册人住所" :rows="2" />
            </a-form-model-item>
            <a-form-model-item label="统一社会信用代码" prop="统一社会信用代码">
                <a-input v-model="form.统一社会信用代码" />
            </a-form-model-item>
            <a-form-model-item label="代理人名称" prop="代理人名称">
                <a-input v-model="form.代理人名称" />
            </a-form-model-item>
            <a-form-model-item label="代理人住所" prop="代理人住所" class="blockRow" :labelCol="blockRowLable" :wrapperCol="blockRowWrapper">
                <a-input v-model="form.代理人住所" />
            </a-form-model-item>
            <a-form-model-item label="生产地址" prop="生产地址" class="blockRow" :labelCol="blockRowLable" :wrapperCol="blockRowWrapper">
                <a-textarea v-model="form.生产地址" :rows="2" />
            </a-form-model-item>
            <a-form-model-item label="产品名称" prop="产品名称" class="blockRow" :labelCol="blockRowLable" :wrapperCol="blockRowWrapper">
                <a-input v-model="form.产品名称" />
            </a-form-model-item>
            <a-form-model-item label="型号规格" prop="型号规格" class="blockRow" :labelCol="blockRowLable" :wrapperCol="blockRowWrapper">
                <a-input v-model="form.型号规格" />
            </a-form-model-item>
            <a-form-model-item label="产品标准" prop="产品标准" class="blockRow" :labelCol="blockRowLable" :wrapperCol="blockRowWrapper">
                <a-input v-model="form.产品标准" />
            </a-form-model-item>
            <a-form-model-item label="批准日期" prop="批准日期">
                <a-date-picker v-model="form.批准日期" format="YYYY-MM-DD" type="date" placeholder="选择日期" style="width:100%" />
            </a-form-model-item>
            <a-form-model-item label="有效期至" prop="有效期至">
                <a-date-picker v-model="form.有效期至" format="YYYY-MM-DD" type="date" placeholder="选择日期" style="width:100%" />
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
                注册证编号: "",
                统一社会信用代码: "", // 12320100425800919F 统一社会信用代码
                注册人名称: "",
                注册人住所: "",
                代理人名称: "",
                代理人住所: "",
                生产地址: "",
                产品名称: "",
                型号规格: "",
                产品标准: "",
                批准日期: undefined,
                有效期至: undefined,
            },
            global,
            rules: {
                注册证编号: [
                    {
                        required: true,
                        message: "请填写注册证编号",
                    },
                    {
                        max: 40,
                        message: "最长40字符",
                        trigger: "blur",
                    },
                ],
                注册人名称: [
                    {
                        required: true,
                        message: "请填写注册人名称",
                    },
                    {
                        max: 50,
                        message: "最长50个字符",
                    },
                ],
                注册人住所: [
                    {
                        required: true,
                        message: "请填写注册人住所",
                    },
                    {
                        max: 200,
                        message: "最多200字符",
                    },
                ],
                统一社会信用代码: [
                    // {
                    //     required: true,
                    //     message: "请填写单位统一社会信用代码",
                    // },
                    {
                        min: 18,
                        max: 18,
                        pattern: [global.expression.社会统一信用代码],
                        message: "请填写正确的社会统一信用代码",
                        trigger: "blur",
                    },
                ],
                代理人名称: [
                    {
                        max: 50,
                        message: "最长50个字符",
                        trigger: "blur",
                    },
                ],
                代理人住所: [
                    {
                        max: 100,
                        message: "最长100个字符",
                        trigger: "blur",
                    },
                ],
                生产地址: [
                    {
                        max: 200,
                        message: "最长200个字符",
                        trigger: "blur",
                    },
                ],
                产品名称: [
                    {
                        required: true,
                        message: "请填写产品名称",
                    },
                    {
                        max: 100,
                        message: "最长100个字符",
                        trigger: "blur",
                    },
                ],
                型号规格: [
                    {
                        required: true,
                        message: "请填写型号规格",
                    },
                    // {
                    //     max: 100,
                    //     message: "最长100个字符",
                    //     trigger: "blur",
                    // },
                ],
                产品标准: [
                    {
                        required: true,
                        message: "请填写产品标准",
                    },
                    {
                        max: 100,
                        message: "最长100个字符",
                        trigger: "blur",
                    },
                ],
                批准日期: [
                    {
                        required: true,
                        message: "请选择批准日期",
                    },
                ],
                有效期至: [
                    {
                        required: true,
                        message: "请选择有效期至",
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
                    注册证编号: "",
                    注册人住所: "",
                    注册人名称: "",
                    统一社会信用代码: "",
                    代理人名称: "",
                    代理人住所: "",
                    生产地址: "",
                    产品名称: "",
                    型号规格: "",
                    产品标准: "",
                    批准日期: undefined,
                    有效期至: undefined,
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
                this.form.批准日期 = moment(this.form.批准日期).format(
                    "YYYY-MM-DD"
                );
                this.form.有效期至 = moment(this.form.有效期至).format(
                    "YYYY-MM-DD"
                );

                // console.log(this.form.投入使用开始时间);
                this.data = [this.form];
                console.log(this.data); //12320100425800919F

                if (valid) {
                    console.log("新增医疗器械!");
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
            this.$root.$emit("updataCLoseInstrument", "close关闭modal");
        },

        // 新增
        add() {
            this.axios.post("special/instrument/insert", this.data).then((res) => {
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
            this.axios.post("special/instrument/update", this.data[0]).then((res) => {
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
    },
};
</script>
<style lang="scss" scoped>
@import "../../edit";
</style>