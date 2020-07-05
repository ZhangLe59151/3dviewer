import { useObserver } from 'mobx-react';
import React from 'react';
import { Card } from 'pages/map/styled';
import gMapStore from 'store/gmap';

interface IProps {
  item: number;
  label: string;
}

export const PropertyCard = (props: IProps) => {
  return useObserver(() => (
    <Card id={props.label}>
      {gMapStore.data[props.item].BType} <br />
      {gMapStore.data[props.item].PID}
    </Card>
  ));
};
