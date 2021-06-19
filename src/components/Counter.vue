<template>
  <div id="main-wrapper">
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
    <!--{{ count }}-->
    <div>
      <ChildCounter :count="count" @increment="increment"/>
    </div>
    <div>
      <p v-html="$toBold('Bold plugin')"></p>
      <p>Item one value is: {{ items[0] }}</p>
      <button @click="changeItemOneNotReactive">changeItemOneNotReactive</button>
      <button @click="changeItemOneReactive">changeItemOneReactive</button>
    </div>
  </div>
</template>

<script>
import ChildCounter from '@/components/ChildCounter'
import { mapGetters } from 'vuex'

// This component to support test karma purpose
export default {
  name: 'Counter',
  components: {
    ChildCounter
  },
  computed: {
    ...mapGetters({
      count: 'counter/count'
    })
  },
  data () {
    return {
      msg: 'Welcome to Counter App',
      items: ['a', 'b', 'c']
    }
  },
  methods: {
    increment () {
      this.$store.dispatch('counter/increment')
    },
    changeItemOneNotReactive () {
      let vm = this
      vm.items[0] = 'x' // is NOT reactive
    },
    changeItemOneReactive () {
      let vm = this
      vm.$set(vm.items, 0, 'x')
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
