export default {
    expression: {
        数字: /^[0-9]*$/,
        社会统一信用代码: /[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}/,
        身份证号: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
        日期格式: /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/
    },
    message: {
        null: '为必填项，不能为空',
        verify: '验证不通过',
        date: '日期格式有误',
        array: '原则上不少于两个',
        length: '长度有误',
        number: '不是数值类型',
        maxlength: '值超长',
        dictionary: '不在值域范围内'
    }
}