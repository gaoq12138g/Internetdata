<template>
    <div>
        <a-form-model class="form" ref="ruleForm" :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-form-model-item label="计划ID" prop="计划ID" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <div> {{ form.计划ID }} </div>
            </a-form-model-item>
            <a-form-model-item label="计划名称" prop="计划名称" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <div> {{ form.计划名称 }} </div>
            </a-form-model-item>
            <a-form-model-item label="年度" prop="年度">
                <div> {{ form.年度 }} </div>
            </a-form-model-item>
            <a-form-model-item label="地区行政编码" prop="地区行政编码">
                    <div v-if="form.地区行政编码 == '000000'"> 全国 </div>
                    <div v-if="form.地区行政编码 != '000000'"> {{ form.地区行政编码 | dictionary('行政区划代码') }} </div>
            </a-form-model-item>
            <a-form-model-item label="地区名" prop="地区名" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <div> {{ form.地区名 }} </div>
            </a-form-model-item>

            <a-form-model-item label="监管部门" prop="监管部门">
                <div> {{ form.监管部门 | dictionary('江苏省监管部门代码') }} </div>
            </a-form-model-item>
            <a-form-model-item label="监管部门统一社会信用代码" prop="监管部门统一社会信用代码">
                <div> {{ form.监管部门统一社会信用代码 }} </div>
            </a-form-model-item>
            <a-form-model-item label="抽查比例" prop="抽查比例">
                <div> {{ form.抽查比例 }} </div>
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