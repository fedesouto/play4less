import { getDoc, getDocs, doc, collection, getFirestore, addDoc } from '@firebase/firestore';
import { app } from './firebase';

const db = getFirestore(app)

const itemCollection = collection(db, 'items')

const orderCollection = collection(db, 'orders')

//get all products
export const getAllProducts = (_callback) => {
    getDocs(itemCollection).then(snapshot => {
        if (snapshot) {
            _callback(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        }
    })
}


//get single product

export const getSingleProduct = (productId, _callback) => {

    const docRef = doc(db, "items", productId)

    getDoc(docRef).then(snapshot => {
        if (snapshot.exists()) {
            _callback({ id: productId, ...snapshot.data() })
        }
    })
}

//add order

export const addOrder = (data, _callback) => {
    addDoc(orderCollection, data)
    .then(({id}) => _callback(id))
}