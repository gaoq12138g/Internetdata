import global from './global'

/*个体工商户基本信息*/
export default {
    rules: [
        {
            name: '主体身份代码',
            null: false,
            maxlength: 60
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
            name: '名称',
            null: false,
            maxlength: 300
        },
        {
            name: '类型',
            null: true,
            maxlength: 20
        },
        {
            name: '类型名称',
            alias: '类型（中文名称）',
            null: true,
            maxlength: 400
        },
        {
            name: '经营者',
            null: false,
            maxlength: 200
        },
        {
            name: '经营场所',
            null: false,
            maxlength: 200
        },
        {
            name: '经营范围',
            null: false,
            maxlength: 3000
        },
        {
            name: '组成形式',
            null: true,
            maxlength: 80
        },
        {
            name: '组成形式名称',
            alias: '组成形式（中文名称）',
            null: true,
            maxlength: 600
        },
        {
            name: '登记机关',
            alias: '登记机关（中文名称）',
            null: false,
            maxlength: 80
        },
        {
            name: '登记机关名称',
            alias: '登记机关（中文名称）',
            null: false,
            maxlength: 600
        },
        {
            name: '登记状态',
            null: true,
            maxlength: 80
        },
        {
            name: '登记状态名称',
            alias: '登记状态（中文名称）',
            null: true,
            maxlength: 600
        },
        {
            name: '注册日期',
            null: false,
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
            maxlength: 200
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
        }
    ]
}