import global from './global'

/*执法人员信息*/
export default {
    rules: [
        {
            name: '姓名',
            null: false,
            maxlength: 50
        },
        {
            name: '所属主体全称',
            alias: '所属主体（受委托组织）全称',
            null: false,
            maxlength: 100
        },
        {
            name: '身份证号',
            null: true,
            expression: [global.expression.身份证号]
        },
        {
            name: '性别',
            null: true,
            dictionary: '性别'
        },
        {
            name: '出生日期',
            null: true,
            type: 'Date'
        },
        {
            name: '政治面貌',
            null: true,
            dictionary: '政治面貌'
        },
        {
            name: '职级',
            null: true,
            dictionary: '职级'
        },
        {
            name: '民族',
            null: true,
            dictionary: '民族'
        },
        {
            name: '最高学历',
            null: true,
            dictionary: '最高学历'
        },
        {
            name: '执法人员性质',
            null: true,
            dictionary: '执法人员性质'
        },
        {
            name: '是否监督人员',
            null: true,
            type: 'Boolean'
        },
        {
            name: '是否具有法律职业资格',
            null: true,
            type: 'Boolean'
        },
        {
            name: '联系电话',
            null: true,
            maxlength: 50
        },
        {
            name: '执法证号',
            null: false,
            maxlength: 100
        },
        {
            name: '学历专业',
            null: true,
            maxlength: 100
        },
        {
            name: '发证机关',
            null: true,
            maxlength: 100
        },
        {
            name: '执法区域',
            null: true,
            maxlength: 100
        },
        {
            name: '执法类别',
            null: true,
            maxlength: 200
        },
        {
            name: '证件有效期',
            null: true,
            type: 'Date'
        },
        {
            name: '行政区划代码',
            null: true,
            dictionary: '行政区划代码'
        },
        {
            name: '部门编码',
            null: true,
            dictionary: '江苏省监管部门代码'
        }
    ]
}