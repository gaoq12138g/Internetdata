<template>
    <div class="content">
        <a-form-model
            :model="form"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
            ref="ruleForm"
            class="form"
        >
            <a-form-model-item ref="jgsxmlbm" label="监管事项目录编码" prop="监管事项目录编码">
                <div>{{ form.监管事项目录编码 }}</div>
            </a-form-model-item>

            <a-form-model-item label="处罚行为编号" prop="处罚行为编号" ref="cfxwbh">
                <div>{{ form.处罚行为编号 }}</div>
            </a-form-model-item>

            <a-form-model-item
                label="处罚行为名称"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                class="blockRow"
                prop="处罚行为名称"
                ref="cfxwmc"
            >
                <div>{{ form.处罚行为名称 }}</div>
            </a-form-model-item>

            <a-form-model-item
                label="实施机构"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="实施机构"
                ref="ssjg"
            >
                <div>{{ form.实施机构 }}</div>
            </a-form-model-item>

            <a-form-model-item label="受委托部门编码">
                <div>{{ form.受委托部门编码 }}</div>
            </a-form-model-item>

            <a-form-model-item label="实施机构编码">
                <div>{{ form.实施机构编码 }}</div>
            </a-form-model-item>

            <a-form-model-item
                label="受委托部门"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
            >
                <div>{{ form.受委托部门 }}</div>
            </a-form-model-item>

            <a-form-model-item label="监管对象类型">
                <div>{{ form.监管行为监管对象类型 | dictionary('监管行为监管对象类型') }}</div>
            </a-form-model-item>

            <a-form-model-item label="处罚立案时间">
                <div>{{ form.处罚立案时间 }}</div>
            </a-form-model-item>

            <a-form-model-item
                label="监管对象"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                ref="jgdx"
                prop="监管对象"
            >
                <div>{{ form.监管对象 }}</div>
            </a-form-model-item>

            <a-form-model-item label="案件来源" ref="ajly" prop="案件来源">
                <div>{{ form.案件来源 | dictionary('案件来源') }}</div>
            </a-form-model-item>

            <a-form-model-item label="检查行为编号" ref="jcxwbh" prop="检查行为编号">
                <div>{{ form.检查行为编号 }}</div>
            </a-form-model-item>

            <a-form-model-item label="行政相对人(单位/个人)" prop="行政相对人" ref="xzxdr">
                <div>{{ form.行政相对人 }}</div>
            </a-form-model-item>

            <a-form-model-item label="是否重大案件">
                <div>{{ form.是否重大案件 }}</div>
            </a-form-model-item>

            <a-form-model-item label="行政相对人性质" prop="行政相对人性质" ref="xzxdrxz">
                <div>{{ form.行政相对人性质 | dictionary('行政相对人性质') }}</div>
            </a-form-model-item>

            <a-form-model-item label="行政相对人证件类型" prop="行政相对人证件类型" ref="xzxdrzjlx">
                <div>{{ form.行政相对人证件类型 | dictionary('证件类型') }}</div>
            </a-form-model-item>

            <a-form-model-item label="行政相对人(单位/个人)编码" prop="行政相对人编码" ref="xzxdrbm">
                <div>{{ form.行政相对人编码 }}</div>
            </a-form-model-item>

            <a-form-model-item label="行政诉讼" prop="行政诉讼" ref="xzss">
                <div>{{ form.行政诉讼 | dictionary('行政诉讼') }}</div>
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
            >
                <div>{{ form.经营地址 }}</div>
            </a-form-model-item>

            <a-form-model-item
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                label="违法事实"
                prop="违法事实"
                ref="wfss"
            >
                <div>{{ form.违法事实 }}</div>
            </a-form-model-item>

            <a-form-model-item
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                label="处罚依据"
                prop="处罚依据"
                ref="cfyj"
            >
                <div>{{ form.处罚依据 }}</div>
            </a-form-model-item>

            <a-form-model-item label="处罚程序" prop="处罚程序" ref="cfcx">
                <div>{{ form.处罚程序 | dictionary('处罚程序') }}</div>
            </a-form-model-item>

            <a-form-model-item label="行政区划代码" prop="行政区划代码" ref="xzqhdm">
                <div>{{ form.行政区划代码 | dictionary('行政区划代码') }}</div>
            </a-form-model-item>

            <a-form-model-item label="是否听证" prop="是否听证" ref="sftz">
                <div>{{ form.是否听证 }}</div>
            </a-form-model-item>

            <a-form-model-item label="是否涉刑案件" ref="sfsxaj">
                <div>{{ form.是否涉刑案件 }}</div>
            </a-form-model-item>

            <a-form-model-item label="是否法制审核">
                <div>{{ form.是否法制审核 }}</div>
            </a-form-model-item>

            <a-form-model-item label="法制审核日期">
                <div>{{ form.法制审核日期 }}</div>
            </a-form-model-item>

            <a-form-model-item
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                label="法制审核意见"
            >
                <div>{{ form.法制审核意见 }}</div>
            </a-form-model-item>

            <a-form-model-item label="是否集体讨论">
                <div>{{ form.是否集体讨论 }}</div>
            </a-form-model-item>

            <a-form-model-item label="集体讨论日期">
                <div>{{ form.集体讨论日期 }}</div>
            </a-form-model-item>

            <a-form-model-item
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                label="集体讨论结论"
            >
                <div>{{ form.集体讨论结论 }}</div>
            </a-form-model-item>

            <a-form-model-item label="处罚文书号" prop="处罚文书号" ref="cfwsh">
                <div>{{ form.处罚文书号 }}</div>
            </a-form-model-item>

            <a-form-model-item label="做出行政处罚决定日期" prop="做出行政处罚决定日期" ref="zcxzcfjdrq">
                <div>{{ form.作出行政处罚决定日期 }}</div>
            </a-form-model-item>

            <a-form-model-item label="处罚种类" prop="处罚种类" ref="cfzl">
                <div>{{ form.处罚种类 | dictionary('处罚种类') }}</div>
            </a-form-model-item>

            <a-form-model-item label="罚款金额">
                <div>{{ form.罚款金额 }}</div>
            </a-form-model-item>

            <a-form-model-item label="结案实缴罚款金额">
                <div>{{ form.结案实缴罚款金额 }}</div>
            </a-form-model-item>

            <a-form-model-item
                label="处罚结果"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="处罚结果"
                ref="cfjg"
            >
                <div>{{ form.处罚结果 }}</div>
            </a-form-model-item>

            <a-form-model-item label="行政复议" prop="行政复议" res="xzfy">
                <div>{{ form.行政复议 | dictionary('行政复议') }}</div>
            </a-form-model-item>

            <a-form-model-item label="结案情况——执行方式">
                <div>{{ form['结案情况—执行方式'] | dictionary('结案执行方式') }}</div>
            </a-form-model-item>

            <a-form-model-item label="结案情况——执行结果">
                <div>{{ form['结案情况—执行结果'] | dictionary('结案执行结果') }}</div>
            </a-form-model-item>

            <a-form-model-item label="结案情况——不予行政处罚" prop="结案情况不予行政处罚" ref="jaqkbyxzcf">
                <div>{{ form['结案情况—不予行政处罚'] }}</div>
            </a-form-model-item>

            <a-form-model-item label="结案情况——结案日期">
                <div>{{ form['结案情况—结案日期'] }}</div>
            </a-form-model-item>

            <a-form-model-item label="其他处理情况">
                <div>{{ form['其他处理情况'] | dictionary('处罚其他处理情况') }}</div>
            </a-form-model-item>

            <a-form-model-item label="移送日期">
                <div>{{ form.移送时间 }}</div>
            </a-form-model-item>

            <a-form-model-item label="报送人员">
                <!-- <a-input v-model="form.报送人员" disabled /> -->
                <div>{{ form.报送人员 }}</div>
            </a-form-model-item>

            <a-form-model-item label="报送人员">
                <!-- <a-input v-model="form.报送人员" disabled /> -->
                <div>{{ form.报送时间 }}</div>
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
            layout: "inline",
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
    methods: {
        closeModal() {
            this.$root.$emit("updataCLosexzcf", "close关闭modal");
        },
    },
    mounted() {
        console.log(this.item);
        this.form = this.item;
    },
};
</script>
<style lang="scss" scoped>
@import "../../detail";
</style>