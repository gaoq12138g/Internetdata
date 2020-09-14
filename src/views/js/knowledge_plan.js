import global from './global'

/*预案库*/
export default {
    rules: [
        {
            name: '预案编号',
            null: false,
            maxlength: 50
        },
        {
            name: '事件级别',
            null: false,
            maxlength: 50
        },
        {
            name: '应急措施',
            null: false,
            maxlength: 100
        },
        {
            name: '应急资源',
            null: true,
            maxlength: 200
        },
        {
            name: '紧急类型',
            null: false,
            maxlength: 50
        },
        {
            name: '紧急规模',
            null: false,
            maxlength: 500
        },
        {
            name: '应急预案',
            null: true,
            maxlength: 500
        },
        {
            name: '应急机构',
            null: false,
            maxlength: 50
        },
        {
            name: '触发条件',
            null: true,
            maxlength: 500
        },
        {
            name: '所属行业',
            null: false,
            maxlength: 100
        }
    ]
}