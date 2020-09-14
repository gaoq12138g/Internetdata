<template>
    <div>
        <a-form-model class="form" ref="ruleForm" :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
           <a-form-model-item label="规则名称" prop="规则名称" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
               <div>{{ form.规则名称 }}</div>
            </a-form-model-item>
            <a-form-model-item label="领域" prop="领域" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <div>{{ form.领域 }}</div>
            </a-form-model-item>
            <a-form-model-item label="内容" prop="内容" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <div>{{ form.内容 }}</div>
            </a-form-model-item>
            <a-form-model-item label="目的" prop="目的" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <div>{{ form.目的 }}</div>
            </a-form-model-item>
            <a-form-model-item label="约束条件" prop="约束条件" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <div>{{ form.约束条件 }}</div>
            </a-form-model-item>
            <a-form-model-item label="适用范围" prop="适用范围" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <div>{{ form.适用范围 }}</div>
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