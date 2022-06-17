import { useState, useEffect } from 'react';
import firebase from "../firebase";
import { getDatabase, ref, onValue, get} from 'firebase/database';

function GroceryItems() {
    const [produceItems, setProduceItems] = useState([]);
    const [itemQuantity, setItemQuantity] = useState({});

    const database = getDatabase(firebase);
    const dbRef = ref(database);

    useEffect(() =>{

        
        get(dbRef).then((snapshot) => {
            if (snapshot.exists()) {
                // console.log(snapshot.val());
                const data = snapshot.val();
                console.log('data:', data.produce);
                
                console.log(data.produce);

                

                for(let item in data.produce){
                    console.log('produce items:', item);
                    
                    setProduceItems(item);

                
                }



            }
        }).catch((error) => {
            console.log(error);
        })
    }, [])


    return (

        <>
            <p>grocery items</p>
        </>
    )
}

export default GroceryItems;