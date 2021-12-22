<template>
  <div class="index-container">

  </div>
</template>

<script>
  import * as THREE from 'three'
  export default {
    name: 'Baby',
    components: {  },
    data() {
      return {

      }
    },
    created() {},
    mounted() {
      let scene = new THREE.Scene()
      let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
      let renderer = new THREE.WebGLRenderer({
        alpha: true,// 默认情况下为黑色场景，此处设置为透明（即白色场景）
      });
      // 设置渲染器为全屏
      renderer.setSize(window.innerWidth, window.innerHeight);
      // 添加到网页中
      // document.body.appendChild(renderer.domElement);
      console.log(document.getElementsByClassName('app-main-container'))
      document.getElementsByClassName('index-container')[0].appendChild(renderer.domElement);
      var geometry = new THREE.BoxGeometry(1,1,1); // 创建一个长宽高都为1个单位的立方体
      var material = new THREE.MeshBasicMaterial({color: 0x00ff00}); // 创建材质，对光照无感
      var cube = new THREE.Mesh(geometry, material); // 创建一个立方体网格（mesh）,将材质包裹在立方体上
      scene.add(cube); // 将立方体网格添加到场景中

      camera.position.z = 5; // 指定相机位置
      function render() {
        requestAnimationFrame(render); // 让浏览器执行参数中的函数，不断循环（浏览器一个新的API）
        renderer.render(scene, camera); // 结合场景和相机进行渲染，即用摄像机拍下此刻的场景
      }
      render();

    },
    methods: {
    },
  }
</script>
<style lang="scss" scoped>

</style>
