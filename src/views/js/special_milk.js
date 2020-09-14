import global from './global'

/*特定产品（婴幼儿配方奶粉、保健食品、特殊医学用途配方食品）信息*/
export default {
    rules: [
        {
            name: '产品名称',
            null: false,
            maxlength: 50
        },
        {
            name: '生产企业名称',
            null: false,
            maxlength: 50
        },
        {
            name: '生产企业统一社会信用代码',
            null: false,
            expression: [global.expression.社会统一信用代码]
        },
        {
            name: '生产企业行政区划代码',
            null: false,
            dictionary: '行政区划代码'
        },
        {
            name: '食品生产许可证编号',
            null: false,
            maxlength: 20
        },
        {
            name: '注册号或备案号',
            null: true,
            maxlength: 20
        }
    ]
}