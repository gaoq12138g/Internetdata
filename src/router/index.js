import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Error from '../views/Error.vue'
import Upload from '../views/Upload.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '*',
        name: 'Error',
        component: Error
    },
    {
        path: '/upload',
        name: 'Upload',
        component: Upload
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/check',
                name: 'Check',
                components: {
                    default: Home,
                    main: () => import('../views/data/action/Check.vue')
                }
            },
            {
                path: '/punish',
                name: 'Punish',
                components: {
                    default: Home,
                    main: () => import('../views/data/action/Punish.vue')
                }
            },
            {
                path: '/force',
                name: 'Force',
                components: {
                    default: Home,
                    main: () => import('../views/data/action/Force.vue')
                }
            },
            {
                path: '/other',
                name: 'Other',
                components: {
                    default: Home,
                    main: () => import('../views/data/action/Other.vue')
                }
            },


        ]
    },
    {
        path: '/special',
        name: 'Special',
        component: Home,
        children: [
            {
                path: '/site',
                name: 'Site',
                components: {
                    default: Home,
                    main: () => import('../views/data/special/site.vue')
                }
            },
            {
                path: '/object-element',
                name: 'Object-element',
                components: {
                    main: () => import('../views/data/special/object-element.vue')
                }
            },
            {
                path: "/medicine",
                name: "Medicine",
                components: {
                    main: () => import("../views/data/special/production/medicine.vue")
                }
            },
            {
                path: "/food",
                name: 'Food',
                components: {
                    default: Home,
                    main: () => import('../views/data/special/production/food.vue')
                }
            },
            {
                path: "/cosmetic",
                name: 'cosmetic',
                components: {
                    default: Home,
                    main: () => import('../views/data/special/production/cosmetic.vue')
                }
            },
            {
                path: '/medical-instruments',
                name: 'Instrument',
                components: {
                    default: Home,
                    main: () => import('../views/data/special/production/medical-instruments.vue')
                }
            },
            {
                path: '/special-food',
                name: 'specialFood',
                components: {
                    default: Home,
                    main: () => import('../views/data/special/production/special-food.vue')
                }
            },
            {
                path: '/member',
                name: 'Member',
                components: {
                    default: Home,
                    main: () => import('../views/data/member/member.vue')
                }
            },
        ]
    },
    {
        path: "/base",
        name: "Base",
        component: Home,
        children: [
            {
                path: '/enterprise',
                name: 'Enterprise',
                components: {
                    default: Home,
                    main: () => import('../views/data/object/Enterprise.vue')
                }
            },
            {
                path: "/self-employed",
                name: "SelfEmployed",
                components: {
                    main: () => import("../views/data/object/self-employed.vue")
                }
            },
            {
                path: '/nature-person',
                name: 'Nature-person',
                components: {
                    default: Home,
                    main: () => import('../views/data/object/nature-person.vue')
                }
            },
            {
                path: '/legal-person',
                name: 'Legal-person',
                components: {
                    default: Home,
                    main: () => import('../views/data/object/legal-person.vue')
                }
            },
        ]
    },
    {
        path: '/knowledge',
        name: 'Knowledge',
        component: Home,
        children: [
            {
                path: '/case',
                name: 'Case',
                components: {
                    default: Home,
                    main: () => import('../views/data/knowledge/case.vue')
                }
            },
            {
                path: '/legal',
                name: 'Legal',
                components: {
                    default: Home,
                    main: () => import('../views/data/knowledge/legal.vue')
                }
            },
            {
                path: '/plan',
                name: 'Plan',
                components: {
                    default: Home,
                    main: () => import('../views/data/knowledge/plan.vue')
                }
            },
            {
                path: '/risk-feature',
                name: 'Risk-feature',
                components: {
                    default: Home,
                    main: () => import('../views/data/knowledge/risk-feature.vue')
                }
            },

            {
                path: '/rule',
                name: 'Rule',
                components: {
                    default: Home,
                    main: () => import('../views/data/knowledge/rule.vue')
                }
            },
        ]
    },
    {
        path: '/random',
        name: 'Random',
        component: Home,
        children: [
            {
                path: '/special-plan',
                name: 'Special-plan',
                components: {
                    default: Home,
                    main: () => import('../views/data/random/specialProgram.vue')
                }
            },
            {
                path: '/special-spot-check',
                name: 'Special-spot-check',
                components: {
                    default: Home,
                    main: () => import('../views/data/random/specialCheck.vue')
                }
            },
            {
                path: '/annual-plan',
                name: 'Annual-plan',
                components: {
                    default: Home,
                    main: () => import('../views/data/random/annualProgram.vue')
                }
            },
            {
                path: '/annual-spot-check',
                name: 'Annual-spot-check',
                components: {
                    default: Home,
                    main: () => import('../views/data/random/annualCheck.vue')
                }
            },
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router
