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
        console.log(id, "already exit");

    }
    else {
        storedlist.push(id);
        const storedliststr = JSON.stringify(storedlist);
        localStorage.setItem('wise-list', storedliststr)
    }
}


const getStoredCartList= ()=>{
 const CartList= localStorage.getItem('cart-list');
 if (CartList) {
    const parsecartlist = JSON.parse(CartList);
    return parsecartlist;   
 }
 else{
    return [];
 }
}


const addtoCartList= (id)=>{

    const storedcartlist = getstoredeWiselist();
    if (storedcartlist.includes(id)) {
        console.log(id,'alredy exit');
        
    }
else{
    storedcartlist.push(id);
    const storedcartlistStr = JSON.stringify(storedcartlist);
    localStorage.setItem('cart-list',storedcartlistStr)
}
}

export { addtostoredlist,getstoredeWiselist,getStoredCartList,addtoCartList }