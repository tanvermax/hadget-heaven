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

export { addtostoredlist,getstoredeWiselist }