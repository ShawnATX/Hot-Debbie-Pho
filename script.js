(() =>{

    
    $.get("/api/tables", function(data) {
        console.log(data);
        if (data) {
            $("#name").text(data.name);
            $("#phone").text(data.phone);
            $("#email").text(data.email);
            $("#party").text(data.party);
        }
    });
    
    
    
    
    
    
    $("#reserve-btn").on("click", () => {
        $("#reserve-btn").preventDefault();
        const name = $("#form-name").val().trim();
        const phone = $("#form-phone").val().trim();
        const email = $("#form-email").val().trim();
        const party = $("#form-party").val().trim();
        
        
        
        $.post("/reserve", data)
    })
    
})();