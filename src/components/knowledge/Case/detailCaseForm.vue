<template>
    <div>
        <a-form-model class="form" ref="ruleForm" :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
           <a-form-model-item label="案例编号" prop="案例编号">
               <div>{{ form.案例编号 }}</div>
            </a-form-model-item>
            <a-form-model-item label="部门类别" prop="部门类别">
                <div>{{ form.部门类别 }}</div>
            </a-form-model-item>
            <a-form-model-item label="业务类别" prop="业务类别">
                <div>{{ form.业务类别 }}</div>
            </a-form-model-item>
            <a-form-model-item label="监测事项" prop="监测事项">
                <div>{{ form.监测事项 }}</div>
            </a-form-model-item>
            <a-form-model-item label="案例名称" prop="案例名称"  class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <div>{{ form.案例名称 }}</div>
            </a-form-model-item>
            <a-form-model-item label="案情简介" prop="案情简介"  class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <div>{{ form.案情简介 }}</div>
            </a-form-model-item>
            <a-form-model-item label="领域" prop="领域">
                <div>{{ form.领域 }}</div>
            </a-form-model-item>
            <a-form-model-item label="起因" prop="起因">
                <div>{{ form.起因 }}</div>
            </a-form-model-item>
            <a-form-model-item label="过程" prop="过程">
                <div>{{ form.过程 }}</div>
            </a-form-model-item>
            <a-form-model-item label="处置" prop="处置">
                <div>{{ form.处置 }}</div>
            </a-form-model-item>
            <a-form-model-item label="结果" prop="结果"  class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <div>{{ form.结果 }}</div>
            </a-form-model-item>
            <a-form-model-item label="结论" prop="结论"  class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <div>{{ form.结论 }}</div>
            </a-form-model-item>
            <a-form-model-item label="发布日期" prop="发布日期">
                <div>{{ form.发布日期 }}</div>
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