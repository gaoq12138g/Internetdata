<template>
    <div>
        <a-form-model class="form" ref="ruleForm" :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-form-model-item label="关键字" prop="关键字">
                <div>{{ form.关键字 }}</div>
            </a-form-model-item>
            <a-form-model-item label="法律法规类别" prop="法律法规类别">
                <div>{{ form.法律法规类别 }}</div>
            </a-form-model-item>

            <a-form-model-item label="发布日期" prop="发布日期">
                <div>{{ form.发布日期 }}</div>
            </a-form-model-item>
            <a-form-model-item label="发布机关" prop="发布机关">
                <div>{{ form.发布机关 }}</div>
            </a-form-model-item>
            <a-form-model-item label="施行日期" prop="施行日期">
                <div>{{ form.施行日期 }}</div>
            </a-form-model-item>
            <a-form-model-item label="法律法规内容" prop="法律法规内容">
                <div>{{ form.法律法规内容 }}</div>
            </a-form-model-item>
            <a-form-model-item label="发布文号" prop="发布文号" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <div>{{ form.发布文号 }}</div>
            </a-form-model-item>
            <a-form-model-item label="法律法规名称" prop="法律法规名称" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <div>{{ form.法律法规名称 }}</div>
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