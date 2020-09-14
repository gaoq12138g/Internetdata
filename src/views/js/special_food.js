import global from './global'

/*特定产品（食品）信息*/
export default {
    rules: [
        {
            name: '食品',
            null: false,
            maxlength: 40
        },
        {
            name: '食品添加剂类别',
            null: false,
            maxlength: 35
        },
        {
            name: '类别名称',
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
            null: true,
            dictionary: '行政区划代码'
        },
        {
            name: '规格',
            null: false,
            maxlength: 20
        },
        {
            name: '净含量',
            null: false,
            maxlength: 15
        },
        {
            name: '生产日期',
            null: false,
            type: 'Date'
        },
        {
            name: '成分或者配料表',
            null: false,
            maxlength: 100
        },
        {
            name: '保质期',
            null: false,
            maxlength: 10
        },
        {
            name: '产品标准代号',
            null: true,
            maxlength: 50
        },
        {
            name: '储存条件',
            null: false,
            maxlength: 100
        },
        {
            name: '所使用的食品添加剂在国家标准中的通用名称',
            null: false,
            maxlength: 50
        },
        {
            name: '生产许可证编号',
            null: false,
            maxlength: 40
        }
    ]
}