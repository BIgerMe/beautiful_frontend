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
        const radius = 1300
        let theta = 0
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

          scene = new THREE.Scene()
          /*从上往下*/
          const light1 = new THREE.DirectionalLight(0xFFFFFF, 4)
          light1.position.set(0, 1, 0).normalize()
          scene.add(light1)

          const light2 = new THREE.DirectionalLight(0xFFFFFF, 3)
          light2.position.set(1, -1, 1).normalize()
          scene.add(light2)
          const loader = new GLTFLoader()

          // loader.load('./static/three/gltf/Horse.glb', function (gltf) {
          loader.load('./static/three/gltf/phoenix_bird/scene.gltf', function (gltf) {
            mesh = gltf.scene.children[0]
            console.log(mesh)
            scene.add(mesh)
            mixer = new THREE.AnimationMixer(mesh)
            mixer.clipAction(gltf.animations[0]).setDuration(1).play()
          })

          renderer = new THREE.WebGLRenderer( {alpha: true } );
          //您可以将透明颜色保留为默认值。
          renderer.setClearColor( 0x282c34); //default
          // renderer.setPixelRatio(window.devicePixelRatio)
          renderer.setSize(container.offsetWidth, container.offsetHeight)
          // renderer.setSize(container.offsetWidth, 800)
          // renderer.outputEncoding = THREE.sRGBEncoding
          container.appendChild(renderer.domElement)

        }

        function animate() {
          requestAnimationFrame(animate)
          render()
        }
        function render() {
          /*相机的位置*/
          theta += 0.2
          /*头正尾负*/
          // camera.position.set(0,0,2500)
          camera.position.x = radius * Math.sin(THREE.MathUtils.degToRad(theta))
          camera.position.y = radius * Math.cos(THREE.MathUtils.degToRad(theta))
          camera.position.z = radius * Math.cos(THREE.MathUtils.degToRad(theta))
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
