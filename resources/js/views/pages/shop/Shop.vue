<template>
  <div>
    <NavbarDefault />
    <div class="container mx-auto px-4 w-full md:w-3/4 lg:w-3/5 xl:w-1/2 my-20">
      <h2 class="text-4xl">Services</h2>
      <div v-if="$apollo.loading"></div>

      <div v-else>
        <PostListItem v-for="wp_post in wp_posts" :key="wp_post.ID" :wp_post="wp_post" class="mt-10"></PostListItem>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import PostListItem from "../blog/PostListItem";
import NavbarDefault from "../../../components/core/navbars/NavbarDefault";

export default {
  name: "Shop",
  components: {
    PostListItem,
    NavbarDefault
  },
  apollo: {
    wp_posts: gql`
    {
      wp_posts(where: {AND: [
        { column: POST_TYPE, operator: EQ, value: "product" }
        { column: POST_STATUS, operator: EQ, value: "publish" }
      ]
      }) {
        ID
        post_title
        post_content
        post_date
        post_author
      }
    }
    `
  }
};
</script>

<style scoped>
  @import "../../../../../resources/css/styles.min.css";
</style>
