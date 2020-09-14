import global from './global'

/*双随机-计划*/
export default {
    rules: [
        {
            name: '计划ID',
            null: false,
            maxlength: 100
        },
        {
            name: '计划名称',
            null: false,
            maxlength: 500
        },
        {
            name: '年度',
            null: false,
            funcName: 'verify_year'
        },
        {
            name: '地区名',
            null: false,
            maxlength: 200
        },
        {
            name: '地区行政编码',
            null: false,
            dictionary: '行政区划代码'
        },
        {
            name: '监管部门统一社会信用代码',
            null: true,
            expression: [global.expression.社会统一信用代码]
        },
        {
            name: '监管部门',
            null: false,
            dictionary: '江苏省监管部门代码'
        },
        {
            name: '抽查比例',
            null: true,
            funcName: 'verify_ratio'
        }
    ],
    verify_year(item){
        let res = {
            pass: false
        };
        var now = new Date().getFullYear();
        for(let i=0; i<=5; i++){
            if((now - 1).toString() == item.年份){
                ers.pass = true;
                break;
            }
        }
        if(!res.pass)
            res.message = "年份不通过";
        return pass;
    },
    verify_ratio(item){
        let res = {
            pass: true
        };
        try{
            let pct = parseFloat(item.抽查比例);
            if(pct < 0 || pct > 1)
                res.pass = false;
        }
        catch{
            res.pass = false;
        }
        if(!res.pass)
            res.message = "抽查比例验证不通过";
        return res;
    }
}