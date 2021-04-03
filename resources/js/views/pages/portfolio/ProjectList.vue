<template>


    <div class="container mx-auto px-4 w-full md:w-3/4 lg:w-3/5 xl:w-1/2 my-20">
      <div v-if="$apollo.loading"></div>

      <div v-else>
        <ProjectListItem v-for="wp_post in wp_posts" :key="wp_post.ID" :wp_post="wp_post" class="mt-10"></ProjectListItem>
      </div>
    </div>
</template>
<style lang="scss">

</style>
<script>
import gql from "graphql-tag";
import ProjectListItem from "./ProjectListItem";
import NavbarDefault from "../../../components/core/navbars/NavbarDefault";

export default {
  components: {
    ProjectListItem
  },
  apollo: {
    wp_posts: gql`
    {
      wp_posts(where: {AND: [
        { column: POST_TYPE, operator: EQ, value: "jetpack-portfolio" }
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
