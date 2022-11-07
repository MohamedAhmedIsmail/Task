$(function (){
    $('#categories').DataTable({
        paging: true,
        searching: true,
        processing: true,
        serverSide: true,
        ajax: $("#categories").data("url"),
        columns: [
            {data: 'name', name: 'name'},
            {data: 'description', name: 'description'},
            {data: 'category', name: 'category'},
            {data: 'rating', name: 'rating'},
            {data: 'views', name: 'views'},
            {data: 'level', name: 'level'},
            {data: 'hours', name: 'hours'},
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
