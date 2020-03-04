    $("#search-btn").on("click", function() {
      var searchedCharacter = $("#character-search").val().trim();

      // Using a RegEx Pattern to remove spaces from searchedCharacter
      // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
      searchedCharacter = searchedCharacter.replace(/\s+/g, "").toLowerCase();

      $.get("/", function(data) {
        console.log(data);
        if (data) {
          $("#stats").show();
          $("#name").text(data.name);
          $("#phone").text(data.phone);
          $("#email").text(data.email);
          $("#party").text(data.party);
        } else {
          $("#name").text(
            "The force is not strong with this one. Your character was not found.");
          $("#stats").hide();
        }
      });
    });






    $("#reserve-btn").on("click", () => {
      $("#reserve-btn").preventDefault();
      const name = $("#form-name").val().trim();
      const phone = $("#form-phone").val().trim();
      const email = $("#form-email").val().trim();
      const party = $("#form-party").val().trim();


      
      $.post("/reserve", data)
    })

