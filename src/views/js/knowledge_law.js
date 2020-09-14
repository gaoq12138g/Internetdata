import global from './global'

/*法律法规库*/
export default {
    rules: [
        {
            name: '法律法规类别',
            null: false,
            maxlength: 50
        },
        {
            name: '法律法规名称',
            null: false,
            maxlength: 500
        },
        {
            name: '发布机关',
            null: false,
            maxlength: 50
        },
        {
            name: '发布文号',
            null: false,
            maxlength: 500
        },
        {
            name: '发布日期',
            null: false,
            type: 'Date'
        },
        {
            name: '施行日期',
            null: false,
            type: 'Date'
        },
        {
            name: '法律法规内容',
            null: true
        },
        {
            name: '关键字',
            null: true,
            maxlength: 50
        }
    ]
}