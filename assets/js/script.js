//get current date in header using Moment.js
var myDate = moment().format("dddd, MMMM Do YYYY");
moment();
$("#currentDay").text(myDate);

//Save button functionality
$(document).ready(function () {
  // event listener for Save Button
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);

    function checkTime () {

      //get current time
      var currentTime = moment().hour();

      //check each time block
      $(".time-block").each(function () {
        var timeBlock = parseInt($(this).attr("id").split("hour") [1]);

        if (timeBlock < currentTime) {
          $(this).removeClass("future");
          $(this).removeClass("present");
          $(this).addClass("past");
        }
        else if (timeBlock === currentTime) {
          $(this).removeClass("past");
          $(this).removeClass("future");
          $(this).addClass("present");
        }
        else {
          $(this).removeClass("present");
          $(this).removeClass("past");
          $(this).addClass("future");
        }
      })
      
    }
    checkTime();
  })
  // Retrieve data from local storage if applicable
$("#9am .description").val(localStorage.getItem("9am"));
$("#10am .description").val(localStorage.getItem("10am"));
$("#11am .description").val(localStorage.getItem("11am"));
$("#12pm .description").val(localStorage.getItem("12pm"));
$("#1pm .description").val(localStorage.getItem("1pm"));
$("#2pm .description").val(localStorage.getItem("2pm"));
$("#3pm .description").val(localStorage.getItem("3pm"));
$("#4pm .description").val(localStorage.getItem("4pm"));
$("#5pm .description").val(localStorage.getItem("5pm"));


})


