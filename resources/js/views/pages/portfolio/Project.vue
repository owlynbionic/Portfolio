<template>
  <div class="container mx-auto px-4 w-full md:w-3/4 lg:w-3/5 xl:w-1/2 mt-20">
    <div v-if="$apollo.loading">Loading...</div>
    <div v-else>
      <div class="text-lg text-gray-600">
        By
        <router-link
          :to="{name: 'wp_author', params: {id: wp_post.post_author }}"
          class="underline hover:text-black"
        >{{ wp_post.post_author }}</router-link>

        &nbsp;• {{ wp_post.post_date | timeago }}
      </div>

      <h1 class="text-5xl mt-10 font-bold mb-12">{{ wp_post.title }}</h1>

      <div v-html="wp_post.post_content" class="wp_post text-gray-700 pb-3 mb-12 whitespace-pre-line"></div>

      <div class="mb-24 flex">
        <div class="mr-6">
          <!--          <img-->
          <!--            :src="'/storage/faces/' + wp_post.post_author.avatar"-->
          <!--            alt="Author avatar"-->
          <!--            class="w-16 h-16 rounded-full"-->
          <!--          />-->
        </div>
        <div class="flex flex-col justify-center">
          <div class="text-xl text-gray-600">
            Written by
            <router-link
              :to="{name: 'wp_author', params: {id: wp_post.post_author}}"
              class="underline hover:text-black"
            >{{ wp_post.post_author }}</router-link>
          </div>
          <div class="text-gray-600">
            Published in
            <!--            <router-link-->
            <!--              :to="{name: 'topic', params: {slug: wp_post.topic.slug}}"-->
            <!--              class="underline hover:text-black"-->
            <!--            >{{ wp_post.topic.name }}</router-link>-->
            &nbsp;on {{ wp_post.post_date | longDate }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  name: "Project",
  apollo: {
    wp_post: {
      query: gql`
        query($id: ID!) {
          wp_post(id: $id) {
            ID
            post_title
            post_content
            post_date
            post_author
          }
        }
      `,
      variables() {
        return {
          id: this.$route.params.id
        };
      },
      error() {
        this.$router.push({ name: "404" });
      }
    }
  }
};
</script>
<style scoped>
  .wp_post >>> p {
  }
</style>
