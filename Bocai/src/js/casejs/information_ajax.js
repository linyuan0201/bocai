var data = $(".input").val();
$.ajax({
    type: "post",
    url: "../../php/information.php",
    data: data,
    dataType: "json",
    success: function(response) {
        return response;
    }
});