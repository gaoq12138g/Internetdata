import global from './global'

/*行政强制行为*/
export default {
    rules: [
        {
            name: '监管事项目录编码',
            null: false,
            length: 14,
            expression: [global.expression.数字]
        },
        {
            name: '强制行为名称',
            null: false,
            maxlength: 400
        },
        {
            name: '强制行为编号',
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
            name: '监管行为监管对象类型',
            alias: '监管对象类型',
            null: true,
            dictionary: '监管行为监管对象类型'
        },
        {
            name: '监管对象',
            null: true,
            maxlength: 200
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
            null: false,
            maxlength: 1000
        },
        {
            name: '强制依据',
            null: false,
            maxlength: 1000
        },
        {
            name: '强制决定书号',
            null: false,
            maxlength: 100
        },
        {
            name: '行政强制种类',
            null: false,
            dictionary: '行政强制种类'
        },
        {
            name: '强制措施类型',
            null: true,
            dictionary: '强制措施类型'
        },
        {
            name: '强制执行类型',
            null: true,
            dictionary: '强制执行类型'
        },
        {
            name: '强制结果',
            null: true,
            maxlength: 50
        },
        {
            name: '实施强制措施的起始时间',
            null: true,
            type: 'Date'
        },
        {
            name: '强制措施延长期限',
            null: true,
            maxlength: 10
        },
        {
            name: '实施强制措施的结束时间',
            null: true,
            type: 'Date'
        },
        {
            name: '报送时间',
            null: true,
            type: 'Date'
        },
        {
            name: '报送人员',
            null: true,
            maxlength: 50
        }
    ]
}