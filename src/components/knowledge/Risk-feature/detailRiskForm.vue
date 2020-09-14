<template>
    <div>
        <a-form-model class="form" ref="ruleForm" :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
           <a-form-model-item label="风险特征名称" prop="风险特征名称" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
               <div>{{ form.风险特征名称 }}</div>
            </a-form-model-item>
            <a-form-model-item label="业务归类" prop="业务归类">
                <div>{{ form.业务归类 }}</div>
            </a-form-model-item>
            <a-form-model-item label="特征指标" prop="特征指标">
                <div>{{ form.特征指标 }}</div>
            </a-form-model-item>
            <a-form-model-item label="关联关系" prop="关联关系">
                <div>{{ form.关联关系 }}</div>
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