import React from 'react';
import FoodCard from './FoodCard';

const FoodTab = ({items}) => {
  return (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-7">
            {items.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
  );
};

export default FoodTab;