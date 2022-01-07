<template>
  <div class="store-home">
    <div class="store-intro">
      <!--<svg class="store-intro__logo" x="0px" y="0px" viewBox="0 0 90.2 106.9">
        <polygon fill="#FFFFFF" points="88.4,26.5 45.1,53 1.9,26.5 45.1,0 "></polygon>
        <polygon fill="#FFFFFF" points="0,38.6 38.7,62.8 38.7,106.9 0,82.8 "></polygon>
        <polygon fill="#FFFFFF" points="50,106.9 50,62.8 90.2,38.6 90.2,82.8 "></polygon>
      </svg>-->
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 96 96" width="96px" height="96px">
        <g id="surface29631835">
          <path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 85.820312 49.078125 L 54.464844 36.652344 C 53.660156 36.335938 52.835938 36.097656 52 35.898438 L 52 52 C 52 54.210938 50.210938 56 48 56 C 45.789062 56 44 54.210938 44 52 L 44 35.902344 C 43.164062 36.097656 42.34375 36.335938 41.535156 36.652344 L 10.179688 49.078125 C 7.378906 50.191406 7.246094 54.054688 9.964844 55.351562 L 36.695312 68.078125 C 43.839844 71.480469 52.164062 71.480469 59.308594 68.078125 L 86.039062 55.351562 C 88.753906 54.058594 88.621094 50.191406 85.820312 49.078125 Z M 85.820312 49.078125 "/>
          <path style=" stroke:none;fill-rule:nonzero;fill:rgb(68.235296%,83.529413%,50.588238%);fill-opacity:1;" d="M 30 53 C 30 54.65625 27.3125 56 24 56 C 20.6875 56 18 54.65625 18 53 C 18 51.34375 20.6875 50 24 50 C 27.3125 50 30 51.34375 30 53 Z M 30 53 "/>
          <path style=" stroke:none;fill-rule:nonzero;fill:rgb(11.764706%,53.333336%,89.803922%);fill-opacity:1;" d="M 60.839844 72.882812 C 56.859375 74.777344 52.421875 75.777344 48 75.777344 C 43.578125 75.777344 39.140625 74.773438 35.15625 72.882812 C 35.15625 72.882812 17.164062 64.316406 10.46875 61.121094 C 9.324219 60.574219 8 61.402344 8 62.65625 L 8 67.296875 C 8 67.957031 8.382812 68.558594 8.988281 68.84375 L 34.949219 81.082031 C 43.203125 84.972656 52.796875 84.972656 61.046875 81.082031 L 87.011719 68.84375 C 87.617188 68.558594 88 67.957031 88 67.296875 L 88 62.667969 C 88 61.40625 86.671875 60.578125 85.523438 61.125 C 78.820312 64.324219 60.839844 72.882812 60.839844 72.882812 Z M 60.839844 72.882812 "/>
          <path style=" stroke:none;fill-rule:nonzero;fill:rgb(93.725491%,32.549021%,31.37255%);fill-opacity:1;" d="M 58 22 C 58 27.523438 53.523438 32 48 32 C 42.476562 32 38 27.523438 38 22 C 38 16.476562 42.476562 12 48 12 C 53.523438 12 58 16.476562 58 22 Z M 58 22 "/>
        </g>
      </svg>

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
