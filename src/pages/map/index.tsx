import { useObserver } from 'mobx-react';
import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import playerStore from 'store/player';
import gMapStore from 'store/gmap';
import { PropertyCard } from 'components/propertyCard';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useTranslation } from 'react-i18next';

const GameMap = () => {
  const { t } = useTranslation();
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.25, 20);
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  const scene = new THREE.Scene();

  useEffect(() => {
    // === THREE.JS CODE START ===
    init();
    // === THREE.JS EXAMPLE CODE END ===
  }, []);

  const init = () => {
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
      render();
    };
    animate();
  };

  const render = () => {
    renderer.render(scene, camera);
  };

  return useObserver(() => <div></div>);
};

export default GameMap;
