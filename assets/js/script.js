// Sets the current date at the top of the page

var currentDay = moment().format('LL');
$("#currentDay").text(currentDay);
console.log(currentDay);

//Set the Current Hour (To be used to color code the planner)
var currentHour = moment().format("HH");
console.log(currentHour);

$(".time-block").each(function(){
    var timeDiv = $(this).attr("id");
    console.log(timeDiv);

    if (currentHour == timeDiv) {
        $(this).removeClass("future");
        $(this).removeClass("past");
        $(this).addClass("present");
    } else if (currentHour < timeDiv) {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    } else {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past")
    }
})


