function combine(btn){
    const listItem = btn.parentNode;
    const link = listItem.querySelector("#input").value;
    window.location.href = 'api/timestamp/' + link;
}