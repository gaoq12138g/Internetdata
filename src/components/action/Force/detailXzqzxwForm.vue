<template>
    <div class="content">
        <a-form-model ref="ruleForm" :model="form" :label-col="labelCol" :wrapper-col="wrapperCol" class="form">
            <a-form-model-item ref="jgsxmlbm" label="监管事项目录编码" prop="监管事项目录编码">
                <div>{{ form.监管事项目录编码 }}</div>
            </a-form-model-item>
            <a-form-model-item ref="qzxwbh" label="强制行为编号" prop="强制行为编号">
                <div>{{ form.强制行为编号 }}</div>
            </a-form-model-item>
            <a-form-model-item ref="qzxwmc" label="强制行为名称" prop="强制行为名称" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <div>{{ form.强制行为名称 }}</div>
            </a-form-model-item>
            <a-form-model-item ref="ssjg" label="实施机构" prop="实施机构" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <div>{{ form.实施机构 }}</div>
            </a-form-model-item>
            <a-form-model-item ref="ssjgbm" label="实施机构编码" prop="实施机构编码">
                <div>{{ form.实施机构编码 }}</div>
            </a-form-model-item>
            <a-form-model-item label="监管对象类型" prop="监管对象类型">
                <!-- <div v-for="(item, index) in dicFilter('监管行为监管对象类型')" :key="index" v-show="item.编号 ==  form.监管行为监管对象类型 ">
                {{ item.值 }}
                </div>-->
                <div>{{ form.监管行为监管对象类型 | dictionary('监管行为监管对象类型') }}</div>
            </a-form-model-item>
            <a-form-model-item ref="jgdx" label="监管对象" prop="监管对象" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <div>{{ form.监管对象 }}</div>
            </a-form-model-item>
            <a-form-model-item ref="jcxwbh" label="检查行为编号" prop="检查行为编号">
                <div>{{ form.检查行为编号 }}</div>
            </a-form-model-item>
            <a-form-model-item ref="xzxdr" label="行政相对人" prop="行政相对人">
                <div>{{ form['行政相对人（单位/个人）'] }}</div>
            </a-form-model-item>
            <a-form-model-item label="行政相对人性质" prop="行政相对人性质">
                <!-- <div v-for="(item, index) in dicFilter('行政相对人性质')" :key="index" v-show="item.编号 ==  form.行政相对人性质 ">
                {{ item.值 }}
                </div>-->
                <div>{{ form.行政相对人性质 | dictionary('行政相对人性质') }}</div>
            </a-form-model-item>
            <a-form-model-item label="行政相对人证件类型" prop="行政相对人证件类型">
                <!-- <div v-for="(item, index) in dicFilter('证件类型')" :key="index" v-show="item.编号 ==  form.行政相对人证件类型 ">
                {{ item.值 }}
                </div>-->
                <div>{{ form.行政相对人证件类型 | dictionary('证件类型') }}</div>
            </a-form-model-item>
            <a-form-model-item ref="xzxdrbm" label="行政相对人编码" prop="行政相对人编码">
                <div>{{ form['行政相对人(单位/个人)编码'] }}</div>
            </a-form-model-item>
            <a-form-model-item label="行政区划代码" prop="行政区划代码">
                <!-- <div v-for="(item, index) in dicFilter('行政区划代码')" :key="index" v-show="item.编号 ==  form.行政区划代码 ">
                {{ item.值 }}
                </div>-->
                <div>{{ form.行政区划代码 | dictionary('行政区划代码') }}</div>
            </a-form-model-item>
            <a-form-model-item ref="zcdz" label="注册地址" prop="注册地址" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <div>{{ form.注册地址 }}</div>
            </a-form-model-item>
            <a-form-model-item ref="jydz" label="经营地址" prop="经营地址" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <div>{{ form.经营地址 }}</div>
            </a-form-model-item>
            <a-form-model-item ref="wfss" label="违法事实" prop="违法事实" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <div>{{ form.违法事实 }}</div>
            </a-form-model-item>
            <a-form-model-item ref="qzyj" label="强制依据" prop="强制依据" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <div>{{ form.强制依据 }}</div>
            </a-form-model-item>
            <a-form-model-item ref="qzjdsh" label="强制决定书号" prop="强制决定书号" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <div>{{ form.强制决定书号 }}</div>
            </a-form-model-item>
            <a-form-model-item label="行政强制种类" prop="行政强制种类">
                <!-- <div v-for="(item, index) in dicFilter('行政强制种类')" :key="index" v-show="item.编号 ==  form.行政强制种类 ">
                    {{ item.值 }}
                </div>-->
                <div>{{ form.行政强制种类 | dictionary('行政强制种类') }}</div>
            </a-form-model-item>
            <a-form-model-item label="强制措施类型" prop="强制措施类型">
                <!-- <div v-for="(item, index) in dicFilter('强制措施类型')" :key="index" v-show="item.编号 ==  form.强制措施类型">
                    {{ item.值 }}
                </div>-->
                <div>{{ form.强制措施类型 | dictionary('强制措施类型') }}</div>
            </a-form-model-item>
            <a-form-model-item label="强制执行类型" prop="强制执行类型">
                <!-- <div v-for="(item, index) in dicFilter('强制执行类型')" :key="index" v-show="item.编号 ==  form.强制执行类型 ">
                    {{ item.值 }}
                </div>-->
                <div>{{ form.强制执行类型 | dictionary('强制执行类型') }}</div>
            </a-form-model-item>
            <a-form-model-item ref="qzjg" label="强制结果" prop="强制结果">
                <div>{{ form.强制结果 }}</div>
            </a-form-model-item>
            <a-form-model-item label="实施强制措施的起始时间" prop="实施强制措施的起始时间">
                <div>{{ form.实施强制措施的起始时间 }}</div>
            </a-form-model-item>
            <a-form-model-item ref="qzcsycqx" label="强制措施延长期限" prop="强制措施延长期限">
                <div>{{ form.强制措施延长期限 }}</div>
            </a-form-model-item>
            <a-form-model-item label="实施强制措施的结束时间" prop="实施强制措施的结束时间">
                <div>{{ form.实施强制措施的结束时间 }}</div>
            </a-form-model-item>
            <a-form-model-item label="报送时间" prop="报送时间">
                <div>{{ form.报送时间 }}</div>
            </a-form-model-item>
            <a-form-model-item ref="bsry" label="报送人员" prop="报送人员">
                <div>{{ form.报送人员 }}</div>
            </a-form-model-item>
            <a-form-model-item></a-form-model-item>
        </a-form-model>
        <!-- <div class="btnGroup">
            <a-button type="primary" @click="onSubmit">提交</a-button>
            <a-button style="margin-left: 10px;" @click="resetForm">清除</a-button>
        </div>-->
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    // name: "xzqzxwForm",
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