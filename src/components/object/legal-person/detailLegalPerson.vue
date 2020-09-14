<template>
    <div>
        <a-form-model class="form" ref="ruleForm" :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-form-model-item label="行政相对人名称" prop="行政相对人名称" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <div> {{ form.行政相对人名称 }} </div>
            </a-form-model-item>
            <a-form-model-item label="行政相对人编码" prop="行政相对人编码">
                <div> {{ form.行政相对人编码 }} </div>
            </a-form-model-item>
            <a-form-model-item label="是否重点监管" prop="是否重点监管">
                <div> {{ form.是否重点监管 }} </div>
            </a-form-model-item>
            <a-form-model-item label="法人名称" prop="法人名称">
                <div> {{ form.法人名称 }} </div>
            </a-form-model-item>
            <a-form-model-item label="法人类型" prop="法人类型">
                <div> {{ form.法人类型 | dictionary('法人类型') }} </div>
            </a-form-model-item>
            <a-form-model-item label="法人设立的批准或核准机关" prop="法人设立的批准或核准机关">
                <div> {{ form.法人设立的批准或核准机关 }} </div>
            </a-form-model-item>
            <a-form-model-item label="法人设立的批准或核准时间" prop="法人设立的批准或核准时间">
                <div> {{ form.法人设立的批准或核准时间 }} </div>
            </a-form-model-item>
            <a-form-model-item label="法定代表人" prop="法定代表人" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <div> {{ form.法定代表人 }} </div>
            </a-form-model-item>
            <a-form-model-item label="法定代表人证件类型" prop="法定代表人证件类型">
                <div> {{ form.法定代表人证件类型 | dictionary('证件类型') }} </div>
            </a-form-model-item>
            <a-form-model-item label="法定代表人编码" prop="法定代表人编码">
                <div> {{ form.法定代表人编码 }} </div>
            </a-form-model-item>
            <a-form-model-item label="行业类别" prop="行业类别">
                <div> {{ form.行业类别 | dictionary('行业类型') }} </div>
            </a-form-model-item>
            <a-form-model-item label="组织类别" prop="组织类别">
                <div> {{ form.组织类别 | dictionary('组织类别') }} </div>
            </a-form-model-item>
            <a-form-model-item label="国民经济类型" prop="国民经济类型">
                <div> {{ form.国民经济类型 | dictionary('国民经济类型') }} </div>
            </a-form-model-item>
            <a-form-model-item label="行政区划代码" prop="行政区划代码">
                <div> {{ form.行政区划代码 | dictionary('行政区划代码') }} </div>
            </a-form-model-item>
            <a-form-model-item label="经营范围" prop="经营范围" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <div> {{ form.经营范围 }} </div>
            </a-form-model-item>
            <a-form-model-item label="注册地址" prop="注册地址" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <div> {{ form.注册地址 }} </div>
            </a-form-model-item>
            <a-form-model-item label="经营地址" prop="经营地址" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <div> {{ form.经营地址 }} </div>
            </a-form-model-item>
            <a-form-model-item label="经营地址经度" prop="经营地址经度">
                <div> {{ form.经营地址经度 }} </div>
            </a-form-model-item>
            <a-form-model-item label="经营地址纬度" prop="经营地址纬度">
                <div> {{ form.经营地址纬度 }} </div>
            </a-form-model-item>
            <a-form-model-item label="联系电话" prop="联系电话">
                <div> {{ form.联系电话 }} </div>
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