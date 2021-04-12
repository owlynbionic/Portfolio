<template>
  <div>
    <NavbarDefault />
    <section id="body">
      <div id="breadcrumbs"><span itemprop="title">Boards</span></div>

      <div class="container mx-auto px-4 w-full md:w-3/4 lg:w-3/5 xl:w-1/2 my-20">
        <div v-if="$apollo.loading"></div>

        <div v-else>
          <div class="content-wrapper blog-content-list grid pure-g">

            <div id="listing" class="block pure-u-2-3 h-feed">
              <BoardList/>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>

</template>

<script>
import BoardList from "./BoardList";
import NavbarDefault from "../../../components/core/navbars/NavbarDefault";

export default {
  name: "Kanban",
  components: {
    BoardList,
    NavbarDefault
  },
};

</script>

<style scoped>
  @import "../../../../../resources/css/styles.min.css";

  #body {
    -webkit-text-size-adjust: 100%;
    font-size: 1rem;
    line-height: 1.7;
    color: #444;
    -webkit-font-smoothing: antialiased;
    font-family: "Raleway", "Helvetica", "Tahoma", "Geneva", "Arial", sans-serif;
    font-weight: 400;
    box-sizing: border-box;
    display: block;
    background: #fff;
    padding-top: 8rem;
    padding-bottom: 11rem;
    transition: all 0.5s ease;
    padding-left: 7rem;
    padding-right: 7rem;
  }

  .content-wrapper.blog-content-list.grid.pure-g {
    -webkit-text-size-adjust: 100%;
    font-size: 1rem;
    line-height: 1.7;
    color: #444;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    letter-spacing: -.31em;
    text-rendering: optimizespeed;
    display: flex;
    flex-flow: row;
    list-style: none;
    margin: 0;
    padding: 0;
    font-family: "Raleway", "Helvetica", "Tahoma", "Geneva", "Arial", sans-serif;
    font-weight: 400;
    padding-left: 7rem;
    padding-right: 7rem;
  }

  #listing {
    -webkit-text-size-adjust: 100%;
    font-size: 1rem;
    line-height: 1.7;
    color: #444;
    -webkit-font-smoothing: antialiased;
    list-style: none;
    box-sizing: border-box;
    width: 66.6667%;
    display: inline-block;
    zoom: 1;
    letter-spacing: normal;
    word-spacing: normal;
    vertical-align: top;
    text-rendering: auto;
    -webkit-box-flex: 1;
    flex: 1;
    min-width: 0;
    min-height: 0;
    font-family: "Raleway", "Helvetica", "Tahoma", "Geneva", "Arial", sans-serif;
    font-weight: 400;
  }

  span {
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

</style>
