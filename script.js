    // $("#search-btn").on("click", function() {
    //   var searchedCharacter = $("#character-search").val().trim();

    //   // Using a RegEx Pattern to remove spaces from searchedCharacter
    //   // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    //   searchedCharacter = searchedCharacter.replace(/\s+/g, "").toLowerCase();

    //   $.get("/", function(data) {
    //     console.log(data);
    //     if (data) {
    //       $("#stats").show();
    //       $("#name").text(data.name);
    //       $("#role").text(data.role);
    //       $("#age").text(data.age);
    //       $("#force-points").text(data.forcePoints);
    //     } else {
    //       $("#name").text(
    //         "The force is not strong with this one. Your character was not found.");
    //       $("#stats").hide();
    //     }
    //   });
    // });

    $("#reserve-btn").on("click", () => {
      $("#reserve-btn").preventDefault();
      const reservation = {
        name: $("#reserve-name").val().trim(),
        phone: $("#reserve-phone").val().trim(),
        email: $("#reserve-email").val().trim(),
        partySize: $("#reserve-party").val().trim()

      }
      
      $.post("/reserve", data)
    })

      .then(function(data) {
        //console.log("add.html", data);
      }).fail(function(err){
        console.log(err);
      })
  });
