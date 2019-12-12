var count = itemTable.length + 1;
$('#btnAddItem').on('click', function () {
    var itemdesc = $('#itemform>:nth-child(1)').val();
    var qty = $('#itemform>:nth-child(2)').val();
    var brand = $('#itemform>:nth-child(3)').val();
    var buying = $('#itemform>:nth-child(4)').val();
    var selling = $('#itemform>:nth-child(5)').val();
    resetTxt();
    var item = new Item(count++, itemdesc, qty, brand, buying, selling);
    pushItem(item);
});

let selectedItemId;

function resetTxt() {
    $('#itemform>:nth-child(1)').val('');
    $('#itemform>:nth-child(2)').val("");
    $('#itemform>:nth-child(3)').val("");
    $('#itemform>:nth-child(4)').val("");
    $('#itemform>:nth-child(5)').val("");
}

$('#btnDeleteItem').on('click', function () {
    for (let i = 0; i < itemTable.length; i++) {
        var item = itemTable[i];
        if (item.getId() == selectedItemId) {
            itemTable.splice(i, 1);
        }
    }
    loadItemTable();
});

$('#btnUpdateItem').on('click', function () {

    let desc = $('#itemform>:nth-child(1)').val();
    let qty = $('#itemform>:nth-child(2)').val();
    let brand = $('#itemform>:nth-child(3)').val();
    let buyingP = $('#itemform>:nth-child(4)').val();
    let sellingP = $('#itemform>:nth-child(5)').val();

    for (let i = 0; i < itemTable.length; i++) {
        var item = itemTable[i];
        if (item.getId() == selectedItemId) {
            item.setDescription(desc);
            item.setQty(qty);
            item.setBrand(brand);
            item.setBuyingPrice(buyingP);
            item.setSellingPrice(sellingP);
        }
    }
    loadItemTable();
});