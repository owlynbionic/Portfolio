import { createApp } from "vue";
import moment from 'moment';
import App from "./App.vue";
import router from "./router";


// import VueApollo from "vue-apollo";
// import store from "./store";
import './bootstrap';
// import ApolloClient from "apollo-boost";
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'


const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:8000/graphql',
  // credentials: 'include',
  fetchOptions: {
    mode: 'no-cors',
  },
})

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
})

// Create a provider
const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
})

// const app = createApp(App)
// app.use(store);
// app.use(router);
// app.use(apolloProvider);
// app.mount("#app");

moment.locale('en');

let app=createApp(App);

app.config.globalProperties.$moment=moment;

app
  .use(router)
  .use(apolloProvider)
  .mount("#app");





