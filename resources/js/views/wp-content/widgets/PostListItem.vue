<template>
    <div>
        <router-link :to="{name: 'wp_post', params: {id: wp_post.ID}}">
            <h4>{{ wp_post.post_title }}</h4>
        </router-link>
    </div>
</template>

<script>
import gql from "graphql-tag";

export default {
    apollo: {
        wp_users: gql`
    {
      wp_users {
        ID
        display_name
      }
    }
    `
    },
    props: {
        wp_post: Object
    }
};
</script>
