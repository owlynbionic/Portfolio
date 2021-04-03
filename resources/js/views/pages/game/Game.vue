<template>
<div>
  <NavbarDefault />

  <div class="row g-0">
    <div class="col">
      <div class="container"><img class="img-fluid" src="http://placehold.it/750x500" alt="Alt Text">
        <hr>
        <h3 class="my-4">Unreal Engine Demos</h3>
        <div class="row">
          <div class="col-sm-6 col-md-3 mb-4"><a href="#"><img class="img-fluid" src="http://placehold.it/500x300"></a></div>
          <div class="col-sm-6 col-md-3 mb-4"><a href="#"><img class="img-fluid" src="http://placehold.it/500x300"></a></div>
          <div class="col-sm-6 col-md-3 mb-4"><a href="#"><img class="img-fluid" src="http://placehold.it/500x300"></a></div>
          <div class="col-sm-6 col-md-3 mb-4"><a href="#"><img class="img-fluid" src="http://placehold.it/500x300"></a></div>
        </div>
        <hr>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import NavbarDefault from "../../../components/core/navbars/NavbarDefault";

export default {
  name: "Game",
  components: {
    NavbarDefault
  },
}
</script>

<style scoped>
  /*@import "../../../../../resources/css/bootstrap.min.css";*/
  @import "../../../../../resources/css/styles.min.css";
</style>

