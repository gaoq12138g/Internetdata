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
                label="场所场地"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="场所场地"
            >
                <div>{{ form.场所场地 }}</div>
            </a-form-model-item>

            <a-form-model-item label="所在地区" prop="所在地区">
                <div>{{ form.所在地区 }}</div>
            </a-form-model-item>

            <a-form-model-item label="所在地区行政区划代码" prop="所在地区行政区划代码" ref="xzqhdm">
                <div>{{ form.所在地区行政区划代码 | dictionary('行政区划代码') }}</div>
            </a-form-model-item>

            <a-form-model-item label="责任单位" prop="责任单位">
                <div>{{ form.责任单位 }}</div>
            </a-form-model-item>

            <a-form-model-item label="责任单位统一社会信用代码" prop="责任单位统一社会信用代码">
                <div>{{ form.责任单位统一社会信用代码 }}</div>
            </a-form-model-item>

            <a-form-model-item label="责任人" prop="责任人">
                <div>{{ form.责任人 }}</div>
            </a-form-model-item>

            <a-form-model-item label="责任人证件类型" prop="责任人证件类型">
                <div>{{ form.责任人证件类型 | dictionary('证件类型') }}</div>
            </a-form-model-item>

            <a-form-model-item label="责任人证件编码" prop="责任人证件编码">
                <div>{{ form.责任人证件编码 }}</div>
            </a-form-model-item>

            <a-form-model-item label="联系电话" prop="联系电话">
                <div>{{ form.联系电话 }}</div>
            </a-form-model-item>

            <a-form-model-item
                label="场所规模"
                prop="场所规模"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
            >
                <div>{{ form.场所规模 }}</div>
            </a-form-model-item>

            <a-form-model-item label="场所用途" prop="场所用途">
                <div>{{ form.场所用途 }}</div>
            </a-form-model-item>

            <a-form-model-item label="投入使用开始时间" prop="投入使用开始时间">
                <div>{{ form.投入使用开始时间 }}</div>
            </a-form-model-item>

            <a-form-model-item label="使用寿命" prop="使用寿命">
                <div>{{ form.使用寿命 }}</div>
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
            this.$root.$emit("updataCLoseSite", "close关闭modal");
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