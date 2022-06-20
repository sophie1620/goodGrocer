import { useState, useEffect } from 'react';
import firebase from "../firebase";
import { getDatabase, ref, onValue, get, increment} from 'firebase/database';
import ItemList  from './ItemList';



function GroceryItems() {
    const [inventory, setInventory] = useState([]);
    // const [grocerySections, setGrocerySections] = useState([]);
    // const [itemQuantity, setItemQuantity] = useState({});

    const database = getDatabase(firebase);
    const dbRef = ref(database);

    const arrayObj = function(object) {
        const newArray = [];

        for (let key in object) {
            newArray.push(object[`${key}`]);
        }

        console.log(newArray);
    }

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
            <ul>
                {
                    inventory.map((section) =>   
                        Object.keys(section).map((key) =>
                            <li key={key}>
                                {key}
                            </li>
                        )
                    )
                }
            </ul>

        </>
    )
}

export default GroceryItems;