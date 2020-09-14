import global from './global'

/*企业法人基本信息*/
export default {
    rules: [
        {
            name: '主体身份代码',
            null: false,
            maxlength: 120
        },
        {
            name: '注册号',
            null: true,
            maxlength: 50
        },
        {
            name: '统一社会信用代码',
            null: true,
            expression: [global.expression.社会统一信用代码]
        },
        {
            name: '企业名称',
            null: false
        },
        {
            name: '行业类别',
            null: true,
            dictionary: '行业类别'
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
            name: '企业类型',
            null: true,
            maxlength: 500
        },
        {
            name: '企业类型名称',
            alias: '企业类型（中文名称）',
            null: true
        },
        {
            name: '法定代表人',
            alias: '法定代表人/负责人/投资人',
            null: false,
            maxlength: 600
        },
        {
            name: '注册资本',
            alias: '注册资本/注册资金/成员出资总额',
            null: true,
            type: 'Number'
        },
        {
            name: '注册资本币种',
            null: true,
            maxlength: 9
        },
        {
            name: '注册资本币种名称',
            alias: '注册资本币种（中文名称）',
            null: true,
            maxlength: 150
        },
        {
            name: '住所',
            null: true
        },
        {
            name: '营业场所/主要经营场所/经营场所',
            alias: '营业场所',
            null: true
        },
        {
            name: '经营期限自/营业期限自/合伙期限自',
            alias: '经营期限自',
            null: true,
            type: 'Date'
        },
        {
            name: '经营期限至',
            alias: '经营期限至/营业期限至/合伙期限至',
            null: true,
            type: 'Date'
        },
        {
            name: '经营范围',
            null: true
        },
        {
            name: '业务范围类型',
            null: true,
            maxlength: 600
        },
        {
            name: '业务范围类型名称',
            alias: '业务范围类型（中文名称）',
            null: true
        },
        {
            name: '登记机关',
            null: true,
            maxlength: 18
        },
        {
            name: '登记机关名称',
            alias: '登记机关（中文名称）',
            null: true,
            maxlength: 600
        },
        {
            name: '登记状态',
            null: true,
            maxlength: 6
        },
        {
            name: '登记状态名称',
            alias: '登记状态（中文名称）',
            null: true,
            maxlength: 60
        },
        {
            name: '成立日期',
            null: true,
            type: 'Date'
        },
        {
            name: '核准日期',
            null: true,
            type: 'Date'
        },
        {
            name: '吊销日期',
            null: true,
            type: 'Date'
        },
        {
            name: '吊销原因',
            null: true,
            maxlength: 600
        },
        {
            name: '联络员姓名',
            null: true,
            maxlength: 150
        },
        {
            name: '联络员身份证号码',
            null: true,
            expression: [global.expression.身份证号]
        },
        {
            name: '联络员手机号码',
            null: true,
            maxlength: 300
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
        }
    ]
}