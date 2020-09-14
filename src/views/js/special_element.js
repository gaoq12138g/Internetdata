import global from './global'

/*监管对象信息要素*/
export default {
    rules: [
        {
            name: '监管对象唯一编码',
            null: false,
            maxlength: 200
        },
        {
            name: '监管名称',
            null: false,
            maxlength: 200
        },
        {
            name: '监管对象大类',
            null: false
        },
        {
            name: '监管对象大类',
            alias: '监管对象大类（中文名称）',
            null: false,
            maxlength: 600
        },
        {
            name: '监管对象子类',
            null: true
        },
        {
            name: '监管对象子类',
            alias: '监管对象子类（中文名称）',
            null: true,
            maxlength: 600
        },
        {
            name: '行政相对人统一社会信用代码',
            alias: '行政相对人统一社会信用代码/身份证号',
            null: false,
            expression: [global.expression.社会统一信用代码, global.expression.身份证号]
        },
        {
            name: '注册地址',
            null: true,
            maxlength: 600
        },
        {
            name: '经营地址',
            null: true,
            maxlength: 600
        },
        {
            name: '所在地区行政区划代码',
            null: false,
            dictionary: '行政区划代码'
        }
    ]
}