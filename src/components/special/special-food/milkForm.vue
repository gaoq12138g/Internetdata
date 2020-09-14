<template>
    <div class="content">
        <a-form-model :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol" class="form" ref="ruleForm">
            <a-form-model-item label="产品名称" prop="产品名称">
                <a-input v-model="form.产品名称" />
            </a-form-model-item>
            <a-form-model-item label="生产企业名称" prop="生产企业名称">
                <a-input v-model="form.生产企业名称" />
            </a-form-model-item>
            <a-form-model-item label="统一社会信用代码" prop="生产企业统一社会信用代码">
                <a-input v-model="form.生产企业统一社会信用代码" />
            </a-form-model-item>
            <a-form-model-item label="生产企业行政区划代码" prop="生产企业行政区划代码">
                <a-select v-model="form.生产企业行政区划代码" placeholder="请选择生产企业行政区划代码">
                    <a-select-option v-for="(item, index) in dicFilter('行政区划代码')" :key="index" :value="item.编号">{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>
            <a-form-model-item label="食品生产许可证编号" prop="食品生产许可证编号">
                <a-input v-model="form.食品生产许可证编号" />
            </a-form-model-item>
            <a-form-model-item label="注册号或备案号" prop="注册号或备案号">
                <a-input v-model="form.注册号或备案号"/>
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
                产品名称: "",
                生产企业名称: "",
                生产企业统一社会信用代码: "", // 12320100425800919F 统一社会信用代码
                生产企业行政区划代码: "",
                食品生产许可证编号: "",
                注册号或备案号: "",
            },
            global,
            rules: {
                产品名称: [
                    {
                        required: true,
                        message: "请填写注册证编号",
                    },
                    {
                        max: 50,
                        message: "最长50字符",
                        trigger: "blur",
                    },
                ],
                生产企业名称: [
                    {
                        required: true,
                        message: "请填写生产企业名称",
                    },
                    {
                        max: 50,
                        message: "最长50个字符",
                    },
                ],
                生产企业统一社会信用代码: [
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
                生产企业行政区划代码: [
                    {
                        required: true,
                        message: "请选择生产企业区划代码",
                    },
                ],
                食品生产许可证编号: [
                    {
                        required: true,
                        message: "请填写食品生产许可证编号",
                    },
                    {
                        max: 20,
                        message: "最长20个字符",
                        trigger: "blur",
                    },
                ],
                注册号或备案号: [
                    {
                        max: 20,
                        message: "最长20个字符",
                        trigger: "blur",
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
                    产品名称: "",
                    生产企业名称: "",
                    生产企业统一社会信用代码: "",
                    生产企业行政区划代码: "",
                    食品生产许可证编号: "",
                    注册号或备案号: "",
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
            this.$refs.ruleForm.validate((valid) => {
                this.data = [this.form];
                // console.log(this.data); //12320100425800919F
                if (valid) {
                    console.log("新增奶粉!");
                    if (this.types == "new") {
                        // console.log("新增");
                        this.add();
                    } else if (this.types == "modify") {
                        // console.log("修改");
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
            this.$root.$emit("updataCLoseMilk", "close关闭modal");
        },

        // 新增
        add() {
            this.axios.post("special/milk/insert", this.data).then((res) => {
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
            this.axios.post("special/milk/update", this.data[0]).then((res) => {
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