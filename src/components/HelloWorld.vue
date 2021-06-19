<template>
  <div class="hello" id="main-wrapper">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
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
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
