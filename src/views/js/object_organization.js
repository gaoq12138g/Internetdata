import global from './global'

/*法人类型为社会团体法人*/
export default {
    rules: [
        {
            name: '行政相对人名称',
            null: false,
            maxlength: 200
        },
        {
            name: '行政相对人编码',
            null: false,
            expression: [global.expression.社会统一信用代码]
        },
        {
            name: '是否重点监管',
            null: true,
            type: 'Boolean'
        },
        {
            name: '法人名称',
            null: true,
            maxlength: 200
        },
        {
            name: '法人类型',
            null: true,
            dictionary: '法人类型'
        },
        {
            name: '法人设立的批准或核准机关',
            null: true,
            maxlength: 20
        },
        {
            name: '法人设立的批准或核准时间',
            null: true,
            type: 'Date'
        },
        {
            name: '法定代表人',
            null: true,
            maxlength: 200
        },
        {
            name: '法定代表人证件类型',
            null: true,
            dictionary: '证件类型'
        },
        {
            name: '法定代表人编码',
            null: true,
            expression: [global.expression.身份证号]
        },
        {
            name: '行业类别',
            null: true,
            dictionary: '行业类型'
        },
        {
            name: '组织类别',
            null: true,
            dictionary: '组织类别'
        },
        {
            name: '国民经济类型',
            null: true,
            dictionary: '国民经济类型'
        },
        {
            name: '经营范围',
            null: true
        },
        {
            name: '注册地址',
            null: true,
            maxlength: 500
        },
        {
            name: '行政区划代码',
            null: true,
            dictionary: '行政区划代码'
        },
        {
            name: '经营地址',
            null: true,
            maxlength: 100
        },
        {
            name: '经营地址经度',
            null: true,
            type: 'Number'
        },
        {
            name: '经营地址纬度',
            null: true,
            type: 'Number'
        },
        {
            name: '联系电话',
            null: true,
            maxlength: 100
        }
    ]
}