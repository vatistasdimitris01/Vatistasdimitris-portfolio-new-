import React from 'react';
import { eruptions } from '../constants';
import HoverText from './HoverText';

const EruptionsSection: React.FC = () => {
  return (
    <div className="middle_component">
      <div className="w-layout-grid grid_list">
        <div className="content-title" dangerouslySetInnerHTML={{ __html: 'VOLCANIC ERUPTIONS<br>' }} />
      </div>

      {eruptions.map(data => (
        <div key={data.id} className="w-layout-grid grid_list">
          <div className="number-block">{data.id}</div>
          <div className="grid_item">
            <HoverText text={data.name} className="text-block" />
          </div>
          <div className="grid_item">
            <HoverText text={data.location} className="text-block" />
          </div>
          <div className="grid_item">
            <HoverText text={data.date} className="text-block" />
          </div>
          <div className="grid_item">
            <HoverText text={data.level} className="text-block" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default EruptionsSection;