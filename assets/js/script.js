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


var saveButtonClickHandler = function(event){
    //Get the ID of the Button that was clicked
    //Remove -button so you can lookup WHICH timeblock to update in
    //you arrary and local storage based off the index
    var clickedElementID = event.currentTarget.id;
    var elementID = clickedElementID.replace("-button","");
    
    //Get the value types in to the text area in the timeblock that was clicked
    var typedItem = $("#"+elementID+"-text");
    
    //Replace the item in the array
    timeBlocks[elementID].item = typedItem.val();

    //Write the array to local storage
    localStorage.setItem("schedule", JSON.stringify(timeBlocks));

};

var renderTimeBlocks = function () {

    //real quick put datte at top of page
    $("#currentDay").text(moment().format('MM/DD/YYYY'))

    //this function will create 8 li's and render them into the ul
    //get refernce to ul from html so that we can append child lis
    var timeBlockUl = $("#time-block-list");
    
    //before we render the timeBlocks array, check local storage!! and see if there 
    //are already shceduled items that need to be rendered
    scheduledItems = JSON.parse(localStorage.getItem("schedule"));
    if (scheduledItems){
        timeBlocks = scheduledItems
    }

    for (var i = 0; i < timeBlocks.length; i++) {

        //create 8 li and append to the ul
        var timeBlocksLi = $("<li>").addClass("list-group-item");

        var timeBlocksRow = $("<div>").addClass("row");
        timeBlocksLi.append(timeBlocksRow)

        var scheduleTimeDiv = $("<div>").addClass("time col-md-2").text(timeBlocks[i].time);
        timeBlocksRow.append(scheduleTimeDiv);

        var scheduleTextDiv = $("<div>").addClass("schedule col-md-8");
        var scheduleTextInput = $("<textarea>").addClass("input-text-area").attr("id",i+'-text').val(timeBlocks[i].item);
        scheduleTextDiv.append(scheduleTextInput);
        timeBlocksRow.append(scheduleTextDiv);

        var saveButtonDiv = $("<div>").addClass("save");
        var saveButtonEl = $("<button>").addClass("saveBtn col-md-2").attr("id",i+'-button').bind( "click",saveButtonClickHandler);
        var saveIconSpan = $("<span>").addClass("oi oi-lock-locked iconic-vertical-align-center");
        saveButtonEl.append(saveIconSpan);
        saveButtonDiv.append(saveButtonEl);
        timeBlocksRow.append(saveButtonDiv);


        //first we get the time for timeBlocks at i 
        var currentBlockTime = timeBlocks[i].time;
        //convert string to moment object
        var currentBlockTimeMoment = moment(currentBlockTime, "HH").hour();
        var now = moment().hour()

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




