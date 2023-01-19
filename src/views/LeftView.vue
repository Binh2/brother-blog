<template>
  <img
    v-bind:style="{ 'margin-top': marginTop + 'px' }"
    src="../assets/images/elderdragon.png"
    alt="Elder dragon in League of Legends"
  />
</template>

<style scoped>
img {
  height: calc(100vh - var(--margin) * 4 - var(--border-width) * 6 - 20vh);
  width: auto;
  border: 2px solid orange;
  margin: var(--margin);

  transition: margin-top 2s;
}
</style>

<script>
import { ref } from "vue";
import { globalMargin } from "../constants.js";

export default {
  setup() {
    const marginTop = ref(globalMargin);

    function handleScroll() {
      marginTop.value =
        window.scrollY +
        globalMargin -
        Math.min(
          window.scrollY,
          (0.2 * window.screen.height + globalMargin * 2) * 0.5
        );
    }

    return {
      marginTop,
      handleScroll,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  onUnmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
