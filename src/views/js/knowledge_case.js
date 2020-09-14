import global from './global'

/*案例库*/
export default {
    rules: [
        {
            name: '案例编号',
            null: false,
            maxlength: 50
        },
        {
            name: '部门类别',
            null: false,
            maxlength: 50
        },
        {
            name: '业务类别',
            null: false,
            maxlength: 50
        },
        {
            name: '监测事项',
            null: true,
            maxlength: 50
        },
        {
            name: '案例名称',
            null: false,
            maxlength: 300
        },
        {
            name: '案情简介',
            null: true,
            maxlength: 500
        },
        {
            name: '领域',
            null: true,
            maxlength: 50
        },
        {
            name: '起因',
            null: true,
            maxlength: 50
        },
        {
            name: '过程',
            null: true
        },
        {
            name: '处置',
            null: true
        },
        {
            name: '结果',
            null: false,
            maxlength: 500
        },
        {
            name: '结论',
            null: true,
            maxlength: 500
        },
        {
            name: '发布日期',
            null: false,
            type: 'Date'
        }
    ]
}