
 
 $("#add_food_item").submit(function(event){
    alert("Food Item Added Successfully!");
 })

 $("#update_food_item").submit(function(event){
    event.preventDefault();
    var unindexed_array=$(this).serializeArray();
    var data={}

    $.map(unindexed_array, function(n,i){
        data[n['name']]=n['value']
    })
    

    var request={
        "url":`http://localhost:3000/api/foodlist/${data.id}`,
        "method":"PUT",
        "data":data
    }

    $.ajax(request).done(function(response){
        alert("Food Item details updated Sucessfully!");
    })

 })

 if(windows.location.pathname=="/"){
    $ondelete=$(".table tbody td a.delete");
    $ondelete.click(function(){
        var id=$(this).attr("data-id")

        var request={
            "url":`http://localhost:3000/api/foodlist/${id}`,
            "method":"DELETE"
        }

        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Record/Entry deleted sucessfully!");
                location.reload();
            })
        }
    })
 }
