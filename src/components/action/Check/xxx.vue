<template>
    <div class="content">
        <a-form-model  :model="form"  :label-col="labelCol" :wrapper-col="wrapperCol" class="form">
            <a-form-model-item class="form-item" label="双随机一公开计划id">
                {{form.双随机一公开计划id}}
            </a-form-model-item>
            <a-form-model-item class="form-item" label="监管事项目录编码">
                {{form.监管事项目录编码}}
            </a-form-model-item>
            <a-form-model-item class="form-item" label="监管事项检查实施清单编码">
                {{form.监管事项检查实施清单编码}}
            </a-form-model-item>
            <a-form-model-item class="form-item" label="检查行为名称">
                {{form.检查行为名称}}
            </a-form-model-item>
            <a-form-model-item label="检查行为编号">
                {{form.检查行为编号}}
            </a-form-model-item>
            <a-form-model-item label="实施机构">
                {{form.实施机构}}
            </a-form-model-item>
            <a-form-model-item label="实施机构编码">
                {{form.实施机构编码}}
            </a-form-model-item>
            <a-form-model-item label="受委托部门">
                {{form.受委托部门}}
            </a-form-model-item>
            <a-form-model-item label="受委托部门编码">
                {{form.受委托部门编码}}
            </a-form-model-item>
            <a-form-model-item label="监管对象类型">
                {{form.监管行为监管对象类型 | dictionary('监管行为监管对象类型')}}
            </a-form-model-item>
            <a-form-model-item label="监管对象">
                {{form.监管对象}}
            </a-form-model-item>
            <a-form-model-item label="行政相对人">
                {{form['行政相对人（单位/个人）']}}
            </a-form-model-item>
            <a-form-model-item label="行政相对人性质">
                {{form.行政相对人性质| dictionary('行政相对人性质')}}
            </a-form-model-item>
            <a-form-model-item label="行政相对人证件类型">
                {{form.行政相对人证件类型 | dictionary('证件类型')}}
            </a-form-model-item>
            <a-form-model-item label="行政相对人编码">
                {{form['行政相对人(单位/个人)编码']}}
            </a-form-model-item>
            <a-form-model-item label="注册地址">
                {{form.注册地址}}
            </a-form-model-item>
            <a-form-model-item label="经营地址">
                {{form.经营地址}}
            </a-form-model-item>
            <a-form-model-item label="行政区划代码">
                {{form.行政区划代码 | dictionary('行政区划代码')}}
            </a-form-model-item>
            <a-form-model-item label="检查形式">
                {{form.检查形式 | dictionary('检查形式')}}
            </a-form-model-item>
            <a-form-model-item label="检查类别">
                {{form.检查类别 | dictionary('检查类别')}}
            </a-form-model-item>
            <a-form-model-item label="检查方式">
                {{form.检查方式 | dictionary('检查方式')}}
            </a-form-model-item>
            <a-form-model-item label="检查结果">
                {{form.检查结果 | dictionary('检查结果')}}
            </a-form-model-item>
            <a-form-model-item label="检查时间">
                {{form.检查时间}}
            </a-form-model-item>
            <a-form-model-item label="检查人员">
                {{form.检查人员}}
            </a-form-model-item>
            <a-form-model-item label="执法证号">
                {{form.执法证号}}
            </a-form-model-item>
            <a-form-model-item label="报送时间">
                {{form.报送时间}}
            </a-form-model-item>
            <a-form-model-item label="报送人员">
                {{form.报送人员}}
            </a-form-model-item>
        </a-form-model>
    </div>
</template>

<script>
export default {
    name: 'addCheckModal',
    props: {
        form: {}
    },
    mounted(){
        console.log(this.form);
    },
    data() {
        return {
            layout: "inline",
            labelCol: { span: 9 },
            wrapperCol: { span: 14 },
            other: "",
        };
    },
    methods: {
      
    },
};
</script>

<style lang="scss" scoped>
@import "../../detail";
</style>