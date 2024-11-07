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

 const clearCartList = () => {
    localStorage.clear(); // assuming 'cart' is the key where you store the cart items
  };


  const removeFavorite = (id) => {
    const favorite = getStoredCartList();
 
    const remined = favorite.filter(favId => favId !== id);
    localStorage.setItem('cart-list', JSON.stringify(remined));
    toast.success("Successfully removed");
};

const removewise = (id) => {
    const favorite = getstoredeWiselist();
 
    const remined = favorite.filter(favId => favId !== id);
    localStorage.setItem('wise-list', JSON.stringify(remined));
    toast.success("Successfully removed");
};






export { addtostoredlist, getstoredeWiselist,removeFavorite,removewise, getStoredCartList, addtoCartList ,clearCartList}