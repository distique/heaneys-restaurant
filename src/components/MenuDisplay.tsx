import React from 'react';
import { menus } from '../content';

interface MenuDisplayProps {
  menuId: string;
}

const MenuDisplay: React.FC<MenuDisplayProps> = ({ menuId }) => {
  const menu = menus[menuId];

  if (!menu) {
    return <div>Menu not found</div>;
  }

  return (
    <div className="space-y-8">
      {menu.sections.map((section, index) => (
        <div key={index} className="space-y-4">
          <h3 className="text-lg font-semibold border-b pb-2">{section.name}</h3>
          <div className="space-y-4">
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="flex justify-between">
                <div>
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                <div className="text-right">
                  <span className="font-medium">£{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuDisplay;