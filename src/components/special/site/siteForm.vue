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
            <a-form-model-item
                label="场所场地"
                prop="场所场地"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
            >
                <a-textarea v-model="form.场所场地" :rows="2" />
            </a-form-model-item>

            <a-form-model-item label="所在地区" prop="所在地区">
                <a-input v-model="form.所在地区" />
            </a-form-model-item>

            <a-form-model-item label="所在地区行政区划代码" prop="所在地区行政区划代码">
                <a-select v-model="form.所在地区行政区划代码" placeholder="请选择行政区划代码">
                    <a-select-option
                        v-for="(item,index) in dicFilter('行政区划代码')"
                        :key="index"
                        :value="item.编号"
                    >{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>

            <a-form-model-item label="责任单位" prop="责任单位">
                <a-input v-model="form.责任单位" />
            </a-form-model-item>

            <a-form-model-item label="责任单位统一社会信用代码" prop="责任单位统一社会信用代码">
                <a-input v-model="form.责任单位统一社会信用代码" />
            </a-form-model-item>

            <a-form-model-item label="责任人" prop="责任人">
                <a-input v-model="form.责任人" />
            </a-form-model-item>

            <a-form-model-item label="责任人证件类型" prop="责任人证件类型">
                <a-select v-model="form.责任人证件类型" placeholder="请选择责任人证件类型">
                    <a-select-option v-for="(item) in dicFilter('证件类型')" :key="item.编号">{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>

            <a-form-model-item label="责任人证件编码" prop="责任人证件编码">
                <a-input v-model="form.责任人证件编码" />
            </a-form-model-item>

            <a-form-model-item label="联系电话" prop="联系电话">
                <a-input v-model="form.联系电话" />
            </a-form-model-item>

            <a-form-model-item
                label="场所规模"
                prop="场所规模"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
            >
                <a-textarea v-model="form.场所规模" :rows="2" />
            </a-form-model-item>

            <a-form-model-item label="场所用途" prop="场所用途">
                <a-input v-model="form.场所用途" />
            </a-form-model-item>

            <a-form-model-item label="投入使用开始时间" prop="投入使用开始时间">
                <a-date-picker
                    v-model="form.投入使用开始时间"
                    format="YYYY-MM-DD"
                    type="date"
                    placeholder="选择日期"
                    style="width:100%"
                />
            </a-form-model-item>

            <a-form-model-item label="使用寿命" prop="使用寿命">
                <a-input v-model="form.使用寿命" />
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
                使用寿命: "",
                场所场地: "",
                场所用途: "",
                场所规模: "",
                所在地区: "",
                所在地区行政区划代码: "",
                投入使用开始时间: undefined,
                联系电话: "",
                责任人: "",
                责任人证件类型: "",
                责任人证件编码: "",
                责任单位: "",
                责任单位统一社会信用代码: "", // 12320100425800919F 统一社会信用代码
            },
            global,
            rules: {
                场所场地: [
                    {
                        required: true,
                        message: "请填写场所场地",
                    },
                    {
                        max: 300,
                        message: "最长300字符",
                        trigger: "blur",
                    },
                ],
                所在地区: [
                    {
                        required: true,
                        message: "请填写所在地区",
                    },
                    {
                        max: 30,
                        message: "最长30个字符",
                    },
                ],
                所在地区行政区划代码: [
                    {
                        required: true,
                        message: "请选择所在地区行政区划代码",
                    },
                ],
                责任单位: [
                    {
                        required: true,
                        message: "请填写责任单位",
                    },
                    {
                        max: 50,
                        message: "最多50字符",
                    },
                ],
                责任单位统一社会信用代码: [
                    {
                        required: true,
                        message: "请填写单位统一社会信用代码",
                    },
                    {
                        min: 18,
                        max:18,
                        pattern: [global.expression.社会统一信用代码],
                        message: "请填写正确的社会统一信用代码",
                        trigger: "blur",
                    },
                ],
                责任人: [
                    {
                        required: true,
                        message: "请填写责任人",
                    },
                    {
                        max: 30,
                        message: "最多30字符",
                    },
                ],
                责任人证件类型: [
                    {
                        required: true,
                        message: "请选择责任人证件类型",
                    },
                ],
                责任人证件编码: [
                    {
                        required: true,
                        message: "请填写责任人证件编码",
                    },
                    {
                        max: 20,
                        message: "最多20字符",
                    },
                ],
                联系电话: [
                    {
                        required: true,
                        message: "请填写联系电话",
                    },
                    {
                        max: 100,
                        message: "最多100字符",
                    },
                ],
                场所用途: [
                    {
                        required: true,
                        message: "请填写场所用途",
                    },
                    {
                        max: 50,
                        message: "最多50字符",
                    },
                ],
                场所规模: [
                    {
                        required: true,
                        message: "请填写场所规模",
                    },
                    {
                        max: 200,
                        message: "最多200字符",
                    },
                ],
                投入使用开始时间: [
                    {
                        required: true,
                        message: "请选择投入使用开始时间",
                    },
                    // {
                    //     min: 1,
                    //     message: "请选择投入使用开始时间",
                    // },
                ],
                使用寿命: [
                    {
                        required: true,
                        message: "请填写使用寿命",
                    },
                    {
                        max: 10,
                        message: "最多10个字符",
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
                    使用寿命: "",
                    场所场地: "",
                    场所用途: "",
                    场所规模: "",
                    所在地区: "",
                    所在地区行政区划代码: "",
                    投入使用开始时间: undefined,
                    联系电话: "",
                    责任人: "",
                    责任人证件类型: "",
                    责任人证件编码: "",
                    责任单位: "",
                    责任单位统一社会信用代码: "",
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
                this.form.投入使用开始时间 = moment(
                    this.form.投入使用开始时间
                ).format("YYYY-MM-DD");

                // console.log(this.form.投入使用开始时间);
                this.data = [this.form];
                console.log(this.data); //12320100425800919F

                if (valid) {
                    console.log("新增场所场地!");
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
            this.$root.$emit("updataCLoseSite", "close关闭modal");
        },

        // 新增
        add() {
            this.axios.post("special/site/insert", this.data).then((res) => {
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
            this.axios.post("special/site/update", this.data[0]).then((res) => {
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