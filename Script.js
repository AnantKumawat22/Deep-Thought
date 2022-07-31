$(document).ready(function () {
    $.getJSON('Data.json', function (datajson) {
        let data = JSON.parse(JSON.stringify(datajson));
        console.log(data);

        $(".demopara").text(data.tasks[0].task_title);
        $(".para-content-1").text(data.tasks[0].assets[0].asset_description);
        $(".box-3").text(data.tasks[0].assets[2].asset_description);

        for (let i = 1; i <= 9; i++) {
            var ele = $(`<li class="ul-list">Task Heading ${i}</li>`);
            $('ul').append(ele);
        }
        $('.fa-bars').on("click", function () {
            $('.menubar').toggleClass("remmenuleft");
        });
    });
});
