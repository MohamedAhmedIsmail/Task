$(function (){
    $('#categories').DataTable({
        paging: true,
        searching: true,
        processing: true,
        serverSide: true,
        ajax: $("#categories").data("url"),
        columns: [
            {data: 'name', name: 'name'},
            {data: 'active', name: 'active'},
            {
                data: 'action',
                name: 'action',
                orderable: false,
                searchable: false
            },
        ]
    });
});
