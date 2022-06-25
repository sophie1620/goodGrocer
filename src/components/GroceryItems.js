import { useState, useEffect } from 'react';
import firebase from "../firebase";
import { getDatabase, ref, onValue } from 'firebase/database';
import ItemList  from './ItemList';



function GroceryItems() {
    const [inventory, setInventory] = useState([]);
    // const [grocerySections, setGrocerySections] = useState([]);
    // const [itemQuantity, setItemQuantity] = useState({});

    const database = getDatabase(firebase);
    const dbRef = ref(database);

    // const arrayObj = function(object) {
    //     const newArray = [];

    //     for (let key in object) {
    //         newArray.push(object[`${key}`]);
    //         console.log(newArray);
    //     }

    //     console.log(newArray);
    // }

    useEffect(() => {
        const newState = []

        onValue(dbRef, (response) => {
            const data = response.val();
            // console.log(data);
            newState.push(data);
            setInventory(newState);

            // arrayObj(data);
        })
    }, [])

    

    return (
        <>
            <p>grocery items:</p>
                {
                    inventory.map((section) => 
                        Object.entries(section).map(([key, value]) => {
                            return (
                                <li key={key}>
                                    {key}
                                    <ItemList 
                                        inventoryItems={section[key]}
                                    />
                                </li>
                            )
                        })
                    )

                }

        </>
    )
}

export default GroceryItems;