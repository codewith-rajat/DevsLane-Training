import React from 'react';
import Items from './Items';
function ItemsList({ products }) {
    return (
        <div className='flex flex-wrap pl-30 gap-2' >
            {products && products.map(function (item) {
                return (
                    <Items
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        name={item.name}
                        category={item.category}
                        price={item.price}
                    />
                );
            })}
        </div>
    );
}
export default ItemsList;