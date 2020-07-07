/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect, useState, createRef } from 'react';
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
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { RoughnessMipmapper } from 'three/examples/jsm/utils/RoughnessMipmapper.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { GUI } from 'three/examples/jsm/libs/dat.gui.module.js';

const { Header, Footer, Sider, Content } = Layout;

const Login = () => {
  const { t } = useTranslation();
  const [isModel, setisModel] = useState(false);
  const [currentName, setcurrentName] = useState('No Name');
  const [clientX, setclientX] = useState(0);
  const [clientY, setclientY] = useState(0);
  const threeRef = createRef();
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  // todo 初始化场景
  let scene = new THREE.Scene();
  // todo 加载相机
  const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 80);
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
  });

  const init = () => {
    // todo  renderer
    // renderer.setSize(width, height - 10);
    // renderer.setClearColor(0xb9d3ff,1);
    renderer.setClearColor(0x000000, 1.0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // todo 加载光线
    const ambLight = new THREE.AmbientLight(0x404040, 0.5);
    const pointLight = new THREE.PointLight(0x404040, 0.8);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    pointLight.position.set(100, 10, 0);
    pointLight.receiveShadow = true;
    scene.add(ambLight);
    scene.add(pointLight);
    scene.add(directionalLight);

    let geometry = new THREE.BoxGeometry(1, 1, 1);
    const line = new THREE.Line(geometry, new THREE.LineBasicMaterial());
    scene.add(line);

    // add model
    let mtlLoader = new MTLLoader();
    mtlLoader.load('model/teapot_n_glass.mtl', function(materials) {
      console.info('sdj1 teapot_n_glass.mtl', materials);
      materials.preload();
      let objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load('model/teapot_n_glass.obj', function(object) {
        console.info('sdj2 teapot_n_glass.obj', object);
        console.info('sdj2 - position teapot_n_glass.obj', object.position);
        console.info('sdj2 - parent teapot_n_glass.obj', object.parent);
        let material = new THREE.MeshLambertMaterial({ color: 0x5c3a21 });
        object.scale.set(10, 10, 10);
        scene.add(ambLight);
        scene.add(pointLight);
        scene.add(directionalLight);
        scene.add(object);
      });
    });

    /* let loader = new GLTFLoader().setPath( 'models/' );;
    loader.load('model/teapot_n_glass.gltf', function(gltf) {
      console.info('obj1');
      console.info(gltf);
    }); */

    camera.position.set(0, 25, 25);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    renderer.render(scene, camera);
  };

  const initGUI = () => {
    let decals: any[] = [];
    function removeDecals() {
      decals.forEach(function(d) {
        scene.remove(d);
      });
      decals = [];
    }
    let params = {
      minScale: 10,
      maxScale: 20,
      rotate: true,
      clear: function() {
        removeDecals();
      },
    };

    let gui = new GUI();
    gui.add(params, 'minScale', 1, 30);
    gui.add(params, 'maxScale', 1, 30);
    gui.add(params, 'rotate');
    gui.add(params, 'clear');
    gui.open();
  };

  // todo 场景控制器初始化
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enabled = true; // 鼠标控制是否可用

  // 是否自动旋转
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.05;

  // 是否可旋转，旋转速度(鼠标左键)
  controls.enableRotate = true;
  controls.rotateSpeed = 0.3;

  // controls.target = new THREE.Vector();//摄像机聚焦到某一个点
  // 最大最小相机移动距离(景深相机)
  controls.minDistance = 10;
  controls.maxDistance = 40;

  // 最大仰视角和俯视角
  controls.minPolarAngle = Math.PI / 4; // 45度视角
  controls.maxPolarAngle = Math.PI / 2.4; // 75度视角

  // 惯性滑动，滑动大小默认0.25
  controls.enableDamping = true;
  controls.dampingFactor = 0.25;

  // 是否可平移，默认移动速度为7px
  controls.enablePan = true;
  controls.panSpeed = 0.5;
  // controls.screenSpacePanning	= true;

  // 滚轮缩放控制
  controls.enableZoom = true;
  controls.zoomSpeed = 1.5;

  renderer.render(scene, camera);

  // 水平方向视角限制
  // controls.minAzimuthAngle = -Math.PI/4;
  // controls.maxAzimuthAngle = Math.PI/4;

  useEffect(() => {
    // === THREE.JS CODE START ===
    init();
    // === THREE.JS EXAMPLE CODE END ===
  }, []);

  return useObserver(() => (
    <div>
      <NetworkStateNotifier offlineMessage={t('Offline Msg')} onlineMessage={t('Online Msg')} />
      {/* <LoginForm onChange={onChange} /> */}
      <Layout>
        <Header style={{ textAlign: 'center', color: '#ffffff' }}>{t('Welcome to App')}</Header>
        <Content>
          <Wrapper>
            SS
            <div id="container"></div>
          </Wrapper>
        </Content>
        <Footer style={{ textAlign: 'center' }}>{t('App Version')}</Footer>
      </Layout>
    </div>
  ));
};

export default Login;
