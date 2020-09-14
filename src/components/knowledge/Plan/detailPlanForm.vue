<template>
    <div>
        <a-form-model class="form" ref="ruleForm" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-form-model-item label="预案编号" prop="预案编号">
                <div>{{ form.预案编号 }}</div>
            </a-form-model-item>
             <a-form-model-item label="事件级别" prop="事件级别">
                 <div>{{ form.事件级别 }}</div>
            </a-form-model-item>
             <a-form-model-item label="紧急类型" prop="紧急类型">
                 <div>{{ form.紧急类型 }}</div>
            </a-form-model-item>
             <a-form-model-item label="应急机构" prop="应急机构">
                 <div>{{ form.应急机构 }}</div>
            </a-form-model-item>
            <a-form-model-item label="应急措施" prop="应急措施"  class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <div>{{ form.应急措施 }}</div>
            </a-form-model-item>
            <a-form-model-item label="应急资源" prop="应急资源"  class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <div>{{ form.应急措施 }}</div>
            </a-form-model-item>
            <a-form-model-item label="紧急规模" prop="紧急规模"  class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <div>{{ form.紧急规模 }}</div>
            </a-form-model-item>
            <a-form-model-item label="应急预案" prop="应急预案"  class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <div>{{ form.应急预案 }}</div>
            </a-form-model-item>
            <a-form-model-item label="触发条件" prop="触发条件"  class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <div>{{ form.触发条件 }}</div>
            </a-form-model-item>
            <a-form-model-item label="所属行业" prop="所属行业"  class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <div>{{ form.所属行业 }}</div>
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