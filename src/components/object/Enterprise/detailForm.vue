<template>
    <div class="content">
        <a-form-model class="form" ref="ruleForm" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-form-model-item class="blockRow" label="主体身份代码" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                {{form.主体身份代码}}
            </a-form-model-item>
            <a-form-model-item label="注册号">
                {{form.注册号}}
            </a-form-model-item>
            <a-form-model-item label="统一社会信用代码">
                {{form.统一社会信用代码}}
            </a-form-model-item>
            <a-form-model-item label="企业名称" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                {{form.企业名称}}
            </a-form-model-item>
            <a-form-model-item label="企业类型"  class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                {{form.企业类型}}
            </a-form-model-item>
            <a-form-model-item label="企业类型名称" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                {{form.企业类型名称}}
            </a-form-model-item>
            <a-form-model-item label="法定代表人" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                {{form.法定代表人}}
            </a-form-model-item>
            <a-form-model-item label="行业类别">
                {{form.行业类别 | dictionary('行业类型')}}
            </a-form-model-item>
            <a-form-model-item label="组织类别">
                 {{form.组织类别 | dictionary('组织类别')}}
            </a-form-model-item>
            <a-form-model-item label="国民经济类型">
                {{form.国民经济类型 | dictionary('国民经济类型')}}
            </a-form-model-item>
            <a-form-model-item label="注册资本">
                {{form.注册资本}}
            </a-form-model-item>
            <a-form-model-item label="注册资本币种" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                {{form.注册资本币种}}
            </a-form-model-item>
            <a-form-model-item label="注册资本币种名称" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                {{form.注册资本币种名称}}
            </a-form-model-item>
            <a-form-model-item label="住所" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                {{form.住所}}
            </a-form-model-item>
            <a-form-model-item label="营业场所"  class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                {{form.营业场所}}
            </a-form-model-item>
            <a-form-model-item label="经营期限自">
                {{form.经营期限自}}
            </a-form-model-item>
            <a-form-model-item label="经营期限至">
                {{form.经营期限至}}
            </a-form-model-item>
            <a-form-model-item label="经营范围" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                {{form.经营范围}}
            </a-form-model-item>
            <a-form-model-item label="成立日期">
                {{form.成立日期}}
            </a-form-model-item>
            <a-form-model-item label="核准日期">
                {{form.核准日期}}
            </a-form-model-item>
            <a-form-model-item label="吊销日期">
                {{form.吊销日期}}
            </a-form-model-item>
            <a-form-model-item label="登记机关">
                {{form.登记机关}}
            </a-form-model-item>
            <a-form-model-item label="登记机关名称"  class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                {{form.登记机关名称}}
            </a-form-model-item>
            <a-form-model-item label="登记状态">
                {{form.登记状态}}
            </a-form-model-item>
            <a-form-model-item label="登记状态名称">
                {{form.登记状态名称}}
            </a-form-model-item>
            <a-form-model-item label="业务范围类型" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                {{form.业务范围类型}}
            </a-form-model-item>
            <a-form-model-item label="业务范围类型名称"  class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                {{form.业务范围类型名称}}
            </a-form-model-item>
            <a-form-model-item label="吊销原因"  class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                {{form.吊销原因}}
            </a-form-model-item>
            <a-form-model-item label="联络员姓名"  class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                {{form.联络员姓名}}
            </a-form-model-item>
            <a-form-model-item label="联络员身份证号码" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                {{form.联络员身份证号码}}
            </a-form-model-item>
            <a-form-model-item label="联络员手机号码"  class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                {{form.联络员手机号码}}
            </a-form-model-item>
            <a-form-model-item label="经营地址经度">
                {{form.经营地址经度}}
            </a-form-model-item>
            <a-form-model-item label="经营地址纬度">
                {{form.经营地址纬度}}
            </a-form-model-item>
        </a-form-model>
    </div>
</template>

<script>
export default {
    name: "addCheckModal",
    props: {
        form: {},
    },
    mounted() {
        console.log(this.form);
    },
    data() {
        return {
            layout: "inline",
            labelCol: { span: 9 },
            wrapperCol: { span: 13 },
            blockRowLable: { span: 4 },
            blockRowWrapper: { span: 19 },
            other: "",
        };
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
@import "../../detail";
</style>