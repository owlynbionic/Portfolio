// import ApolloClient from 'apollo-boost';
// import moment from "moment";
// import Vue from 'vue';
// import VueApollo from 'vue-apollo';
// import VueRouter from 'vue-router';
// import AuthorPostList from './AuthorPostList';
// import './bootstrap';
// import NotFound from './NotFound';
// import Post from './Post';
// import PostList from './PostList';
//
// window.Vue = Vue;
// Vue.use(VueRouter);
//
// const routes = [
//     {
//         path: '/',
//         name: 'index',
//         component: PostList
//     },
//     {
//         path: '/post/:id',
//         name: 'wp_post',
//         component: Post
//     },
//     {
//         path: '/authors/:id',
//         name: 'author',
//         component: AuthorPostList
//     },
//     {
//         path: '*',
//         name: '404',
//         component: NotFound
//     }
// ];
//
// Vue.use(VueApollo);
// const apolloClient = new ApolloClient({
//     // You should use an absolute URL here
//     uri: 'http://127.0.0.1:8000/graphql'
// });
//
// const apolloProvider = new VueApollo({
//     defaultClient: apolloClient,
// });
//
// const router = new VueRouter({
//     mode: 'history',
//     routes
// });
//
//
// Vue.filter("timeago", value => moment(value).fromNow());
// Vue.filter("longDate", value => moment(value).format("MMMM Do YYYY"));
//
// const app = new Vue({
//     el: '#app',
//     apolloProvider,
//     router
// });
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./core/services/store";
import ApiService from "./core/services/api.service";
import MockService from "./core/mock/mock.service";
import { VERIFY_AUTH } from "./core/services/store/auth.module";
import { RESET_LAYOUT_CONFIG } from "./core/services/store/config.module";

Vue.config.productionTip = false;

// Global 3rd party plugins
import "popper.js";
import "tooltip.js";
import PerfectScrollbar from "perfect-scrollbar";
window.PerfectScrollbar = PerfectScrollbar;
import ClipboardJS from "clipboard";
window.ClipboardJS = ClipboardJS;

// Vue 3rd party plugins
import i18n from "./core/plugins/vue-i18n";
import vuetify from "./core/plugins/vuetify";
import "./core/plugins/portal-vue";
import "./core/plugins/bootstrap-vue";
import "./core/plugins/perfect-scrollbar";
import "./core/plugins/highlight-js";
import "./core/plugins/inline-svg";
import "./core/plugins/apexcharts";
import "./core/plugins/treeselect";
import "./core/plugins/metronic";
// import "@mdi/font/css/materialdesignicons.css";

// API service init
ApiService.init();

// Remove this to disable mock API
MockService.init();

router.beforeEach((to, from, next) => {
    // Ensure we checked auth before each page load.
    Promise.all([store.dispatch(VERIFY_AUTH)]).then(next);

    // reset config to initial state
    store.dispatch(RESET_LAYOUT_CONFIG);

    // Scroll page to top on every route change
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
});

new Vue({
    router,
    store,
    i18n,
    vuetify,
    render: h => h(App)
}).$mount("#app");
