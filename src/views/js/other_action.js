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
            name: '行为名称',
            null: false,
            maxlength: 300
        },
        {
            name: '行为编号',
            null: false,
            maxlength: 50
        },
        {
            name: '检查行为编号',
            null: false,
            maxlength: 100
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
            name: '事项来源',
            null: true,
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
            name: '监管措施',
            null: true,
            maxlength: 50
        },
        {
            name: '结案情况',
            null: true,
            maxlength: 200
        },
        {
            name: '开始时间',
            null: true,
            type: 'Date'
        },
        {
            name: '结束时间',
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