import './style.css'
import * as THREE from 'three'

//Setup
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,0.1,1000)
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth,window.innerHeight)
document.body.appendChild(renderer.domElement)
//animate function

function animate () {
  renderer.render(scene,camera)
}
renderer.setAnimationLoop(animate)



