<template>
  <div class="statmid">
    asdasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaasdasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaa
    aaaaaaaaaasdasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaasdasdasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    sdasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdasdaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaasdasdaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
  </div>
</template>

<style>
.statmid {
  display: inline-block;
  height: 60em;

  line-height: 1.7em;
  text-align: justify;
  text-justify: inter-word;
  width: 60em;
  flex-grow: 2;
}

/*
 * Generic styling for site bars
 */

.site-bar {
  width: 25%;
  overflow-x: visible;
  min-width: 0px;
  outline: 2px solid rgb(255, 170, 0);
}

@media only screen and (max-width: 1200px) {
  .site-bar {
    width: 0 !important;
    outline: none;
    visibility: hidden;
  }
}

#site-feather {
  position: absolute;
  z-index: -100;
  width: 100px;
  transform: translateX(calc(12vw - 50px)) translateY(30px);
}
</style>
