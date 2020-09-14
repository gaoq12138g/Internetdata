import dictionary from './dictionary.json'
import global from './global'

export default {
    typeName: '',
    message: [],
    rules: [],
    verify(list, type){
        this.message = [];
        this.factory(type);
        var len = list.length, pass = 0, fail = 0;
        for (var i = 0; i < len; i++) {
            this.message.push("校验第" + (i + 1) + "条数据");
            let valid = this.isValid(list[i]);
            if(valid) pass++;
            else fail++;
        }
        let percent = len == 0? 0: (pass / len * 100).toFixed(2);
        this.message.push("校验完成，共校验数据" + len + "条，其中" + pass + "条通过，" + fail + "条不通过，通过率" + percent + "%")
        return {
            pass: len == pass,
            message: this.message
        };
    },
    factory(type){
        switch(type){
            case '行政检查行为':
                this.typeName = 'check_action';
                break;
            case '行政处罚行为':
                this.typeName = 'punish_action';
                break;
            case '行政强制行为':
                this.typeName = 'force_action';
                break;
            case '其他行为':
                this.typeName = 'other_action';
                break;
            case '特种设备':
                this.typeName = 'special_device';
                break;
            case '食品':
                this.typeName = 'special_food';
                break;
            case '配方奶粉':
                this.typeName = 'special_milk';
                break;
            case '药品':
                this.typeName = 'special_medicine';
                break;
            case '化妆品':
                this.typeName = 'special_cosmetic';
                break;
            case '医疗器械':
                this.typeName = 'special_medicine';
                break;
            case '场地场所':
                this.typeName = 'special_site';
                break;
            case '监管对象信息要素':
                this.typeName = 'special_element';
                break;
            case '执法人员':
                this.typeName = 'officer';
                break;
            case '双随机计划':
                this.typeName = 'random_plan';
                break;
            case '双随机抽查的监管对象':
                this.typeName = 'random_check';
                break;
            case '法律法规库':
                this.typeName = 'knowledge_law';
                break;
            case '案例库':
                this.typeName = 'knowledge_case';
                break;
            case '预案库':
                this.typeName = 'knowledge_plan';
                break;
            case '风险特征库':
                this.typeName = 'knowledge_risk';
                break;
            case '规则信息库':
                this.typeName = 'knowledge_rule';
                break;
            case '企业法人':
                this.typeName = 'object_enterprise';
                break;
            case '个体工商户':
                this.typeName = 'object_individual';
                break;
            case '社会团体法人':
                this.typeName = 'object_organization';
                break;
            case '特定自然人':
                this.typeName = 'object_person';
                break;
        }
        let verify = require('./' + this.typeName);
        this.rules = verify.default.rules;
    },
    isValid(item) {
        let valid = true;
        for(let i=0; i<this.rules.length; i++){
            let rule = this.rules[i];
            let name = item[rule.name]? rule.name: rule.alias;
            if(!name) name = rule.name;
            let val = item[name];
            if(val) val = val.toString();
            if(this.isNull(val, rule)){
                this.message.push('[' + name + ']' + global.message.null);
                valid = false;
                continue;
            }
            if(!this.isDate(val, rule)){
                this.message.push('[' + name + ']:[' + val + ']' + global.message.date);
                valid = false;
                continue;
            }
            if(!this.isArray(val, rule)){
                this.message.push('[' + name + ']:[' + val + ']' + global.message.array);
                valid = false;
                continue;
            }
            if(!this.isNumber(val, rule)){
                this.message.push('[' + name + ']:[' + val + ']' + global.message.number);
                valid = false;
                continue;
            }
            if(!this.isBoolean(val, rule)){
                this.message.push('[' + name + ']:[' + val + ']' + global.message.dictionary);
                valid = false;
                continue;
            }
            if(!this.length(val, rule)){
                this.message.push('[' + name + ']:[' + val + ']' + global.message.length);
                valid = false;
                continue;
            }
            if(!this.maxLength(val, rule)){
                this.message.push('[' + name + ']:[' + val + ']' + global.message.maxlength);
                valid = false;
                continue;
            }
            if(!this.regExp(val, rule)){
                this.message.push('[' + name + ']:[' + val + ']' + global.message.verify);
                valid = false;
                continue;
            }
            if(!this.dictionary(val, rule)){
                this.message.push('[' + name + ']:[' + val + ']' + global.message.dictionary);
                valid = false;
                continue;
            }
            if(rule.funcName){
                let tn = require('./' + this.typeName);
                let func = tn.default[rule.funcName];
                let res = func(item);
                if(!res.pass){
                    this.message.push('[' + name + ']:[' + val + ']' + res.message);
                    valid = false;
                    continue;
                }
            }
        }
        return valid;
    },
    isNull(val, rule){
        if(!rule.null)
            return val == null || val == undefined || val.toString().trim().length == 0;
        else
            return false;
    },
    isBoolean(val, rule){
        let pass = true;
        if(!rule.null || (rule.null && val != null && val != undefined && isNaN(val))){
            if(rule.type && rule.type == 'Boolean'){
                if(val != '是' && val != '否')
                    pass = false;
            }
        }
        return pass;
    },
    isDate(val, rule){
        let pass = true;
        if(!rule.null || (rule.null && val != null && val != undefined && val.length > 0)){
            if(rule.type && rule.type == 'Date'){
                if(val.toString().length != 10)
                    pass = false;
                let reg = new RegExp(global.日期格式);
                if(!reg.test(val.toString()))
                    pass = false;
            }
        }
        return pass;
    },
    isArray(val, rule){
        let pass = true;
        if(!rule.null || (rule.null && val != null && val != undefined && val.length > 0)){
            if(rule.type && rule.type == 'Array'){
                if(val.toString().split(',').length < 2)
                    pass = false;
            }
        }
        return pass;
    },
    isNumber(val, rule){
        let pass = true;
        if(!rule.null || (rule.null && val != null && val != undefined && isNaN(val))){
            if(rule.type && rule.type == 'Number')
                pass = parseFloat(inputData).toString() == "NaN";
        }
        return pass;
    },
    length(val, rule){
        let pass = true;
        if(!rule.null || (rule.null && val != null && val != undefined && val.length > 0)){
            if(rule.length && val.length != rule.length)
                pass = false;
        }
        return pass;
    },
    maxLength(val, rule){
        let pass = true;
        if(!rule.null || (rule.null && val != null && val != undefined && val.length > 0)){
            if(rule.maxlength && val.length > rule.maxlength)
                pass = false;
        }
        return pass;
    },
    regExp(val, rule){
        let res = true;
        if(!rule.null || (rule.null && val != null && val != undefined && val.length > 0)){
            if(rule.expression){
                var pass = false;
                for(var j=0; j<rule.expression.length; j++){
                    let reg = new RegExp(rule.expression[j]);
                    pass = reg.test(val);
                    if(pass) break;
                }
                if(!pass) res = false;
            }
        }
        return res;
    },
    dictionary(val, rule){
        let pass = true;
        if(!rule.null || (rule.null && val != null && val != undefined && val.length > 0)){
            if(rule.dictionary){
                let Enumerable = require('./linq');
                let count = Enumerable.from(dictionary).count(dic=> dic.类型名称 == rule.dictionary && dic.编号 == val);
                pass = count > 0;
            }
        }
        return pass;
    }
}