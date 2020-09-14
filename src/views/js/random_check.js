import global from './global'

/*双随机-抽查的监管对象信息*/
export default {
    rules: [
        {
            name: '计划ID',
            null: false,
            maxlength: 100
        },
        {
            name: '抽查检查对象名称',
            null: false,
            maxlength: 200
        },
        {
            name: '抽查检查对象 ID',
            null: false,
            maxlength: 100
        },
        {
            name: '抽查检查对象统一社会信用代码',
            null: false,
            expression: [global.expression.社会统一信用代码]
        }
    ]
}