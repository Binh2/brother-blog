<template>
  <div class="nav-container">
    <nav class="nav">
      <img class="--no-hover nav__icon" src="../assets/images/yasuo_hold.png" />
      <img class="nav__tornado" src="../assets/images/tornado.jpg" />
      <NavItem to="/">Home</NavItem>
      <NavItem to="/writeups">Writeups</NavItem>
    </nav>
  </div>
</template>

<style scoped>
.nav__tornado {
  /* display: none; */
}
.nav-container {
  /* position: sticky; */
  /* top: calc(-20vh - 2 * var(--margin) - 2 * var(--border-margin)); */
  backdrop-filter: blur(10px);
  margin: var(--margin) 0;

  height: 20vh;
  width: 100%;

  opacity: 12vw;
}
.nav {
  box-sizing: border-box;
  border: 2px solid rgba(0, 2, 102, 0.671);
  font-size: large;
  width: 100%;
  height: 100%;
  background-image: url(../assets/images/aram.JPG);
  background-size: contain;

  /* display: flex;
  align-items: center; */

  display: grid;
  grid-auto-columns: repeat(min-content, 4);
  grid-auto-rows: 50% 50%;
  grid-auto-flow: column;
  align-items: center;
}
.nav > * {
  grid-row-start: 1;
  grid-row-end: 3;
  /* justify-self: center; */
}

.nav__icon {
  display: inline-block;
  vertical-align: bottom;

  height: 80%;
  width: auto;
  object-fit: cover;
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
