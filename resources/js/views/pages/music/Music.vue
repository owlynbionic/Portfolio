<template>
  <div>
    <NavbarDefault />

    <div class="gradient-wrap" style="min-height: 100vh;"><img src="../../../../../resources/img/helltaker.jpg" width="50%">
      <div id="music-container" class="music-container">
        <div class="music-info">
          <h4 id="title"></h4>
          <div id="progress-container" class="progress-container">
            <div id="progress" class="progress"></div>
          </div>
        </div><audio id="audio" src="music/Vitality.mp3"></audio>
        <div class="img-container"><img id="cover" class="images/mittsies.jpg" alt="music-cover"></div>
        <div class="music-player-navigation">
          <div id="prev" class="action-btn"><i class="fas fa-backward"></i></div>
          <div id="play" class="action-btn action-btn-big"><i class="fas fa-play"></i></div>
          <div id="next" class="action-btn"><i class="fas fa-forward"></i></div>
        </div>




      </div>
    </div>
  </div>
</template>

<script>
import NavbarDefault from "../../../components/core/navbars/NavbarDefault";

export default {
  name: "Music",
  components: {
    NavbarDefault
  },
}
</script>

<style scoped>
  /*@import "../../../../../resources/css/bootstrap.min.css";*/
  @import "../../../../../resources/css/styles.min.css";
</style>

