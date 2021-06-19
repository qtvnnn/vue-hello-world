<template>
  <div class="hello">
    <h1 id="">{{ msg }}</h1>
    <ul>
      <li>
        <a
          href="/"
          target="_blank"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="/login"
          target="_blank"
        >
          Login
        </a>
      </li>
      <li>
        <a
          href="/counter"
          target="_blank"
        >
          Counter
        </a>
      </li>
    </ul>
    <h2>Login form</h2>
    <form>
      <div class="container">
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Login Page',
      input: {
        username: '',
        password: ''
      }
    }
  },
  beforeCreate () {
    console.log('beforeCreate')
  },
  created () {
    console.log('created')
  },
  beforeMount () {
    console.log('beforeMount')
  },
  mounted () {
    console.log('mounted')
  },
  beforeUpdate () {
    console.log('beforeUpdate')
  },
  updated () {
    console.log('updated')
  },
  beforeDestroy () {
    console.log('beforeDestroy')
  },
  destroyed () {
    console.log('destroyed')
  },
  methods: {
    login () {
      // eslint-disable-next-line eqeqeq
      if (this.input.username !== '' && this.input.password != '') {
        // eslint-disable-next-line eqeqeq
        if (this.input.username === this.$parent.mockAccount.username &&
          this.input.password === this.$parent.mockAccount.password) {
          this.$emit('authenticated', true)
          this.$router.replace({ name: 'secure' })
        } else {
          console.log('The username and / or password is incorrect')
        }
      } else {
        console.log('A username and password must be present')
      }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
