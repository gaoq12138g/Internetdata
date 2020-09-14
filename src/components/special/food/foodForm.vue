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
            <a-form-model-item label="产品标准代号" prop="产品标准代号">
                <a-input v-model="form.产品标准代号" />
            </a-form-model-item>

            <a-form-model-item label="保质期" prop="保质期">
                <a-input v-model="form.保质期" />
            </a-form-model-item>

            <a-form-model-item
                label="储存条件"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="储存条件"
            >
                <a-textarea v-model="form.储存条件" />
            </a-form-model-item>

            <a-form-model-item label="净含量" prop="净含量">
                <a-input v-model="form.净含量" />
            </a-form-model-item>

            <a-form-model-item label="食品添加剂类别" prop="食品添加剂类别">
                <a-input v-model="form.食品添加剂类别" />
            </a-form-model-item>

            <a-form-model-item
                label="成分或者配料表"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="成分或者配料表"
            >
                <a-textarea v-model="form.成分或者配料表" />
            </a-form-model-item>

            <a-form-model-item
                class="sp"
                :labelCol="{span: 8}"
                :wrapperCol="{span: 15}"
                label="所使用的食品添加剂在国家标准中的通用名称"
                prop="所使用的食品添加剂在国家标准中的通用名称"
            >
                <a-input v-model="form.所使用的食品添加剂在国家标准中的通用名称" />
            </a-form-model-item>

            <a-form-model-item label="生产企业名称" prop="生产企业名称">
                <a-input v-model="form.生产企业名称" />
            </a-form-model-item>

            <a-form-model-item label="生产企业统一社会信用代码" prop="生产企业统一社会信用代码">
                <a-input v-model="form.生产企业统一社会信用代码" />
            </a-form-model-item>

            <a-form-model-item label="生产企业行政区划代码" prop="生产企业行政区划代码">
                <a-select v-model="form.生产企业行政区划代码" placeholder="生产企业行政区划代码">
                    <a-select-option
                        v-for="(item,index) in dicFilter('行政区划代码')"
                        :key="index"
                        :value="item.编号"
                    >{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>

            <a-form-model-item label="生产日期" prop="生产日期">
                <a-date-picker
                    v-model="form.生产日期"
                    format="YYYY-MM-DD"
                    type="date"
                    placeholder="选择日期"
                    style="width:100%"
                />
            </a-form-model-item>

            <a-form-model-item label="生产许可证编号" prop="生产许可证编号">
                <a-input v-model="form.生产许可证编号" />
            </a-form-model-item>

            <a-form-model-item label="类别名称" prop="类别名称">
                <a-input v-model="form.类别名称" />
            </a-form-model-item>

            <a-form-model-item label="规格" prop="规格">
                <a-input v-model="form.规格" />
            </a-form-model-item>

            <a-form-model-item label="食品" prop="食品">
                <a-input v-model="form.食品" />
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
                产品标准代号: "",
                保质期: "",
                储存条件: "",
                净含量: "",
                成分或者配料表: "",
                所使用的食品添加剂在国家标准中的通用名称: "",
                生产企业名称: "",
                生产企业统一社会信用代码: "",
                生产企业行政区划代码: "",
                生产日期: "",
                生产许可证编号: "",
                类别名称: "",
                规格: "",
                食品: "",
                食品添加剂类别: "",
            },
            global,
            rules: {
                食品: [
                    {
                        required: true,
                        message: "请填写视频",
                    },
                    {
                        max: 40,
                        message: "最长40字符",
                        trigger: "blur",
                    },
                ],
                食品添加剂类别: [
                    {
                        required: true,
                        message: "请填写食品添加剂类别",
                    },
                    {
                        max: 35,
                        message: "最长35个字符",
                    },
                ],
                类别名称: [
                    {
                        required: true,
                        message: "请填写类别名称",
                    },
                    {
                        max: 50,
                        message: "最长50个字符",
                    },
                ],
                生产企业名称: [
                    {
                        required: true,
                        message: "请填生产企业名称",
                    },
                    {
                        max: 50,
                        message: "最多50字符",
                    },
                ],
                生产企业统一社会信用代码: [
                    {
                        required: true,
                        message: "请填写生产企业统一社会信用代码",
                    },
                    {
                        min: 18,
                        max: 18,
                        pattern: [global.expression.社会统一信用代码],
                        message: "请填写正确的社会统一信用代码",
                        trigger: "blur",
                    },
                ],
                生产企业行政区划代码: [
                    {
                        required: false,
                        // message: "请选择生产企业行政区划代码",
                    },
                ],
                规格: [
                    {
                        required: true,
                        message: "请选择责任人证件类型",
                    },
                    {
                        max: 20,
                        message: "最多20字符",
                    },
                ],
                净含量: [
                    {
                        required: true,
                        message: "请填写净含量",
                    },
                    {
                        max: 15,
                        message: "最多15字符",
                    },
                ],
                生产日期: [
                    {
                        required: true,
                        message: "请选择生产日期",
                    },
                ],
                成分或者配料表: [
                    {
                        required: true,
                        message: "请填写成分或者配料表",
                    },
                    {
                        max: 100,
                        message: "最多100字符",
                    },
                ],
                保质期: [
                    {
                        required: true,
                        message: "请填写保质期",
                    },
                    {
                        max: 10,
                        message: "最多10字符",
                    },
                ],
                产品标准代号: [
                    {
                        max: 50,
                        message: "最多50字符",
                    },
                ],
                储存条件: [
                    {
                        required: true,
                        message: "请填写储存条件",
                    },
                    {
                        max: 100,
                        message: "最多100个字符",
                    },
                ],
                所使用的食品添加剂在国家标准中的通用名称: [
                    {
                        required: true,
                        message:
                            "请填写所使用的食品添加剂在国家标准中的通用名称",
                    },
                    {
                        max: 50,
                        message: "最多50个字符",
                    },
                ],
                生产许可证编号: [
                    {
                        required: true,
                        message: "请填写生产许可证编号",
                    },
                    {
                        max: 40,
                        message: "最多40个字符",
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
                    产品标准代号: "",
                    保质期: "",
                    储存条件: "",
                    净含量: "",
                    成分或者配料表: "",
                    所使用的食品添加剂在国家标准中的通用名称: "",
                    生产企业名称: "",
                    生产企业统一社会信用代码: "",
                    生产企业行政区划代码: "",
                    生产日期: "",
                    生产许可证编号: "",
                    类别名称: "",
                    规格: "",
                    食品: "",
                    食品添加剂类别: "",
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
                this.form.生产日期 = moment(this.form.生产日期).format(
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
            this.$root.$emit("updataCLosefood", "close关闭modal");
        },

        // 新增
        add() {
            this.axios.post("special/food/insert", this.data).then((res) => {
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
            this.axios.post("special/food/update", this.data[0]).then((res) => {
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