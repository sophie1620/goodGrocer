import { useEffect, useState } from 'react';

function ItemList(props) {
    const [ costQuant, setCostQuant ] = useState([]);

    // console.log(props);
    const {inventoryItems} = props;
    // console.log(inventoryItems);
    
    console.log(Object.values(inventoryItems));
    // setCostQuant(Object.values(inventoryItems));
    // console.log(costQuant);


    return (
        <ul>
            {
                Object.entries(inventoryItems).map(([key, value]) => {
                    return (
                        <li key={key}>
                            {key} 
                            {/* grocery item */}
                            <ul>
                                {
                                    Object.entries(inventoryItems[key]).map(([k, val]) => {
                                        return (
                                            <li>
                                                {k}: {inventoryItems[key][k]}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <button>add to cart</button>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default ItemList;