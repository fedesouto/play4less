import { getDoc, getDocs, doc, collection, getFirestore, addDoc, query, where, writeBatch } from '@firebase/firestore';
import { app } from './firebase';

const db = getFirestore(app)

const itemCollection = collection(db, 'items')

const orderCollection = collection(db, 'orders')

//get product list
export const getAllProducts = (_callback, category) => {
    if (category) {
        const q = query(collection(db, 'items'), where("category", '==', category))
        getDocs(q).then(snapshot => {
            if (snapshot) {
                _callback(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
            }
        })
    }

    else {
        getDocs(itemCollection).then(snapshot => {
            if (snapshot) {
                _callback(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
            }
        })
    }
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
        .then(({ id }) => _callback(id))
}

//update stock after an order is created

export const updateStock = async (data) => {
    const batch = writeBatch(db);
    const { items } = data;

    items.forEach(item => {
        const newStock = item.item.stock - item.quantity;
        const itemDoc = doc(db, "items", item.item.id);
        batch.update(itemDoc, { stock: newStock })
    })

    await batch.commit();

}