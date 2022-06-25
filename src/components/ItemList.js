import { useEffect, useState } from 'react';

function ItemList(props) {

    const {inventory} = props;
    const inventorySection = [];

    const inventoryData = inventory[0];
    console.log(inventoryData);

    useEffect(() => {
        Object.keys(inventory).forEach(key => {
            inventorySection.push(
                <li key={key}>
                {key}: {inventory[key]}
            </li>
            )
        })  
    }, [])

    return (

        // {inventorySection}
        console.log('hi')
    )
    
}

export default ItemList;