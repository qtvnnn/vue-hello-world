<template>
  <div>
    <ChildOfChildCounter :count="count" />
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import ChildOfChildCounter from '@/components/ChildOfChildCounter'

// This component to support test karma purpose
export default {
  name: 'ChildCounter',
  components: {
    ChildOfChildCounter
  },
  props: {
    count: {
      type: Number
    }
  },
  methods: {
    increment () {
      this.$emit('increment')
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
