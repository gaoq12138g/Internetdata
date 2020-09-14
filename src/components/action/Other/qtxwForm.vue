<template>
    <div class="content">
        <a-form-model
            :model="form"
            :rules="rules"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
            class="form"
            ref="ruleForm"
        >
            <a-form-model-item ref="jgsxmlbm" label="监管事项目录编码" prop="监管事项目录编码">
                <a-input v-model="form.监管事项目录编码" />
            </a-form-model-item>

            <a-form-model-item label="行为编号" prop="行为编号" ref="xwbh">
                <a-input v-model="form.行为编号" />
            </a-form-model-item>

            <a-form-model-item
                label="行为名称"
                prop="行为名称"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                ref="xwmc"
            >
                <a-textarea v-model="form.行为名称" :rows="3" />
            </a-form-model-item>

            <a-form-model-item
                label="检查行为编号"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="检查行为编号"
                ref="jcxwbh"
            >
                <!-- <a-input v-model="form.检查行为编号" /> -->
                <a-textarea v-model="form.检查行为编号" :rows="1" />
            </a-form-model-item>

            <a-form-model-item label="监管对象类型">
                <a-select v-model="form.监管行为监管对象类型" placeholder="请选择案件来源">
                    <a-select-option
                        v-for="(item, index) in dicFilter('监管行为监管对象类型')"
                        :key="index"
                        :value="item.编号"
                    >{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>

            <a-form-model-item label="监管措施">
                <a-input v-model="form.监管措施" />
            </a-form-model-item>

            <a-form-model-item
                label="监管对象"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="监管对象"
                ref="jgdx"
            >
                <!-- <a-input v-model="form.监管对象" /> -->
                <a-textarea v-model="form.监管对象" :rows="2" />
            </a-form-model-item>

            <a-form-model-item label="事项来源" prop="事项来源">
                <a-input v-model="form.事项来源" />
            </a-form-model-item>

            <a-form-model-item label="实施机构编码" prop="实施机构编码">
                <a-input v-model="form.实施机构编码" />
            </a-form-model-item>

            <a-form-model-item
                label="实施机构"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="实施机构"
            >
                <!-- <a-input v-model="form.实施机构" /> -->
                <a-textarea v-model="form.实施机构" :rows="1" />
            </a-form-model-item>

            <a-form-model-item label="受委托部门编码" prop="受委托部门编码">
                <a-input v-model="form.受委托部门编码" />
            </a-form-model-item>

            <a-form-model-item label="行政区划代码" prop="行政区划代码" ref="xzqhdm">
                <a-select v-model="form.行政区划代码" placeholder="请选择行政区划代码">
                    <a-select-option
                        v-for="(item,index) in dicFilter('行政区划代码')"
                        :key="index"
                        :value="item.编号"
                    >{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>

            <a-form-model-item
                label="受委托部门"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="受委托部门"
            >
                <!-- <a-input v-model="form.受委托部门" /> -->
                <a-textarea v-model="form.受委托部门" :rows="1" />
            </a-form-model-item>

            <a-form-model-item label="行政相对人(单位/个人)" prop="行政相对人（单位/个人）">
                <a-input v-model="form['行政相对人（单位/个人）']" />
                <!-- <a-textarea v-model="form['行政相对人（单位/个人）']" :rows="2"  /> -->
            </a-form-model-item>

            <a-form-model-item label="行政相对人性质" prop="行政相对人性质" ref="xzxdrxz">
                <a-select v-model="form.行政相对人性质" placeholder="请选择行政相对人性质">
                    <a-select-option
                        v-for="(item) in dicFilter('行政相对人性质')"
                        :key="item.编号"
                    >{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>

            <a-form-model-item label="行政相对人证件类型" prop="行政相对人证件类型" ref="xzxdrzjlx">
                <a-select v-model="form.行政相对人证件类型" placeholder="请选择行政相对人证件类型">
                    <a-select-option v-for="(item) in dicFilter('证件类型')" :key="item.编号">{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>

            <a-form-model-item label="行政相对人(单位/个人)编码" prop="行政相对人(单位/个人)编码" ref="xzxdrbm">
                <a-input v-model="form['行政相对人(单位/个人)编码']" />
            </a-form-model-item>

            <a-form-model-item
                label="注册地址"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="注册地址"
            >
                <!-- <a-input v-model="form.注册地址" /> -->
                <a-textarea v-model="form.注册地址" :rows="3" />
            </a-form-model-item>

            <a-form-model-item
                label="经营地址"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="经营地址"
            >
                <!-- <a-input v-model="form.经营地址" /> -->
                <a-textarea v-model="form.经营地址" :rows="3" />
            </a-form-model-item>

            <a-form-model-item
                label="结案情况"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="结案情况"
            >
                <!-- <a-input v-model="form.结案情况" /> -->
                <a-textarea v-model="form.结案情况" :rows="2" />
            </a-form-model-item>

            <a-config-provider :locale="zh_CN">
                <a-form-model-item label="开始时间">
                    <a-date-picker
                        v-model="form.开始时间"
                        format="YYYY-MM-DD"
                        type="date"
                        placeholder="选择日期"
                        style="width:100%"
                    />
                </a-form-model-item>
            </a-config-provider>

            <a-config-provider :locale="zh_CN">
                <a-form-model-item label="结束时间">
                    <a-date-picker
                        v-model="form.结束时间"
                        format="YYYY-MM-DD"
                        type="date"
                        placeholder="选择日期"
                        style="width:100%"
                    />
                </a-form-model-item>
            </a-config-provider>

            <a-form-model-item label="报送人员" required>
                <a-input v-model="form.报送人员" disabled />
            </a-form-model-item>
        </a-form-model>
        <div class="btnGroup">
            <a-button type="primary" @click="onSubmit">提交</a-button>
            <a-button style="margin-left: 20px;" @click="closeModal()">取消</a-button>
        </div>
    </div>
</template>
<script>
import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";
import moment from "moment";
import axios from "axios";
import { mapState } from "vuex";
import global from "@/views/js/global.js";
export default {
    data() {
        return {
            zh_CN,
            labelCol: { span: 9 },
            wrapperCol: { span: 13 },
            blockRowLable: { span: 4 },
            blockRowWrapper: { span: 19 },
            form: {
                id: "",
                事项来源: "", // 事项来源 F
                受委托部门: "", // 受委托部门 F
                受委托部门编码: "", //  委托部门编码 F
                实施机构: "", // 实施机构 F
                实施机构编码: "", // 实施机构编码 F
                开始时间: undefined, // 开始时间 F
                报送人员: "", // 报送人员
                报送时间: undefined, // 报送时间
                检查行为编号: "", // 检查行为编号
                注册地址: "", // 注册地址 F
                监管事项目录编码: "", // 监管事项目录编码
                监管对象: "", // 监管对象
                监管措施: "", // 监管措施 F
                监管行为监管对象类型: "", // 监管对象类型 F
                经营地址: "", // 经营地址 F
                结束时间: undefined, // 结束时间 F
                结案情况: "", // 结案情况 F
                行为名称: "", // 行为名称
                行为编号: "", // 行为编号
                行政区划代码: "", // 行政区划代码

                "行政相对人（单位/个人）": "", //  行政相对人
                行政相对人性质: "", //  行政相对人性质
                行政相对人证件类型: "", // 行政相对人证件类型
                "行政相对人(单位/个人)编码": "", // 行政相对人编码
            },
            global,
            rules: {
                // 监管事项目录编码
                监管事项目录编码: [
                    {
                        required: true,
                        message: "请填写监管事项目录编码",
                    },
                    {
                        min: 14,
                        max: 14,
                        // pattern: /^[0-9]{14}$/,
                        pattern: [global.expression.数字],
                        message: "请填写14位监管事项目录编码",
                        trigger: "blur",
                    },
                ],
                行为名称: [
                    {
                        required: true,
                        message: "请填写行为名称",
                    },
                    {
                        max: 300,
                        message: "最长300个字符",
                    },
                ],
                行为编号: [
                    {
                        required: true,
                        message: "请填写行为编号",
                    },
                ],
                检查行为编号: [
                    {
                        required: true,
                        message: "请填写检查行为编号",
                    },
                    {
                        max: 100,
                        message: "最多100字符",
                    },
                ],
                监管行为监管对象类型: [
                    {
                        // message: "请x行为名称",
                    },
                ],
                监管对象: [
                    {
                        required: true,
                        message: "请填写监管对象",
                    },
                    {
                        max: 200,
                        message: "最多200字符",
                    },
                ],
                事项来源: [
                    {
                        max: 50,
                        message: "最多50字符",
                    },
                ],
                实施机构: [
                    {
                        max: 100,
                        message: "最多100字符",
                    },
                ],
                实施机构编码: [
                    {
                        max: 20,
                        message: "最多20字符",
                    },
                ],
                受委托部门: [
                    // {
                    //     required: false,
                    //     message: "请填写受委托部门",
                    // },
                    {
                        max: 100,
                        message: "最长100字符",
                    },
                ],
                受委托部门编码: [
                    // {
                    //     required: false,
                    //     message: "请填写受委托部门编码",
                    // },
                    {
                        max: 20,
                        message: "最长20字符",
                    },
                ],
                "行政相对人（单位/个人）": [
                    {
                        required: true,
                        message: "请填写行政相对人",
                    },
                    {
                        max: 200,
                        message: "最长200字符",
                    },
                ],
                行政相对人性质: [
                    {
                        required: true,
                        message: "请选择行政相对人性质",
                    },
                ],
                行政相对人证件类型: [
                    {
                        required: true,
                        message: "请选择行政相对人证件类型",
                    },
                ],
                "行政相对人(单位/个人)编码": [
                    {
                        required: true,
                        message: "请填写行政相对人编码",
                    },
                    {
                        max: 20,
                        min: 18,
                        pattern: [
                            global.expression.社会统一信用代码,
                            global.expression.身份证号,
                        ],
                        message: "社会统一信用代码或身份证号",
                        trigger: "blur",
                    },
                ],
                注册地址: [
                    {
                        max: 400,
                        message: "请填写注册地址",
                    },
                ],
                经营地址: [
                    {
                        max: 400,
                        message: "最多400字符",
                    },
                ],
                监管措施: [
                    {
                        max: 200,
                        message: "最多200字符",
                    },
                ],
                行政区划代码: [
                    {
                        required: true,
                        message: "请选择行政相对人编码",
                    },
                ],
                结案情况: [
                    {
                        required: true,
                        message: "请填写结案情况",
                    },
                    {
                        max: 200,
                        message: "最多200字符",
                    },
                ],
            },
            data: [],
        };
    },
    watch: {
        item: {
            deep: true,
            immediate: true,
            handler: function (newVal, oldval) {
                this.form = {
                    id: "",
                    事项来源: "", // 事项来源 F
                    受委托部门: "", // 受委托部门 F
                    受委托部门编码: "", //  委托部门编码 F
                    实施机构: "", // 实施机构 F
                    实施机构编码: "", // 实施机构编码 F
                    开始时间: undefined, // 开始时间 F
                    报送人员: "", // 报送人员
                    报送时间: undefined, // 报送时间
                    检查行为编号: "", // 检查行为编号
                    注册地址: "", // 注册地址 F
                    监管事项目录编码: "", // 监管事项目录编码
                    监管对象: "", // 监管对象
                    监管措施: "", // 监管措施 F
                    监管行为监管对象类型: "", // 监管对象类型 F
                    经营地址: "", // 经营地址 F
                    结束时间: undefined, // 结束时间 F
                    结案情况: "", // 结案情况 F
                    行为名称: "", // 行为名称
                    行为编号: "", // 行为编号
                    行政区划代码: "", // 行政区划代码

                    "行政相对人(单位/个人)编码": "", // 行政相对人编码
                    行政相对人性质: "", //  行政相对人性质
                    行政相对人证件类型: "", // 行政相对人证件类型
                    "行政相对人（单位/个人）": "", //  行政相对人
                };
                for (var p in newVal) {
                    this.form[p] = newVal[p];
                }
            },
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
        ...mapState({
            user: (state) => state.currentUser,
        }),
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
    methods: {
        onSubmit() {
            console.log("submit");
            this.$refs.ruleForm.validate((valid) => {
                this.form.开始时间 = moment(this.form.开始时间).format(
                    "YYYY-MM-DD"
                );
                this.form.结束时间 = moment(this.form.结束时间).format(
                    "YYYY-MM-DD"
                );
                this.form.报送人员 = this.user.用户名称;
                if (this.types == "新增") {
                    this.form.报送时间 = moment()
                        .locale("zh-cn")
                        .format("YYYY-MM-DD");
                } else if (this.types == "修改") {
                    this.form.报送时间 = moment(this.form.报送时间).format(
                        "YYYY-MM-DD"
                    );
                }
                this.data = [this.form];
                console.log(this.data);
                if (valid) {
                    console.log("新增其他行为!");

                    if (this.types == "new") {
                        console.log("新增");
                        this.addQTXW();
                    } else if (this.types == "modify") {
                        console.log("修改");
                        this.updateQTXW();
                    }
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
        resetForm() {
            this.$refs.ruleForm.resetFields();
        },
        closeModal() {
            this.$root.$emit("updataCLose", "close关闭modal");
        },

        // 新增
        addQTXW() {
            this.axios.post("action/other/insert", this.data).then((res) => {
                console.log(res);
                if (res.data.code == 200) {
                    this.$message.success("新增成功");
                } else {
                    this.$message.error("新增失败");
                }
                this.closeModal();
            });
        },
        // 修改
        updateQTXW() {
            this.axios.post("action/other/update", this.data[0]).then((res) => {
                console.log(res);
                if (res.data.code == 200) {
                    this.$message.success("修改成功");
                } else {
                    this.$message.error("修改失败");
                }
                this.closeModal();
            });
        },
    },
    mounted() {
        this.form = this.item;
        this.form.报送人员 = this.user.用户名称;
    },
};
</script>
<style lang="scss" scoped>
@import "../../edit";
</style>