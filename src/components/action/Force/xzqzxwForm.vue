<template>
    <div class="content">
        <a-form-model ref="ruleForm" :model="form" :rules="rules" class="form" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-form-model-item label="监管事项目录编码" prop="监管事项目录编码">
                <a-input v-model="form.监管事项目录编码" />
            </a-form-model-item>
            <a-form-model-item label="强制行为编号" prop="强制行为编号">
                <a-input v-model="form.强制行为编号" />
            </a-form-model-item>
            <a-form-model-item label="强制行为名称" prop="强制行为名称" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <!-- <a-input v-model="form.强制行为名称" /> -->
                <a-textarea v-model="form.强制行为名称" :rows="2" />
            </a-form-model-item>
            <a-form-model-item label="实施机构" prop="实施机构" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-input v-model="form.实施机构" />
            </a-form-model-item>
            <a-form-model-item label="实施机构编码" prop="实施机构编码">
                <a-input v-model="form.实施机构编码" />
            </a-form-model-item>
            <a-form-model-item label="监管对象类型" prop="监管对象类型">
                <a-select v-model="form.监管行为监管对象类型" placeholder="请选择监管对象类型">
                    <a-select-option v-for="(item, index) in dicFilter('监管行为监管对象类型')" :key="index" :value="item.编号">{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>
            <a-form-model-item label="监管对象" prop="监管对象" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <!-- <a-input v-model="form.监管对象" /> -->
                <a-textarea v-model="form.监管对象" :rows="2" />
            </a-form-model-item>
            <a-form-model-item label="检查行为编号" prop="检查行为编号">
                <a-input v-model="form.检查行为编号" />
            </a-form-model-item>
            <a-form-model-item label="行政相对人" prop="行政相对人（单位/个人）">
                <a-input v-model="form['行政相对人（单位/个人）']" />
            </a-form-model-item>
            <a-form-model-item label="行政相对人性质" prop="行政相对人性质">
                <a-select v-model="form.行政相对人性质" placeholder="请选择行政相对人性质">
                    <a-select-option v-for="(item, index) in dicFilter('行政相对人性质')" :key="index" :value="item.编号">{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>
            <a-form-model-item label="行政相对人证件类型" prop="行政相对人证件类型">
                <a-select v-model="form.行政相对人证件类型" placeholder="请选择行政相对人证件类型">
                    <a-select-option v-for="(item, index) in dicFilter('证件类型')" :key="index" :value="item.编号">{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>
            <a-form-model-item label="行政相对人编码" prop="行政相对人(单位/个人)编码">
                <a-input v-model="form['行政相对人(单位/个人)编码']" />
            </a-form-model-item>
            <a-form-model-item label="行政区划代码" prop="行政区划代码">
                <a-select v-model="form.行政区划代码" placeholder="请选择行政区划代码">
                    <a-select-option v-for="(item, index) in dicFilter('行政区划代码')" :key="index" :value="item.编号">{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>
            <a-form-model-item label="注册地址" prop="注册地址" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <!-- <a-input v-model="form.注册地址" /> -->
                <a-textarea v-model="form.注册地址" :rows="2" />
            </a-form-model-item>
            <a-form-model-item label="经营地址" prop="经营地址" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <!-- <a-input v-model="form.经营地址" /> -->
                <a-textarea v-model="form.经营地址" :rows="2" />
            </a-form-model-item>
            <a-form-model-item label="违法事实" prop="违法事实" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <!-- <a-input v-model="form.违法事实" /> -->
                <a-textarea v-model="form.违法事实" :rows="2" />
            </a-form-model-item>
            <a-form-model-item label="强制依据" prop="强制依据" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <!-- <a-input v-model="form.强制依据" /> -->
                <a-textarea v-model="form.强制依据" :rows="2" />
            </a-form-model-item>
            <a-form-model-item label="强制决定书号" prop="强制决定书号" class="blockRow" :label-col="blockRowLable" :wrapper-col="blockRowWrapper">
                <a-input v-model="form.强制决定书号" />
            </a-form-model-item>
            <a-form-model-item label="行政强制种类" prop="行政强制种类">
                <a-select v-model="form.行政强制种类" placeholder="请选择行政强制种类" style="width: 100%;">
                    <a-select-option v-for="(item, index) in dicFilter('行政强制种类')" :key="index" :value="item.编号">{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>
            <a-form-model-item label="强制措施类型" prop="强制措施类型">
                <a-select v-model="form.强制措施类型" placeholder="请选择强制措施类型" style="width: 100%;">
                    <a-select-option v-for="(item, index) in dicFilter('强制措施类型')" :key="index" :value="item.编号">{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>
            <a-form-model-item label="强制执行类型" prop="强制执行类型">
                <a-select v-model="form.强制执行类型" placeholder="请选择强制执行类型">
                    <a-select-option v-for="(item, index) in dicFilter('强制执行类型')" :key="index" :value="item.编号">{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>
            <a-form-model-item label="强制结果" prop="强制结果">
                <a-input v-model="form.强制结果" />
            </a-form-model-item>
            <a-form-model-item label="实施强制措施的起始时间" required prop="实施强制措施的起始时间">
                <a-date-picker v-model="form.实施强制措施的起始时间" type="date" placeholder="请选择实施强制措施的起始时间" style="width: 100%;" />
            </a-form-model-item>
            <a-form-model-item label="强制措施延长期限" prop="强制措施延长期限">
                <a-input v-model="form.强制措施延长期限" />
            </a-form-model-item>
            <a-form-model-item label="实施强制措施的结束时间" required prop="实施强制措施的结束时间">
                <a-date-picker v-model="form.实施强制措施的结束时间" type="date" placeholder="请选择实施强制措施的结束时间" style="width: 100%;" />
            </a-form-model-item>
            <a-form-model-item label="报送时间" required prop="报送时间">
                <a-date-picker v-model="form.报送时间" type="date" placeholder="请选择报送时间" style="width: 100%;" disabled />
            </a-form-model-item>
            <a-form-model-item label="报送人员" prop="报送人员">
                <a-input v-model="form.报送人员" disabled />
            </a-form-model-item>
            <a-form-model-item></a-form-model-item>
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
    name: "xzqzxwForm",
    props: {
        item: {
            type: Object,
        },
        type: {
            type: String,
        },
    },
    data() {
        return {
            layout: "inline",
            labelCol: { span: 9 },
            wrapperCol: { span: 13 },
            blockRowLable: { span: 4 },
            blockRowWrapper: { span: 19 },
            other: "",
            form: {
                id: "",
                监管事项目录编码: "",
                强制行为名称: "",
                强制行为编号: "",
                实施机构: "",
                实施机构编码: "",
                监管行为监管对象类型: undefined,
                监管对象: "",
                检查行为编号: "",
                "行政相对人（单位/个人）": "",
                行政相对人性质: undefined,
                行政相对人证件类型: undefined,
                "行政相对人(单位/个人)编码": "",
                注册地址: "",
                经营地址: "",
                行政区划代码: undefined,
                违法事实: "",
                强制依据: "",
                强制决定书号: "",
                行政强制种类: undefined,
                强制措施类型: undefined,
                强制执行类型: undefined,
                强制结果: "",
                实施强制措施的起始时间: undefined,
                强制措施延长期限: "",
                实施强制措施的结束时间: undefined,
                报送时间: undefined,
                报送人员: "",
            },
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
                        pattern: [global.expression.数字],
                        message: "请正确填写14位监管事项目录编码",
                        trigger: "blur",
                    },
                ],
                // 强制行为名称
                强制行为名称: [
                    {
                        required: true,
                        message: "请填写强制行为名称",
                    },
                    {
                        min: 0,
                        max: 400,
                        message: "强制行为名称长度请控制在400个字符内",
                        trigger: "blur",
                    },
                ],
                // 强制行为编号
                强制行为编号: [
                    {
                        required: true,
                        message: "请填写强制行为编号",
                    },
                    {
                        min: 0,
                        max: 50,
                        message: "强制行为编号长度请控制在50个字符以内",
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
                // 监管对象类型
                监管对象类型: [
                ],
                // 监管对象
                监管对象: [
                    {
                        required: true,
                        message: "请填写监管对象",
                    },
                    {
                        min: 0,
                        max: 200,
                        message: "监管对象长度请控制在200个字符以内",
                        trigger: "blur",
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
                // 行政相对人
                "行政相对人（单位/个人）": [
                    {
                        required: true,
                        message: "请填写行政相对人（单位/个人）",
                    },
                    {
                        min: 0,
                        max: 200,
                        message: "行政相对人（单位/个人）长度请控制在200个字符以内",
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
                    {
                        min: 18,
                        max: 20,
                        pattern: [
                            global.expression.社会统一信用代码,
                            global.expression.身份证号,
                        ],
                        message: "请正确填写社会统一信用代码或身份证号",
                        trigger: "blur",
                    },
                ],
                // 注册地址
                注册地址: [
                    // {
                    //     required: true,
                    //     message: "请填写注册地址",
                    // },
                    {
                        min: 0,
                        max: 400,
                        message: "注册地址长度请控制在400个字符以内",
                        trigger: "blur",
                    },
                ],
                // 经营地址
                经营地址: [
                    // {
                    //     required: true,
                    //     message: "请填写经营地址",
                    // },
                    {
                        min: 0,
                        max: 400,
                        message: "经营地址长度请控制在400个字符以内",
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
                // 违法事实
                违法事实: [
                    {
                        required: true,
                        message: "请填写违法事实",
                    },
                    {
                        min: 0,
                        max: 1000,
                        message: "违法事实长度请控制在1000个字符以内",
                        trigger: "blur",
                    },
                ],
                // 强制依据
                强制依据: [
                    {
                        required: true,
                        message: "请填写强制依据",
                    },
                    {
                        min: 0,
                        max: 1000,
                        message: "强制依据长度请控制在1000个字符以内",
                        trigger: "blur",
                    },
                ],
                // 强制决定书号
                强制决定书号: [
                    {
                        required: true,
                        message: "请填写强制决定书号",
                    },
                    {
                        min: 0,
                        max: 100,
                        message: "强制决定书号长度请控制在100个字符以内",
                        trigger: "blur",
                    },
                ],
                // 请选择行政强制种类
                行政强制种类: [
                    {
                        required: true,
                        message: "请选择行政强制种类",
                    },
                ],
                // 请选择强制措施类型
                强制措施类型: [
  
                ],
                // 请选择强制执行类型
                强制执行类型: [
                ],
                // 强制结果
                强制结果: [
                    {
                        min: 0,
                        max: 50,
                        message: "强制结果长度请控制在50个字符以内",
                        trigger: "blur",
                    },
                ],
                // 实施强制措施的起始时间
                实施强制措施的起始时间: [

                ],
                //强制措施延长期限
                强制措施延长期限: [
                    {
                        min: 0,
                        max: 50,
                        message: "强制措施延长期限长度请控制在50个字符以内",
                        trigger: "blur",
                    },
                ],
                // 实施强制措施的结束时间
                实施强制措施的结束时间: [

                ],
                // 报送时间
                报送时间: [
                    {
                        required: true,
                        message: "请选择报送时间",
                    },
                ],
                //报送人员
                报送人员: [
                    {
                        required: true,
                        message: "请填写报送人员",
                    },
                    {
                        min: 0,
                        max: 50,
                        message: "报送人员长度请控制在50个字符以内",
                        trigger: "blur",
                    },
                ],
            },
        };
    },
    methods: {
        moment,
        onSubmit() {
            // console.log(this.form);
            this.$refs.ruleForm.validate((valid) => {
                this.form.实施强制措施的起始时间 = moment(
                    this.form.实施强制措施的起始时间
                ).format("YYYY-MM-DD");
                this.form.实施强制措施的结束时间 = moment(
                    this.form.实施强制措施的结束时间
                ).format("YYYY-MM-DD");
                this.form.报送时间 = moment(this.form.报送时间).format(
                    "YYYY-MM-DD"
                );
                this.data = [this.form];

                if (valid) {
                    if (this.type == "新增") {
                        this.axios
                            .post("action/force/insert", this.data)
                            .then((res) => {
                                if (res.data.code == 200) {
                                    this.$message.success("新增成功");
                                    this.closeModalVisible();
                                } else {
                                    this.$message.error("新增失败");
                                }
                            });
                    } else if (this.type == "修改") {
                        // _self.data.id=_self.form.id;
                        // this.data[0].check_date = "2020-08-31";
                        // this.data[0].id = this.id;
                        // console.log(data.check_date);
                        // console.log(_self.data);
                        this.axios
                            .post("action/force/update", this.data[0])
                            .then((res) => {
                                if (res.data.code == 200) {
                                    this.$message.success("修改成功");
                                    this.closeModalVisible();
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
        },
        resetForm() {
            this.$nextTick(() => {
                if (this.$refs.ruleForm) {
                    this.$refs.ruleForm.resetFields();
                }
            });
        },
        closeModalVisible() {
            this.$root.$emit("closeModalVisibleForce", "false");
        },
    },
    watch: {
        item: {
            deep: true,
            immediate: true,
            handler: function (newVal, oldval) {
                this.form = {
                    id: "",
                    监管事项目录编码: "",
                    强制行为名称: "",
                    强制行为编号: "",
                    实施机构: "",
                    实施机构编码: "",
                    监管行为监管对象类型: undefined,
                    监管对象: "",
                    检查行为编号: "",
                    "行政相对人（单位/个人）": "",
                    行政相对人性质: undefined,
                    行政相对人证件类型: undefined,
                    "行政相对人(单位/个人)编码": "",
                    注册地址: "",
                    经营地址: "",
                    行政区划代码: undefined,
                    违法事实: "",
                    强制依据: "",
                    强制决定书号: "",
                    行政强制种类: undefined,
                    强制措施类型: undefined,
                    强制执行类型: undefined,
                    强制结果: "",
                    实施强制措施的起始时间: undefined,
                    强制措施延长期限: "",
                    实施强制措施的结束时间: undefined,
                    报送时间: moment(new Date().toLocaleDateString()).format(
                        "YYYY-MM-DD"
                    ),
                    报送人员: this.user.用户名称,
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
    mounted() {
        this.form = this.item;
        if (this.type == "新增") {
            this.form.报送人员 = this.user.用户名称;
            this.form.报送时间 = moment(new Date().toLocaleDateString()).format(
                "YYYY-MM-DD"
            );
        }
    },
};
</script>

<style lang="scss" scoped>
@import "../../edit";
</style>
