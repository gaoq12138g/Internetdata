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
            <a-form-model-item label="姓名" prop="姓名">
                <a-input v-model="form.姓名" />
            </a-form-model-item>

            <a-form-model-item label="联系电话" prop="联系电话">
                <a-input v-model="form.联系电话" />
            </a-form-model-item>

            <a-form-model-item
                class="sp"
                :labelCol="{span: 6}"
                :wrapperCol="{span: 17}"
                label="所属主体（受委托组织）全称"
                prop="所属主体全称"
            >
                <a-textarea v-model="form.所属主体全称" :rows="1" />
            </a-form-model-item>

            <a-form-model-item label="身份证号" prop="身份证号">
                <a-input v-model="form.身份证号" />
            </a-form-model-item>

            <a-form-model-item label="性别" prop="性别">
                <a-select v-model="form.性别" placeholder="性别">
                    <a-select-option
                        v-for="(item,index) in dicFilter('性别')"
                        :key="index"
                        :value="item.编号"
                    >{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>

            <a-form-model-item label="出生日期" prop="出生日期">
                <a-date-picker
                    v-model="form.出生日期"
                    format="YYYY-MM-DD"
                    type="date"
                    placeholder="选择日期"
                    style="width:100%"
                />
            </a-form-model-item>

            <a-form-model-item label="政治面貌" prop="政治面貌">
                <a-select v-model="form.政治面貌" placeholder="政治面貌">
                    <a-select-option
                        v-for="(item,index) in dicFilter('政治面貌')"
                        :key="index"
                        :value="item.编号"
                    >{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>

            <a-form-model-item label="职级" prop="职级">
                <a-select v-model="form.职级" placeholder="职级">
                    <a-select-option
                        v-for="(item,index) in dicFilter('职级')"
                        :key="index"
                        :value="item.编号"
                    >{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>

            <a-form-model-item label="民族" prop="民族">
                <a-select v-model="form.民族" placeholder="民族">
                    <a-select-option
                        v-for="(item,index) in dicFilter('民族')"
                        :key="index"
                        :value="item.编号"
                    >{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>

            <a-form-model-item label="最高学历" prop="最高学历">
                <a-select v-model="form.最高学历" placeholder="最高学历">
                    <a-select-option
                        v-for="(item,index) in dicFilter('最高学历')"
                        :key="index"
                        :value="item.编号"
                    >{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>

            <a-form-model-item label="执法人员性质" prop="执法人员性质">
                <a-select v-model="form.执法人员性质" placeholder="执法人员性质">
                    <a-select-option
                        v-for="(item,index) in dicFilter('执法人员性质')"
                        :key="index"
                        :value="item.编号"
                    >{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>

            <a-form-model-item label="是否监督人员" prop="是否监督人员">
                <a-radio-group v-model="form.是否监督人员">
                    <a-radio value="是">是</a-radio>
                    <a-radio value="否">否</a-radio>
                </a-radio-group>
            </a-form-model-item>

            <a-form-model-item label="是否具有法律职业资格" prop="是否具有法律职业资格">
                <a-radio-group v-model="form.是否具有法律职业资格">
                    <a-radio value="是">是</a-radio>
                    <a-radio value="否">否</a-radio>
                </a-radio-group>
            </a-form-model-item>

            <a-form-model-item
                label="执法证号"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="执法证号"
            >
                <a-textarea v-model="form.执法证号" :rows="1" />
            </a-form-model-item>

            <a-form-model-item
                label="学历专业"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="学历专业"
            >
                <a-textarea v-model="form.学历专业" :rows="1" />
            </a-form-model-item>

            <a-form-model-item
                label="发证机关"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="发证机关"
            >
                <a-textarea v-model="form.发证机关" :rows="1" />
            </a-form-model-item>

            <a-form-model-item
                label="执法区域"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="执法区域"
            >
                <a-textarea v-model="form.执法区域" :rows="1" />
            </a-form-model-item>

            <a-form-model-item
                label="执法类别"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="执法类别"
            >
                <a-textarea v-model="form.执法类别" :rows="1" />
            </a-form-model-item>

            <a-form-model-item label="证件有效期" prop="证件有效期">
                <a-date-picker
                    v-model="form.证件有效期"
                    format="YYYY-MM-DD"
                    type="date"
                    placeholder="选择日期"
                    style="width:100%"
                />
            </a-form-model-item>

            <a-form-model-item label="行政区划代码" prop="行政区划代码">
                <a-select v-model="form.行政区划代码" placeholder="行政区划代码">
                    <a-select-option
                        v-for="(item,index) in dicFilter('行政区划代码')"
                        :key="index"
                        :value="item.编号"
                    >{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>

            <a-form-model-item label="部门编码" prop="部门编码">
                <a-input v-model="form.部门编码" />
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
                出生日期: undefined,
                发证机关: "",
                姓名: "",
                学历专业: "",
                性别: "",
                所属主体全称: "",
                执法人员性质: "",
                执法区域: "",
                执法类别: "",
                执法证号: "",
                政治面貌: "",
                是否具有法律职业资格: "",
                是否监督人员: "",
                最高学历: "",
                民族: "",
                职级: "",
                联系电话: "",
                行政区划代码: "",
                证件有效期: undefined,
                身份证号: "",
                部门编码: "",
            },
            global,
            rules: {
                姓名: [
                    {
                        required: true,
                        message: "请填写姓名",
                    },
                    {
                        max: 50,
                        message: "最长50字符",
                        trigger: "blur",
                    },
                ],
                所属主体全称: [
                    {
                        required: true,
                        message: "请填写所属主体全称",
                    },
                    {
                        max: 100,
                        message: "最长100个字符",
                    },
                ],
                身份证号: [
                    {
                        max: 18,
                        min: 18,
                        parrern: [global.expression.身份证号],
                        message: "请填写正确的身份证号",
                    },
                ],
                性别: [
                    {
                        required: true,
                        message: "请选择性别",
                    },
                ],
                出生日期: [
                    {
                        required: true,
                        message: "请选择出生日期",
                    },
                ],
                政治面貌: [
                    {
                        required: false,
                        message: "请选择政治面貌",
                    },
                ],
                职级: [
                    {
                        required: true,
                        message: "请选择职级",
                    },
                ],
                民族: [
                    {
                        required: true,
                        message: "请选择民族",
                    },
                ],
                最高学历: [
                    {
                        required: true,
                        message: "请选择最高学历",
                    },
                ],
                执法人员性质: [
                    {
                        required: true,
                        message: "请选择执法人员性质",
                    },
                ],
                是否监督人员: [
                    {
                        required: true,
                        message: "请选择是否监督人员",
                    },
                ],
                是否具有法律职业资格: [
                    {
                        required: false,
                        message: "请选择是否具有法律职业资格",
                    },
                ],
                联系电话: [
                    {
                        required: false,
                        message: "请填写联系电话",
                    },
                    {
                        max: 50,
                        message: "最多50个字符",
                    },
                ],
                执法证号: [
                    {
                        required: true,
                        message: "请填写执法证号",
                    },
                    {
                        max: 100,
                        message: "最多100个字符",
                    },
                ],
                学历专业: [
                    {
                        max: 100,
                        message: "最多100个字符",
                    },
                ],
                发证机关: [
                    {
                        max: 100,
                        message: "最多100个字符",
                    },
                ],
                执法区域: [
                    {
                        max: 100,
                        message: "最多100个字符",
                    },
                ],
                执法类别: [
                    {
                        max: 200,
                        message: "最多100个字符",
                    },
                ],
                证件有效期: [
                    {
                        required: false,
                        message: "请选择证件有效期",
                    },
                ],
                行政区划代码: [
                    {
                        required: false,
                        // message: "请选择生产企业行政区划代码",
                    },
                ],
                部门编码: [
                    {
                        required: false,
                        message: "请选择部门编码",
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
                    出生日期: "",
                    发证机关: "",
                    姓名: "",
                    学历专业: "",
                    性别: "",
                    所属主体全称: "",
                    执法人员性质: "",
                    执法区域: "",
                    执法类别: "",
                    执法证号: "",
                    政治面貌: "",
                    是否具有法律职业资格: "",
                    是否监督人员: "",
                    最高学历: "",
                    民族: "",
                    职级: "",
                    联系电话: "",
                    行政区划代码: "",
                    证件有效期: "",
                    身份证号: "",
                    部门编码: "",
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
                this.form.出生日期 = moment(this.form.出生日期).format(
                    "YYYY-MM-DD"
                );
                this.form.证件有效期 = moment(this.form.证件有效期).format(
                    "YYYY-MM-DD"
                );

                this.data = [this.form];
                console.log(this.data); // 12320100425800919F

                if (valid) {
                    console.log("新增食品!");
                    if (this.types == "new") {
                        console.log("新增");
                        this.add();
                    } else if (this.types == "modify") {
                        console.log("修改");
                        this.update();
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
            this.$root.$emit("updataCLoseOfficer", "close关闭modal");
        },

        // 新增
        add() {
            this.axios.post("officer/insert", this.data).then((res) => {
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
        update() {
            this.axios.post("officer/update", this.data[0]).then((res) => {
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
        // this.form.出生日期 = moment(this.form.出生日期).format("YYYY-MM-DD");
        // this.form.证件有效期 = moment(this.form.证件有效期).format(
        //     "YYYY-MM-DD"
        // );
    },
};
</script>
<style lang="scss" scoped>
@import "../edit";
</style>