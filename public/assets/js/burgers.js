// front end javascript
$(function(){
    $("#eat-me").on("click", function(event){
        var id = $(this).data("id");
        var devoured = true;
        var devouredState = {
            devoured: devoured
        };
        // PUT request
        console.log("eat me clicked");
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(
            function() {
                console.log("changed devoured to", devoured);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        console.log("submit button pushed");
        var newDevoured = {
          name: $("#ca").val().trim(),
          devoured: $("[name=devoured]:checked").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newDevoured
        }).then(
            function() {
                console.log("You have created a new burger");
                location.reload();
            }
        )
});
});