const myPlugins = {
    install(Vue){

        Vue.mixin({
            data:()=>({
                // url: process.env.MIX_APP_URL, // access .env file "VUE_APP_URL" w/c is url to server side script
                // app_name: process.env.MIX_APP_NAME
            }),
            methods:{
                setToken(str) {
                    Vue.prototype.$http.defaults.headers.common.Authorization = `Bearer ${str}`
                },
                parseJson(str) {
                    return wfunctions.IsJsonString(str) ? JSON.parse(str) : 'Invalid JSON Data'
                },
                Logout(){
                    localStorage.removeItem('user')
                },
            }
        })
    }
}
export default myPlugins
