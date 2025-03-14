import React from 'react';

const FallbackMenu: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Menu</h1>
      
      <div className="space-y-8">
        {/* Starters */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Starters</h2>
          <div className="grid gap-4">
            <div className="flex justify-between">
              <div>
                <h3 className="font-medium">Soup of the Day</h3>
                <p className="text-gray-600">Served with crusty bread</p>
              </div>
              <span className="font-medium">£5.95</span>
            </div>
            <div className="flex justify-between">
              <div>
                <h3 className="font-medium">Garlic Mushrooms</h3>
                <p className="text-gray-600">Pan-fried mushrooms in garlic butter</p>
              </div>
              <span className="font-medium">£6.50</span>
            </div>
            <div className="flex justify-between">
              <div>
                <h3 className="font-medium">Prawn Cocktail</h3>
                <p className="text-gray-600">Classic prawn cocktail with Marie Rose sauce</p>
              </div>
              <span className="font-medium">£7.95</span>
            </div>
          </div>
        </section>

        {/* Main Courses */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Main Courses</h2>
          <div className="grid gap-4">
            <div className="flex justify-between">
              <div>
                <h3 className="font-medium">Fish & Chips</h3>
                <p className="text-gray-600">Beer-battered cod with hand-cut chips and mushy peas</p>
              </div>
              <span className="font-medium">£14.95</span>
            </div>
            <div className="flex justify-between">
              <div>
                <h3 className="font-medium">Steak & Ale Pie</h3>
                <p className="text-gray-600">Homemade pie served with seasonal vegetables</p>
              </div>
              <span className="font-medium">£13.95</span>
            </div>
            <div className="flex justify-between">
              <div>
                <h3 className="font-medium">Vegetable Curry</h3>
                <p className="text-gray-600">Mixed vegetable curry with rice and naan bread</p>
              </div>
              <span className="font-medium">£12.95</span>
            </div>
          </div>
        </section>

        {/* Desserts */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Desserts</h2>
          <div className="grid gap-4">
            <div className="flex justify-between">
              <div>
                <h3 className="font-medium">Sticky Toffee Pudding</h3>
                <p className="text-gray-600">With vanilla ice cream</p>
              </div>
              <span className="font-medium">£6.95</span>
            </div>
            <div className="flex justify-between">
              <div>
                <h3 className="font-medium">Apple Crumble</h3>
                <p className="text-gray-600">With custard or cream</p>
              </div>
              <span className="font-medium">£6.50</span>
            </div>
            <div className="flex justify-between">
              <div>
                <h3 className="font-medium">Ice Cream Selection</h3>
                <p className="text-gray-600">Choice of three scoops</p>
              </div>
              <span className="font-medium">£5.95</span>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-8 p-4 bg-gray-100 rounded">
        <p className="text-sm text-gray-600">
          This is a fallback menu displayed when the main menu system is unavailable.
          Please note that prices and availability may vary.
        </p>
      </div>
    </div>
  );
};

export default FallbackMenu;