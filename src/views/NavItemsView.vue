<template>
  <div class="nav-container">
    <nav class="nav">
      <img class="--no-hover nav__icon" src="../assets/images/yasuo_hold.png" />
      <span class="nav-items">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/writeups">Writeups</NavItem>
      </span>
    </nav>
    <!-- <div class="nav-container__fill-in-space"></div> -->
  </div>
</template>

<style scoped>
.nav-container {
  position: sticky;
  top: calc(-20vh - 2 * 10px);
  backdrop-filter: blur(10px);
  margin: 10px 0;

  height: 20vh;
  width: 100%;

  opacity: 12vw;
}
.nav {
  box-sizing: border-box;
  border: 2px solid rgba(0, 2, 102, 0.671);
  padding-top: 10px;
  font-size: large;
  width: 100%;
  height: 100%;
  background-image: url(../assets/images/aram.JPG);

  background-size: contain;
  display: flex;
  align-items: center;
}

.nav-items {
  display: inline-block;
  flex-basis: 100%;
  flex-shrink: 4;

  display: flex;
  justify-content: flex-start;
  flex-flow: row wrap;
}

.nav__icon {
  display: inline-block;
  vertical-align: bottom;
  background-size: 100% 100%;

  background-repeat: no-repeat;

  /* width: 12vw; */
  height: 80%;
  width: auto;
  flex-grow: 2;
}

.nav__icon:hover {
  content: url(../assets/images/yasuo_draw.png);
}

.site-container {
  margin-top: calc(42px + 7.5em);
}
</style>

<script>
import NavItem from "../components/NavItem.vue";
export default {
  components: {
    NavItem,
  },
};
</script>
