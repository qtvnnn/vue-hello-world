export default {
  // eslint-disable-next-line no-unused-vars
  install (Vue, options) {
    Vue.prototype.$toBold = function (text) {
      return `<b>${text}</b>`
    }
  }
}
