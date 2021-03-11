import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueApollo from "vue-apollo";
import store from "./store";
import './bootstrap';
import ApolloClient from "apollo-boost";

const apolloClient = new ApolloClient({
    // You should use an absolute URL here
    uri: 'http://127.0.0.1:8000/graphql'
});

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
});

createApp(App)
    .use(store)
    .use(router)
    .use(apolloProvider)
    .mount("#app");



// Vue.filter("timeago", value => moment(value).fromNow());
// Vue.filter("longDate", value => moment(value).format("MMMM Do YYYY"));

// const app = new Vue({
//     el: '#app',
//     apolloProvider,
//     router
// });
