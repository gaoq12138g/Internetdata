<template>
    <div class="content">
        <a-form-model
            :model="form"
            class="form"
            ref="ruleForm"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
        >
            <a-form-model-item label="产品标准代号" prop="产品标准代号">
                <div>{{ form.产品标准代号 }}</div>
            </a-form-model-item>

            <a-form-model-item label="保质期" prop="保质期">
                <div>{{ form.保质期 }}</div>
            </a-form-model-item>

            <a-form-model-item
                label="储存条件"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="储存条件"
            >
                <div>{{ form.储存条件 }}</div>
            </a-form-model-item>

            <a-form-model-item label="净含量" prop="净含量">
                <div>{{ form.净含量 }}</div>
            </a-form-model-item>

            <a-form-model-item label="食品添加剂类别" prop="食品添加剂类别">
                <div>{{ form.食品添加剂类别 }}</div>
            </a-form-model-item>

            <a-form-model-item
                label="成分或者配料表"
                prop="成分或者配料表"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
            >
                <div>{{ form.成分或者配料表 }}</div>
            </a-form-model-item>

            <a-form-model-item
                class="sp"
                :labelCol="{span: 8}"
                :wrapperCol="{span: 15}"
                label="所使用的食品添加剂在国家标准中的通用名称"
                prop="所使用的食品添加剂在国家标准中的通用名称"
            >
                <div>{{ form.所使用的食品添加剂在国家标准中的通用名称 }}</div>
            </a-form-model-item>

            <a-form-model-item label="生产企业名称" prop="生产企业名称">
                <div>{{ form.生产企业名称 }}</div>
            </a-form-model-item>

            <a-form-model-item label="生产企业统一社会信用代码" prop="生产企业统一社会信用代码">
                <div>{{ form.生产企业统一社会信用代码 }}</div>
            </a-form-model-item>

            <a-form-model-item label="生产企业行政区划代码" prop="生产企业行政区划代码" ref="xzqhdm">
                <div>{{ form.生产企业行政区划代码 | dictionary('行政区划代码') }}</div>
            </a-form-model-item>

            <a-form-model-item label="生产日期" prop="生产日期">
                <div>{{ form.生产日期 }}</div>
            </a-form-model-item>

            <a-form-model-item label="生产许可证编号" prop="生产许可证编号">
                <div>{{ form.生产许可证编号 }}</div>
            </a-form-model-item>

            <a-form-model-item label="类别名称" prop="类别名称">
                <div>{{ form.类别名称 }}</div>
            </a-form-model-item>

            <a-form-model-item label="规格" prop="规格">
                <div>{{ form.规格 }}</div>
            </a-form-model-item>

            <a-form-model-item label="食品" prop="食品">
                <div>{{ form.食品 }}</div>
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
            this.$root.$emit("updataCLosefood", "close关闭modal");
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
::v-deep .ant-form {
    .sp {
        width: 100% !important;
    }
}
</style>