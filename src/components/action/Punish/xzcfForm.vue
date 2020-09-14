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
            <a-form-model-item label="监管事项目录编码" prop="监管事项目录编码">
                <a-input v-model="form.监管事项目录编码" />
            </a-form-model-item>

            <a-form-model-item label="处罚行为编号" prop="处罚行为编号">
                <a-input v-model="form.处罚行为编号" />
            </a-form-model-item>

            <a-form-model-item
                label="处罚行为名称"
                prop="处罚行为名称"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
            >
                <a-textarea v-model="form.处罚行为名称" :rows="3" />
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

            <a-form-model-item label="实施机构编码" prop="实施机构编码">
                <a-input v-model="form.实施机构编码" />
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

            <a-form-model-item label="监管对象类型">
                <a-select v-model="form.监管行为监管对象类型" prop="监管行为监管对象类型" placeholder="请选择案件来源">
                    <a-select-option
                        v-for="(item, index) in dicFilter('监管行为监管对象类型')"
                        :key="index"
                        :value="item.编号"
                    >{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>

            <a-form-model-item label="处罚立案时间" prop="处罚立案时间">
                <a-date-picker
                    v-model="form.处罚立案时间"
                    type="date"
                    placeholder="请选择处罚立案时间"
                    style="width: 100%;"
                />
            </a-form-model-item>

            <a-form-model-item
                label="监管对象"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="监管对象"
            >
                <!-- <a-input v-model="form.监管对象" /> -->
                <a-textarea v-model="form.监管对象" :rows="2" />
            </a-form-model-item>

            <a-form-model-item label="案件来源" prop="案件来源">
                <a-select v-model="form.案件来源" placeholder="请选择案件来源">
                    <a-select-option
                        v-for="(item, index) in dicFilter('案件来源')"
                        :key="index"
                        :value="item.编号"
                    >{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>

            <a-form-model-item label="检查行为编号" prop="检查行为编号">
                <a-input v-model="form.检查行为编号" />
            </a-form-model-item>

            <a-form-model-item label="行政相对人(单位/个人)" prop="行政相对人">
                <a-input v-model="form.行政相对人" />
                <!-- <a-textarea v-model="form.行政相对人" :rows="2"  /> -->
            </a-form-model-item>

            <a-form-model-item label="是否重大案件" prop="是否重大案件">
                <a-radio-group v-model="form.是否重大案件">
                    <a-radio value="是">是</a-radio>
                    <a-radio value="否">否</a-radio>
                </a-radio-group>
            </a-form-model-item>

            <a-form-model-item label="行政相对人性质" prop="行政相对人性质">
                <a-select v-model="form.行政相对人性质" placeholder="请选择行政相对人性质">
                    <a-select-option
                        v-for="(item, index) in dicFilter('行政相对人性质')"
                        :key="index"
                        :value="item.编号"
                    >{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>

            <a-form-model-item label="行政相对人证件类型" prop="行政相对人证件类型">
                <a-select v-model="form.行政相对人证件类型" placeholder="请选择行政相对人证件类型">
                    <a-select-option
                        v-for="(item, index) in dicFilter('证件类型')"
                        :key="index"
                        :value="item.编号"
                    >{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>

            <a-form-model-item label="行政相对人(单位/个人)编码" prop="行政相对人编码">
                <a-input v-model="form.行政相对人编码" />
            </a-form-model-item>

            <a-form-model-item label="行政诉讼" prop="行政诉讼">
                <a-select v-model="form.行政诉讼" placeholder="请选择行政诉讼">
                    <a-select-option
                        v-for="(item, index) in dicFilter('行政诉讼')"
                        :key="index"
                        :value="item.编号"
                    >{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>

            <a-form-model-item
                label="注册地址"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="注册地址"
            >
                <!-- <a-input v-model="form.注册地址" /> -->
                <a-textarea v-model="form.注册地址" :rows="2" />
            </a-form-model-item>

            <a-form-model-item
                label="经营地址"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="经营地址"
            >
                <!-- <a-input v-model="form.经营地址" /> -->
                <a-textarea v-model="form.经营地址" :rows="2" />
            </a-form-model-item>

            <a-form-model-item
                label="违法事实"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="违法事实"
            >
                <!-- <a-input v-model="form.违法事实" /> -->
                <a-textarea v-model="form.违法事实" :rows="2" />
            </a-form-model-item>

            <a-form-model-item
                label="处罚依据"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="处罚依据"
            >
                <!-- <a-input v-model="form.处罚依据" /> -->
                <a-textarea v-model="form.处罚依据" :rows="1" />
            </a-form-model-item>

            <a-form-model-item label="处罚程序" prop="处罚程序">
                <a-select v-model="form.处罚程序" placeholder="请选择处罚程序">
                    <a-select-option
                        v-for="(item, index) in dicFilter('处罚程序')"
                        :key="index"
                        :value="item.编号"
                    >{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>

            <a-form-model-item label="行政区划代码" prop="行政区划代码">
                <a-select v-model="form.行政区划代码" placeholder="请选择行政区划代码">
                    <a-select-option
                        v-for="(item, index) in dicFilter('行政区划代码')"
                        :key="index"
                        :value="item.编号"
                    >{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>

            <a-form-model-item label="是否听证" prop="是否听证">
                <a-radio-group v-model="form.是否听证">
                    <a-radio value="是">是</a-radio>
                    <a-radio value="否">否</a-radio>
                </a-radio-group>
            </a-form-model-item>

            <a-form-model-item label="是否涉刑案件" prop="是否涉刑案件">
                <a-radio-group v-model="form.是否涉刑案件">
                    <a-radio value="是">是</a-radio>
                    <a-radio value="否">否</a-radio>
                </a-radio-group>
            </a-form-model-item>

            <a-form-model-item label="是否法制审核" prop="是否法制审核">
                <a-radio-group v-model="form.是否法制审核">
                    <a-radio value="是">是</a-radio>
                    <a-radio value="否">否</a-radio>
                </a-radio-group>
            </a-form-model-item>

            <a-form-model-item label="法制审核日期" prop="法制审核日期">
                <a-date-picker
                    v-model="form.法制审核日期"
                    type="date"
                    placeholder="请选择法制审核日期"
                    style="width: 100%;"
                />
            </a-form-model-item>

            <a-form-model-item
                label="法制审核意见"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="法制审核意见"
            >
                <!-- <a-input v-model="form.法制审核意见" /> -->
                <a-textarea v-model="form.法制审核意见" :rows="1" />
            </a-form-model-item>

            <a-form-model-item label="是否集体讨论" prop="是否集体讨论">
                <a-radio-group v-model="form.是否集体讨论">
                    <a-radio value="是">是</a-radio>
                    <a-radio value="否">否</a-radio>
                </a-radio-group>
            </a-form-model-item>

            <a-form-model-item label="集体讨论日期" prop="集体讨论日期">
                <a-date-picker
                    v-model="form.集体讨论日期"
                    type="date"
                    placeholder="请选择集体讨论日期"
                    style="width: 100%;"
                />
            </a-form-model-item>

            <a-form-model-item
                label="集体讨论结论"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="集体讨论结论"
            >
                <!-- <a-input v-model="form.集体讨论结论" /> -->
                <a-textarea v-model="form.集体讨论结论" :rows="3" />
            </a-form-model-item>

            <a-form-model-item
                label="处罚文书号"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="处罚文书号"
            >
                <!-- <a-input v-model="form.处罚文书号" /> -->
                <a-textarea v-model="form.处罚文书号" :rows="1" />
            </a-form-model-item>

            <a-form-model-item label="做出行政处罚决定日期" prop="作出行政处罚决定日期">
                <a-date-picker
                    v-model="form.作出行政处罚决定日期"
                    type="date"
                    placeholder="请选择作出行政处罚决定日期"
                    style="width: 100%;"
                />
            </a-form-model-item>

            <a-form-model-item label="处罚种类" prop="处罚种类">
                <a-select v-model="form.处罚种类" placeholder="请选择处罚种类">
                    <a-select-option
                        v-for="(item, index) in dicFilter('处罚种类')"
                        :key="index"
                        :value="item.编号"
                    >{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>

            <a-form-model-item label="罚款金额" prop="罚款金额">
                <a-input-number v-model="form.罚款金额" style="width: 100%;" />
            </a-form-model-item>

            <a-form-model-item label="结案实缴罚款金额" prop="结案实缴罚款金额">
                <a-input-number v-model="form.结案实缴罚款金额" style="width:100%" />
            </a-form-model-item>

            <a-form-model-item
                label="处罚结果"
                class="blockRow"
                :labelCol="blockRowLable"
                :wrapperCol="blockRowWrapper"
                prop="处罚结果"
            >
                <!-- <a-input v-model="form.处罚结果" /> -->
                <a-textarea v-model="form.处罚结果" :rows="3" />
            </a-form-model-item>

            <a-form-model-item label="行政复议" prop="行政复议" res="xzfy">
                <a-select v-model="form.行政复议" placeholder="请选择行政复议">
                    <a-select-option
                        v-for="(item, index) in dicFilter('行政复议')"
                        :key="index"
                        :value="item.编号"
                    >{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>

            <a-form-model-item label="结案情况—执行方式" prop="结案情况—执行方式">
                <a-select v-model="form['结案情况—执行方式']" placeholder="请选择结案情况——执行方式">
                    <a-select-option
                        v-for="(item, index) in dicFilter('结案执行方式')"
                        :key="index"
                        :value="item.编号"
                    >{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>

            <a-form-model-item label="结案情况—执行结果" prop="结案情况—执行结果">
                <a-select v-model="form['结案情况—执行结果']" placeholder="请选择结案情况执行结果">
                    <a-select-option
                        v-for="(item, index) in dicFilter('结案执行结果')"
                        :key="index"
                        :value="item.编号"
                    >{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>

            <a-form-model-item label="结案情况—不予行政处罚" prop="结案情况—不予行政处罚">
                <a-radio-group v-model="form['结案情况—不予行政处罚']">
                    <a-radio value="是">是</a-radio>
                    <a-radio value="否">否</a-radio>
                </a-radio-group>
            </a-form-model-item>

            <a-form-model-item label="结案情况—结案日期" prop="结案情况—结案日期">
                <a-date-picker
                    v-model="form['结案情况—结案日期']"
                    type="date"
                    placeholder="请选择结案情况结案日期"
                    style="width: 100%;"
                />
            </a-form-model-item>

            <a-form-model-item label="其他处理情况" prop="其他处理情况">
                <a-select v-model="form.其他处理情况" placeholder="请选择其他处理情况">
                    <a-select-option
                        v-for="(item, index) in dicFilter('处罚其他处理情况')"
                        :key="index"
                        :value="item.编号"
                    >{{ item.值 }}</a-select-option>
                </a-select>
            </a-form-model-item>

            <a-form-model-item label="移送日期" prop="移送时间">
                <a-date-picker
                    v-model="form.移送时间"
                    type="date"
                    placeholder="请选择移送日期"
                    style="width: 100%;"
                />
            </a-form-model-item>

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
// import punishrules from '../../../views/js/punish_action.js'
export default {
    data() {
        return {
            zh_CN,
            labelCol: { span: 9 },
            wrapperCol: { span: 13 },
            blockRowLable: { span: 4 },
            blockRowWrapper: { span: 19 },
            form: {},
            jgdxlx: [
                { key: "1", value: "企业、个体户、农专社" },
                { key: "2", value: "自然人" },
                { key: "3", value: "特种设备" },
                { key: "4", value: "特定产品（食品）" },
                { key: "5", value: "特定产品（三种特殊食品）" },
                { key: "6", value: "特定产品（药品）" },
                { key: "7", value: "特定产品（化妆品）" },
                { key: "8", value: "特定产品（医疗器械）" },
                { key: "9", value: "场地场所" },
                { key: "10", value: "非企业" },
                {
                    key: "11",
                    value: "通过《7.6监管对象信息要素表》上传的其他类型",
                },
            ],

            global,
            // 校验
            rules: {
                // 监管事项目录编码
                监管事项目录编码: [
                    {
                        required: true,
                        message: "请填写监管事项目录编码",
                        trigger: "blur",
                    },
                    {
                        min: 14,
                        max: 14,
                        pattern: [global.expression.数字],
                        message: "请填写14位监管事项目录编码",
                        trigger: "blur",
                    },
                ],
                处罚行为名称: [
                    {
                        required: true,
                        message: "请填写处罚行为名称",
                    },
                    {
                        max: 500,
                        message: "最长500字符",
                        trigger: "blur",
                    },
                ],
                处罚行为编号: [
                    {
                        required: true,
                        message: "请填写处罚行为编号",
                    },
                    {
                        max: 50,
                        message: "最长50字符",
                        trigger: "blur",
                    },
                ],
                实施机构: [
                    // {
                    //     required: false,
                    //     message: "请填写实施机构",
                    // },
                    {
                        max: 100,
                        message: "最长100字符",
                        trigger: "blur",
                    },
                ],
                实施机构编码: [
                    // {
                    //     required: false,
                    //     message: "请填写实施机构编码",
                    // },
                    {
                        max: 20,
                        message: "最长20字符",
                        trigger: "blur",
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
                        trigger: "blur",
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
                        trigger: "blur",
                    },
                ],
                监管行为监管对象类型: [
                    // {
                    //     required: false,
                    //     message: "请填写受委托部门编码",
                    // },
                ],
                监管对象: [
                    {
                        required: true,
                        message: "请填写监管对象",
                    },
                    {
                        max: 200,
                        message: "最长200字符",
                        trigger: "blur",
                    },
                ],
                案件来源: [
                    {
                        required: true,
                        message: "请选择案件来源",
                    },
                ],
                检查行为编号: [
                    {
                        required: true,
                        message: "请填写检查行为编号",
                    },
                    {
                        max: 50,
                        message: "最长50字符",
                        trigger: "blur",
                    },
                ],
                行政相对人: [
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
                行政相对人编码: [
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
                行政区划代码: [
                    {
                        required: true,
                        message: "请选择行政区划代码",
                    },
                ],
                违法事实: [
                    {
                        required: true,
                        message: "请填违法事实",
                    },
                    {
                        max: 400,
                        message: "最多400字符",
                    },
                ],
                处罚依据: [
                    {
                        required: true,
                        message: "请填处罚依据",
                    },
                    {
                        max: 400,
                        message: "最多400字符",
                    },
                ],
                处罚程序: [
                    {
                        required: true,
                        message: "请选择处罚程序",
                    },
                ],
                是否听证: [
                    {
                        required: true,
                        message: "请选择是否听证",
                    },
                ],
                法制审核意见: [
                    {
                        max: 400,
                        message: "最多400字符",
                    },
                ],
                是否涉刑案件: [
                    {
                        required: true,
                        message: "请选择是否涉刑案件",
                    },
                ],
                处罚文书号: [
                    {
                        required: true,
                        message: "请填写处罚文书号",
                    },
                    {
                        max: 100,
                        message: "最多100字符",
                    },
                ],
                集体讨论结论: [
                    {
                        max: 400,
                        message: "最多400字符",
                    },
                ],
                作出行政处罚决定日期: [
                    {
                        required: true,
                        message: "请选择作出行政处罚决定日期",
                    },
                ],
                处罚种类: [
                    {
                        required: true,
                        message: "请选择处罚种类",
                    },
                ],
                // 罚款金额: [
                //     {
                //         required: false,
                //         message: "请输入数字",
                //     },
                // ],
                处罚结果: [
                    {
                        required: true,
                        message: "请填写处罚结果",
                    },
                    {
                        max: 1000,
                        message: "最多1000字符",
                    },
                ],
                行政复议: [
                    {
                        required: true,
                        message: "请选择行政复议",
                    },
                ],
                行政诉讼: [
                    {
                        required: true,
                        message: "请选择行政诉讼",
                    },
                ],
                "结案情况—不予行政处罚": [
                    {
                        required: true,
                        message: "请填写结案情况不予行政处罚",
                    },
                ],
            },
            data: [],

            // punishrules:punishrules.rules,
        };
    },
    watch: {
        item: {
            deep: true,
            immediate: true,
            handler: function (newVal, oldval) {
                this.form = {
                    id: "",
                    作出行政处罚决定日期: undefined, // 做出行政处罚决定日期
                    其他处理情况: "", // 其他处理情况 F
                    受委托部门: "", // 受委托部门 F
                    受委托部门编码: "", // 受委托部门编码 F
                    处罚依据: "", // 处罚依据
                    处罚文书号: "", // 处罚文书号
                    处罚种类: "", // 处罚种类
                    处罚程序: "", // 处罚程序
                    处罚立案时间: undefined, // 处罚立案时间 F
                    处罚结果: "", // 处罚结果
                    处罚行为名称: "", //处罚行为名称
                    处罚行为编号: "", // 出发行为编号
                    实施机构: "", // 实施机构 F
                    实施机构编码: "", // 实施机构编码 F
                    报送人员: "", // 报送人员
                    报送时间: undefined, // 报送时间
                    是否听证: "1", // 是否听证
                    是否法制审核: "2", // 是否法制审核 F
                    是否涉刑案件: "2", // 是否涉刑案件
                    是否重大案件: "2", // 是否重大案件 F
                    是否集体讨论: "", // 是否集体讨论 F
                    案件来源: "", // 案件来源
                    检查行为编号: "", // 检查行为编号
                    法制审核意见: "", // 法制审核意见 F
                    法制审核日期: undefined, // 法制审核日期 F
                    注册地址: "", // 注册地址 F
                    监管事项目录编码: "", // 监管事项目录编码
                    监管对象: "", //监管对象
                    监管行为监管对象类型: "", // 监管对象类型  F
                    移送时间: undefined, // 移送日期 F
                    经营地址: "", // 经营地址 F
                    结案实缴罚款金额: "", // 结案实缴罚款金额 F
                    "结案情况—不予行政处罚": "", // 结案情况——不予行政处罚
                    "结案情况—执行方式": "", // 结案情况——执行方式 F
                    "结案情况—执行结果": "", // 结案情况——执行结果 F
                    "结案情况—结案日期": undefined, // 结案情况——结案日期 F
                    罚款金额: "", // 罚款金额 F
                    行政区划代码: "", // 行政区划代码
                    行政复议: "", // 行政复议
                    行政相对人: "", // 行政相对人
                    行政相对人性质: "", // 行政相对人性质
                    行政相对人编码: "", // 行政相对人编码
                    行政相对人证件类型: "", // 行政相对人证件类型
                    行政诉讼: "", // 行政诉讼
                    违法事实: "", // 违法事实
                    集体讨论日期: undefined, // 集体讨论日期 F
                    集体讨论结论: "", // 集体讨论结论 F
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
            this.$refs.ruleForm.validate((valid) => {
                this.form["结案情况-结案日期"] = moment(
                    this.form["结案情况-结案日期"]
                ).format("YYYY-MM-DD");
                this.form.移送时间 = moment(this.form.移送时间).format(
                    "YYYY-MM-DD"
                );
                this.form.处罚立案时间 = moment(this.form.处罚立案时间).format(
                    "YYYY-MM-DD"
                );
                this.form.集体讨论日期 = moment(this.form.集体讨论日期).format(
                    "YYYY-MM-DD"
                );
                this.form.法制审核日期 = moment(this.form.法制审核日期).format(
                    "YYYY-MM-DD"
                );
                this.form.作出行政处罚决定日期 = moment(
                    this.form.作出行政处罚决定日期
                ).format("YYYY-MM-DD");
                if (this.types == "新增") {
                    this.form.报送时间 = moment()
                        .locale("zh-cn")
                        .format("YYYY-MM-DD");
                } else if (this.types == "修改") {
                    this.form.报送时间 = moment(this.form.报送时间).format(
                        "YYYY-MM-DD"
                    );
                }
                this.form["结案情况—结案日期"] = moment(
                    this.form["结案情况—结案日期"]
                ).format("YYYY-MM-DD");

                this.form.报送人员 = this.user.用户名称;

                console.log("报送人员", this.form.报送人员);
                this.data = [this.form];

                if (valid) {
                    console.log("submit!");
                    // 判断新增修改
                    if (this.types == "new") {
                        console.log("新增");
                        this.addXZCFXW();
                    } else if (this.types == "modify") {
                        console.log("修改");
                        this.updateXZCFXW();
                    }
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
        timeFormat(e) {
            return moment(e).format("YYYY-MM-DD");
        },
        resetForm() {
            this.$refs.ruleForm.resetFields();
        },
        closeModal() {
            this.$root.$emit("updataCLosexzcf", "close关闭modal");
        },

        // 新增
        addXZCFXW() {
            // console.log(this.data);
            this.axios.post("action/punish/insert", this.data).then((res) => {
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
        updateXZCFXW() {
            this.axios
                .post("action/punish/update", this.data[0])
                .then((res) => {
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
        // this.data =
    },
};
</script>
<style lang="scss" scoped>
@import "../../edit";
</style>