
var cCount=2;


let selectedCus;
$('#customerAddForm>button').on('click',function(){
    // $('#customerAddForm>button').off('click');
    var cName=$('#customerAddForm>:nth-child(1)').val();
    var contact=$('#customerAddForm>:nth-child(2)').val();
    var address=$('#customerAddForm>:nth-child(3)').val();

    var regName=/^\D{0,}$/;
    var regContact=/^\d{10}$/;
    var regAddress=/[A-z0-9]{5,}/;
    if(regName.test(cName)){
        $('#customerAddForm>:nth-child(1)').css('border-color','#1c894a');
        if(regContact.test(contact)){
            $('#customerAddForm>:nth-child(2)').css('border-color','#1c894a');
            if(regAddress.test(address)){
                $('#customerAddForm>:nth-child(3)').css('border-color','#1c894a');
                selectedCus=new Customer(cCount++,cName,contact,address);
                pushCustomer(selectedCus);
                resetCustomerAddTxt();
                selectCustomer();
            }else {
                $('#customerAddForm>:nth-child(3)').css('border-color','red');
            }
        }else {
            $('#customerAddForm>:nth-child(2)').css('border-color','red');
        }
    }else {
        $('#customerAddForm>:nth-child(1)').css('border-color','red');
    }
});

function resetCustomerAddTxt() {
    $('#customerAddForm>:nth-child(1)').val('');
    $('#customerAddForm>:nth-child(2)').val('');
    $('#customerAddForm>:nth-child(3)').val('');
}

function selectCustomer() {
    $('#selectedCustomer').text(selectedCus.getName());
}

let selectedCustomerId;
$('#btnDeleteCustomer').on('click',function () {
    for (let i = 0; i < customerTable.length; i++) {
        var customer=customerTable[i];
        if(selectedCustomerId==customer.getId()){
            customerTable.splice(i,1);
        }
    }
    loadCustomerTable();
});

$('#btnUpdateCustomer').on('click',function () {
    let name = $('#customerUpdateForm>:nth-child(1)').val();
    let contact = $('#customerUpdateForm>:nth-child(2)').val();
    let address = $('#customerUpdateForm>:nth-child(3)').val();

    for (let i = 0; i < customerTable.length; i++) {
        var customer=customerTable[i];
        if(selectedCustomerId==customer.getId()){
            customer.setName(name);
            customer.setAddress(address);
            customer.setContact(contact);
        }
    }
    loadCustomerTable();
});