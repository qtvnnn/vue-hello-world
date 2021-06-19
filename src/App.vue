<template>
  <div id="app">
    <div id="overlay-common" />
    <BaseHeader v-if="authenticated" @authenticated="setAuthenticated"/>
    <div id="nav">
      <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
    </div>
    <router-view @authenticated="setAuthenticated" />
  </div>
</template>

<script>
import BaseHeader from '@/components/common/BaseHeader'

export default {
  name: 'App',
  components: {
    BaseHeader
  },
  data () {
    return {
      authenticated: true,
      mockAccount: {
        username: 'admin',
        password: 'admin'
      }
    }
  },
  mounted () {
    if (!this.authenticated) {
      this.$router.replace({ name: 'Login' })
    }
  },
  methods: {
    setAuthenticated (status) {
      this.authenticated = status
    },
    logout () {
      this.authenticated = false
    }
  }
}
</script>

<style lang="scss">
@import "assets/css/base/index";
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
