import global from './global'

/*场地场所信息*/
export default {
    rules: [
        {
            name: '场所场地',
            null: false,
            maxlength: 300
        },
        {
            name: '所在地区',
            null: false,
            maxlength: 30
        },
        {
            name: '所在地区行政区划代码',
            null: false,
            dictionary: '行政区划代码'
        },
        {
            name: '责任单位',
            null: false,
            maxlength: 50
        },
        {
            name: '单位统一社会信用代码',
            null: false,
            expression: [global.expression.社会统一信用代码]
        },
        {
            name: '责任人',
            null: false,
            maxlength: 30
        },
        {
            name: '责任人证件类型',
            null: false,
            dictionary: '证件类型'
        },
        {
            name: '责任人证件编码',
            null: false,
            maxlength: 20
        },
        {
            name: '联系电话',
            null: false,
            maxlength: 100
        },
        {
            name: '场所用途',
            null: false,
            maxlength: 50
        },
        {
            name: '场所规模',
            null: false,
            maxlength: 200
        },
        {
            name: '投入使用开始时间',
            null: false,
            type: 'Date'
        },
        {
            name: '使用寿命',
            null: false,
            maxlength: 10
        }
    ]
}