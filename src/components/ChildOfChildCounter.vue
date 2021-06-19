<template>
  <div>
    {{ count }}
  </div>
</template>

<script>
// This component to support test karma purpose
export default {
  name: 'ChildOfChildCounter',
  props: {
    count: {
      type: Number
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
