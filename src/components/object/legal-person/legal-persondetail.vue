<template>
    <div class="content">
        <a-form-model
            :model="form"
            class="form"
            ref="ruleForm"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
        >
            <a-form-model-item label="主体身份代码" prop="主体身份代码">
                <div>{{ form.主体身份代码 }}</div>
            </a-form-model-item>

            <a-form-model-item label="注册号" prop="注册号">
                <div>{{ form.注册号 }}</div>
            </a-form-model-item>

            <a-form-model-item
                label="名称"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
            >
                <div>{{ form.名称 }}</div>
            </a-form-model-item>

            <a-form-model-item label="统一社会信用代码" prop="统一社会信用代码">
                <div>{{ form.统一社会信用代码 }}</div>
            </a-form-model-item>

            <a-form-model-item label="类型">
                <div>{{ form.类型 }}</div>
            </a-form-model-item>

            <a-form-model-item
                label="类型名称"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="类型名称"
            >
                <div>{{ form.类型名称 }}</div>
            </a-form-model-item>

            <a-form-model-item
                label="经营者"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
            >
                <div>{{ form.经营者 }}</div>
            </a-form-model-item>

            <a-form-model-item
                label="经营场所"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
            >
                <div>{{ form.经营场所 }}</div>
            </a-form-model-item>

            <a-form-model-item
                label="经营范围"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
            >
                <div>{{ form.经营范围 }}</div>
            </a-form-model-item>

            <a-form-model-item label="组成形式">
                <div>{{ form.组成形式 }}</div>
            </a-form-model-item>

            <a-form-model-item label="登记机关">
                <div>{{ form.登记机关 }}</div>
            </a-form-model-item>

            <a-form-model-item
                label="组成形式（中文名称）"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
            >
                <div>{{ form.组成形式名称 }}</div>
            </a-form-model-item>

            <a-form-model-item
                label="登记机关（中文名称）"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
            >
                <div>{{ form.登记机关名称 }}</div>
            </a-form-model-item>

            <a-form-model-item label="登记状态">
                <div>{{ form.登记状态 }}</div>
            </a-form-model-item>

            <a-form-model-item label="注册日期">
                <div>{{ form.注册日期 }}</div>
            </a-form-model-item>

            <a-form-model-item
                label="登记状态（中文名称）"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
            >
                <div>{{ form.登记状态名称 }}</div>
            </a-form-model-item>

            <a-form-model-item label="核准日期">
                <div>{{ form.核准日期 }}</div>
            </a-form-model-item>

            <a-form-model-item label="吊销日期">
                <div>{{ form.吊销日期 }}</div>
            </a-form-model-item>

            <a-form-model-item
                label="吊销原因"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
            >
                <div>{{ form.吊销原因 }}</div>
            </a-form-model-item>

            <a-form-model-item label="经营地址经度">
                <div>{{ form.经营地址经度 }}</div>
            </a-form-model-item>

            <a-form-model-item label="经营地址纬度">
                <div>{{ form.经营地址纬度 }}</div>
            </a-form-model-item>

            <a-form-model-item
                label="联络员姓名"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
            >
                <div>{{ form.联络员姓名 }}</div>
            </a-form-model-item>

            <a-form-model-item label="联络员身份证号码">
                <div>{{ form.联络员身份证号码 }}</div>
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
            this.$root.$emit("updataCLoseOrganization", "close关闭modal");
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