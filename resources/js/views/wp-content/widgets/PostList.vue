<template>
  <div class="container mx-auto px-4 w-full md:w-3/4 lg:w-3/5 xl:w-1/2 my-20">
    <h2 class="text-4xl">All Posts</h2>
<!--    <div v-if="$apollo.loading"></div>-->

<!--    <div v-else>-->
<!--      <PostListItem v-for="wp_posts in wp_posts"></PostListItem>-->
      <PostListItem v-for="wp_post in wp_posts" :key="wp_post.ID" :wp_post="wp_post" class="mt-10"></PostListItem>
<!--    </div>-->
  </div>
</template>

<script>
import gql from "graphql-tag";
import PostListItem from "../components/PostListItem";

export default {
  components: {
    PostListItem
  },
  apollo: {
      wp_posts: gql`
      {
        wp_posts {
          ID
          post_title
          post_content
          post_date
#          post_author {
#            ID
#            display_name
#          }

        }
      }
    `
  }
};
</script>
