import React from 'react';
import { menus } from '../content';
import MenuDisplay from './MenuDisplay';

const Menus: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Menus</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(menus).map(([id, menu]) => (
          <div key={id} className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">{menu.name}</h2>
            <MenuDisplay menuId={id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menus;