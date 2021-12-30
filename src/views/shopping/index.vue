<template>
  <div class="store-home">
    <div class="store-intro">
      <svg class="store-intro__logo" x="0px" y="0px" viewBox="0 0 90.2 106.9">
        <polygon fill="#FFFFFF" points="88.4,26.5 45.1,53 1.9,26.5 45.1,0 "></polygon>
        <polygon fill="#FFFFFF" points="0,38.6 38.7,62.8 38.7,106.9 0,82.8 "></polygon>
        <polygon fill="#FFFFFF" points="50,106.9 50,62.8 90.2,38.6 90.2,82.8 "></polygon>
      </svg>
      <div class="static-page__container">
        <div class="store-intro__header">
          <h1 class="store-intro__title title">有 趣 地 购 物</h1>
          <h2 class="store-intro__subtitle subtitle">
            High-quality 3D models for VFX, game development, VR/AR, architecture, and animation.
            <a href="#inspect">Inspect</a>
            every mesh and texture before you buy.
          </h2>
          <form class="store-search-bar js-search-form" action="/store/3d-models" method="get">
            <input class="store-search-bar__input" name="q" placeholder="Search 3D Models">
            <button class="store-search-bar__submit-button" type="submit">search</button>
          </form>
        </div>
      </div>
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
      .static-page__container {
        position: relative;
        flex: 1;
        z-index: 1;
        pointer-events: none;
      }
    }
    .store-search-bar__input {
      width: 100%;
      padding: 15px 30px;
      border: none;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      outline: none;
      flex: 1;
    }
    .store-intro__header {
      position: relative;
      display: flex;
      width: 550px;
      max-width: 95%;
      text-align: left;
      flex-direction: column;
      align-items: flex-start
    }
    .store-intro__logo {
      position: absolute;
      z-index: 0;
      opacity: .05;
      top: 0;
      left: 50%;
      transform: translate(calc(-50% - 500px), -20%);
      height: 200%;
      pointer-events: none;
    }
    .static-page__container {
      margin: 0 auto;
      max-width: 1130px;
      width: calc(100%);
    }

    .store-search-bar {
      display: flex;
      width: 100%;
      height: 66px;
      border-radius: 4px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .1);
      pointer-events: all
    }
    .store-intro__title {
      font-size: 50px;
      font-weight: 300;
      color: #fff;
      color: var(--skfb-white, #fff)
    }
    .store-intro__subtitle {
      margin-bottom: 35px;
      font-size: 18px;
      line-height: 27px;
      color: hsla(0, 0%, 100%, .9098) ;
      color: var(--skfb-white-transparent, hsla(0, 0%, 100%, .9098));
      font-weight: 400;
      a {
        text-decoration: underline;
        pointer-events: all;
        color: #fff;
        color: var(--skfb-white, #fff)
      }
      a:hover {
        color: #fff;
        color: var(--skfb-white, #fff)
      }
    }
    .store-search-bar__submit-button {
      display: flex;
      padding: 15px 30px;
      line-height: 36px;
      font-size: 14px;
      font-weight: 700;
      color: #fff;
      color: var(--skfb-white, #fff);
      text-align: center;
      text-transform: uppercase;
      background-color: #e9256d;
      background-color: var(--store-color-lighten-5, #e9256d);
      border: none;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      outline: none;
      transition: background-color .2s ease;
      justify-content: center
    }
    .store-search-bar__submit-button:hover {
      background-color: #c81456;
      background-color: var(--store-color-darken-5, #c81456)
    }

    .store-search-bar__submit-button:active {
      background-color: #b1114c;
      background-color: var(--store-color-darken-10, #b1114c)
    }
    /*category*/
  }
</style>
