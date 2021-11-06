const renderItems = (data) => {
    console.log(data);
};

/* for (let i = 0; 1 < renderItems.length; i++) {
    console.log(renderItems[i]);
} */

fetch('./db/partners.json')
    .then((response) => response.json())
    .then((data) => 
    {renderItems(data);
})
.catch((error) => {
    console.log(error);
});
