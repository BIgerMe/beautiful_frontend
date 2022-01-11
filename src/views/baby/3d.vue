<template>
  <div id="phoenix" class="index-container" style="width: 100%;height: 400px"></div>
</template>

<script>
  import * as THREE from 'three'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
  import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

  export default {
    name: 'Baby',
    components: {},
    data() {
      return {}
    },
    created() {},
    mounted() {
      // this.horse()
      this.phoenix()
    },
    methods: {
      phoenix() {
        let container, stats
        let camera, scene, renderer
        let mesh, mixer
        let controls
        const radius = 1300
        let theta = 0
        let clock
        let prevTime = Date.now()
        function init() {
          container = document.getElementById('phoenix')
          camera = new THREE.PerspectiveCamera(
            45,
            // window.innerWidth / window.innerHeight,
            container.offsetWidth / container.offsetHeight,
            1,
            10000
          )
          camera.position.set(0,0,2500)

          scene = new THREE.Scene()
          /*从上往下*/
          const light1 = new THREE.DirectionalLight(0xFFFFFF, 4)
          light1.position.set(0, 1, 0).normalize()
          scene.add(light1)


          const light2 = new THREE.DirectionalLight(0xFFFFFF, 3)
          light2.position.set(1, -1, 0).normalize()
          scene.add(light2)
          const loader = new GLTFLoader()

          // loader.load('./static/three/gltf/Horse.glb', function (gltf) {
          loader.load('./static/three/gltf/phoenix_bird/scene.gltf', function (gltf) {
            mesh = gltf.scene.children[0]
            scene.add(mesh)
            mixer = new THREE.AnimationMixer(mesh)
            mixer.clipAction(gltf.animations[0]).setDuration(1).play()
          })

          renderer = new THREE.WebGLRenderer( {alpha: true } );
          //您可以将透明颜色保留为默认值。
          // renderer.setClearColor( 0x000); //default
          renderer.setPixelRatio(window.devicePixelRatio) //像素比
          renderer.setSize(container.offsetWidth, container.offsetHeight)
          renderer.outputEncoding = THREE.sRGBEncoding //真彩色，不加的话颜色会与ps中图像看上去的不同
          container.appendChild(renderer.domElement)

          controls = new OrbitControls(camera,renderer.domElement);// 初始化控制器
          controls.target.set(0, 0, 0);// 设置控制器的焦点，使控制器围绕这个焦点进行旋转
          // controls.maxPolarAngle = Math.PI / 3;//绕垂直轨道的距离（范围是0-Math.PI,默认为Math.PI）
          // controls.autoRotate = false;
          console.log(controls)
          // clock = new THREE.Clock();//用于更新轨道控制器
          // controls.update();// 照相机转动时，必须更新该控制器
        }

        function animate() {
          // let delta = clock.getDelta();
          // controls.update(delta);
          requestAnimationFrame(animate)
          render()
        }
        function render() {
          /*相机的位置*/
          theta += 0.2
          /*头正尾负*/
          // camera.position.x = radius * Math.sin(THREE.MathUtils.degToRad(theta))
          // camera.position.y = radius * Math.cos(THREE.MathUtils.degToRad(theta))
          // camera.position.z = radius * Math.cos(THREE.MathUtils.degToRad(theta))
          /*相机看向的位置*/
          camera.lookAt(0, 0, 0)

          if (mixer) {
            const time = Date.now()
            mixer.update((time - prevTime) * 0.0003)
            prevTime = time
          }
          renderer.render(scene, camera)
        }
        init()
        animate()
      },
    },
  }
</script>
<style lang="scss" scoped></style>
