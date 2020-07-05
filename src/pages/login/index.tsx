/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect } from 'react';
import { LoginForm } from 'components/loginForm';
import { Ilogin } from 'interface/requestBase';
import { useObserver } from 'mobx-react';
import agentStore from 'store/agent';
import { useTranslation } from 'react-i18next';
import NetworkStateNotifier from 'react-network-status-notifier';
import history from 'lib/history';
import instance from 'lib/axios';
import { IResponseCode, IAgentRole } from 'interface/base';
import { IResponseLogin } from 'interface/responseLogin';
import { Wrapper } from './styled';
import { Layout, Row, Col, Form, Input, Checkbox, Button, Divider, List, Typography } from 'antd';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const { Header, Footer, Sider, Content } = Layout;

const Login = () => {
  const { t } = useTranslation();
  let scene = new THREE.Scene();

  const loadTeaModel = () => {
    let loader = new GLTFLoader();
    loader.load(
      'model/teapot_n_glass.glb',
      function(gltf) {
        console.info('gltf.scene');
        console.info(gltf.scene);
        scene.add(gltf.scene);
        gltf.animations; // Array<THREE.AnimationClip>
        gltf.scene; // THREE.Group
        gltf.scenes; // Array<THREE.Group>
        gltf.cameras; // Array<THREE.Camera>
        gltf.asset; // Object
      },
      // called while loading is progressing
      function(xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      // called when loading has errors
      function(error) {
        console.error(error);
      },
    );
  };

  useEffect(() => {
    // === THREE.JS CODE START ===
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
      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
    // === THREE.JS EXAMPLE CODE END ===
  }, []);

  return useObserver(() => (
    <div>
      <NetworkStateNotifier offlineMessage={t('Offline Msg')} onlineMessage={t('Online Msg')} />
      {/* <LoginForm onChange={onChange} /> */}
      <Layout>
        <Header style={{ textAlign: 'center', color: '#ffffff' }}>{t('Welcome to App')}</Header>
        <Content>
          <Wrapper>SS</Wrapper>
        </Content>
        <Footer style={{ textAlign: 'center' }}>{t('App Version')}</Footer>
      </Layout>
    </div>
  ));
};

export default Login;
