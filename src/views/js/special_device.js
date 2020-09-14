import global from './global'

/*特种设备基础信息*/
export default {
    rules: [
        {
            name: '产品品牌',
            null: false,
            maxlength: 40
        },
        {
            name: '生产厂家',
            null: false,
            maxlength: 50
        },
        {
            name: '生产企业统一社会信用代码',
            null: false,
            expression: [global.expression.社会统一信用代码]
        },
        {
            name: '出厂日期',
            null: false,
            type: 'Date'
        },
        {
            name: '检验时间',
            null: false,
            type: 'Date'
        },
        {
            name: '设备使用单位',
            null: false,
            maxlength: 100
        },
        {
            name: '使用单位统一社会信用代码',
            null: false,
            expression: [global.expression.社会统一信用代码]
        },
        {
            name: '辖属区域',
            null: true,
            maxlength: 20
        },
        {
            name: '下次检验时间',
            null: false,
            type: 'Date'
        },
        {
            name: '设备有效期',
            null: false,
            type: 'Date'
        },
        {
            name: '设备编码',
            null: false,
            maxlength: 100
        },
        {
            name: '检验单位',
            null: true,
            maxlength: 100
        }
    ]
}