<template>
  <div class="list-item h-entry">
    <div class="list-blog-header"><span class="list-blog-date"><time class="dt-published" datetime="2018-03-25T20:47:31-07:00"><span>{{ wp_post.post_date | day }}</span><em>{{ wp_post.post_date | month }}</em><em>{{ wp_post.post_date | year }}</em></time></span>
      <h4 class="p-name"><router-link :to="{name: 'wp_post', params: {id: wp_post.ID}}" class="u-url">{{ wp_post.post_title }}</router-link></h4><img alt src="images/6/7/1/1/4/67114f4e192da3f45ab17eb52da61de13a119df9-header-2.jpg" />
    </div>
    <div class="list-blog-padding">
      <div class="p-summary e-content">
        <p>{{ wp_post.post_excerpt }}</p>
<!--        <p><a href="blog/power-drawbar-x2-mini-mill.html">Continue reading...</a></p>-->
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "ProjectListItem",
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
<style scoped>

  .list-item.h-entry {
    -webkit-text-size-adjust: 100%;
    font-size: 1rem;
    line-height: 1.7;
    color: #444;
    -webkit-font-smoothing: antialiased;
    list-style: none;
    letter-spacing: normal;
    word-spacing: normal;
    text-rendering: auto;
    font-family: "Raleway", "Helvetica", "Tahoma", "Geneva", "Arial", sans-serif;
    font-weight: 400;
    box-sizing: border-box;
    border-bottom: 1px solid #EEEEEE;
    margin-bottom: 3rem;
  }

  .list-blog-header {
    -webkit-text-size-adjust: 100%;
    font-size: 1rem;
    line-height: 1.7;
    color: #444;
    -webkit-font-smoothing: antialiased;
    list-style: none;
    letter-spacing: normal;
    word-spacing: normal;
    text-rendering: auto;
    font-family: "Raleway", "Helvetica", "Tahoma", "Geneva", "Arial", sans-serif;
    font-weight: 400;
    box-sizing: border-box;
    position: relative;
  }

  .list-blog-date {
    -webkit-text-size-adjust: 100%;
    font-size: 1rem;
    line-height: 1.7;
    color: #444;
    -webkit-font-smoothing: antialiased;
    list-style: none;
    letter-spacing: normal;
    word-spacing: normal;
    text-rendering: auto;
    font-family: "Raleway", "Helvetica", "Tahoma", "Geneva", "Arial", sans-serif;
    font-weight: 400;
    box-sizing: border-box;
    margin-left: 20px;
    float: right;
    text-align: center;
  }

  .dt-published {
    -webkit-text-size-adjust: 100%;
    font-size: 1rem;
    line-height: 1.7;
    color: #444;
    -webkit-font-smoothing: antialiased;
    list-style: none;
    letter-spacing: normal;
    word-spacing: normal;
    text-rendering: auto;
    font-family: "Raleway", "Helvetica", "Tahoma", "Geneva", "Arial", sans-serif;
    font-weight: 400;
    text-align: center;
    box-sizing: border-box;
  }

  time span {
    -webkit-text-size-adjust: 100%;
    color: #444;
    -webkit-font-smoothing: antialiased;
    list-style: none;
    letter-spacing: normal;
    word-spacing: normal;
    text-rendering: auto;
    font-family: "Raleway", "Helvetica", "Tahoma", "Geneva", "Arial", sans-serif;
    text-align: center;
    box-sizing: border-box;
    display: block;
    font-size: 1.75rem;
    font-weight: 600;
    line-height: 110%;
  }

  time em {
    -webkit-text-size-adjust: 100%;
    font-size: 1rem;
    line-height: 1.7;
    color: #444;
    -webkit-font-smoothing: antialiased;
    list-style: none;
    letter-spacing: normal;
    word-spacing: normal;
    text-rendering: auto;
    font-family: "Raleway", "Helvetica", "Tahoma", "Geneva", "Arial", sans-serif;
    font-weight: 400;
    text-align: center;
    box-sizing: border-box;
    display: block;
    border-top: 1px solid #EEEEEE;
    font-style: normal;
    text-transform: uppercase;
  }

  .p-name {
    -webkit-text-size-adjust: 100%;
    line-height: 1.7;
    color: #444;
    -webkit-font-smoothing: antialiased;
    list-style: none;
    word-spacing: normal;
    box-sizing: border-box;
    margin: 0.85rem 0 1.7rem 0;
    font-size: 1.75rem;
    font-family: "Montserrat", "Helvetica", "Tahoma", "Geneva", "Arial", sans-serif;
    font-weight: 400;
    text-rendering: optimizeLegibility;
    letter-spacing: -0px;
    margin-bottom: 0.5rem;
  }

  .u-url {
    -webkit-text-size-adjust: 100%;
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
    list-style: none;
    word-spacing: normal;
    font-size: 1.75rem;
    font-family: "Montserrat", "Helvetica", "Tahoma", "Geneva", "Arial", sans-serif;
    font-weight: 400;
    text-rendering: optimizeLegibility;
    letter-spacing: -0px;
    box-sizing: border-box;
    background: transparent;
    text-decoration: none;
    color: #444;
  }
</style>
