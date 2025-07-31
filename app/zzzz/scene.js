'use client';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export function start3D() {
  // Prevent multiple canvas renderers
  const existingCanvas = document.querySelector('#canvas404');
  if (existingCanvas) existingCanvas.remove();

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xF8F9F4);
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 1, 7);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.domElement.id = 'canvas404';
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('zebi-scene').appendChild(renderer.domElement);

  const errorText = document.createElement('div');
  errorText.innerText = 'Erreur 404';
  errorText.style.position = 'absolute';
  errorText.style.top = '80%';
  errorText.style.left = '50%';
  errorText.style.transform = 'translate(-50%, -50%)';
  errorText.style.fontSize = '2rem';
  // errorText.style.color = '#333';
  errorText.style.fontWeight = 'bold';
  errorText.style.pointerEvents = 'none';
  errorText.style.fontFamily = '"Nunito", sans-serif';
  errorText.style.textShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
  errorText.style.background = 'linear-gradient(to right, #ff7b00, #005bff)';
  errorText.style.webkitBackgroundClip = 'text';
  errorText.style.webkitTextFillColor = 'transparent';
  document.getElementById('zebi-scene').appendChild(errorText);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.enableZoom = true;

  const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(0, 5, 5);
  scene.add(directionalLight);

  let logo;
  const targetScale = new THREE.Vector3(1, 1, 1);
  const scaleSpeed = 0.05;

  // --- Particle system ---
  const particles = [];
  const particleCount = 100;

  for (let i = 0; i < particleCount; i++) {
    const geometry = new THREE.SphereGeometry(0.05, 16, 16);
    const material = new THREE.MeshStandardMaterial({
      color: i % 2 === 0 ? 0xff7b00 : 0x005bff, // orange ou bleu
      emissive: 0x000000,
    });
    const sphere = new THREE.Mesh(geometry, material);

    sphere.position.set(
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10
    );

    particles.push(sphere);
    scene.add(sphere);
  }

  const loader = new GLTFLoader();
  loader.load(
    '/models/t2.glb',
    (gltf) => {
      logo = gltf.scene;
      logo.scale.set(1, 1, 1);
      logo.position.set(0, -1, 0);
      scene.add(logo);

      // Animation d'entrée du logo (scale up)
      logo.scale.set(0.1, 0.1, 0.1);

      animate();
    },
    undefined,
    (error) => {
      console.error('Erreur de chargement GLB:', error);
    }
  );

  function animate() {
    requestAnimationFrame(animate);
    if (logo) {
      // Smooth scale animation
      logo.scale.lerp(targetScale, scaleSpeed);
      logo.rotation.y += 0.005; // Rotation automatique sur l'axe Y
    }
    // Particle floating movement
    particles.forEach((p, i) => {
      p.position.y += Math.sin(Date.now() * 0.001 + i) * 0.002;
    });
    controls.update();
    renderer.render(scene, camera);
  }

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}