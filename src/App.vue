<template>
  <NavItemsView v-bind:style="NavItemsViewStyle" />

  <main>
    <LeftView v-bind:style="LeftViewStyle" />

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
  computed: {
    NavItemsViewStyle() {
      return {
        "--component-width": "100px",
      };
    },
    LeftViewStyle() {
      return {
        "--component-height": "calc(100vh - 20px - 20vh)",
        "--image-width": 374,
        "--image-height": 667,
      };
    },
  },
};
</script>
