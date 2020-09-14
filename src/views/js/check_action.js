import global from './global'

/*行政检查行为*/
export default {
    rules: [
        {
            name: '双随机一公开计划id',
            null: true,
            maxlength: 50
        },
        {
            name: '监管事项目录编码',
            null: false,
            length: 14,
            expression: [global.expression.数字]
        },
        {
            name: '监管事项检查实施清单编码',
            null: false,
            funcName: 'verify_supervise_item_check_icode'
        },
        {
            name: '检查行为名称',
            null: false,
            type: 'String'
        },
        {
            name: '检查行为编号',
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
            name: '检查形式',
            null: false,
            dictionary: '检查形式'
        },
        {
            name: '检查类别',
            null: false,
            dictionary: '检查类别'
        },
        {
            name: '检查方式',
            null: true,
            dictionary: '检查方式'
        },
        {
            name: '检查结果',
            null: false,
            dictionary: '检查结果'
        },
        {
            name: '检查时间',
            null: false,
            type: 'Date'
        },
        {
            name: '检查人员',
            null: false,
            type: 'Array'
        },
        {
            name: '执法证号',
            null: true,
            type: 'Array'
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
    verify_supervise_item_check_icode(item){
        let res = {
            pass: true
        };
        let reg = new RegExp(global.expression.社会统一信用代码);
        res.pass = reg.test(item.监管事项检查实施清单编码.substr(0,18));
        if(pass)
            res.pass = ['1','2','3','4','5'].indexOf(item.监管事项检查实施清单编码.substr(18,1)) >= 0;
        if(!res.pass)
            res.message = "监管事项检查实施清单编码验证失败";
        return res;
    },
    verify_date(item){
        var date1 = new Date(item.检查时间);
        var date2 = new Date(item.报送时间);
        let res = {
            pass: date1 < date2
        };
        if(!res.pass)
            res.message = "报送时间不能早于检查时间";
        return res;
    }
}