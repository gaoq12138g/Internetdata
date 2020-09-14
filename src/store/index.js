import Vue from 'vue'
import Vuex from 'vuex'
import config from '../assets/configuration.json'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        config: config.configs[config.index],
        serviceUrl: config.configs[config.index].dataService,
        currentUser: {},
        dictionary: [],
        menu: [{
            id: 'matter',
            title: '监管事项'
        }, {
            id: 'object',
            title: '监管对象',
            children: [{
                id: 'base',
                title: '基础信息',
                children: [{
                    id: 'counterpart',
                    title: '行政相对人',
                    children: [{
                        id: 'enterprise',
                        title: '企业'
                    }, {
                        id: 'self-employed',
                        title: '个体工商户'
                    }, {
                        id: 'legal-person',
                        title: '社会团体法人'
                    }, {
                        id: 'nature-person',
                        title: '特定自然人'
                    }]
                }]
            }, {
                id: 'special',
                title: '特种设备',
                children: [{
                    id: 'production',
                    title: '特定产品',
                    children: [{
                        id: 'food',
                        title: '食品'
                    }, {
                        id: 'special-food',
                        title: '婴幼儿配方奶粉、保健食品、特殊医学用途配方食品'
                    }, {
                        id: 'medicine',
                        title: '药品'
                    }, {
                        id: 'cosmetic',
                        title: '化妆品'
                    }, {
                        id: 'medical-instruments',
                        title: '医疗器械'
                    }]
                }, {
                    id: 'site',
                    title: '场地场所'
                }, {
                    id: 'object-element',
                    title: '监管对象要素'
                }]
            }]
        }, {
            id: 'action',
            title: '监管行为',
            children: [{
                id: 'check',
                title: '行政检查行为'
            }, {
                id: 'punish',
                title: '行政处罚行为'
            }, {
                id: 'force',
                title: '行政强制行为'
            }, {
                id: 'other',
                title: '其他行为'
            }]
        }, {
            id: 'member',
            title: '执法人员'
        }, {
            id: 'knowledge',
            title: '知识库',
            children: [{
                id: 'legal',
                title: '法律法规库'
            }, {
                id: 'case',
                title: '案例库'
            }, {
                id: 'plan',
                title: '预案库'
            }, {
                id: 'risk-feature',
                title: '风险特征库'
            }, {
                id: 'rule',
                title: '规则信息库'
            }]
        }, {
            id: 'double-random',
            title: '双随机',
            children: [{
                id: 'annual-plan',
                title: '公开数据的年度计划'
            }, {
                id: 'annual-spot-check',
                title: '公开数据的年度计划抽查的监管对象'
            }, {
                id: 'special-plan',
                title: '公开数据的专项计划'
            }, {
                id: 'special-spot-check',
                title: '公开数据的专项计划抽查的监管对象'
            }]
        }]
    },
    mutations: {
        setUser(state, user) {
            state.currentUser = user;
        },
        setDictionary(state, data) {
            state.dictionary = data;
        }
    },
    actions: {
    },
    modules: {
    }
})
