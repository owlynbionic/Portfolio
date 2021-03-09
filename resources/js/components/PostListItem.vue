<template>
  <div>
    <router-link :to="{name: 'wp_post', params: {id: wp_post.id}}">
      <h4 class="text-2xl pb-3 font-semibold hover:underline">{{ wp_post.post_title }}</h4>
    </router-link>

    <p class="text-gray-600 pb-3">{{ wp_post.lead }}</p>
    <div class="text-sm text-gray-600">
      By
<!--      <router-link-->
<!--        :to="{name: 'post_author', params: {id: wp_post.post_author.id}}"-->
<!--        class="underline hover:text-black"-->
<!--      >{{ wp_post.post_author.name }}</router-link>-->
        &nbsp;in
      &nbsp;• {{ wp_post.created_at | timeago }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
      wp_post: Object
  }
};
</script>
