import global from './global'

/*风险特征库*/
export default {
    rules: [
        {
            name: '规则名称',
            null: false,
            maxlength: 100
        },
        {
            name: '领域',
            null: false,
            maxlength: 500
        },
        {
            name: '内容',
            null: false
        },
        {
            name: '目的',
            null: true,
            maxlength: 500
        },
        {
            name: '约束条件',
            null: false,
            maxlength: 500
        },
        {
            name: '适用范围',
            null: true,
            maxlength: 500
        }
    ]
}