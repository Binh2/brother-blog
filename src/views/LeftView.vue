<template>
  <div class="container" v-bind:style="styleObject">
    <img
      src="../assets/images/elderdragon.png"
      alt="Elder dragon in League of Legends"
    />
    <div class="fill-in-space" />
  </div>
</template>

<style scoped>
.container {
  /* --container-height: calc(100vh - 20px - 20vh); */
  --container-height: calc(var(--component-height));
}
img {
  --rendered-image-height: calc(
    var(--container-height) - 4 * var(--margin) - 4 * var(--border-width)
  );
  height: var(--rendered-image-height);
  width: auto;
  position: fixed;
  bottom: 19px;
  left: 14px;
}
.fill-in-space {
  height: calc(100% - 2 * var(--margin) - var(--border-width));
  width: calc(
    var(--container-height) / var(--image-height) * var(--image-width)
  );
  border: 2px solid orange;
  margin: 5px;
}
</style>

<script>
import { computed } from "vue";

export default {
  props: {
    style: Object,
  },
  setup(props) {
    const styleObject = computed(() => {
      return props.style;
    });

    return {
      styleObject,
    };
  },
};
</script>
