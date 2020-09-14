<template>
    <div class="content">
        <a-form-model
            ref="ruleForm"
            :model="form"
            :rules="rules"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
            class="form"
        >
            <a-form-model-item class="form-item" label="双随机一公开计划id" prop="双随机一公开计划id">
                <a-input v-model="form.双随机一公开计划id" />
            </a-form-model-item>
            <a-form-model-item class="form-item" label="监管事项目录编码" prop="监管事项目录编码">
                <a-input v-model="form.监管事项目录编码" />
            </a-form-model-item>
            <a-form-model-item class="form-item" label="监管事项检查实施清单编码" prop="监管事项检查实施清单编码">
                <a-input v-model="form.监管事项检查实施清单编码" />
            </a-form-model-item>
            <a-form-model-item class="form-item" label="检查行为名称" prop="检查行为名称">
                <a-input v-model="form.检查行为名称" />
            </a-form-model-item>
            <a-form-model-item label="检查行为编号" prop="检查行为编号">
                <a-input v-model="form.检查行为编号" />
            </a-form-model-item>
            <a-form-model-item label="实施机构编码" prop="实施机构编码">
                <a-input v-model="form.实施机构编码" />
            </a-form-model-item>
            <a-form-model-item
                label="实施机构"
                prop="实施机构"
                class="blockRow"
                :label-col="blockRowLable"
                :wrapper-col="blockRowWrapper"
            >
                <a-input v-model="form.实施机构" />
            </a-form-model-item>
            <a-form-model-item
                label="受委托部门"
                prop="受委托部门"
                class="blockRow"
                :label-col="blockRowLable"
                :wrapper-col="blockRowWrapper"
            >
                <a-input v-model="form.受委托部门" />
            </a-form-model-item>
            <a-form-model-item label="受委托部门编码" prop="受委托部门编码">
                <a-input v-model="form.受委托部门编码" />
            </a-form-model-item>
            <a-form-model-item label="监管对象类型" prop="监管对象类型">
                <a-select v-model="form.监管行为监管对象类型" placeholder="请选择监管对象类型">
                    <a-select-option
                        v-for="(item,index) in dicFilter('监管行为监管对象类型')"
                        :key="index"
                        :value="item.编号"
                    >{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>
            <a-form-model-item
                label="监管对象"
                prop="监管对象"
                class="blockRow"
                :label-col="blockRowLable"
                :wrapper-col="blockRowWrapper"
            >
                <a-textarea v-model="form.监管对象" :rows="2" />
            </a-form-model-item>
            <a-form-model-item label="行政相对人" prop="行政相对人（单位/个人）">
                <a-input v-model="form['行政相对人（单位/个人）']" />
            </a-form-model-item>
            <a-form-model-item label="行政相对人性质" prop="行政相对人性质">
                <a-select v-model="form.行政相对人性质" placeholder="请选择行政相对人性质">
                    <a-select-option
                        v-for="(item,index) in dicFilter('行政相对人性质')"
                        :key="index"
                        :value="item.编号"
                    >{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>
            <a-form-model-item label="行政相对人证件类型" prop="行政相对人证件类型">
                <a-select v-model="form.行政相对人证件类型" placeholder="请选择行政相对人证件类型">
                    <a-select-option
                        v-for="(item,index) in dicFilter('证件类型')"
                        :key="index"
                        :value="item.编号"
                    >{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>
            <a-form-model-item label="行政相对人编码" prop="行政相对人(单位/个人)编码">
                <a-input v-model="form['行政相对人(单位/个人)编码']" />
            </a-form-model-item>
            <a-form-model-item
                label="注册地址"
                prop="注册地址"
                class="blockRow"
                :label-col="blockRowLable"
                :wrapper-col="blockRowWrapper"
            >
                <!-- <a-input v-model="form.注册地址" /> -->
                <a-textarea v-model="form.注册地址" :rows="2" />
            </a-form-model-item>
            <a-form-model-item
                label="经营地址"
                prop="经营地址"
                class="blockRow"
                :label-col="blockRowLable"
                :wrapper-col="blockRowWrapper"
            >
                <!-- <a-input v-model="form.经营地址" /> -->
                <a-textarea v-model="form.经营地址" :rows="2" />
            </a-form-model-item>
            <a-form-model-item label="行政区划代码" prop="行政区划代码">
                <a-select v-model="form.行政区划代码" placeholder="请选择行政区划代码">
                    <a-select-option
                        v-for="(item,index) in dicFilter('行政区划代码')"
                        :key="index"
                        :value="item.编号"
                    >{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>
            <a-form-model-item label="检查形式" prop="检查形式">
                <a-select v-model="form.检查形式" placeholder="请选择检查形式">
                    <a-select-option
                        v-for="(item,index) in dicFilter('检查形式')"
                        :key="index"
                        :value="item.编号"
                    >{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>
            <a-form-model-item label="检查类别" prop="检查类别">
                <a-select v-model="form.检查类别" placeholder="请选择检查类别">
                    <a-select-option
                        v-for="(item,index) in dicFilter('检查类别')"
                        :key="index"
                        :value="item.编号"
                    >{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>
            <a-form-model-item label="检查方式" prop="检查方式">
                <a-select v-model="form.检查方式" placeholder="请选择检查方式">
                    <a-select-option
                        v-for="(item,index) in dicFilter('检查方式')"
                        :key="index"
                        :value="item.编号"
                    >{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>
            <a-form-model-item label="检查结果" prop="检查结果">
                <a-select v-model="form.检查结果" placeholder="请选择检查结果">
                    <a-select-option
                        v-for="(item,index) in dicFilter('检查结果')"
                        :key="index"
                        :value="item.编号"
                    >{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>
            <a-form-model-item label="检查时间" prop="检查时间">
                <a-date-picker
                    v-model="form.检查时间"
                    type="date"
                    placeholder="请选择检查时间"
                    style="width: 100%;"
                />
            </a-form-model-item>
            <a-form-model-item label="检查人员" prop="检查人员">
                <a-input v-model="form.检查人员" />
            </a-form-model-item>

            <a-form-model-item label="执法证号" prop="执法证号">
                <a-input v-model="form.执法证号" />
            </a-form-model-item>
            <a-form-model-item label="报送时间" prop="报送时间">
                <a-date-picker
                    v-model="form.报送时间"
                    type="date"
                    placeholder="请选择报送时间"
                    style="width: 100%;"
                    disabled
                />
            </a-form-model-item>
            <a-form-model-item label="报送人员" prop="报送人员">
                <a-input v-model="form.报送人员" disabled />
            </a-form-model-item>
        </a-form-model>
        <div class="btnGroup">
            <a-button type="primary" @click="onSubmit">提交</a-button>
            <a-button style="margin-left: 10px;" @click="closeModalVisible">取消</a-button>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import moment from "moment";
import "moment/locale/zh-cn";
import global from "@/views/js/global";
export default {
    name: "addCheckModal",
    props: {
        item: {},
        type: "",
    },
    watch: {
        item: {
            deep: true,
            immediate: true,
            handler: function (newVal, oldval) {
                this.form = {
                    id: "",
                    双随机一公开计划id: "",
                    受委托部门: "",
                    受委托部门编码: "",
                    实施机构: "",
                    执法证号: "",
                    报送人员: this.$store.state.currentUser.用户名称,
                    报送时间: moment(new Date().toLocaleDateString()).format(
                        "YYYY-MM-DD"
                    ),
                    检查人员: "",
                    检查形式: "",
                    检查方式: "",
                    检查时间: "",
                    检查类别: "",
                    检查结果: "",
                    检查行为名称: "",
                    检查行为编号: "",
                    注册地址: "",
                    监管事项检查实施清单编码: "",
                    监管事项目录编码: "",
                    监管对象: "",
                    监管行为监管对象类型: "",
                    经营地址: "",
                    统一社会信用代码: "",
                    行政区划代码: "",
                    "行政相对人（单位/个人）": "",
                    行政相对人性质: "",
                    "行政相对人(单位/个人)编码": "",
                    行政相对人证件类型: "",
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
    },
    mounted() {
        // this.user = this.$store.state.currentUser;
        // var myDate = new Date(); //获取系统当前时间
        // this.form.报送时间 = moment(new Date().toLocaleDateString()).format('YYYY-MM-DD');
        // this.form.报送人员 = this.user.用户名称;
        // if (this.type == "修改") {
        //     this.id = this.form.id;
        // }
    },
    data() {
        return {
            authorization: "",
            layout: "inline",
            labelCol: { span: 9 },
            wrapperCol: { span: 13 },
            blockRowLable: { span: 4 },
            blockRowWrapper: { span: 19 },
            other: "",
            form: {
                id: "",
                双随机一公开计划id: "",
                受委托部门: "",
                受委托部门编码: "",
                实施机构: "",
                执法证号: "",
                报送人员: "",
                报送时间: "",
                检查人员: "",
                检查形式: "",
                检查方式: "",
                检查时间: "",
                检查类别: "",
                检查结果: "",
                检查行为名称: "",
                检查行为编号: "",
                注册地址: "",
                监管事项检查实施清单编码: "",
                监管事项目录编码: "",
                监管对象: "",
                监管行为监管对象类型: "",
                经营地址: "",
                统一社会信用代码: "",
                行政区划代码: "",
                "行政相对人（单位/个人）": "",
                行政相对人性质: "",
                "行政相对人(单位/个人)编码": "",
                行政相对人证件类型: "",
            },
            user: {},
            id: "",
            rules: {
                // 双随机一公开计划id
                双随机一公开计划id: [
                    {
                        min: 0,
                        max: 50,
                        message: "双随机一公开计划id请控制在50个字符以内",
                        trigger: "blur",
                    },
                ],
                // 监管事项目录编码
                监管事项目录编码: [
                    {
                        required: true,
                        message: "请填写监管事项目录编码",
                    },
                    {
                        min: 14,
                        max: 14,
                        pattern: [global.expression.数字],
                        message: "请正确填写14位监管事项目录编码",
                        trigger: "blur",
                    },
                ],
                // 监管事项检查实施清单编码
                监管事项检查实施清单编码: [
                    {
                        required: true,
                        message: "监管事项检查实施清单编码",
                    },
                ],
                // 检查行为名称
                检查行为名称: [
                    {
                        required: true,
                        message: "请填写检查行为名称",
                    },
                ],
                // 检查行为编号
                检查行为编号: [
                    {
                        required: true,
                        message: "请填写检查行为编号",
                    },
                    {
                        min: 0,
                        max: 50,
                        message: "检查行为编号长度请控制在50个字符以内",
                        trigger: "blur",
                    },
                ],
                // 实施机构
                实施机构: [
                    {
                        min: 0,
                        max: 100,
                        message: "实施机构长度请控制在100个字符以内",
                        trigger: "blur",
                    },
                ],
                // 实施机构编码
                实施机构编码: [
                    {
                        min: 0,
                        max: 20,
                        message: "实施机构编码长度请控制在20个字符以内",
                        trigger: "blur",
                    },
                ],
                // 受委托部门
                受委托部门: [
                    {
                        min: 0,
                        max: 100,
                        message: "受委托部门长度请控制在100个字符以内",
                        trigger: "blur",
                    },
                ],
                // 受委托部门
                受委托部门编码: [
                    {
                        min: 0,
                        max: 20,
                        message: "受委托部门长度请控制在20个字符以内",
                        trigger: "blur",
                    },
                ],
                // 监管对象类型
                监管对象类型: [],
                // 监管对象
                监管对象: [
                    {
                        required: true,
                        message: "请填写监管对象",
                    },
                    {
                        min: 0,
                        max: 200,
                        message: "监管对象字符长度请控制在200个字符以内",
                        trigger: "blur",
                    },
                ],
                // 行政相对人
                "行政相对人（单位/个人）": [
                    {
                        required: true,
                        message: "请填写行政相对人（单位/个人）",
                    },
                    {
                        min: 0,
                        max: 2,
                        message: "行政相对人字符长度请控制在2个字符以内",
                        trigger: "blur",
                    },
                ],
                // 行政相对人性质
                行政相对人性质: [
                    {
                        required: true,
                        message: "请选择行政相对人性质",
                    },
                ],
                // 请选择行政相对人证件类型
                行政相对人证件类型: [
                    {
                        required: true,
                        message: "请选择行政相对人证件类型",
                    },
                ],
                // 行政相对人编码
                "行政相对人(单位/个人)编码": [
                    {
                        required: true,
                        message: "请填写行政相对人（单位/个人）编码",
                    },
                ],
                // 注册地址
                注册地址: [
                    {
                        min: 0,
                        max: 400,
                        message: "注册地址字符长度请控制在400个字符以内",
                        trigger: "blur",
                    },
                ],
                // 经营地址
                经营地址: [
                    {
                        min: 0,
                        max: 400,
                        message: "经营地址字符长度请控制在400个字符以内",
                        trigger: "blur",
                    },
                ],
                // 请选择行政区划代码
                行政区划代码: [
                    {
                        required: true,
                        message: "请选择行政区划代码",
                    },
                ],
                // 检查形式
                检查形式: [
                    {
                        required: true,
                        message: "请填写检查形式",
                    },
                ],
                // 检查类别
                检查类别: [
                    {
                        required: true,
                        message: "请填写检查类别",
                    },
                ],
                // 检查方式
                检查方式: [],
                // 检查结果
                检查结果: [
                    {
                        required: true,
                        message: "请填写检查结果",
                    },
                ],
                // 检查时间
                检查时间: [
                    {
                        required: true,
                        message: "请填写检查时间",
                    },
                ],
                检查人员: [
                    {
                        required: true,
                        message: "请填写检查人员",
                    },
                ],
                // 执法证号
                执法证号: [],
                // 报送时间
                报送时间: [
                    // {
                    //     required: true,
                    //     message: "请填写报送时间",
                    // },
                ],
                // 报送人员
                报送人员: [
                    // {
                    //     required: true,
                    //     message: "请填写报送人员",
                    // },
                ],
                data: [],
            },
        };
    },
    methods: {
        moment,
        onSubmit() {
            var _self = this;
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    if (_self.type == "新增") {
                        _self.form.检查时间 = moment(this.form.检查时间).format(
                            "YYYY-MM-DD"
                        );
                        _self.form.报送人员 = this.user.用户名称;
                        _self.form.报送时间 = moment(this.form.报送时间).format(
                            "YYYY-MM-DD"
                        );
                        _self.axios
                            .post("action/check/insert", [_self.form])
                            .then((res) => {
                                if (res.data.code == 200) {
                                    this.$message.success("新增成功");
                                } else {
                                    this.$message.error("新增失败");
                                }
                            });
                    } else if (_self.type == "修改") {
                        _self.axios
                            .post("action/check/update", _self.form)
                            .then((res) => {
                                if (res.data.code == 200) {
                                    this.$message.success("修改成功");
                                } else {
                                    this.$message.error("修改失败");
                                }
                            });
                    }
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
            this.closeModalVisible();
        },
        resetForm() {
            this.form = {
                id: this.form.id,
            };
        },
        closeModalVisible() {
            this.$root.$emit("closeModalVisible", "false");
        },
    },
};
</script>

<style lang="scss" scoped>
@import "../../edit";
</style>