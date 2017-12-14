export default {
    install(Vue) {
        Vue.mixin({
            beforeCreated: function() {
                const options = this.$options
                if (options.bus) {
                  this.$bus = options.bus; 
                } else if (options.parent && options.parent.$bus) {
                  this.$bus = options.parent.$bus
                }
            }
        })
    }
}