<template>
  <NavItemsView />

  <main>
    <LeftView />

    <!-- HomeView/WriteupsView-->
    <router-view />
    <RightView />
  </main>
</template>

<style scoped>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*/
main {
  display: flex;
  flex-direction: row;

  border: 2px solid var(--color-blue);
  background: var(--color-dark-blue);
}
</style>

<script>
import NavItemsView from "./views/NavItemsView.vue";
import LeftView from "./views/LeftView.vue";
import RightView from "./views/RightView.vue";

export default {
  components: {
    NavItemsView,
    LeftView,
    RightView,
  },
};
</script>
