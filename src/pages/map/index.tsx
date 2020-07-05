import { useObserver } from 'mobx-react';
import React from 'react';
import { Row, Col } from 'antd';
import playerStore from 'store/player';
import gMapStore from 'store/gmap';
import { PropertyCard } from 'components/propertyCard';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useTranslation } from 'react-i18next';

const GameMap = () => {
  const { t } = useTranslation();
  // === THREE.JS CODE START ===
  let scene = new THREE.Scene();
  let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  let renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  let geometry = new THREE.BoxGeometry(1, 1, 1);
  let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  let cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  camera.position.z = 5;
  const line = new THREE.Line(geometry, new THREE.LineBasicMaterial());
  scene.add(line);
  let animate = function() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  };
  animate();
  // === THREE.JS EXAMPLE CODE END ===

  return useObserver(() => <div></div>);
};

export default GameMap;
