<template>
    <div class="content">
        <a-form-model
            :model="form"
            class="form"
            ref="ruleForm"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
        >
            <a-form-model-item ref="jgsxmlbm" label="监管事项目录编码" prop="监管事项目录编码">
                <div>{{ form.监管事项目录编码 }}</div>
            </a-form-model-item>

            <a-form-model-item label="行为编号" prop="行为编号" ref="xwbh">
                <div>{{ form.行为编号 }}</div>
            </a-form-model-item>

            <a-form-model-item
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                label="行为名称"
                prop="行为名称"
                ref="xwmc"
            >
                <div>{{ form.行为名称 }}</div>
            </a-form-model-item>

            <a-form-model-item
                label="检查行为编号"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="检查行为编号"
                ref="jcxwbh"
            >
                <div>{{ form.检查行为编号 }}</div>
            </a-form-model-item>

            <a-form-model-item label="监管对象类型">
                <div>{{ form.监管行为监管对象类型 | dictionary('监管行为监管对象类型') }}</div>
            </a-form-model-item>

            <a-form-model-item label="监管措施">
                <div>{{ form.监管措施 }}</div>
            </a-form-model-item>

            <a-form-model-item
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                label="监管对象"
                prop="监管对象"
                ref="jgdx"
            >
                <div>{{ form.监管对象 }}</div>
            </a-form-model-item>

            <a-form-model-item label="事项来源" validate-status="validating">
                <div>{{ form.事项来源 }}</div>
            </a-form-model-item>

            <a-form-model-item label="实施机构编码" validate-status="validating">
                <div>{{ form.实施机构编码 }}</div>
            </a-form-model-item>

            <a-form-model-item
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                label="实施机构"
            >
                <div>{{ form.实施机构 }}</div>
            </a-form-model-item>

            <a-form-model-item label="受委托部门编码" validate-status="validating">
                <div>{{ form.受委托部门编码 }}</div>
            </a-form-model-item>

            <a-form-model-item label="行政区划代码" prop="行政区划代码" ref="xzqhdm">
                <div>{{ form.行政区划代码 | dictionary('行政区划代码') }}</div>
            </a-form-model-item>

            <a-form-model-item
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                label="受委托部门"
            >
                <div>{{ form.受委托部门 }}</div>
            </a-form-model-item>

            <a-form-model-item label="行政相对人（单位/个人）" prop="行政相对人" ref="xzxdr">
                <div>{{ form['行政相对人（单位/个人）'] }}</div>
            </a-form-model-item>

            <a-form-model-item label="行政相对人性质" prop="行政相对人性质" ref="xzxdrxz">
                <div>{{ form.行政相对人性质 | dictionary('行政相对人性质') }}</div>
            </a-form-model-item>

            <a-form-model-item label="行政相对人证件类型" prop="行政相对人证件类型" ref="xzxdrzjlx">
                <div>{{ form.行政相对人证件类型 | dictionary('证件类型') }}</div>
            </a-form-model-item>

            <a-form-model-item label="行政相对人(单位/个人)编码" prop="行政相对人编码" ref="xzxdrbm">
                <div>{{ form['行政相对人(单位/个人)编码'] }}</div>
            </a-form-model-item>

            <a-form-model-item
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                label="注册地址"
            >
                <div>{{ form.注册地址 }}</div>
            </a-form-model-item>

            <a-form-model-item
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                label="经营地址"
                validate-status="validating"
            >
                <div>{{ form.经营地址 }}</div>
            </a-form-model-item>

            <a-form-model-item
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                label="结案情况"
                porp="结案情况"
                ref="jaqk"
            >
                <div>{{ form.结案情况 }}</div>
            </a-form-model-item>

            <a-config-provider :locale="zh_CN">
                <a-form-model-item label="开始时间" validate-status="validating">
                    <div>{{ form.开始时间 }}</div>
                </a-form-model-item>
            </a-config-provider>

            <a-config-provider :locale="zh_CN">
                <a-form-model-item label="结束时间" validate-status="validating">
                    <div>{{ form.结束时间 }}</div>
                </a-form-model-item>
            </a-config-provider>

            <a-config-provider :locale="zh_CN">
                <a-form-model-item label="报送时间" validate-status="validating">
                    <div>{{ form.报送时间 }}</div>
                </a-form-model-item>
            </a-config-provider>

            <a-form-model-item label="报送人员" validate-status="validating">
                <div>{{ form.报送人员 }}</div>
            </a-form-model-item>
        </a-form-model>
    </div>
</template>
<script>
import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";
import moment from "moment";
export default {
    data() {
        return {
            zh_CN,
            labelCol: { span: 9 },
            wrapperCol: { span: 13 },
            blockRowLable: { span: 4 },
            blockRowWrapper: { span: 19 },
            form: {},

            jgdxlx: [
                { key: "1", value: "企业、个体户、农专社" },
                { key: "2", value: "自然人" },
                { key: "3", value: "特种设备" },
                { key: "4", value: "特定产品（食品）" },
                { key: "5", value: "特定产品（三种特殊食品）" },
                { key: "6", value: "特定产品（药品）" },
                { key: "7", value: "特定产品（化妆品）" },
                { key: "8", value: "特定产品（医疗器械）" },
                { key: "9", value: "场地场所" },
                { key: "10", value: "非企业" },
                {
                    key: "11",
                    value: "通过《7.6监管对象信息要素表》上传的其他类型",
                },
            ],
        };
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
    },
    methods: {
        closeModal() {
            this.$root.$emit("updataCLose", "close关闭modal");
        },
    },
    mounted() {
        this.form = this.item;
        console.log(this.form);
    },
};
</script>
<style lang="scss" scoped>
@import "../../detail";
</style>