<template>
  <div id="phoenix" style="width: 100%;height: 800px;max-height: 100%"></div>
</template>

<script>
  export default {
    name: 'two',
    components: {},
    data() {
      return {}
    },
    created() {},
    mounted() {
      // this.space()
      this.phoenix()
    },
    methods: {
      phoenix() {
        let container
        let camera, scene, renderer
        let mesh = [], mixer = []
        let controls,bloomComposer
        let process = 0
        let prevTime = Date.now()
        function init() {
          container = document.getElementById('phoenix')
          let width = container.offsetWidth <= 414 ? window.innerWidth :  container.offsetWidth
          let height = container.offsetHeight <= 414 ? window.innerHeight : container.offsetHeight
          camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000)
          camera.position.set(0,150,150)
          scene = new THREE.Scene()
          /*从上往下*/
          const light1 = new THREE.DirectionalLight(0xFFFFFF, 1)
          light1.position.set(1,1,0).normalize()
          scene.add(light1)
          const gt = new THREE.TextureLoader().load( "./static/three/grasslight-big.jpg" );
          // const gt = new THREE.TextureLoader().load( "http://head.xxroom.xyz/lisgsx4cwBF8-6HnXbsP51pob76_" );
          const gg = new THREE.PlaneGeometry( 192, 108,1,1 );
          const gm = new THREE.MeshPhongMaterial( { color: 0xffffff, map: gt } );

          const ground = new THREE.Mesh( gg, gm );
          ground.rotation.x = - Math.PI / 2;
          ground.material.map.repeat.set( 4, 2.25 ); //平面贴图重复数
          ground.material.map.wrapS = ground.material.map.wrapT = THREE.RepeatWrapping;
          ground.material.map.encoding = THREE.sRGBEncoding;
          ground.receiveShadow = true;

          scene.add( ground );
          // const geometry = new THREE.PlaneGeometry(100,100,100,100);
          // const material = new THREE.MeshBasicMaterial( {color: 0x1f83e7, side: THREE.DoubleSide} );
          // const plane = new THREE.Mesh( geometry, material );
          // scene.add( plane );
          const loader = new THREE.GLTFLoader()
          console.log(scene)
          loader.load('//video.xxroom.xyz/scene.glb', function (gltf) {
            mesh[0] = gltf.scene
            mesh[0].scale.set(0.03,0.03,0.03)
            mesh[0].position.y= 50
            scene.add(mesh[0])
          })
          console.log(scene)

          renderer = new THREE.WebGLRenderer( {alpha: true } );
          // renderer = new THREE.WebGLRenderer();
          //您可以将透明颜色保留为默认值。
          renderer.setClearColor( 0x000,0); //default
          renderer.setPixelRatio(window.devicePixelRatio) //像素比
          renderer.setSize(width, height)
          renderer.outputEncoding = THREE.sRGBEncoding //真彩色，不加的话颜色会与ps中图像看上去的不同
          container.appendChild(renderer.domElement)

          controls = new THREE.OrbitControls(camera,renderer.domElement);// 初始化控制器
          controls.target.set(0, 0, 0);// 设置控制器的焦点，使控制器围绕这个焦点进行旋转

          // renderer.autoClear = false
        }

        function animate() {
          requestAnimationFrame(animate)
          render()
        }
        function render() {
          // camera.lookAt(0, 0, 0)

          renderer.render(scene, camera)
        }
        init()
        animate()
      },
    },
  }
</script>
<style lang="scss" scoped></style>
