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
                label="监管对象唯一编码"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="监管对象唯一编码"
            >
                <a-textarea v-model="form.监管对象唯一编码" :rows="1" />
            </a-form-model-item>

            <a-form-model-item
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                label="监管名称"
                prop="监管名称"
            >
                <a-textarea v-model="form.监管名称" :rows="1" />
            </a-form-model-item>

            <a-form-model-item label="监管对象大类" prop="监管对象大类">
                <a-input v-model="form.监管对象大类" />
            </a-form-model-item>

            <a-form-model-item label="监管对象子类" prop="监管对象子类">
                <a-input v-model="form.监管对象子类" />
            </a-form-model-item>

            <a-form-model-item
                label="监管对象大类(中文名称)"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="监管对象大类名称"
            >
                <a-input v-model="form['监管对象大类名称']" />
            </a-form-model-item>

            <a-form-model-item
                label="监管对象子类(中文名称)"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="监管对象子类名称"
            >
                <a-input v-model="form['监管对象子类名称']" />
            </a-form-model-item>

            <a-form-model-item
                class="sp"
                :labelCol="{span: 8}"
                :wrapperCol="{span: 15}"
                label="行政相对人统一社会信用代码/身份证号"
                prop="行政相对人统一社会信用代码"
            >
                <a-input v-model="form['行政相对人统一社会信用代码']" />
            </a-form-model-item>

            <a-form-model-item
                label="注册地址"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="注册地址"
            >
                <a-textarea v-model="form['注册地址']" :rows="2" />
            </a-form-model-item>

            <a-form-model-item
                label="经营地址"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="经营地址"
            >
                <a-textarea v-model="form['经营地址']" :rows="2" />
            </a-form-model-item>

            <a-form-model-item label="所在地区行政区划代码" prop="所在地区行政区划代码">
                <a-select v-model="form.所在地区行政区划代码" placeholder="所在地区行政区划代码">
                    <a-select-option
                        v-for="(item,index) in dicFilter('行政区划代码')"
                        :key="index"
                        :value="item.编号"
                    >{{ item.值 }}</a-select-option>
                </a-select>
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
                所在地区行政区划代码: "",
                注册地址: "",
                监管名称: "",
                监管对象唯一编码: "",
                监管对象大类: "",
                监管对象大类名称: "",
                监管对象子类: "",
                监管对象子类名称: "",
                经营地址: "",
                行政相对人统一社会信用代码: "",
            },
            global,
            rules: {
                监管对象唯一编码: [
                    {
                        required: true,
                        message: "请填写监管对象唯一编码",
                    },
                    {
                        max: 200,
                        message: "最长200字符",
                        trigger: "blur",
                    },
                ],
                监管名称: [
                    {
                        required: true,
                        message: "请填写监管名称",
                    },
                    {
                        max: 200,
                        message: "最长200个字符",
                    },
                ],
                监管对象大类: [
                    {
                        required: true,
                        message: "请填写类别名称",
                    },
                    {
                        max: 100,
                        message: "最长100个字符",
                    },
                ],
                监管对象大类名称: [
                    {
                        required: true,
                        message: "请填写监管对象大类（中文名称）",
                    },
                    {
                        max: 600,
                        message: "最长600个字符",
                    },
                ],
                监管对象子类: [
                    {
                        max: 100,
                        message: "最长100个字符",
                    },
                ],
                监管对象子类名称: [
                    {
                        max: 600,
                        message: "最长600个字符",
                    },
                ],
                行政相对人统一社会信用代码: [
                    {
                        required: true,
                        message: "行政相对人统一社会信用代码/身份证号",
                    },
                    {
                        min: 18,
                        max: 18,
                        pattern: [
                            global.expression.社会统一信用代码,
                            global.expression.身份证号,
                        ],
                        message:
                            "请输入正确的行政相对人统一社会信用代码/身份证号",
                        trigger: "blur",
                    },
                ],
                注册地址: [
                    {
                        max: 600,
                        message: "最长600个字符",
                    },
                ],
                经营地址: [
                    {
                        max: 600,
                        message: "最长600个字符",
                    },
                ],
                所在地区行政区划代码: [
                    {
                        required: true,
                        message: "所在地区行政区划代码",
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
                    所在地区行政区划代码: "",
                    注册地址: "",
                    监管名称: "",
                    监管对象唯一编码: "",
                    监管对象大类: "",
                    监管对象大类名称: "",
                    监管对象子类: "",
                    监管对象子类名称: "",
                    经营地址: "",
                    行政相对人统一社会信用代码: "",
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
            this.$root.$emit("updataCLoseObjectElement", "close关闭modal");
        },

        // 新增
        add() {
            this.axios.post("special/element/insert", this.data).then((res) => {
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
                .post("special/element/update", this.data[0])
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
    },
};
</script>
<style lang="scss" scoped>
@import "../../edit";
</style>