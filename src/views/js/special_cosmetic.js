import global from './global'

/*特定产品（化妆品）信息*/
export default {
    rules: [
        {
            name: '生产许可证编号',
            null: false,
            maxlength: 20
        },
        {
            name: '企业名称',
            null: false,
            maxlength: 50
        },
        {
            name: '许可项目',
            null: true,
            maxlength: 100
        },
        {
            name: '生产地址',
            null: true,
            maxlength: 100
        },
        {
            name: '生产企业地址',
            null: true,
            maxlength: 100
        },
        {
            name: '统一社会信用代码',
            null: false,
            expression: [global.expression.社会统一信用代码]
        },
        {
            name: '企业所在省',
            null: true,
            maxlength: 50
        },
        {
            name: '企业所在市',
            null: true,
            maxlength: 50
        },
        {
            name: '法人代表',
            null: true,
            maxlength: 50
        },
        {
            name: '发证机关',
            null: true,
            maxlength: 100
        },
        {
            name: '发证日期',
            null: false,
            maxlength: 70
        },
        {
            name: '有效期至',
            null: false,
            type: 'Date'
        }
    ]
}