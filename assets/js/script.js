//get current date in header using Moment.js
var myDate = moment().format("dddd, MMMM Do YYYY, h:mm a");
moment();
$("#currentDay").text(myDate);

//Save button functionality
$(document).ready(function () {
  // event listener for Save Button
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);

  })

    //color code tasks by past, present, future events
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
  // Retrieve data from local storage if applicable
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

checkTime();
})


