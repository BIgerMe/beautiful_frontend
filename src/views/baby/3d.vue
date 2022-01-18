<template>
  <div id="phoenix" class="index-container" style="width: 100%;height: 800px"></div>
</template>

<script>
  // import * as THREE from 'three'
  // import three from 'https://cdn.skypack.dev/three';
  // import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
  // import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
  // import { THREE } from './static/js/three.js';

  export default {
    name: 'three',
    components: {},
    data() {
      return {}
    },
    created() {},
    mounted() {
      this.space()
      // this.phoenix()
    },
    methods: {
      space(){
        let container, stats
        let camera, scene, renderer
        let mesh
        let controls
        const radius = 2000
        function init() {
          container = document.getElementById('phoenix')
          camera = new THREE.PerspectiveCamera(
            45,
            container.offsetWidth / container.offsetHeight,
            1,
            10000
          )
          camera.position.set(0,500,0)

          scene = new THREE.Scene()
          /*从上往下*/
          // const light1 = new THREE.DirectionalLight(0xFFFFFF, 4)
          // light1.position.set(1, 1, 0).normalize()
          // scene.add(light1)

          // const light = new THREE.AmbientLight( 0xf00 ); // soft white light
          // scene.add( light );
          // const light1 = new THREE.AmbientLight( 0x0f0 ); // soft white light
          // scene.add( light1 );

          // const light2 = new THREE.DirectionalLight(0xFFFFFF, 3)
          // light2.position.set(1, -1, 0).normalize()
          // scene.add(light2)
          const loader = new THREE.GLTFLoader()
          // loader.load('https://video.xxroom.xyz/scene.glb', function (gltf) {
          loader.load('./static/three/gltf/need_some_space/scene.gltf', function (gltf) {
          // loader.load('./static/three/gltf/nss.glb', function (gltf) {

            let mesh = gltf.scene
            mesh.position.set(-100,0,100)
            scene.add(mesh)
            // scene.add( mesh1,mesh2 );
            // mesh.push(mesh1,mesh2);
            // mixer.push(  mixer1,mixer2 );
            // scene.add(mesh1)
            // mixer = new THREE.AnimationMixer(mesh1)
            // mixer.clipAction(gltf.animations[0]).setDuration(1).play()
          })

          renderer = new THREE.WebGLRenderer( {alpha: true } );
          //您可以将透明颜色保留为默认值。
          renderer.setClearColor( 0x000000); //default
          renderer.setPixelRatio(window.devicePixelRatio) //像素比
          renderer.setSize(container.offsetWidth, container.offsetHeight)
          // renderer.outputEncoding = THREE.sRGBEncoding //真彩色，不加的话颜色会与ps中图像看上去的不同
          container.appendChild(renderer.domElement)

          controls = new THREE.OrbitControls(camera,renderer.domElement);// 初始化控制器
          // controls.target.set(0, 0, 0);// 设置控制器的焦点，使控制器围绕这个焦点进行旋转
          // controls.maxPolarAngle = Math.PI / 3;//绕垂直轨道的距离（范围是0-Math.PI,默认为Math.PI）
          // controls.autoRotate = false;
        }
        function animate() {
          requestAnimationFrame(animate)
          render()
        }
        function render() {
          /*相机的位置*/
          // theta += 0.2
          /*头正尾负*/
          // camera.position.x = radius * Math.sin(THREE.MathUtils.degToRad(theta))
          // camera.position.y = radius * Math.cos(THREE.MathUtils.degToRad(theta))
          // camera.position.z = radius * Math.cos(THREE.MathUtils.degToRad(theta))
          /*相机看向的位置*/
          // camera.lookAt(0, 0, 0)

          renderer.render(scene, camera)
        }
        init()
        animate()
      },
      phoenix() {
        let container, stats
        let camera, scene, renderer
        let mesh = [], mixer = []
        let controls
        const radius = 2000
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
          light1.position.set(1, 1, 0).normalize()
          scene.add(light1)


          // const light2 = new THREE.DirectionalLight(0xFFFFFF, 3)
          // light2.position.set(1, -1, 0).normalize()
          // scene.add(light2)
          const loader = new THREE.GLTFLoader()


          loader.load('https://video.xxroom.xyz/scene.glb', function (gltf) {
          // loader.load('./static/three/gltf/phoenix.glb', function (gltf) {
          // loader.load('./static/three/gltf/phoenix_bird/scene.gltf', function (gltf) {
            let mesh1 = clone(gltf.scene)
            let mesh2 = clone(gltf.scene)

            mesh1.position.set(-1000,0,0)
            mesh1.scale.set(0.5,0.5,0.5) //缩小至0.5倍
            mesh2.position.set(1000,300,0)
            // console.log(mesh1)
            // console.log(mesh2)
            // return false;
            let mixer1 = new THREE.AnimationMixer(mesh1)
            let mixer2 = new THREE.AnimationMixer(mesh2)
            mixer1.clipAction(gltf.animations[0]).setDuration(1).play()
            mixer2.clipAction(gltf.animations[0]).setDuration(1).play()
            // scene.add(mesh)
            scene.add( mesh1,mesh2 );
            mesh.push(mesh1,mesh2);
            mixer.push(  mixer1,mixer2 );
            // scene.add(mesh1)
            // mixer = new THREE.AnimationMixer(mesh1)
            // mixer.clipAction(gltf.animations[0]).setDuration(1).play()
          })

          renderer = new THREE.WebGLRenderer( {alpha: true } );
          //您可以将透明颜色保留为默认值。
          renderer.setClearColor( 0x000,0); //default
          renderer.setPixelRatio(window.devicePixelRatio) //像素比
          renderer.setSize(container.offsetWidth, container.offsetHeight)
          renderer.outputEncoding = THREE.sRGBEncoding //真彩色，不加的话颜色会与ps中图像看上去的不同
          container.appendChild(renderer.domElement)

          controls = new THREE.OrbitControls(camera,renderer.domElement);// 初始化控制器
          controls.target.set(0, 0, 0);// 设置控制器的焦点，使控制器围绕这个焦点进行旋转
          // controls.maxPolarAngle = Math.PI / 3;//绕垂直轨道的距离（范围是0-Math.PI,默认为Math.PI）
          // controls.autoRotate = false;
          console.log(controls)
        }

        /*克隆*/
        function clone( source ) {
          const sourceLookup = new Map();
          const cloneLookup = new Map();
          const clone = source.clone();
          parallelTraverse( source, clone, function ( sourceNode, clonedNode ) {
            sourceLookup.set( clonedNode, sourceNode );
            cloneLookup.set( sourceNode, clonedNode );
          } );

          clone.traverse( function ( node ) {
            if ( ! node.isSkinnedMesh ) return;
            const clonedMesh = node;
            const sourceMesh = sourceLookup.get( node );
            const sourceBones = sourceMesh.skeleton.bones;
            clonedMesh.skeleton = sourceMesh.skeleton.clone();
            clonedMesh.bindMatrix.copy( sourceMesh.bindMatrix );
            clonedMesh.skeleton.bones = sourceBones.map( function ( bone ) {
              return cloneLookup.get( bone );
            } );
            clonedMesh.bind( clonedMesh.skeleton, clonedMesh.bindMatrix );
          } );
          return clone;
        }
        function parallelTraverse( a, b, callback ) {
          callback( a, b );
          for ( let i = 0; i < a.children.length; i ++ ) {
            parallelTraverse( a.children[ i ], b.children[ i ], callback );
          }
        }

        function animate() {
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
            let t = time - prevTime
            // for ( const mixerItem of mixer ) {
            //   mixerItem.update((t) * 0.0003)
            // }
            if(mixer[0] !== undefined){
              mesh[0].position.x += (100*0.03)
              mixer[0].update((t)* 0.0004)
              mixer[1].update((t)* 0.0003)
            }
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
