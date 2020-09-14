<template>
    <div class="content">
        <a-form-model
            :model="form"
            class="form"
            ref="ruleForm"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
        >
            <a-form-model-item
                label="监管对象唯一编码"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="监管对象唯一编码"
            >
                <div>{{ form.监管对象唯一编码 }}</div>
            </a-form-model-item>

            <a-form-model-item
                label="监管名称"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="监管名称"
            >
                <div>{{ form.监管名称 }}</div>
            </a-form-model-item>

            <a-form-model-item label="监管对象大类" prop="监管对象大类">
                <div>{{ form.监管对象大类 }}</div>
            </a-form-model-item>

            <a-form-model-item label="监管对象子类" prop="监管对象子类">
                <div>{{ form.监管对象子类 }}</div>
            </a-form-model-item>

            <a-form-model-item
                label="监管对象大类(中文名称)"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
            >
                <div>{{ form.监管对象大类名称 }}</div>
            </a-form-model-item>

            <a-form-model-item
                label="监管对象子类(中文名称)"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
            >
                <div>{{ form.监管对象子类名称 }}</div>
            </a-form-model-item>

            <a-form-model-item
                class="sp"
                :labelCol="{span: 8}"
                :wrapperCol="{span: 15}"
                label="行政相对人统一社会信用代码/身份证号"
            >
                <div>{{ form.行政相对人统一社会信用代码 }}</div>
            </a-form-model-item>

            <a-form-model-item
                label="注册地址"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
            >
                <div>{{ form.注册地址 }}</div>
            </a-form-model-item>

            <a-form-model-item
                label="经营地址"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
            >
                <div>{{ form.经营地址 }}</div>
            </a-form-model-item>

            <a-form-model-item label="所在地区行政区划代码">
                <div>{{ form.所在地区行政区划代码 | dictionary('行政区划代码') }}</div>
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
            this.$root.$emit("updataCLoseObjectElement", "close关闭modal");
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