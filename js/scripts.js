$(document).ready(function() {
  $("form#finder").submit(function(event) {
    var pan=$("select#pan").val();
    var temp=$("select#temp").val();
    var activity=$("select#activity").val();
    var time=$("select#time").val();
    var relative=$("select#relative").val();

    var locations = ["galapagos", "hawaii", "africa", "Isle_of_Man", "Antarctica", "Nile"];


  if (pan === "nature" && temp === "warm") {
    $("#galapagos").show();
    $("#hawaii").show();
    $("#africa").show();
} else if (pan === "nature" && temp === "discovery") {
    $("#antarctica").show();
    $("#isleofman").show();
    $("#egypt").show();
};
    var amenities = ["Animal Rescue Excursion", "Yacht Racing", "Wild Animal Camera Shoot Safari", "Archelogical Dig", "Whale Watching", "Ancient Reenactment", "Fun for the whole family or just that special someone"];

  if (activity === "camera" && time === "action")   {
    $("#yacht").show();
    $("#dig").show();
    $("#rescue").show();
} else if (activity === "camera" && time === "relaxing")  {
    $("#ancient").show();
    $("#whale").show();
    $("#safari").show();
} else if (activity === "handsOn" && time === "relaxing") {
    $("#safari").show();
    $("#ancient").show();
    $("#whale").show();
} else if (activity === "handsOn" && time === "action") {
    $("#dig").show();
    $("#yacht").show();
    $("#rescue").show();
};
  if (relative === "special"){
    $("#celebrate").show().append();
} else {
    $("#kids").show().append();
      }
    event.preventDefault();
  });
});
