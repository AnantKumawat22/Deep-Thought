$(document).ready(function(){
    $.getJSON('Data.json', function(datajson){
        let data = JSON.parse(JSON.stringify(datajson));
        console.log(data);

        $(".demopara").text(data.tasks[0].task_title);
        $(".para-content-1").text(data.tasks[0].assets[0].asset_description);
        $(".box-3").text(data.tasks[0].assets[2].asset_description);
    });
});