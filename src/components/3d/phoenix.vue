<template>
  <div id="phoenix" :style="{ height: height, width: width }"></div>
</template>

<script>
  export default {
    props: {
      width: {
        type: String,
        default: '200px',
      },
      height: {
        type: String,
        default: '200px',
      },
    },
    data() {
      return {}
    },
    mounted() {

      // setTimeout(()=>{
      //   console.log('123')
        this.phoenix()
      // },5000)
    },
    methods: {
      phoenix() {
        let container
        let camera, scene, renderer
        let mesh = [], mixer = []
        let controls
        const radius = 2000
        let theta = 0
        let speed = [0.0004,0.0003]
        let prevTime = Date.now()
        function init() {
          container = document.getElementById('phoenix')
          camera = new THREE.PerspectiveCamera(
            45,
            container.offsetWidth / container.offsetHeight,
            1,
            10000
          )
          camera.position.set(0,500,2000)

          scene = new THREE.Scene()

          const light1 = new THREE.DirectionalLight(0xFFFFFF, 5)
          light1.position.set(1, 1, 0).normalize()
          scene.add(light1)

          const loader = new THREE.GLTFLoader()

          loader.load('https://video.xxroom.xyz/scene.glb', function (gltf) {
            // loader.load('./static/three/gltf/phoenix.glb', function (gltf) {
            // loader.load('./static/three/gltf/phoenix_bird/scene.gltf', function (gltf) {
            let mesh1 = clone(gltf.scene)
            let mesh2 = clone(gltf.scene)

            mesh1.position.set(-1000,-300,0)
            mesh1.scale.set(0.7,0.7,0.7) //缩小至0.5倍
            mesh2.position.set(0,0,0)

            let mixer1 = new THREE.AnimationMixer(mesh1)
            let mixer2 = new THREE.AnimationMixer(mesh2)
            mixer1.clipAction(gltf.animations[0]).setDuration(1).play()
            mixer2.clipAction(gltf.animations[0]).setDuration(1).play()

            scene.add( mesh1,mesh2 );
            mesh.push(mesh1,mesh2);
            mixer.push(  mixer1,mixer2 );
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
          // camera.position.x = radius  * Math.sin(THREE.MathUtils.degToRad(theta))
          // camera.position.y = radius * Math.cos(THREE.MathUtils.degToRad(theta))
          // camera.position.z = radius  * Math.cos(THREE.MathUtils.degToRad(theta))
          /*相机看向的位置*/
          camera.lookAt(0, 0, 0)


          if (mixer) {
            const time = Date.now()
            let t = time - prevTime
            // for ( const mixerItem of mixer ) {
            //   mixerItem.update((t) * 0.0003)
            // }
            if(mixer[0] !== undefined){
              // mesh[0].position.x += (100*0.03)
              // console.log(Math.sin(THREE.MathUtils.degToRad(theta)));
              mesh[0].position.x += 100 * 0.03 * Math.sin(THREE.MathUtils.degToRad(theta))
              if(mesh[0].position.x > mesh[1].position.x +700){
                speed[0] = 0.00025
              }else if(mesh[0].position.x + 800 < mesh[1].position.x){
                speed[0] = 0.0004
              }
              mixer[0].update((t)* speed[0])
              mixer[1].update((t)* speed[1])
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
