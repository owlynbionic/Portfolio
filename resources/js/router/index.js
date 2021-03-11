import { createRouter, createWebHistory } from "vue-router";
// import VueApollo from "vue-apollo";
// import ApolloClient from "apollo-boost";
import moment from "moment";

const routes = [
    {
        path: '/',
        name: 'index',
        component: () =>
                import("../views/wp-content/widgets/PostList.vue")
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import("../views/pages/About.vue")
    },
    // {
    //     path: '/post',
    //     name: 'wp_posts',
    //     component: () =>
    //         import("../views/wp-content/widgets/PostList.vue")
    // },
    {
        path: '/post/:id',
        name: 'wp_post',
        component: () =>
            import("../views/wp-content/pages/Post.vue")
    },
    {
        path: '/authors/:id',
        name: 'author',
        component: () =>
            import("../views/wp-content/widgets/AuthorPostList.vue")
    },
    {
        // path: "*",
        path: "/:catchAll(.*)",
        name: "404",
        component: () =>
            import("../views/pages/error/NotFound.vue"),
        meta: {
            requiresAuth: false
        }
    }
];
//
// const apolloClient = new ApolloClient({
//     // You should use an absolute URL here
//     uri: 'http://127.0.0.1:8000/graphql'
// });
//
// const apolloProvider = new VueApollo({
//     defaultClient: apolloClient,
// });

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    // apolloProvider,
    routes
});

export default router;
