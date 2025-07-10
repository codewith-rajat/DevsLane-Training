import React from 'react';
import Items from './Items';
function ItemsList({ products }) {
    return (
        <div className='flex flex-wrap pl-30 gap-2' >
            {products && products.map(function (item,idx) {
                return (
                    <Items
                        key={idx}
                        image={item.image}
                        name={item.name}
                        category={item.category}
                        price={item.price}
                        showDetails={item.showDetails}
                    />
                );
            })}
        </div>
    );
}
export default ItemsList;