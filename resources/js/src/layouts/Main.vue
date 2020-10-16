<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      color="indigo"
      dark
    >

      <v-list dense>

        <v-list-item class="ml-1" two-line :class="miniVariant && 'px-0'">
            <v-list-item-avatar>
                <!-- <img src="https://randomuser.me/api/portraits/men/81.jpg"> -->
                <v-icon x-large>mdi-account-circle</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title>Juan Dela Cruze</v-list-item-title>
                <v-list-item-subtitle>(Admin)</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item
            link
            dense
            style="pa-5"
            @click="navigate('/')"
          >
            <v-subheader>Dashboard</v-subheader>
        </v-list-item>

    </v-list>

    </v-navigation-drawer>

    <v-app-bar
      app
      dense
    >

    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="flex-grow-1"></div>
      <v-toolbar-title class="mr-7"><span style="font-size: 12px;font-weight: bold;">Welcome to Expense Manager</span></v-toolbar-title>
      <v-toolbar-title><span style="font-size: 12px;font-weight: bold;"><a @click="logout()">Log out</a></span></v-toolbar-title>
    </v-app-bar>

    <v-main>
        <router-view />
    </v-main>
    <!-- <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        isAdmin: false,
        userItems: [
          { title: 'Dashboard', type: 'header', enabled: false, url: '/' },
          { title: 'Account Management', type: 'header', enabled: true , url: null },
          { title: 'Change Password', type: 'submenu', enabled: false , url: '/change_password' },
          { title: 'Expense Management', type: 'header', enabled: true , url: null },
          { title: 'Expenses', type: 'submenu', enabled: false , url: '/expenses' },
        ],
        items: [
          { title: 'Dashboard', type: 'header', enabled: false, url: '/' },
          { title: 'User Management', type: 'header', enabled: true , url: null },
          { title: 'Roles', type: 'submenu', enabled: false , url: '/roles' },
          { title: 'Users', type: 'submenu', enabled: false , url: '/users' },
          { title: 'Expense Management', type: 'header', enabled: true , url: null },
          { title: 'Expense Categories', type: 'submenu', enabled: false , url: '/expense_categories' },
          { title: 'Expenses', type: 'submenu', enabled: false , url: '/expenses' },
        ],
        color: 'primary',
        colors: [
          'primary',
          'blue',
          'success',
          'red',
          'teal',
        ],
        right: false,
        permanent: true,
        miniVariant: false,
        expandOnHover: false,
        background: false,
      }
    },
    computed: {
      bg () {
        return this.background ? 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg' : undefined
      },
    },
    created(){
    },
    methods:{
      navigate(url){
          if(url){
              this.$router.push({ path: url})
              console.clear()
          }
      },
      logout() {
        this.$http.post(`${this.url}/v1/auth/logout`)
          .then(() => {
            this.Logout();
            this.$router.push("/login").catch(()=>{});
          })
          .catch(() => {
            this.Logout();
            this.$router.push("/login").catch(()=>{});
          });
      }
    }
  }
</script>
