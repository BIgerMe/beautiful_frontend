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
          camera.position.set(0,50,0)
          scene = new THREE.Scene()
          /*从上往下*/
          const light1 = new THREE.DirectionalLight(0xFFFFFF, 1)
          light1.position.set(0,1,0).normalize()
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
          // scene.add( ground );


          const loader = new THREE.GLTFLoader()
          loader.load('./static/three/gltf/two.glb', function (gltf) {
            mesh[0] = gltf.scene
            scene.add(mesh[0])
            console.log(gltf)
            // mesh[0].scale.set(3,3,3)
            // mesh[0].position.y = 4
            // mesh[0].position.z = 14
            // mesh[0].position.x = 12
            // console.log(gltf.scene)
            mesh[0].traverse((child) => {
              // 设置线框材质
              // console.log(child)
              // console.log(child.isMesh)
              if (child.isMesh) {
                if (child.name.indexOf('Car') !== -1) {
                  // console.log(child)
                  //   const material = new THREE.MeshBasicMaterial({
                  //     color: "rgb(35,35,40)",
                  //   });
                  child.material.color.r = 0.1
                  child.material.color.g = 0.1
                  child.material.color.b = 0.1
                  // console.log(child.material.color)

                    // const mesh = new THREE.Mesh(child.geometry, material);
                    // mesh.position.set(child.position.x, child.position.y, child.position.z);
                    // scene.add(mesh)
                }
              }
              //   const material = new THREE.MeshBasicMaterial({
              //     color: "rgb(27,168,47)",
              //   });
              //   const mesh = new THREE.Mesh(child.geometry, material);
              //   mesh.position.set(
              //     child.position.x,
              //     child.position.y,
              //     child.position.z
              //   );
              //   scene.add(mesh)
              // }
              // if (child.isMesh) {
              //   //这个判断模型是楼房还是其他  加载不同的材质
              //   if (["CITY_UNTRIANGULATED"].includes(child.name)) {
              //     // 拿到模型线框的Geometry
              //     this.setCityLineMaterial(child);
              //     this.setCityMaterial(child);
              //   } else if (["ROADS"].includes(child.name)) {
              //     //道路
              //     const material = new THREE.MeshBasicMaterial({
              //       color: "rgb(41,46,76)",
              //     });
              //     const mesh = new THREE.Mesh(child.geometry, material);
              //     mesh.rotateX(-Math.PI / 2);
              //     mesh.position.set(
              //       child.position.x,
              //       child.position.y,
              //       child.position.z
              //     );
              //     scene.add(mesh);
              //   } else {
              //     //地面
              //     const material = new THREE.MeshBasicMaterial({
              //       color: "#040912",
              //     });
              //     const mesh = new THREE.Mesh(child.geometry, material);
              //     scene.add(mesh);
              //     mesh.rotateX(-Math.PI / 2);
              //     mesh.position.set(
              //       child.position.x,
              //       child.position.y,
              //       child.position.z
              //     );
              //   }
              // }
              // 设置线框材质
            });
            // mesh[0] = gltf.scene
            // mesh[0].scale.set(3,3,3)
            // mesh[0].position.y= 4
            // scene.add(mesh[0])
          })
          const axesHelper = new THREE.AxesHelper( 50 );
          scene.add( axesHelper );

          renderer = new THREE.WebGLRenderer( {alpha: true,antialias:true, } );
          // renderer = new THREE.WebGLRenderer();
          //您可以将透明颜色保留为默认值。
          renderer.setClearColor( 0x000); //default
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
