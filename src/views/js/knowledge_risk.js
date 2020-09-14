import global from './global'

/*风险特征库*/
export default {
    rules: [
        {
            name: '风险特征名称',
            null: false,
            maxlength: 100
        },
        {
            name: '业务归类',
            null: false,
            maxlength: 50
        },
        {
            name: '特征指标',
            null: false,
            maxlength: 50
        },
        {
            name: '关联关系',
            null: true,
            maxlength: 50
        }
    ]
}