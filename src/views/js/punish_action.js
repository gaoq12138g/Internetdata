import global from './global'

/*行政处罚行为*/
export default {
    rules: [
        {
            name: '监管事项目录编码',
            null: false,
            length: 14,
            expression: [global.expression.数字]
        },
        {
            name: '处罚行为名称',
            null: false,
            maxlength: 500
        },
        {
            name: '处罚行为编号',
            null: false,
            maxlength: 50
        },
        {
            name: '实施机构',
            null: true,
            maxlength: 100
        },
        {
            name: '实施机构编码',
            null: true,
            maxlength: 20
        },
        {
            name: '受委托部门',
            null: true,
            maxlength: 100
        },
        {
            name: '受委托部门编码',
            null: true,
            maxlength: 20
        },
        {
            name: '监管行为监管对象类型',
            alias: '监管对象类型',
            null: true,
            dictionary: '监管行为监管对象类型'
        },
        {
            name: '监管对象',
            null: false,
            maxlength: 200
        },
        {
            name: '案件来源',
            null: false,
            dictionary: '案件来源'
        },
        {
            name: '检查行为编号',
            null: false,
            maxlength: 50
        },
        {
            name: '行政相对人',
            alias: '行政相对人（单位/个人）',
            null: false,
            maxlength: 200
        },
        {
            name: '行政相对人性质',
            null: false,
            dictionary: '行政相对人性质'
        },
        {
            name: '行政相对人证件类型',
            null: false,
            dictionary: '证件类型'
        },
        {
            name: '行政相对人编码',
            alias: '行政相对人(单位/个人)编码',
            null: false,
            maxlength: 20,
            expression: [global.expression.社会统一信用代码, global.expression.身份证号]
        },
        {
            name: '注册地址',
            null: true,
            maxlength: 400
        },
        {
            name: '经营地址',
            null: true,
            maxlength: 400
        },
        {
            name: '行政区划代码',
            null: false,
            dictionary: '行政区划代码'
        },
        {
            name: '违法事实',
            null: false
        },
        {
            name: '处罚依据',
            null: false
        },
        {
            name: '处罚程序',
            null: false,
            dictionary: '处罚程序'
        },
        {
            name: '是否听证',
            null: false,
            type: 'Boolean'
        },
        {
            name: '处罚立案时间',
            null: true,
            type: 'Date'
        },
        {
            name: '是否涉刑案件',
            null: false,
            type: 'Boolean'
        },
        {
            name: '是否重大案件',
            null: true,
            type: 'Boolean'
        },
        {
            name: '是否法制审核',
            null: true,
            type: 'Boolean'
        },
        {
            name: '法制审核日期',
            null: true,
            type: 'Date'
        },
        {
            name: '法制审核意见',
            null: true,
            maxlength: 100
        },
        {
            name: '是否集体讨论',
            null: true,
            type: 'Boolean'
        },
        {
            name: '集体讨论日期',
            null: true,
            type: 'Date'
        },
        {
            name: '集体讨论结论',
            null: true,
            maxlength: 1000
        },
        {
            name: '处罚文书号',
            null: false,
            maxlength: 100
        },
        {
            name: '作出行政处罚决定日期',
            null: false,
            type: 'Date'
        },
        {
            name: '处罚种类',
            null: false,
            dictionary: '处罚种类'
        },
        {
            name: '罚款金额',
            null: true,
            type: 'Number'
        },
        {
            name: '处罚结果',
            null: false,
            maxlength: 1000
        },
        {
            name: '行政复议',
            null: false,
            dictionary: '行政复议'
        },
        {
            name: '行政诉讼',
            null: false,
            dictionary: '行政诉讼'
        },
        {
            name: '结案情况—执行方式',
            null: true,
            dictionary: '结案执行方式'
        },
        {
            name: '结案情况—执行结果',
            null: true,
            dictionary: '结案执行结果'
        },
        {
            name: '结案实缴罚款金额',
            null: true,
            type: 'Number'
        },
        {
            name: '结案情况—不予行政处罚',
            null: false,
            type: 'Boolean'
        },
        {
            name: '结案情况—结案日期',
            null: true,
            type: 'Date'
        },
        {
            name: '其他处理情况',
            null: true,
            dictionary: '处罚其他处理情况'
        },
        {
            name: '移送时间',
            null: true,
            type: 'Date'
        },
        {
            name: '报送时间',
            null: true,
            type: 'Date',
            funcName: 'verify_date'
        },
        {
            name: '报送人员',
            null: true,
            maxlength: 50
        }
    ],
    verify_date(item){
        let res = {
            pass: true
        };
        if(item.处罚立案时间 && item['结案情况—结案日期']){
            var date1 = new Date(item.处罚立案时间),
            date2 = new Date(item['结案情况—结案日期']);
            res.pass = date1 < date2;
            if(!res.pass)
                res.message = "结案情况—结案日期不能早于处罚立案时间";
            return res;
        }
        if(item.报送时间 && item['结案情况—结案日期']){
            var date1 = new Date(item['结案情况—结案日期']),
            date2 = new Date(item.报送时间);
            res.pass = date1 < date2;
            if(!res.pass)
                res.message = "报送时间不能早于结案情况—结案日期时间";
            return res;
        }
        return res;
    }
}