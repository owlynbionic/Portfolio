<template>
  <div class="container mx-auto px-4 w-full md:w-3/4 lg:w-3/5 xl:w-1/2 my-20">
    <div v-if="$apollo.loading"></div>

    <div v-else>
      <BoardListItem v-for="board in boards" :key="board.id" :board="board" class="mt-10"></BoardListItem>
    </div>
  </div>
</template>

<script>
import BoardListItem from "./BoardListItem";
import NavbarDefault from "../../../components/core/navbars/NavbarDefault";
import gql from "graphql-tag";

export default {
  name: "BoardList",
  components: {
    BoardListItem
  },
  apollo: {
    boards: gql`
    {
      boards{
        id
        created_at
        updated_at
        title
        color
        lists {
          id
          title
        }

      }
    }
    `
  }
};
</script>

<style scoped>
  @import "../../../../../resources/css/styles.min.css";

</style>
