var timeBlocks = [{
        "time": "0900",
        "item": ""
    },
    {
        "time": "1000",
        "item": ""
    },
    {
        "time": "1100",
        "item": ""
    },
    {
        "time": "1200",
        "item": ""
    },
    {
        "time": "1300",
        "item": ""
    },
    {
        "time": "1400",
        "item": ""
    },
    {
        "time": "1500",
        "item": ""
    },
    {
        "time": "1600",
        "item": ""
    },
    {
        "time": "1700",
        "item": ""
    },
];
//create an array with 8 time blocks from 9 to 5

var renderTimeBlocks = function () {
    //this function will create 8 li's and render them into the ul
    //get refernce to ul from html so that we can append child lis
    var timeBlockUl = $("#time-block-list");

    for (var i = 0; i < timeBlocks.length; i++) {

        //create 8 li and append to the ul
        var timeBlocksLi = $("<li>").addClass("list-group-item");

        var timeBlocksRow = $("<div>").addClass("row");
        timeBlocksLi.append(timeBlocksRow)

        var scheduleTimeDiv = $("<div>").addClass("time col-md-2").text(timeBlocks[i].time);
        timeBlocksRow.append(scheduleTimeDiv);

        var scheduleTextDiv = $("<div>").addClass("schedule col-md-8");
        var scheduleTextInput = $("<textarea>").addClass("input-text-area");
        scheduleTextDiv.append(scheduleTextInput);
        timeBlocksRow.append(scheduleTextDiv);

        var saveButtonDiv = $("<div>").addClass("save");
        var saveButtonEl = $("<button>").addClass("saveBtn col-md-2");
        var saveIconSpan = $("<span>").addClass("oi oi-lock-locked iconic-vertical-align-center");
        saveButtonEl.append(saveIconSpan);
        saveButtonDiv.append(saveButtonEl);
        timeBlocksRow.append(saveButtonDiv);


        //first we get the time for timeBlocks at i 
        var currentBlockTime = timeBlocks[i].time;
        //convert string to moment object
        var currentBlockTimeMoment = moment(currentBlockTime, "HH").hour();
        var now = moment().set("hour", 13).hour()
        console.log(now);
        console.log(currentBlockTimeMoment)

        if (now>currentBlockTimeMoment) {
            timeBlocksLi.addClass("list-group-item-secondary");
        } else if (now==currentBlockTimeMoment) {
            timeBlocksLi.addClass("list-group-item-danger");
        } else {
            timeBlocksLi.addClass("list-group-item-success");
        }

        timeBlockUl.append(timeBlocksLi);
    }
}

renderTimeBlocks();



//  //time from 0900 to 1700
//  var time = "09:00";
// var formatted = moment(time, "HH:mm").format("hh:mm");
// console.log(formatted);

// //create elements to make up a schedule list
// var schedule = function () {
//     //items? --> didnt i already make a var called items so now i just need to place in div?
//     
//     //save items spot for button?

//     //append span to parent li
//     timeLi.append(scheduleItems)

//     //append to ul list on the page
//     $("list" + ).append(timeLi);

// }


//  if (moment().isAfter(time)) {
// //apply new class if upcoming schedule item is in a future time make green
//      $(taskEl).addClass("list-group-item-danger");
// //apply new class if upcoming schedule item is at current time make red
//  } else if (Math.abs(moment().diff(time, "hours")) <= 1) {
//      $(taskEl).addClass("list-group-item-warning");
// //apply new class if upcoming schedule item is in past time make gray
//  } else if (Math.abs(moment().diff(time, "hours")) > 1) {
//      $(taskEl).addClass("list-group-item-warning");
//  }

//  //save button was clicked
//  $("#save-button").click(function() {
//      //get form values
//      var items = $("#schedule-text").val();
//      saveItems();
//  }

//  //save schedule item to local storage
//  var saveItems = function () {
//     localStorage.setItem("items", JSON.stringify(items));