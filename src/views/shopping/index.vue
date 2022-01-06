<template>
  <div class="store-home">
    <div class="store-intro">
      <!--<svg class="store-intro__logo" x="0px" y="0px" viewBox="0 0 90.2 106.9">
        <polygon fill="#FFFFFF" points="88.4,26.5 45.1,53 1.9,26.5 45.1,0 "></polygon>
        <polygon fill="#FFFFFF" points="0,38.6 38.7,62.8 38.7,106.9 0,82.8 "></polygon>
        <polygon fill="#FFFFFF" points="50,106.9 50,62.8 90.2,38.6 90.2,82.8 "></polygon>
      </svg>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'shopping_home',
    data() {
      return {
      }
    },
    mounted() {
    },
    beforeDestroy() {
    },
    methods: {
    },
  }
</script>

<style lang="scss" scoped>

  .store-home {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    .store-intro{
      position: relative;
      min-height: 740px;
      max-height: 850px;
      padding-top: 160px;
      display: flex;
      flex-direction: column;
      background-color: rgba(0,0,0,.3);
      background: linear-gradient(
          45deg,#3e081c,#ff4489);
      background-image: linear-gradient(
          45deg, rgb(62, 8, 28), rgb(255, 68, 137));
      background-position-x: initial;
      background-position-y: initial;
      background-size: initial;
      background-repeat-x: initial;
      background-repeat-y: initial;
      background-attachment: initial;
      background-origin: initial;
      background-clip: initial;
      background-color: initial;
    }
    .store-intro__logo {
      position: absolute;
      z-index: 0;
      opacity: .05;
      top: 0;
      left: 50%;
      transform: translate(calc(-50% - 500px), -20%);
      height: 100%;
      pointer-events: none;
    }

  }
</style>
