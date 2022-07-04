<template>
  <div class="container mx-auto px-4 w-full md:w-3/4 lg:w-3/5 xl:w-1/2 my-20">
    <h2 class="text-4xl">All Posts</h2>
    <div v-if="$apollo.loading"></div>
    <div v-else>
<!--      <PostListItem v-for="wp_posts in wp_posts"></PostListItem>-->
      <PostListItem v-for="wp_post in wp_posts" :key="wp_post.ID" :wp_post="wp_post" class="mt-10"></PostListItem>
    </div>

  </div>
</template>

<script>
import gql from "graphql-tag";
import PostListItem from "./PostListItem";


export default {
  components: {
    PostListItem
  },
  apollo: {
    wp_posts: gql`
    {
      wp_posts(where: {AND: [
        { column: POST_TYPE, operator: EQ, value: "post" }
        { column: POST_STATUS, operator: EQ, value: "publish" }
      ]
      }) {
        ID
        post_title
        post_excerpt
        post_content
        post_date
        post_author
      }
    }
    `
  }
};
</script>
