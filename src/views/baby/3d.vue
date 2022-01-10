<template>

  <div id="horse" class="index-container" style="width: 100%;height: 400px"></div>
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
      this.horse()
      // this.phoenix()
    },
    methods: {
      horse() {
        let container, stats
        let camera, scene, renderer
        let mesh, mixer
        const radius = 1000
        let theta = 0
        let prevTime = Date.now()
        function init() {
          container = document.getElementById('horse')
          camera = new THREE.PerspectiveCamera(
            50,
            window.innerWidth / window.innerHeight,
            10,
            10000
          )

          scene = new THREE.Scene()
          /*从上往下*/
          const light1 = new THREE.DirectionalLight(0xfbff03, 4)
          light1.position.set(1, 1, 1).normalize()
          scene.add(light1)

          // const light2 = new THREE.DirectionalLight(0xffffff, 3)
          // light2.position.set(1, 1, 1).normalize()
          // scene.add(light2)
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
          // renderer.setClearColor( 0x000000, 0 ); //default
          // renderer.setPixelRatio(window.devicePixelRatio)
          // renderer.setSize( window.innerWidth, window.innerHeight );
          renderer.setSize(300, 240)
          // renderer.outputEncoding = THREE.sRGBEncoding
          container.appendChild(renderer.domElement)

        }

        function animate() {
          requestAnimationFrame(animate)
          render()
        }
        function render() {
          theta += 0.2
          camera.position.x = radius * Math.sin(THREE.MathUtils.degToRad(theta))
          // console.log(camera.position.x )
          camera.position.y = radius * Math.cos(THREE.MathUtils.degToRad(theta))
          // camera.position.z = radius * Math.cos(THREE.MathUtils.degToRad(theta))
          console.log(camera.position.z)
          camera.lookAt(0, 300, -100)
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
