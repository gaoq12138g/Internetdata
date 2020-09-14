<template>
    <div>
        <a-form-model class="form" ref="ruleForm" :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
           <a-form-model-item label="计划ID" prop="计划ID" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <div>{{ form.计划ID }}</div>
            </a-form-model-item>
            <a-form-model-item label="抽查检查对象名称" prop="抽查检查对象名称" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <div>{{ form.抽查检查对象名称 }}</div>
            </a-form-model-item>
            <a-form-model-item label="抽查检查对象 ID" prop="抽查检查对象 ID" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <div>{{ form['抽查检查对象 ID'] }}</div>
            </a-form-model-item>
            <a-form-model-item label="抽查检查对象统一社会信用代码" prop="抽查检查对象统一社会信用代码" :label-col="RowLable" :wrapper-col="RowWrapper">
                <div>{{ form.抽查检查对象统一社会信用代码 }}</div>
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
            RowLable: { span: 10 },
            RowWrapper: { span: 12 },
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