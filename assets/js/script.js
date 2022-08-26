// Sets the current date at the top of the page

var currentDay = moment().format('LL');
$("#currentDay").text(currentDay);
console.log(currentDay);

// Set the Current Hour (To be used to color code the planner)
var currentHour = moment().format("HH");
console.log(currentHour);
// Compares the Id in the HTML with the Current Hour Variable to determine colors
$(".time-block").each(function(){
    var timeDiv = $(this).attr("id");
    console.log(timeDiv);

// Current Hours = RED
    if (currentHour == timeDiv) {
        $(this).removeClass("future");
        $(this).removeClass("past");
        $(this).addClass("present");
// Future Hours = GREEN
    } else if (currentHour < timeDiv) {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
// Past Hours = GREY
    } else {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past")
    }
})

$(".saveBtn").on("click", function () {
    var text = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
    console.log(localStorage);
})
