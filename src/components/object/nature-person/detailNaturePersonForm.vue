<template>
    <div>
        <a-form-model class="form" ref="ruleForm" :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-form-model-item label="行政相对人名称" prop="行政相对人名称" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <div>{{ form.行政相对人名称 }}</div>
            </a-form-model-item>
            <a-form-model-item label="行政相对人编码" prop="行政相对人编码">
                <div>{{ form.行政相对人编码 }}</div>
            </a-form-model-item>
            <a-form-model-item label="性别" prop="性别">
                <div>{{ form.性别 | dictionary('性别') }}</div>
            </a-form-model-item>
            <a-form-model-item label="民族" prop="民族">
                <div>{{ form.民族 | dictionary('民族') }}</div>
            </a-form-model-item>
            <a-form-model-item label="出生日期" prop="出生日期">
                <div>{{ form.出生日期 }}</div>
            </a-form-model-item>
            <a-form-model-item label="户籍地址" prop="户籍地址" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <div>{{ form.户籍地址 }}</div>
            </a-form-model-item>
            <a-form-model-item label="政治面貌" prop="政治面貌">
                <div>{{ form.政治面貌 | dictionary('政治面貌') }}</div>
            </a-form-model-item>
            <a-form-model-item label="行政区划代码" prop="行政区划代码">
                <div>{{ form.行政区划代码 | dictionary('行政区划代码') }}</div>
            </a-form-model-item>
            <a-form-model-item label="常住地址" prop="常住地址" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <div>{{ form.常住地址 }}</div>
            </a-form-model-item>
            <a-form-model-item label="联系电话" prop="联系电话">
                <div>{{ form.联系电话 }}</div>
            </a-form-model-item>
            <a-form-model-item label="从业证书类型" prop="从业证书类型">
                <div>{{ form.从业证书类型 | dictionary('从业证书类型') }}</div>
            </a-form-model-item>
            <a-form-model-item label="从业证书名称" prop="从业证书名称">
                <div>{{ form.从业证书名称 }}</div>
            </a-form-model-item>
            <a-form-model-item label="从业证书编码" prop="从业证书编码">
                <div>{{ form.从业证书编码 }}</div>
            </a-form-model-item>
        </a-form-model>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    props: {
        form: {},
    },
    data() {
        return {
            relshow: true,
            dateFormat: "YYYY-MM-DD",
            layout: "inline",
            labelCol: { span: 9 },
            wrapperCol: { span: 14 },
            blockRowLable: { span: 4 },
            blockRowWrapper: { span: 19 },
            other: "",
        };
    },
    methods: {},
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
    mounted() {
        // console.log(this.form);
    },
};
</script>

<style lang="scss" scoped>
@import "../../detail";
</style>