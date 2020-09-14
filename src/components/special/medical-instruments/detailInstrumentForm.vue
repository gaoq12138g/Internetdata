<template>
    <div class="content">
        <a-form-model :model="form" class="form" ref="ruleForm" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-form-model-item label="注册证编号" prop="注册证编号">
                <div>{{ form.注册证编号 }}</div>
            </a-form-model-item>
            <a-form-model-item label="注册人名称" prop="注册人名称">
                <div>{{ form.注册人名称 }}</div>
            </a-form-model-item>
            <a-form-model-item label="注册人住所" prop="注册人住所" class="blockRow" :labelCol="blockRowLable" :wrapperCol="blockRowWrapper">
                <div>{{ form.注册人住所 }}</div>
            </a-form-model-item>
            <a-form-model-item label="统一社会信用代码" prop="统一社会信用代码">
                <div>{{ form.统一社会信用代码 }}</div>
            </a-form-model-item>
            <a-form-model-item label="代理人名称" prop="代理人名称">
                <div>{{ form.代理人名称 }}</div>
            </a-form-model-item>
            <a-form-model-item label="代理人住所" prop="代理人住所" class="blockRow" :labelCol="blockRowLable" :wrapperCol="blockRowWrapper">
                <div>{{ form.代理人住所 }}</div>
            </a-form-model-item>
            <a-form-model-item label="生产地址" prop="生产地址" class="blockRow" :labelCol="blockRowLable" :wrapperCol="blockRowWrapper">
                <div>{{ form.生产地址 }}</div>
            </a-form-model-item>
            <a-form-model-item label="产品名称" prop="产品名称" class="blockRow" :labelCol="blockRowLable" :wrapperCol="blockRowWrapper">
                <div>{{ form.产品名称 }}</div>
            </a-form-model-item>
            <a-form-model-item label="型号规格" prop="型号规格" class="blockRow" :labelCol="blockRowLable" :wrapperCol="blockRowWrapper">
                <div>{{ form.型号规格 }}</div>
            </a-form-model-item>
            <a-form-model-item label="产品标准" prop="产品标准" class="blockRow" :labelCol="blockRowLable" :wrapperCol="blockRowWrapper">
                <div>{{ form.产品标准 }}</div>
            </a-form-model-item>
            <a-form-model-item label="批准日期" prop="批准日期">
                <div>{{ form.批准日期 }}</div>
            </a-form-model-item>
            <a-form-model-item label="有效期至" prop="有效期至">
                <div>{{ form.有效期至 }}</div>
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
            this.$root.$emit("updataCLoseInstrument", "close关闭modal");
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