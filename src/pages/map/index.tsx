import { useObserver } from 'mobx-react';
import React from 'react';
import { Row, Col } from 'antd';
import playerStore from 'store/player';
import gMapStore from 'store/gmap';
import { PropertyCard } from 'components/propertyCard';

const GameMap = () => {
  const setWhiteBorder = () => {
    document.getElementById('b0')!.style.background = '#ffffff';
    document.getElementById('b1')!.style.background = '#ffffff';
    document.getElementById('b2')!.style.background = '#ffffff';
    document.getElementById('b3')!.style.background = '#ffffff';
    document.getElementById('b4')!.style.background = '#ffffff';
    document.getElementById('b5')!.style.background = '#ffffff';
    document.getElementById('b6')!.style.background = '#ffffff';
    document.getElementById('b7')!.style.background = '#ffffff';
    document.getElementById('b8')!.style.background = '#ffffff';
    document.getElementById('b9')!.style.background = '#ffffff';
    document.getElementById('b10')!.style.background = '#ffffff';
    document.getElementById('b11')!.style.background = '#ffffff';
    document.getElementById('b12')!.style.background = '#ffffff';
    document.getElementById('b13')!.style.background = '#ffffff';
    document.getElementById('b14')!.style.background = '#ffffff';
    document.getElementById('b15')!.style.background = '#ffffff';
    document.getElementById('b16')!.style.background = '#ffffff';
    document.getElementById('b17')!.style.background = '#ffffff';
    document.getElementById('b18')!.style.background = '#ffffff';
    document.getElementById('b19')!.style.background = '#ffffff';
    document.getElementById('b20')!.style.background = '#ffffff';
    document.getElementById('b21')!.style.background = '#ffffff';
    document.getElementById('b22')!.style.background = '#ffffff';
    document.getElementById('b23')!.style.background = '#ffffff';
    document.getElementById('b24')!.style.background = '#ffffff';
    document.getElementById('b25')!.style.background = '#ffffff';
    document.getElementById('b26')!.style.background = '#ffffff';
    document.getElementById('b27')!.style.background = '#ffffff';
    document.getElementById('b28')!.style.background = '#ffffff';
    document.getElementById('b29')!.style.background = '#ffffff';
    document.getElementById('b30')!.style.background = '#ffffff';
    document.getElementById('b31')!.style.background = '#ffffff';
    document.getElementById('b32')!.style.background = '#ffffff';
    document.getElementById('b33')!.style.background = '#ffffff';
    document.getElementById('b34')!.style.background = '#ffffff';
    document.getElementById('b35')!.style.background = '#ffffff';
    document.getElementById('b36')!.style.background = '#ffffff';
    document.getElementById('b37')!.style.background = '#ffffff';
    document.getElementById('b38')!.style.background = '#ffffff';
    document.getElementById('b39')!.style.background = '#ffffff';
  };

  const updateBorder = () => {
    gMapStore.data.forEach((element) => {
      if (element.PID === 'p1') {
        let bNumber = 'b' + String(element.ID);
        document.getElementById(bNumber)!.style.background = 'LavenderBlush';
      }
      if (element.PID === 'p2') {
        let bNumber = 'b' + String(element.ID);
        document.getElementById(bNumber)!.style.background = 'Lavender';
      }
      if (element.PID === 'p3') {
        let bNumber = 'b' + String(element.ID);
        document.getElementById(bNumber)!.style.background = 'Honeydew';
      }
      if (element.PID === 'p4') {
        let bNumber = 'b' + String(element.ID);
        document.getElementById(bNumber)!.style.background = 'Beige';
      }
    });
  };

  const Dise = () => {
    playerStore.dice();
    // gMapStore.updateGMap(playerStore.data[0].playerID, playerStore.data[0].position);
    // gMapStore.updateGMap(playerStore.data[1].playerID, playerStore.data[1].position);
    // gMapStore.updateGMap(playerStore.data[2].playerID, playerStore.data[2].position);
    // gMapStore.updateGMap(playerStore.data[3].playerID, playerStore.data[3].position);
    updateBorder();
  };

  return useObserver(() => (
    <div>
      <button onClick={Dise}>try play the mock</button>
      <Row gutter={[16, 16]}>
        <Col span={2}>
          <PropertyCard label="b0" item={0} />
        </Col>
        <Col span={2}>
          <PropertyCard label="b1" item={1} />
        </Col>
        <Col span={2}>
          <PropertyCard label="b2" item={2} />
        </Col>
        <Col span={2}>
          <PropertyCard label="b3" item={3} />
        </Col>
        <Col span={2}>
          <PropertyCard label="b4" item={4} />
        </Col>
        <Col span={2}>
          <PropertyCard label="b5" item={5} />
        </Col>
        <Col span={2}>
          <PropertyCard label="b6" item={6} />
        </Col>
        <Col span={2}>
          <PropertyCard label="b7" item={7} />
        </Col>
        <Col span={2}>
          <PropertyCard label="b8" item={8} />
        </Col>
        <Col span={2}>
          <PropertyCard label="b9" item={9} />
        </Col>
        <Col span={2}>
          <PropertyCard label="b10" item={10} />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={2}>
          <PropertyCard label="b39" item={39} />
        </Col>
        <Col span={18} />
        <Col span={2}>
          <PropertyCard label="b11" item={11} />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={2}>
          <PropertyCard label="b38" item={38} />
        </Col>
        <Col span={18}>
          玩家：{playerStore.data[0].playerName} 剩余资产: {playerStore.data[0].money}
        </Col>
        <Col span={2}>
          <PropertyCard label="b12" item={12} />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={2}>
          <PropertyCard label="b37" item={37} />
        </Col>
        <Col span={18} />
        <Col span={2}>
          <PropertyCard label="b13" item={13} />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={2}>
          <PropertyCard label="b36" item={36} />
        </Col>
        <Col span={18}>
          玩家：{playerStore.data[1].playerName} 剩余资产: {playerStore.data[1].money}
        </Col>
        <Col span={2}>
          <PropertyCard label="b14" item={14} />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={2}>
          <PropertyCard label="b35" item={35} />
        </Col>
        <Col span={18} />
        <Col span={2}>
          <PropertyCard label="b15" item={15} />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={2}>
          <PropertyCard label="b34" item={34} />
        </Col>
        <Col span={18}>
          玩家：{playerStore.data[2].playerName} 剩余资产: {playerStore.data[2].money}
        </Col>
        <Col span={2}>
          <PropertyCard label="b16" item={16} />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={2}>
          <PropertyCard label="b33" item={33} />
        </Col>
        <Col span={18} />
        <Col span={2}>
          <PropertyCard label="b17" item={17} />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={2}>
          <PropertyCard label="b32" item={32} />
        </Col>
        <Col span={18}>
          玩家：{playerStore.data[3].playerName} 剩余资产: {playerStore.data[3].money}
        </Col>
        <Col span={2}>
          <PropertyCard label="b18" item={18} />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={2}>
          <PropertyCard label="b31" item={31} />
        </Col>
        <Col span={18} />
        <Col span={2}>
          <PropertyCard label="b19" item={19} />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={2}>
          <PropertyCard label="b30" item={30} />
        </Col>
        <Col span={2}>
          <PropertyCard label="b29" item={29} />
        </Col>
        <Col span={2}>
          <PropertyCard label="b28" item={28} />
        </Col>
        <Col span={2}>
          <PropertyCard label="b27" item={27} />
        </Col>
        <Col span={2}>
          <PropertyCard label="b26" item={26} />
        </Col>
        <Col span={2}>
          <PropertyCard label="b25" item={25} />
        </Col>
        <Col span={2}>
          <PropertyCard label="b24" item={24} />
        </Col>
        <Col span={2}>
          <PropertyCard label="b23" item={23} />
        </Col>
        <Col span={2}>
          <PropertyCard label="b22" item={22} />
        </Col>
        <Col span={2}>
          <PropertyCard label="b21" item={21} />
        </Col>
        <Col span={2}>
          <PropertyCard label="b20" item={20} />
        </Col>
      </Row>
    </div>
  ));
};

export default GameMap;
