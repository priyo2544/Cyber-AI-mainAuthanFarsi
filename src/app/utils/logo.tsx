/* eslint-disable @typescript-eslint/no-explicit-any */
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export function GetLogo(
  canvasRef: any,
  sceneRef: any,
  rendererRef: any,
  isInteracting: any
) {
  const canvas = canvasRef.current;
  if (!canvas) return;

  if (sceneRef.current) {
    return;
  }

  const scene = new THREE.Scene();
  scene.background = null;
  sceneRef.current = scene;

  const camera = new THREE.PerspectiveCamera(
    45,
    canvas.clientWidth / canvas.clientHeight,
    0.1,
    1000
  );
  camera.position.set(0, 0, 3);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  rendererRef.current = renderer;

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.25;
  controls.enableZoom = false;
  controls.minPolarAngle = Math.PI / 2;
  controls.maxPolarAngle = Math.PI / 2;

  const loader = new THREE.TextureLoader();
  loader.load("/images/001.png", (texture) => {
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      side: THREE.DoubleSide,
    });

    const planeGeometry = new THREE.PlaneGeometry(1, 1);
    const plane = new THREE.Mesh(planeGeometry, material);
    scene.add(plane);

    plane.scale.set(2, 2, 2);

    let defaultRotation = 0;

    function animate() {
      requestAnimationFrame(animate);

      if (!isInteracting.current) {
        defaultRotation += 0.01;
        plane.rotation.y = defaultRotation;
      }

      controls.update();
      renderer.render(scene, camera);
    }

    animate();
  });

  function handleResize() {
    if (canvasRef.current) {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
  }

  window.addEventListener("resize", handleResize);
  handleResize();

  const startInteraction = () => {
    isInteracting.current = true;
  };

  const endInteraction = () => {
    isInteracting.current = false;
    controls.target.set(0, 0, 0);
    camera.position.set(0, 0, 3);
    controls.update();
  };

  controls.addEventListener("start", startInteraction);
  controls.addEventListener("end", endInteraction);

  return () => {
    controls.removeEventListener("start", startInteraction);
    controls.removeEventListener("end", endInteraction);
    window.removeEventListener("resize", handleResize);
  };
}
