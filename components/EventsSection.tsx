import React from 'react';
import { events } from '../constants';
import HoverText from './HoverText';

const EventsSection: React.FC = () => {
  return (
    <div className="bottom_component">
      <div className="w-layout-grid grid_list">
        <div className="content-title" dangerouslySetInnerHTML={{ __html: 'EVENT CODES<br>' }} />
      </div>

      {events.map(data => (
        <div key={data.id} className="w-layout-grid grid_list">
          <div className="number-block">{data.id}</div>
          <div className="grid_item">
            <HoverText text={data.date1} className="text-block" />
          </div>
          <div className="grid_item">
            <HoverText text={data.date2} className="text-block" />
          </div>
          <div className="grid_item">
            <HoverText text={data.code} className="text-block" />
          </div>
          <div className="grid_item">
            <HoverText text={data.date3} className="text-block" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsSection;