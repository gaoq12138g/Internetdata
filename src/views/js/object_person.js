import global from './global'

/*特定自然人*/
export default {
    rules: [
        {
            name: '行政相对人名称',
            null: false,
            maxlength: 200
        },
        {
            name: '行政相对人编码',
            null: false,
            expression: [global.expression.身份证号]
        },
        {
            name: '性别',
            null: true,
            dictionary: '性别'
        },
        {
            name: '民族',
            null: true,
            dictionary: '民族'
        },
        {
            name: '出生日期',
            null: true,
            type: 'Date'
        },
        {
            name: '户籍地址',
            null: true,
            maxlength: 200
        },
        {
            name: '政治面貌',
            null: true,
            dictionary: '政治面貌'
        },
        {
            name: '常住地址',
            null: true,
            maxlength: 100
        },
        {
            name: '行政区划代码',
            null: true,
            dictionary: '行政区划代码'
        },
        {
            name: '联系电话',
            null: true,
            maxlength: 50
        },
        {
            name: '从业证书类型',
            null: true,
            dictionary: '从业证书类型'
        },
        {
            name: '从业证书名称',
            null: true,
            maxlength: 50
        },
        {
            name: '从业证书编码',
            null: true,
            maxlength: 30
        }
    ]
}