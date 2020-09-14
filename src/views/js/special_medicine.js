import global from './global'

/*特定产品（药品）信息*/
export default {
    rules: [
        {
            name: '药品生产许可证编号',
            null: false,
            maxlength: 20
        },
        {
            name: '统一社会信用代码',
            null: false,
            expression: [global.expression.社会统一信用代码]
        },
        {
            name: '企业名称',
            null: false,
            maxlength: 50
        },
        {
            name: '注册地址',
            null: true,
            maxlength: 100
        },
        {
            name: '生产地址',
            null: true,
            maxlength: 100
        },
        {
            name: '发证日期',
            null: false,
            maxlength: 10
        },
        {
            name: '证书有效期',
            null: false,
            maxlength: 10
        },
        {
            name: '省份',
            null: true,
            maxlength: 30
        },
        {
            name: '发证机关',
            null: true,
            maxlength: 100
        }
    ]
}