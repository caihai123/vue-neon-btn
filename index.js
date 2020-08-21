import VueNeonBtn from './src/main.vue';

/* istanbul ignore next */
VueNeonBtn.install = function(Vue) {
  Vue.component(VueNeonBtn.name, VueNeonBtn);
};

if (typeof window !== 'undefined' && window.Vue) {
  Vue.component(VueNeonBtn.name, VueNeonBtn);
}

export default VueNeonBtn;
