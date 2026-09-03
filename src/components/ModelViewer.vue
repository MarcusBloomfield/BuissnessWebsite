<template>
  <div class="model-container" ref="container"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, shallowRef } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const container = ref(null)
const animationId = shallowRef(null)

onMounted(() => {
  if (!container.value) return

  // Scene setup
  const scene = new THREE.Scene()
  scene.background = new THREE.Color('#fcfcfc') // Light background

  // Camera
  const camera = new THREE.PerspectiveCamera(45, container.value.clientWidth / container.value.clientHeight, 0.1, 1000)
  camera.position.set(0, 5, 10)

  // Renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(container.value.clientWidth, container.value.clientHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  container.value.appendChild(renderer.domElement)

  // Controls for interaction (rotate, zoom, pan)
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true // adds smooth inertia
  controls.dampingFactor = 0.05
  controls.autoRotate = true // Keeps the rotating animation you had
  controls.autoRotateSpeed = 1.0
  controls.minDistance = 2 // Prevent zooming too close
  controls.maxDistance = 20 // Prevent zooming too far out

  // Geometry - Load GLTF model
  const group = new THREE.Group()
  scene.add(group)

  const loader = new GLTFLoader()
  loader.load(`${import.meta.env.BASE_URL}building/building.glb`, (gltf) => {
    const model = gltf.scene

    // Calculate bounding box to center and scale the model automatically
    const box = new THREE.Box3().setFromObject(model)
    const size = box.getSize(new THREE.Vector3())
    
    // Normalize scale (fit into a reasonable bounding box, e.g., max dimension of 6 units)
    const maxDim = Math.max(size.x, size.y, size.z)
    if (maxDim > 0) {
      const scale = 6 / maxDim
      model.scale.setScalar(scale)
    }
    
    // Recalculate center after scaling to correctly position the model at the origin
    const boxScaled = new THREE.Box3().setFromObject(model)
    const centerScaled = boxScaled.getCenter(new THREE.Vector3())

    model.position.x -= centerScaled.x
    model.position.y -= centerScaled.y
    model.position.z -= centerScaled.z

    group.add(model)
  }, undefined, (error) => {
    console.error('Error loading model:', error)
  })

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
  scene.add(ambientLight)

  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6)
  hemiLight.position.set(0, 20, 0)
  scene.add(hemiLight)

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
  directionalLight.position.set(5, 10, 7)
  scene.add(directionalLight)

  // Animation loop
  const animate = () => {
    animationId.value = requestAnimationFrame(animate)

    // Update controls for damping and auto-rotation
    controls.update()

    renderer.render(scene, camera)
  }

  animate()

  // Handle resize
  const handleResize = () => {
    if (!container.value) return
    camera.aspect = container.value.clientWidth / container.value.clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize(container.value.clientWidth, container.value.clientHeight)
  }
  window.addEventListener('resize', handleResize)

  // Cleanup
  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
    if (animationId.value) {
      cancelAnimationFrame(animationId.value)
    }
    controls.dispose()
    if (renderer && renderer.domElement) {
      container.value?.removeChild(renderer.domElement)
      renderer.dispose()
    }
  })
})
</script>

<style scoped>
.model-container {
  width: 100%;
  height: 500px;
  border: 1px solid #eaeaea;
  background-color: #fcfcfc;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  margin-top: 40px;
  cursor: grab;
}

.model-container:active {
  cursor: grabbing;
}
</style>
