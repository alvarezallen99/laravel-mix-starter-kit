import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            //==============================
            //  SINGLE PAGE LAYOUTS
            //==============================
            path: '',
            component: () => import('@/layouts/Main.vue'),
            children: [
                {
                    path: '/',
                    name: 'dashboard',
                    component: () => import('@/views/Home.vue'),
                    meta: {
                        role: '',
                        authRequired: true
                    }
                }
            ]
        },
        //==============================
        //  FULL PAGE LAYOUTS
        //==============================
        {
            path: '',
            component: () => import('@/layouts/FullPage.vue'),
            children: [
                {
                    path: '/login',
                    name: 'login',
                    component: () => import('@/views/pages/Login.vue'),
                    meta: {
                        role: '',
                        authRequired: false
                    }
                }
            ]
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/'
        }
    ]
})

router.beforeEach((to, from, next) => {
    try {

    } catch (error) {

    }
    return next()
})

export default router
