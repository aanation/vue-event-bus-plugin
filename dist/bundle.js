var eventBus = {install:function install(a){a.mixin({beforeCreate:function beforeCreate(){var a=this.$options;a.bus?this.$bus=a.bus:a.parent&&a.parent.$bus&&(this.$bus=a.parent.$bus);}});}};

export default eventBus;
