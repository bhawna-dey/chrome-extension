var contextMenuItem ={
    "id": "context",
    "title": "My Chrome context menu ", /* what appears in the menu */
    "contexts": ['page']  /* to make this appear only when user selects something on page */
}

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener( (clickData) => {
    if(clickData.menuItemId == "context"){
        alert("clicked point in page")
    }
})
