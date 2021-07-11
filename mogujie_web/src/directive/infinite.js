import InfiniteScroll from './direct';
import Vue from 'vue';

const install = function(Vue) {
    Vue.directive('InfiniteScroll', InfiniteScroll);
};

// if (!Vue.prototype.$isServer && window.Vue) {
//     window.infiniteScroll = InfiniteScroll;
//     Vue.use(install); // eslint-disable-line
// }

InfiniteScroll.install = install;
export default InfiniteScroll;
