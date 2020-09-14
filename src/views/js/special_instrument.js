import global from './global'

/*特定产品（医疗器械）信息*/
export default {
    rules: [
        {
            name: '注册证编号',
            null: false,
            maxlength: 40
        },
        {
            name: '注册人名称',
            null: false,
            maxlength: 50
        },
        {
            name: '统一社会信用代码',
            null: true,
            expression: [global.expression.社会统一信用代码]
        },
        {
            name: '注册人住所',
            null: false,
            maxlength: 200
        },
        {
            name: '生产地址',
            null: true,
            maxlength: 200
        },
        {
            name: '代理人名称',
            null: true,
            maxlength: 50
        },
        {
            name: '代理人住所',
            null: true,
            maxlength: 100
        },
        {
            name: '产品名称',
            null: false,
            maxlength: 100
        },
        {
            name: '型号规格',
            null: false
        },
        {
            name: '批准日期',
            null: false,
            type: 'Date'
        },
        {
            name: '有效期至',
            null: false,
            type: 'Date'
        },
        {
            name: '产品标准',
            null: false,
            maxlength: 100
        }
    ]
}