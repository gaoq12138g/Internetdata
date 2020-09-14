<template>
    <div class="content">
        <a-form-model :model="form" class="form" ref="ruleForm" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-form-model-item label="产品名称" prop="产品名称">
                <div>{{ form.产品名称 }}</div>
            </a-form-model-item>
            <a-form-model-item label="生产企业名称" prop="生产企业名称">
                <div>{{ form.生产企业名称 }}</div>
            </a-form-model-item>
            <a-form-model-item label="统一社会信用代码" prop="生产企业统一社会信用代码">
                <div>{{ form.生产企业统一社会信用代码 }}</div>
            </a-form-model-item>
            <a-form-model-item label="生产企业行政区划" prop="生产企业行政区划代码">
                <div>{{ form.生产企业行政区划代码 | dictionary('行政区划代码') }}</div>
            </a-form-model-item>
            <a-form-model-item label="食品生产许可证编号" prop="食品生产许可证编号">
                <div>{{ form.食品生产许可证编号 }}</div>
            </a-form-model-item>
            <a-form-model-item label="注册号或备案号" prop="注册号或备案号">
                <div>{{ form.注册号或备案号 }}</div>
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
            this.$root.$emit("updataCLoseMilk", "close关闭modal");
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