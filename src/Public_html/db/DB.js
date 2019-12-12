var itemTable = new Array();
var customerTable=new Array();

var item1=new Item(1	,'Iphone X',	10	,'Apple'	,120000,	156000);
pushItem(item1);
var customer1=new Customer(1,'Ravindu','0770180886','Horana');
pushCustomer(customer1);

function pushItem(item) {
    itemTable.push(item);
    loadItemTable();
}
function loadItemTable() {
    $('#tblItems').children().remove();
    for (let i = 0; i < itemTable.length; i++) {
        let item = itemTable[i];
        var row = "<tr><td>" + item.getId() + "</td><td>" + item.getDescription() + "</td>" +
            "<td>" + item.getBrand() + "</td><td>" + item.getQty() + "</td><td>" + item.getBuyingPrice() + "</td>" +
            "<td>" + item.getSellingPrice() + "</td></tr>";
        $('#tblItems').append(row);
    }
    itemTableClickEvent();
}

function itemTableClickEvent() {
    $('#tblItems>tr').on('click',function () {
        selectedItemId=$($(this).children().get(0)).text();
        var name=$($(this).children().get(1)).text();
        var qty=$($(this).children().get(2)).text();
        var brand=$($(this).children().get(3)).text();
        var buying=$($(this).children().get(4)).text();
        var selling=$($(this).children().get(5)).text();

        $('#itemform>:nth-child(1)').val(name);
        $('#itemform>:nth-child(2)').val(brand);
        $('#itemform>:nth-child(3)').val(qty);
        $('#itemform>:nth-child(4)').val(buying);
        $('#itemform>:nth-child(5)').val(selling);
    });
}

function pushCustomer(customer) {
    customerTable.push(customer);
    loadCustomerTable();
}

function loadCustomerTable() {
    $('#tblCustomers').children().remove();
    for (let i = 0; i < customerTable.length; i++) {
        let customer = customerTable[i];
        var row = "<tr><td>"+ customer.getId()+"</td><td>"+customer.getName()+"</td><td>"+customer.getContact()+"</td>" +
            "<td>"+customer.getAddress()+"</td></tr>";
        $('#tblCustomers').append(row);
    }
    customerTableClickEvent();
}

function customerTableClickEvent() {
    $('#tblCustomers').children().on('click',function(){
        selectedCustomerId = $($(this).children().get(0)).text();
        let name= $($(this).children().get(1)).text();
        let contact = $($(this).children().get(2)).text();
        let address = $($(this).children().get(3)).text();

        $('#customerUpdateForm>:nth-child(1)').val(name);
        $('#customerUpdateForm>:nth-child(2)').val(contact);
        $('#customerUpdateForm>:nth-child(3)').val(address);
    });
}