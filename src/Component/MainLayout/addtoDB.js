import {  toast } from 'react-toastify';

const getstoredeWiselist = () => {
    // realisdt
    const storedlist = localStorage.getItem('wise-list');
    if (storedlist) {
        const parsedList = JSON.parse(storedlist);
        return parsedList;

    }
    else {
        return []
    }

}


const addtostoredlist = (id) => {

    const storedlist = getstoredeWiselist();
    if (storedlist.includes(id)) {
        toast.warn( "already exit");
        console.log();

    }
    else {
        storedlist.push(id);
        const storedliststr = JSON.stringify(storedlist);
        localStorage.setItem('wise-list', storedliststr);
        toast.success( "Added");

    }
}


const getStoredCartList = () => {
    const CartList = localStorage.getItem('cart-list');
    if (CartList) {
        const parsecartlist = JSON.parse(CartList);
        return parsecartlist;
    }
    else {
        return []
    }
}


const addtoCartList = (id) => {

    const storedcartlist = getStoredCartList();
 
    if (storedcartlist.includes(id)) {
        toast.warn( "already exit");
        

    }
    else {
        storedcartlist.push(id);

        const storedcartlistStr = JSON.stringify(storedcartlist);
        localStorage.setItem('cart-list', storedcartlistStr)
        toast.success( "Added");
    }
}

export { addtostoredlist, getstoredeWiselist, getStoredCartList, addtoCartList }