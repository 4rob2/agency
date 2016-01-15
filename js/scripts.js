$(document).ready(function() {
  $("form#finder").submit(function(event) {
  var pan=$("select#pan").val();
  var temp=$("select#temp").val();
  var activity=$("select#temp").val();
  var time=$("select#temp").val();
  var relative=$("select#temp").val();

  var result = ["Galapagos", "Hawaii", "Africa", "Isle_of_Man", "Antarctica", "Nile"];

    if (pan === "nature" && temp === "warm")
    {
    result=result[0,1,2];
    }
    else if (pan === "nature" && temp === "Discovery")
    {
    result=result[0,2,4];
    }
    else if (pan === "Mankind" && temp === "Discovery")
    {
    result=result[3,4,5];
    }
    var amenities = ["Sea Turtle Animal Rescue Excursion", "Yacht Racing", "Wild Animal Camera Shoot Safari", "Archelogical Dig", "Penguin Feeding", "Ancient Reenactment", "Fun for the whole family or just that special someone"];
    if (activity === "Camera" && time === "Action")
    {
    result=amenities[2,5];
    }
    else if (activity === "HandsOn" && time === "Action")
    {
    result=amenities[0,1,3,4];
    }
    else
      {
      result=amenities[5];
      }
      //$("#quizresult").text(result);
      $("#" + result).show();
      $("#" + result).siblings().hide();

      event.preventDefault();
    });
  });
