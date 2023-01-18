<template>
  <div class="container">
    <img
      src="../assets/images/turret.png"
      alt="The turret in League of Legends"
    />
    <div class="fill-in-space" />
  </div>
</template>

<style scoped>
.container {
  --container-height: calc(100vh - 20px - 20vh);
  --image-width: 374;
  --image-height: 667;
  position: sticky;
  top: 0;
}

img {
  height: var(--container-height);
  width: calc(
    var(--container-height) / var(--image-height) * var(--image-width)
  );
  width: auto;
  /* position: fixed; */
}

.fill-in-space {
  height: 100%;
  width: calc(
    var(--container-height) / var(--image-height) * var(--image-width)
  );
  border: 2px solid orange;
  margin: 5px;
}
</style>
