

hideAll();
function hideAll() {
    $('#dashboard').css('display', 'none');
    $('#POS').css('display', 'none');
    $('#item').css('display', 'none');
    $('#customer').css('display', 'none');
    $('#viewOrder').css('display', 'none');
}

$('#dashboard').css('display', 'block');

function view(visible) {
    hideAll();
    visible.css('display','block');
}

$('#dashboardhtml').on('click',function (event) {
    view($('#dashboard'));
    $('#header').text('DashBoard');
    $('#CssIndex').attr('href',"css/dashboard/dashboard.css");
    $('#CssIndexMedia').attr('href',"css/dashboard/dashboard768media.css");
});

$('#manageCustomerhtml').on('click',function () {
    $('#header').text('Manage Customer');
    view($('#customer'));
    $('#CssIndex').attr('href',"css/Customer/CustomerStyle.css");
    $('#CssIndexMedia').attr('href',"css/Customer/table768media.css");
});

$('#poshtml').on('click',function () {
    $('#header').text('P O S');
    view($('#POS'));
    $('#CssIndex').attr('href',"css/POS/style.css");
    $('#CssIndexMedia').attr('href',"css/POS/table768media.css");
});

$('#manageItemhtml').on('click',function () {
    $('#header').text('Manage Item');
    view($('#item'));
    $('#CssIndex').attr('href',"css/Item/ItemStyle.css");
    $('#CssIndexMedia').attr('href',"css/Item/table768media.css");
});

$('#viewOrderhtml').on('click',function () {
    $('#header').text('View Orders');
    view($('#viewOrder'));
    $('#CssIndex').attr('href',"css/Order/OrderStyle.css");
    $('#CssIndexMedia').attr('href',"css/Order/table768media.css");
});

