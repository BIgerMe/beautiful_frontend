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
        <h1 class="store-intro__title title">The way to buy 3D&nbsp;models</h1>

        <h2 class="store-intro__subtitle subtitle">
          High-quality 3D models for VFX, game development, VR/AR, architecture, and animation. <a href="#inspect">Inspect</a> every mesh and texture before you buy.
        </h2>

        <form class="store-search-bar js-search-form" action="/store/3d-models" method="get">
          <input class="store-search-bar__input" name="q" placeholder="Search 3D Models">
          <button class="store-search-bar__submit-button" type="submit">search</button>
        </form>
      </div>
      <div class="store-categories">
        <ul class="store-categories__filetypes">


          <li class="store-categories__filetype">
            <img width="28" height="28" alt="FBX" src="https://static.sketchfab.com/static/builds/web/dist/static/assets/images/pages/store/filetype/ba08cdb4ad341832ef356da8bdd68264-v2.svg">
            <a title="FBX 3D Models" href="/store/3d-models/fbx?ref=store-home">FBX<span>3D Models</span></a>
          </li>

          <li class="store-categories__filetype">
            <img width="28" height="28" alt="OBJ" src="https://static.sketchfab.com/static/builds/web/dist/static/assets/images/pages/store/filetype/3b83e8b1bad4b3c29d4dcf292cf43e13-v2.svg">
            <a title="OBJ 3D Models" href="/store/3d-models/obj?ref=store-home">OBJ<span>3D Models</span></a>
          </li>

          <li class="store-categories__filetype">
            <img width="28" height="28" alt="Blender" src="https://static.sketchfab.com/static/builds/web/dist/static/assets/images/pages/store/filetype/fc888442dce53525317ec7fd15a32743-v2.svg">
            <a title="BLENDER 3D Models" href="/store/3d-models/blend?ref=store-home">Blender<span>3D Models</span></a>
          </li>

          <li class="store-categories__filetype">
            <img width="28" height="28" alt="C4D" src="https://static.sketchfab.com/static/builds/web/dist/static/assets/images/pages/store/filetype/5e5b86c7f6645764824cd496fe5d4694-v2.svg">
            <a title="C4D 3D Models" href="/store/3d-models/c4d?ref=store-home">C4D<span>3D Models</span></a>
          </li>

          <li class="store-categories__filetype">
            <img width="28" height="28" alt="3DS" src="https://static.sketchfab.com/static/builds/web/dist/static/assets/images/pages/store/filetype/7990c0b7ce36b105b36d05af45bc0371-v2.svg">
            <a title="3DS 3D Models" href="/store/3d-models/max?ref=store-home">3DS<span>3D Models</span></a>
          </li>

          <li class="store-categories__filetype">
            <img width="28" height="28" alt="Maya" src="https://static.sketchfab.com/static/builds/web/dist/static/assets/images/pages/store/filetype/4909855431044e9cd4881c067f5c351d-v2.svg">
            <a title="MAYA 3D Models" href="/store/3d-models/ma?ref=store-home">Maya<span>3D Models</span></a>
          </li>

        </ul>
        <div class="store-category-menu" data-component="" id="view14"><div class="c-category-navigation-dropdown"><div class="c-category-navigation-dropdown__desktop"><div class="categories-navigation --store"><div class="categories-navigation__highlights-container"><ul class="highlights-list --store"><span class="categories-navigation__title title">Highlights</span><li class="navigation-item"><a title="Best selling 3D models" href="/store/3d-models?ref=header&amp;sort_by=-orderCount"><i class="icon  --translucent custom-icons icon-best-selling"></i><span>Best selling</span></a></li><li class="navigation-item"><a title="Animated 3D models" href="/store/3d-models?animated=1&amp;ref=header"><i class="icon  --translucent fa fa-film"></i><span>Animated</span></a></li><li class="navigation-item"><a title="PBR 3D models" href="/store/3d-models?pbr=1&amp;ref=header"><i class="icon  --translucent custom-icons icon-pbr"></i><span>PBR</span></a></li><li class="navigation-item"><a title="Low poly 3D models" href="/store/3d-models?max_face_count=10000&amp;min_face_count=0&amp;ref=header"><i class="icon  --translucent custom-icons icon-low-poly"></i><span>Low poly</span></a></li><li class="navigation-item"><a title="High poly 3D models" href="/store/3d-models?min_face_count=100000&amp;ref=header"><i class="icon  --translucent custom-icons icon-high-poly"></i><span>High poly</span></a></li><li class="navigation-item"><a title="3D Printable 3D models" href="/store/3d-models?file_formats=stl&amp;ref=header"><i class="icon  --translucent custom-icons icon-d-printing"></i><span>3D Printable</span></a></li><li class="navigation-item"><a title="3D Scan 3D models" href="/store/3d-models?q=scan&amp;ref=header&amp;sort_by=-orderCount"><i class="icon  --translucent custom-icons icon-D-Scan"></i><span>3D Scan</span></a></li></ul></div><div class="categories-navigation__menu"><span class="categories-navigation__title title">Browse by category</span><ul class="categories-navigation__list"><li class="navigation-item"><a title="Animals &amp; Pets 3D models" href="/store/3d-models/animals-pets?ref=header"><i class="icon custom-icons icon-category-animals-pets"></i><span>Animals &amp; Pets</span></a></li><li class="navigation-item"><a title="Architecture 3D models" href="/store/3d-models/architecture?ref=header"><i class="icon custom-icons icon-category-architecture"></i><span>Architecture</span></a></li><li class="navigation-item"><a title="Art &amp; Abstract 3D models" href="/store/3d-models/art-abstract?ref=header"><i class="icon custom-icons icon-category-art-abstract"></i><span>Art &amp; Abstract</span></a></li><li class="navigation-item"><a title="Cars &amp; Vehicles 3D models" href="/store/3d-models/cars-vehicles?ref=header"><i class="icon custom-icons icon-category-cars-vehicles"></i><span>Cars &amp; Vehicles</span></a></li><li class="navigation-item"><a title="Characters &amp; Creatures 3D models" href="/store/3d-models/characters-creatures?ref=header"><i class="icon custom-icons icon-category-characters-creatures"></i><span>Characters &amp; Creatures</span></a></li><li class="navigation-item"><a title="Cultural Heritage &amp; History 3D models" href="/store/3d-models/cultural-heritage-history?ref=header"><i class="icon custom-icons icon-category-cultural-heritage-history"></i><span>Cultural Heritage &amp; History</span></a></li><li class="navigation-item"><a title="Electronics &amp; Gadgets 3D models" href="/store/3d-models/electronics-gadgets?ref=header"><i class="icon custom-icons icon-category-electronics-gadgets"></i><span>Electronics &amp; Gadgets</span></a></li><li class="navigation-item"><a title="Fashion &amp; Style 3D models" href="/store/3d-models/fashion-style?ref=header"><i class="icon custom-icons icon-category-fashion-style"></i><span>Fashion &amp; Style</span></a></li><li class="navigation-item"><a title="Food &amp; Drink 3D models" href="/store/3d-models/food-drink?ref=header"><i class="icon custom-icons icon-category-food-drink"></i><span>Food &amp; Drink</span></a></li><li class="navigation-item"><a title="Furniture &amp; Home 3D models" href="/store/3d-models/furniture-home?ref=header"><i class="icon custom-icons icon-category-furniture-home"></i><span>Furniture &amp; Home</span></a></li><li class="navigation-item"><a title="Music 3D models" href="/store/3d-models/music?ref=header"><i class="icon custom-icons icon-category-music"></i><span>Music</span></a></li><li class="navigation-item"><a title="Nature &amp; Plants 3D models" href="/store/3d-models/nature-plants?ref=header"><i class="icon custom-icons icon-category-nature-plants"></i><span>Nature &amp; Plants</span></a></li><li class="navigation-item"><a title="News &amp; Politics 3D models" href="/store/3d-models/news-politics?ref=header"><i class="icon custom-icons icon-category-news-politics"></i><span>News &amp; Politics</span></a></li><li class="navigation-item"><a title="People 3D models" href="/store/3d-models/people?ref=header"><i class="icon custom-icons icon-category-people"></i><span>People</span></a></li><li class="navigation-item"><a title="Places &amp; Travel 3D models" href="/store/3d-models/places-travel?ref=header"><i class="icon custom-icons icon-category-places-travel"></i><span>Places &amp; Travel</span></a></li><li class="navigation-item"><a title="Science &amp; Technology 3D models" href="/store/3d-models/science-technology?ref=header"><i class="icon custom-icons icon-category-science-technology"></i><span>Science &amp; Technology</span></a></li><li class="navigation-item"><a title="Sports &amp; Fitness 3D models" href="/store/3d-models/sports-fitness?ref=header"><i class="icon custom-icons icon-category-sports-fitness"></i><span>Sports &amp; Fitness</span></a></li><li class="navigation-item"><a title="Weapons &amp; Military 3D models" href="/store/3d-models/weapons-military?ref=header"><i class="icon custom-icons icon-category-weapons-military"></i><span>Weapons &amp; Military</span></a></li></ul></div></div></div><div class="c-category-navigation-dropdown__mobile"><span class="form-select"><select><option hidden="" value="">Browse by category</option><option value="/store/3d-models?ref=header&amp;sort_by=-orderCount">Best selling</option><option value="/store/3d-models?animated=1&amp;ref=header">Animated</option><option value="/store/3d-models?pbr=1&amp;ref=header">PBR</option><option value="/store/3d-models?max_face_count=10000&amp;min_face_count=0&amp;ref=header">Low poly</option><option value="/store/3d-models?min_face_count=100000&amp;ref=header">High poly</option><option value="/store/3d-models?file_formats=stl&amp;ref=header">3D Printable</option><option value="/store/3d-models?q=scan&amp;ref=header&amp;sort_by=-orderCount">3D Scan</option><option value="/store/3d-models/animals-pets">Animals &amp; Pets</option><option value="/store/3d-models/architecture">Architecture</option><option value="/store/3d-models/art-abstract">Art &amp; Abstract</option><option value="/store/3d-models/cars-vehicles">Cars &amp; Vehicles</option><option value="/store/3d-models/characters-creatures">Characters &amp; Creatures</option><option value="/store/3d-models/cultural-heritage-history">Cultural Heritage &amp; History</option><option value="/store/3d-models/electronics-gadgets">Electronics &amp; Gadgets</option><option value="/store/3d-models/fashion-style">Fashion &amp; Style</option><option value="/store/3d-models/food-drink">Food &amp; Drink</option><option value="/store/3d-models/furniture-home">Furniture &amp; Home</option><option value="/store/3d-models/music">Music</option><option value="/store/3d-models/nature-plants">Nature &amp; Plants</option><option value="/store/3d-models/news-politics">News &amp; Politics</option><option value="/store/3d-models/people">People</option><option value="/store/3d-models/places-travel">Places &amp; Travel</option><option value="/store/3d-models/science-technology">Science &amp; Technology</option><option value="/store/3d-models/sports-fitness">Sports &amp; Fitness</option><option value="/store/3d-models/weapons-military">Weapons &amp; Military</option></select></span></div></div></div>
      </div>
      <ul class="store-intro__hero-viewer-controls js-hero-viewer-controls visible">
        <li class="pbr">
          <a class="--selected" href="#" data-name="pbr" data-shading-style="pbr" data-shading-type="lit" data-wireframe="">
            <svg width="36" height="36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M10.897 20.197H9.42v2.612H7.6V13.84h3.297c2.128 0 3.192 1.038 3.192 3.113 0 1.046-.27 1.849-.81 2.407-.542.558-1.335.837-2.382.837zM9.42 18.641h1.464c.906 0 1.359-.563 1.359-1.688 0-.554-.11-.952-.33-1.194-.22-.242-.563-.363-1.029-.363H9.42v3.245zm5.124-4.801h3.522c.932 0 1.631.187 2.097.56.466.374.7.979.7 1.814 0 .501-.076.9-.225 1.194-.15.294-.405.556-.765.785.396.167.688.408.877.725.19.317.284.756.284 1.319 0 .87-.255 1.517-.765 1.939-.51.422-1.227.633-2.15.633h-3.575V13.84zm3.482 5.223h-1.662v2.19h1.662c.396 0 .688-.08.877-.238.19-.158.284-.448.284-.87 0-.721-.387-1.082-1.16-1.082zm-.052-3.667h-1.61v2.137h1.623c.686 0 1.029-.356 1.029-1.068 0-.712-.348-1.069-1.042-1.069zm5.599 4.406v3.007h-1.82V13.84h3.481c2.11 0 3.166.985 3.166 2.954 0 1.17-.44 2.032-1.319 2.586l1.28 3.429h-1.992l-1.042-3.007h-1.754zm2.65-1.952c.212-.264.317-.611.317-1.042 0-.431-.112-.774-.336-1.03-.224-.254-.547-.382-.97-.382h-1.661v2.85h1.688c.43 0 .752-.133.963-.396z" id="a"></path></defs><g fill="#FFF" fill-rule="evenodd"><path d="M18 34C9.163 34 2 26.837 2 18S9.163 2 18 2s16 7.163 16 16-7.163 16-16 16z" fill-opacity=".2"></path><path d="M18 36c9.941 0 18-8.059 18-18S27.941 0 18 0 0 8.059 0 18s8.059 18 18 18zm0-2C9.163 34 2 26.837 2 18S9.163 2 18 2s16 7.163 16 16-7.163 16-16 16z" fill-rule="nonzero"></path><use xlink:href="#a"></use></g></svg>
            <span>PBR</span>
          </a>
        </li>
        <li class="matcap">
          <a href="#" data-name="matcap" data-shading-style="matcap" data-shading-type="matcap" data-wireframe="" class="">
            <svg width="36" height="36" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M18 34C9.163 34 2 26.836 2 18 2 9.163 9.163 2 18 2c8.836 0 16 7.163 16 16 0 8.836-7.164 16-16 16" fill-opacity=".2" fill="#FFF"></path><path d="M22.905 25.706l3.58 3.403a13.96 13.96 0 0 0 1.66-1.489l-3.594-3.26-1.646 1.346zm-11.092 2.165l3.85 3.917c.761.13 1.54.212 2.337.212.299 0 .591-.026.887-.045l-5.513-5.597-1.562 1.513zm5.51-.467l4.288 4.107a13.752 13.752 0 0 0 2.276-.827l-4.95-4.633-1.614 1.353zm-1.181-21.39c-1.161-1.021-5.106.023-7.866 2.782-2.76 2.76-3.648 6.624-2.333 7.547 1.314.922 2.54-1.975 5.526-5.171 2.986-3.197 5.833-4.137 4.673-5.158M27.061 21.09l-1.608 1.346 3.886 3.742c.427-.59.808-1.211 1.14-1.864L27.06 21.09z" fill="#FEFEFE"></path><path d="M18 34C9.163 34 2 26.836 2 18 2 9.163 9.163 2 18 2c8.836 0 16 7.163 16 16 0 8.836-7.164 16-16 16m0-34C8.075 0 0 8.075 0 18s8.075 18 18 18 18-8.075 18-18S27.925 0 18 0" fill="#FFF" fill-rule="nonzero"></path></g></svg>
            <span>Matcap</span>
          </a>
        </li>
        <li class="wireframes">
          <a href="#" data-name="wireframes" data-shading-style="pbr" data-shading-type="lit" data-wireframe="000000FF" class="">
            <svg width="36" height="36" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M18 35C8.611 35 1 27.389 1 18S8.611 1 18 1s17 7.611 17 17-7.611 17-17 17z" stroke-opacity=".502" stroke="#FFF" stroke-width="2" fill-opacity=".2"></path><path d="M18 36c9.941 0 18-8.059 18-18S27.941 0 18 0 0 8.059 0 18s8.059 18 18 18zm0-2C9.163 34 2 26.837 2 18S9.163 2 18 2s16 7.163 16 16-7.163 16-16 16z" fill-rule="nonzero"></path><path d="M26 14.364A2.182 2.182 0 1 1 26 10a2.182 2.182 0 0 1 0 4.364zM8.545 26.727a2.182 2.182 0 1 1 0-4.363 2.182 2.182 0 0 1 0 4.363zm4.364-15.272a2.182 2.182 0 1 1 0-4.364 2.182 2.182 0 0 1 0 4.364zm12.364 17.454a2.182 2.182 0 1 1 0-4.364 2.182 2.182 0 0 1 0 4.364zm-12.536-6.44a1 1 0 1 1-1.11-1.665l10.91-7.272a1 1 0 1 1 1.109 1.664l-10.91 7.272zm3.592-11.493a1 1 0 0 1 .433-1.952l5.836 1.297a1 1 0 0 1-.434 1.952l-5.835-1.297zm-5.84 1.67a1 1 0 0 1 1.93.526l-2.182 8a1 1 0 1 1-1.929-.526l2.182-8zm10.584 13.095a1 1 0 0 1-.328 1.973l-8.728-1.455a1 1 0 0 1 .33-1.973l8.726 1.455zm5.198-2.597a1 1 0 0 1-1.997-.106l.383-7.272a1 1 0 1 1 1.998.105l-.384 7.273z"></path></g></svg>
            <span>Wireframes</span>
          </a>
        </li>
      </ul>
      <a href="https://sketchfab.com/markusenes" class="store-intro__hero-viewer-credits">Retro Turntable by /markusenes</a>
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
    }
    .store-intro__logo {
      position: absolute;
      z-index: 0;
      opacity: .05;
      top: 0;
      left: 50%;
      transform: translate(calc(-50% - 500px),-20%);
      height: 200%;
      pointer-events: none;
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
    .store-categories__filetypes {
      display: flex;
      margin-bottom: 10px;
      width: 100%;
      background: hsla(0, 0%, 100%, .1);
      border-radius: 3px;
      overflow: hidden;
      padding: 0 20px;
      position: absolute;
      top: -65px
    }
    .content {
      padding-top: 0
    }
    .purple-title {
      font-size: 30px;
      color: #df1660;
      color: var(--skfb-purple, #df1660)
    }
    .viewer.hidden {
      opacity: 0
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
  }

  .static-page__container {
    margin: 0 auto;
    max-width: 1130px;
    width: calc(100%);
  }

  @media (max-width: 800px) {
    .static-page__container {
      width: calc(100% - 40px)
    }
  }

  .store-home__button.button {
    display: block;
    margin: 0 auto;
    color: #fff;
    color: var(--skfb-white, #fff);
    background-color: #df1660;
    background-color: var(--store-color, #df1660)
  }

  @media (max-width: 800px) {
    .store-home .purple-title {
      font-size: 26px
    }
  }




  @media (min-width: 1100px) {
    .store-home .store-intro {
      min-height: 850px
    }
  }

  @media (min-width: 960px) and (max-width: 1100px) {
    .store-home .store-intro {
      padding-top: 100px
    }
  }

  @media (min-width: 800px) and (max-width: 960px) {
    .store-home .store-intro {
      padding-top: 100px
    }
  }

  @media (max-width: 800px) {
    .store-home .store-intro {
      padding-top: 220px;
      min-height: 0;
      max-height: none
    }
  }

  @media (min-width: 960px) and (max-width: 1100px) {
    .store-home .store-intro__header {
      width: 420px;
      margin-left: 75px
    }
  }

  @media (min-width: 800px) and (max-width: 960px) {
    .store-home .store-intro__header {
      width: 400px
    }
  }

  @media (max-width: 800px) {
    .store-home .store-intro__header {
      width: 100%;
      max-width: 100%;
      padding-top: 160px;
      text-align: center
    }
  }

  .store-home .store-intro__title {
    font-size: 60px;
    font-weight: 300;
    color: #fff;
    color: var(--skfb-white, #fff)
  }

  @media (min-width: 800px) and (max-width: 960px) {
    .store-home .store-intro__title {
      font-size: 40px
    }
  }

  @media (max-width: 800px) {
    .store-home .store-intro__title {
      font-size: 36px;
      text-align: center;
      width: 100%
    }
  }

  .store-home .store-intro__subtitle {
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 27px;
    color: hsla(0, 0%, 100%, .9098);
    color: var(--skfb-white-transparent, hsla(0, 0%, 100%, .9098));
    font-weight: 400
  }

  .store-home .store-intro__subtitle a {
    text-decoration: underline;
    pointer-events: all
  }

  .store-home .store-intro__subtitle a:hover {
    color: #fff;
    color: var(--skfb-white, #fff)
  }

  @media (max-width: 800px) {
    .store-home .store-intro__subtitle {
      font-size: 16px;
      line-height: 24px
    }
  }

  .store-home .store-intro__hero-viewer {
    position: absolute;
    top: 0;
    right: 0;
    width: 60%;
    height: 100%;
    max-height: 580px;
    background: transparent;
    z-index: 0;
    border: none;
    outline: none;
    background-color: hsla(0, 0%, 100%, .05);
    box-shadow: 0 0 15px hsla(0, 0%, 100%, .1);
    transition: all .3s ease-in-out
  }

  .store-home .store-intro__hero-viewer[src^=http] {
    background-color: transparent;
    box-shadow: none
  }

  @media (max-width: 800px) {
    .store-home .store-intro__hero-viewer {
      left: 0;
      width: 100%;
      right: 0;
      height: 40%
    }
  }

  .store-home .store-intro__hero-viewer-credits {
    color: hsla(0, 0%, 100%, .9098);
    color: var(--skfb-white-transparent, hsla(0, 0%, 100%, .9098));
    font-size: 12px;
    position: absolute;
    right: 0;
    pointer-events: all;
    bottom: 230px
  }

  @media (max-width: 800px) {
    .store-home .store-intro__hero-viewer-credits {
      top: 120px;
      bottom: auto;
      width: 100%;
      text-align: center
    }
  }

  .store-home .store-intro__hero-viewer-controls {
    position: absolute;
    right: -5px;
    bottom: 270px;
    display: flex;
    width: 240px;
    pointer-events: none;
    opacity: .4;
    transition: opacity .15s ease-in-out
  }

  @media (max-width: 800px) {
    .store-home .store-intro__hero-viewer-controls {
      top: 50px;
      left: 50%;
      bottom: auto;
      transform: translateX(-50%)
    }
  }

  .store-home .store-intro__hero-viewer-controls.visible {
    pointer-events: all;
    opacity: 1
  }

  .store-home .store-intro__hero-viewer-controls li {
    color: #fff;
    color: var(--skfb-white, #fff);
    flex: 1
  }

  .store-home .store-intro__hero-viewer-controls a {
    opacity: .7;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: 700;
    text-align: center;
    margin-top: 6px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    outline: none;
    transition: opacity .3s ease-in-out
  }

  .store-home .store-intro__hero-viewer-controls a.--selected, .store-home .store-intro__hero-viewer-controls a:hover {
    opacity: 1;
    color: #fff;
    color: var(--skfb-white, #fff)
  }

  .store-home .store-intro__hero-viewer-controls span {
    margin-top: 10px
  }

  .store-home .store-intro .static-page__container {
    position: relative;
    flex: 1;
    z-index: 1;
    pointer-events: none;
  }

  .store-home .store-intro .viewer-error {
    position: absolute;
    top: 0;
    right: 0;
    width: 60%;
    height: 100%;
    max-height: 580px;
    background: transparent
  }

  .store-home .store-search-bar {
    display: flex;
    width: 100%;
    height: 66px;
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .1);
    pointer-events: all
  }

  @media (max-width: 800px) {
    .store-home .store-search-bar {
      height: 50px
    }
  }

  .store-home .store-search-bar__input {
    width: 100%;
    padding: 15px 30px;
    border: none;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    outline: none;
    flex: 1
  }

  @media (max-width: 800px) {
    .store-home .store-search-bar__input {
      font-size: 14px;
      padding: 15px 20px
    }
  }

  .store-home .store-search-bar__submit-button {
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

  @media (max-width: 800px) {
    .store-home .store-search-bar__submit-button {
      padding: 15px 20px;
      line-height: 20px
    }
  }

  .store-home .store-search-bar__submit-button:hover {
    background-color: #c81456;
    background-color: var(--store-color-darken-5, #c81456)
  }

  .store-home .store-search-bar__submit-button:active {
    background-color: #b1114c;
    background-color: var(--store-color-darken-10, #b1114c)
  }

  .store-home .store-categories-models {
    background: #f2f2f2;
    background: var(--skfb-grey-6, #f2f2f2);
    overflow: hidden;
    margin-top: 80px
  }

  @media (max-width: 800px) {
    .store-home .store-categories-models {
      margin-top: 40px
    }
  }

  .store-home .store-inspector-showcase {
    padding-top: 175px
  }

  @media (min-width: 960px) and (max-width: 1100px) {
    .store-home .store-inspector-showcase {
      padding-top: 255px
    }
  }

  @media (max-width: 800px) {
    .store-home .store-inspector-showcase {
      padding-top: 60px
    }
  }

  @media (min-width: 800px) and (max-width: 960px) {
    .store-home .store-inspector-showcase {
      padding-top: 270px
    }
  }

  .store-home .store-inspector-showcase .static-page__container {
    display: flex
  }

  @media (min-width: 800px) and (max-width: 960px) {
    .store-home .store-inspector-showcase .static-page__container {
      flex-direction: column
    }
  }

  @media (max-width: 800px) {
    .store-home .store-inspector-showcase .static-page__container {
      flex-direction: column
    }
  }

  .store-home .store-inspector-showcase__viewer-container {
    flex: 1;
    margin-right: 75px;
    display: flex;
    flex-direction: column
  }

  @media (min-width: 800px) and (max-width: 960px) {
    .store-home .store-inspector-showcase__viewer-container {
      order: 2;
      margin-right: 0;
      margin-top: 20px
    }
  }

  @media (max-width: 800px) {
    .store-home .store-inspector-showcase__viewer-container {
      order: 2;
      margin-right: 0;
      margin-top: 20px
    }
  }

  .store-home .store-inspector-showcase__viewer-wrapper {
    position: relative;
    overflow: hidden
  }

  .store-home .store-inspector-showcase__viewer-cover {
    position: absolute;
    top: 50%;
    z-index: 2;
    width: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: opacity .3s ease-in-out;
    transition-delay: .5s
  }

  .store-home .store-inspector-showcase__viewer {
    min-height: 360px;
    background-color: rgba(255, 0, 0, .1);
    flex: 1;
    width: 100%;
    border: none
  }

  @media (max-width: 800px) {
    .store-home .store-inspector-showcase__viewer {
      margin-top: 20px
    }
  }

  .store-home .store-inspector-showcase__viewer:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(223, 22, 96, .3);
    pointer-events: none
  }

  .store-home .store-inspector-showcase__viewer.--ready ~ img {
    opacity: 0;
    pointer-events: none
  }

  .store-home .store-inspector-showcase__viewer-controls {
    flex: 0;
    display: flex;
    width: 100%;
    margin-top: 15px
  }

  @media (max-width: 800px) {
    .store-home .store-inspector-showcase__viewer-controls {
      flex-wrap: wrap;
      justify-content: space-between
    }
  }

  @media (min-width: 480px) and (max-width: 800px) {
    .store-home .store-inspector-showcase__viewer-controls {
      flex-wrap: nowrap;
      justify-content: normal
    }
  }

  .store-home .store-inspector-showcase__viewer-control {
    flex: 1;
    margin-left: 15px;
    transition: box-shadow .15s ease-in-out
  }

  .store-home .store-inspector-showcase__viewer-control:first-child {
    margin-left: 0
  }

  @media (max-width: 800px) {
    .store-home .store-inspector-showcase__viewer-control {
      flex: 0 0 48%;
      margin-left: 0;
      margin-bottom: 10px
    }
  }

  @media (min-width: 480px) and (max-width: 800px) {
    .store-home .store-inspector-showcase__viewer-control {
      flex: 1;
      margin-left: 15px;
      margin-bottom: 0
    }
  }

  .store-home .store-inspector-showcase__viewer-control a {
    height: 100%;
    display: flex;
    flex-direction: column;
    outline: none
  }

  .store-home .store-inspector-showcase__viewer-control span {
    display: block;
    text-align: center;
    color: #222;
    color: var(--skfb-black, #222);
    font-weight: 700;
    font-size: 12px;
    padding: 10px 5px;
    flex: 1;
    transition: color .15s ease-in-out
  }

  .store-home .store-inspector-showcase__viewer-control img {
    width: 100%
  }

  .store-home .store-inspector-showcase__viewer-control.--selected {
    pointer-events: none
  }

  .store-home .store-inspector-showcase__viewer-control.--selected, .store-home .store-inspector-showcase__viewer-control:hover {
    box-shadow: 0 11px 20px 0 rgba(97, 108, 121, .17)
  }

  .store-home .store-inspector-showcase__viewer-control.--selected span, .store-home .store-inspector-showcase__viewer-control:hover span {
    color: #1caad9;
    color: var(--skfb-blue, #1caad9)
  }

  .store-home .store-inspector-showcase__info {
    flex: 0 0 320px
  }

  @media (min-width: 800px) and (max-width: 960px) {
    .store-home .store-inspector-showcase__info {
      flex: 0 0 auto;
      padding: 0 120px
    }
  }

  @media (max-width: 800px) {
    .store-home .store-inspector-showcase__info {
      display: flex;
      flex: 0 0 auto;
      flex-direction: column;
      align-items: center
    }
  }

  .store-home .store-inspector-showcase__info-title {
    font-size: 30px;
    color: #df1660;
    color: var(--skfb-purple, #df1660)
  }

  @media (min-width: 800px) and (max-width: 960px) {
    .store-home .store-inspector-showcase__info-title {
      text-align: center
    }
  }

  @media (max-width: 800px) {
    .store-home .store-inspector-showcase__info-title {
      text-align: center
    }
  }

  .store-home .store-inspector-showcase__info-description {
    font-size: 16px;
    color: #555;
    color: var(--skfb-grey-0, #555)
  }

  @media (min-width: 800px) and (max-width: 960px) {
    .store-home .store-inspector-showcase__info-description {
      text-align: center
    }
  }

  @media (max-width: 800px) {
    .store-home .store-inspector-showcase__info-description {
      text-align: center;
      line-height: 21px;
      font-size: 14px
    }
  }

  .store-home .store-inspector-showcase__info-arguments {
    font-size: 14px;
    color: #555;
    color: var(--skfb-grey-0, #555)
  }

  @media (min-width: 800px) and (max-width: 960px) {
    .store-home .store-inspector-showcase__info-arguments {
      -moz-column-count: 2;
      column-count: 2;
      grid-column-gap: 50px;
      -moz-column-gap: 50px;
      column-gap: 50px
    }
  }

  .store-home .store-inspector-showcase__info-arguments li {
    line-height: 30px;
    padding-left: 20px;
    position: relative
  }

  @media (min-width: 800px) and (max-width: 960px) {
    .store-home .store-inspector-showcase__info-arguments li {
      line-height: 20px;
      margin-bottom: 10px
    }
  }

  .store-home .store-inspector-showcase__info-arguments li:before {
    content: "\f00c";
    font-family: fontawesome;
    color: #1ac95d;
    color: var(--skfb-bright-green, #1ac95d);
    margin-right: 7px;
    position: absolute;
    left: 0;
    top: 0
  }

  .store-home .store-inspector-showcase .viewer-error {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 4
  }

  .store-home .store-categories {
    z-index: 1;
    pointer-events: all;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    bottom: -120px;
    left: 50%;
    width: 100%;
    transform: translateX(-50%)
  }

  @media (max-width: 800px) {
    .store-home .store-categories {
      position: relative;
      left: auto;
      transform: none;
      bottom: 0;
      margin-top: 20px;
      margin-bottom: -25px
    }
  }

  @media (min-width: 800px) and (max-width: 960px) {
    .store-home .store-categories {
      bottom: -200px
    }
  }

  @media (min-width: 960px) and (max-width: 1100px) {
    .store-home .store-categories {
      bottom: -200px
    }
  }


  @media (min-width: 960px) and (max-width: 1100px) {
    .store-home .store-categories__filetypes {
      justify-content: space-between
    }
  }

  @media (min-width: 800px) and (max-width: 960px) {
    .store-home .store-categories__filetypes {
      justify-content: space-between
    }
  }

  @media (max-width: 800px) {
    .store-home .store-categories__filetypes {
      flex-wrap: wrap;
      margin-bottom: 20px;
      position: relative;
      top: 10px
    }
  }

  .store-home .store-categories__filetype {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center
  }

  @media (min-width: 480px) and (max-width: 800px) {
    .store-home .store-categories__filetype {
      flex: 0 0 33%;
      margin-left: 0
    }
  }

  .store-home .store-categories__filetype img {
    filter: opacity(.7)
  }

  .store-home .store-categories__filetype a {
    padding: 15px;
    font-size: 14px;
    font-weight: 700;
    color: hsla(0, 0%, 100%, .9098);
    color: var(--skfb-white-transparent, hsla(0, 0%, 100%, .9098));
    position: relative
  }

  .store-home .store-categories__filetype span {
    display: block;
    font-weight: 400;
    font-size: 12px;
    color: hsla(0, 0%, 100%, .9098);
    color: var(--skfb-white-transparent, hsla(0, 0%, 100%, .9098));
    white-space: nowrap
  }

  .store-home .store-categories__filetype:hover {
    color: #fff;
    color: var(--skfb-white, #fff)
  }

  .store-home .store-categories__filetype:hover img {
    filter: opacity(1)
  }

  .store-home .store-categories__filetype:hover span {
    color: #fff;
    color: var(--skfb-white, #fff)
  }

  .store-home

  .store-home .store-categories .categories-navigation, .store-home .store-categories .categories-navigation__dropdown-container {
    width: 100%
  }

  .store-home .store-categories .categories-navigation__title {
    display: none
  }

  .store-home .store-grid {
    margin-top: 20px;
    margin-bottom: 10px
  }

  .store-home .store-grid:first-child {
    margin-top: 50px
  }

  .store-home .store-grid__title {
    margin-bottom: 30px;
    text-align: center
  }

  .store-home .store-grid__cards-container {
    padding: 10px;
    overflow: hidden
  }

  .store-home .store-grid__cards-container .items {
    flex-wrap: nowrap
  }

  .store-home .store-grid__category-button {
    background: #f2f2f2;
    background: var(--skfb-grey-6, #f2f2f2);
    padding-bottom: 90px;
    padding-top: 20px
  }

  .store-home .store-link {
    color: #df1660;
    color: var(--store-color, #df1660)
  }

  .store-home .store-link:hover {
    color: #c81859
  }

  .store-home .store-referral {
    padding: 70px 0 0
  }

  @media (max-width: 800px) {
    .store-home .store-referral {
      padding: 40px 0 0
    }
  }

  .store-home .store-referral__title {
    margin-bottom: 30px;
    line-height: 44px;
    text-align: center
  }

  @media (max-width: 800px) {
    .store-home .store-referral__title {
      margin-bottom: 10px
    }
  }

  .store-home .store-referral__quotes {
    display: flex;
    justify-content: center;
    flex-wrap: wrap
  }

  .store-home .store-quote {
    display: flex;
    align-items: flex-start;
    width: calc(50% - 10px);
    max-width: 90%;
    padding: 20px 40px 20px 20px;
    margin: 10px;
    background-color: #fff;
    background-color: var(--skfb-white, #fff);
    border-radius: 3px;
    box-shadow: 0 11px 20px 0 rgba(97, 108, 121, .17)
  }

  .store-home .store-quote:first-child {
    margin-left: 0
  }

  .store-home .store-quote:last-child {
    margin-right: 0
  }

  @media (min-width: 960px) and (max-width: 1100px) {
    .store-home .store-quote {
      border: 5px
    }
  }

  @media (min-width: 800px) and (max-width: 960px) {
    .store-home .store-quote {
      border: 5px
    }
  }

  @media (max-width: 800px) {
    .store-home .store-quote {
      flex-direction: column;
      padding: 20px;
      border: 5px;
      width: 100%
    }
  }

  .store-home .store-quote__avatar {
    width: 180px;
    height: 180px;
    margin-right: 20px;
    border: 10px solid #fff;
    border: 10px solid var(--skfb-white, #fff);
    border-radius: 100%;
    box-shadow: 0 11px 20px 0 rgba(97, 108, 121, .17);
    flex-shrink: 0
  }

  @media (min-width: 960px) and (max-width: 1100px) {
    .store-home .store-quote__avatar {
      width: 105px;
      height: 105px
    }
  }

  @media (min-width: 800px) and (max-width: 960px) {
    .store-home .store-quote__avatar {
      width: 105px;
      height: 105px
    }
  }

  @media (max-width: 800px) {
    .store-home .store-quote__avatar {
      width: 70px;
      height: 70px;
      margin-right: 0
    }
  }

  .store-home .store-quote__content {
    margin-top: 10px
  }

  @media (max-width: 800px) {
    .store-home .store-quote__content {
      margin-top: 20px;
      text-align: left
    }
  }

  .store-home .store-quote__name {
    margin-bottom: 0;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.33;
    color: #555;
    color: var(--skfb-grey-0, #555)
  }

  .store-home .store-quote__description {
    margin-top: 5px;
    font-size: 12px;
    line-height: 1.5;
    color: #999;
    color: var(--skfb-grey-2, #999);
    text-transform: uppercase
  }

  .store-home .store-quote__quote {
    font-size: 16px;
    font-style: italic;
    line-height: 22px;
    color: #999;
    color: var(--skfb-grey-2, #999)
  }

  @media (min-width: 960px) and (max-width: 1100px) {
    .store-home .store-quote__quote {
      font-size: 14px
    }
  }

  @media (min-width: 800px) and (max-width: 960px) {
    .store-home .store-quote__quote {
      font-size: 14px
    }
  }

  @media (max-width: 800px) {
    .store-home .store-quote__quote {
      font-size: 14px
    }
  }

  .store-home .store-brands__logos {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between
  }

  .store-home .store-brands__logos .store-brand {
    width: 13%;
    text-align: center;
    margin-bottom: 30px
  }

  .store-home .store-brands__logos .store-brand img {
    max-height: 70px;
    max-width: 100%
  }

  @media (max-width: 800px) {
    .store-home .store-brands__logos .store-brand img {
      max-height: 45px
    }
  }

  @media (max-width: 1100px) {
    .store-home .store-brands__logos .store-brand {
      width: 12%;
      margin: 2%
    }
  }

  @media (max-width: 800px) {
    .store-home .store-brands__logos .store-brand {
      width: 22%;
      margin: 3%
    }
  }

  .store-home .viewer-error {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, .4);
    color: #fff;
    color: var(--skfb-white, #fff);
    text-align: center;
    opacity: 0;
    pointer-events: none
  }

  .store-home .viewer.--error + .viewer-error {
    opacity: 1
  }
</style>
