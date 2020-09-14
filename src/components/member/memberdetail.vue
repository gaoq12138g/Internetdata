<template>
    <div class="content">
        <a-form-model
            :model="form"
            class="form"
            ref="ruleForm"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
        >
            <a-form-model-item label="姓名" prop="姓名">
                <div>{{ form.姓名 }}</div>
            </a-form-model-item>

            <a-form-model-item label="联系电话" prop="联系电话">
                <div>{{ form.联系电话 }}</div>
            </a-form-model-item>

            <a-form-model-item
                class="sp"
                :labelCol="{span: 6}"
                :wrapperCol="{span: 17}"
                label="所属主体（受委托组织）全称"
            >
                <div>{{ form.所属主体全称 }}</div>
            </a-form-model-item>

            <a-form-model-item label="身份证号" prop="身份证号">
                <div>{{ form.身份证号 }}</div>
            </a-form-model-item>

            <a-form-model-item label="性别">
                <div>{{ form.性别 | dictionary('性别')}}</div>
            </a-form-model-item>

            <a-form-model-item label="出生日期" prop="出生日期">
                <div>{{ form.出生日期 }}</div>
            </a-form-model-item>

            <a-form-model-item label="政治面貌">
                <div>{{ form.政治面貌 | dictionary('政治面貌')}}</div>
            </a-form-model-item>

            <a-form-model-item label="职级">
                <div>{{ form.职级 | dictionary('职级')}}</div>
            </a-form-model-item>

            <a-form-model-item label="民族">
                <div>{{ form.民族 | dictionary('民族')}}</div>
            </a-form-model-item>

            <a-form-model-item label="最高学历">
                <div>{{ form.最高学历 | dictionary('最高学历')}}</div>
            </a-form-model-item>

            <a-form-model-item label="执法人员性质">
                <div>{{ form.执法人员性质 | dictionary('执法人员性质')}}</div>
            </a-form-model-item>

            <a-form-model-item label="是否监督人员">
                <div>{{ form.是否监督人员 }}</div>
            </a-form-model-item>

            <a-form-model-item label="是否具有法律职业资格">
                <div>{{ form.是否具有法律职业资格 }}</div>
            </a-form-model-item>

            <a-form-model-item
                label="执法证号"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
            >
                <div>{{ form.执法证号 }}</div>
            </a-form-model-item>

            <a-form-model-item
                label="学历专业"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
            >
                <div>{{ form.学历专业 }}</div>
            </a-form-model-item>

            <a-form-model-item
                label="发证机关"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
            >
                <div>{{ form.发证机关 }}</div>
            </a-form-model-item>

            <a-form-model-item
                label="执法区域"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
            >
                <div>{{ form.执法区域 }}</div>
            </a-form-model-item>

            <a-form-model-item
                label="执法类别"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
            >
                <div>{{ form.执法类别 }}</div>
            </a-form-model-item>

            <a-form-model-item label="证件有效期" prop="证件有效期">
                <div>{{ form.证件有效期 }}</div>
            </a-form-model-item>

            <a-form-model-item label="行政区划代码" prop="行政区划代码">
                <div>{{ form.行政区划代码 | dictionary('行政区划代码') }}</div>
            </a-form-model-item>

            <a-form-model-item label="部门编码" prop="部门编码">
                <div>{{ form.部门编码 }}</div>
            </a-form-model-item>
        </a-form-model>
    </div>
</template>
<script>
import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";
import moment from "moment";
export default {
    data() {
        return {
            zh_CN,
            labelCol: { span: 9 },
            wrapperCol: { span: 13 },
            blockRowLable: { span: 4 },
            blockRowWrapper: { span: 19 },
            form: {},
        };
    },
    props: {
        item: {
            type: Object,
        },
        types: {
            type: String,
            required: false,
        },
    },
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
    methods: {
        closeModal() {
            this.$root.$emit("updataCLoseOfficer", "close关闭modal");
        },
    },
    mounted() {
        this.form = this.item;
        console.log(this.form);
    },
};
</script>
<style lang="scss" scoped>
@import "../detail";
</style>