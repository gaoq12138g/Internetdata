<template>
    <div class="content">
        <a-form-model
            :model="form"
            class="form"
            ref="ruleForm"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
        >
            <a-form-model-item label="生产许可证编号">
                <div>{{ form.生产许可证编号 }}</div>
            </a-form-model-item>

            <a-form-model-item label="企业名称">
                <div>{{ form.企业名称 }}</div>
            </a-form-model-item>

            <a-form-model-item
                label="许可项目"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
            >
                <div>{{ form.许可项目 }}</div>
            </a-form-model-item>

            <a-form-model-item
                label="生产地址"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
            >
                <div>{{ form.生产地址 }}</div>
            </a-form-model-item>

            <a-form-model-item
                label="生产企业地址"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
            >
                <div>{{ form.生产企业地址 }}</div>
            </a-form-model-item>

            <a-form-model-item label="统一社会信用代码">
                <div>{{ form.统一社会信用代码 }}</div>
            </a-form-model-item>

            <a-form-model-item label="企业所在省">
                <div>{{ form.企业所在省 }}</div>
            </a-form-model-item>

            <a-form-model-item label="企业所在市">
                <div>{{ form.企业所在市 }}</div>
            </a-form-model-item>

            <a-form-model-item label="法人代表">
                <div>{{ form.法人代表 }}</div>
            </a-form-model-item>

            <a-form-model-item
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                label="发证机关"
            >
                <div>{{ form.发证机关 }}</div>
            </a-form-model-item>

            <a-form-model-item label="发证日期">
                <div>{{ form.发证日期 }}</div>
            </a-form-model-item>

            <a-form-model-item label="有效期至">
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