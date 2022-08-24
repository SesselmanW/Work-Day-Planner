// Sets the current date at the top of the page
var currentDay = moment().format('LL')
$("#currentDay").text(currentDay)
console.log(currentDay)

//Set the Current Hour (To be used to color code the planner)
var currentHour = moment().format("HH")
console.log(currentHour)

// $(".time-block").each(function(){
//     var timeDiv = $(this).attr("id");
//     console.log()
//     })
// )