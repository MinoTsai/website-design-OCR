//functional button on/off
$(".fonctional-icons-btn").click(function () {
    $(this).toggleClass("active");
});

// subtitles show/hide
$("#subtitles-btn").click(function () {
    $("#subtitles-box").toggleClass("d-none");
});

// translate show/hide
$("#translate-btn").click(function () {
    $("#translate-box").toggleClass("d-none");
});

//right functionl area close/open
$("#sidebar-toggle").on("click", function () {
    $("#right-function-area").toggleClass("d-none, d-lg-block");
});

// mic-btn on/off
$("#mic-btn").on("click", function() {
    $("#selfMicMainOn, #selfMicMainOff, #selfMicAttendeeOn, #selfMicAttendeeOff").toggleClass("mic-on mic-off");
})

// videocan-btn on/off
$("#videocam-btn").on("click", function() {
    $("#selfVidoecamMainOn, #selfVidoecamMainOff, #selfVideocamAttendeeOn, #selfVideocamAttendeeOff").toggleClass("d-none");
})

//videocam icon change
function videocamBtn() {
    var x = document.getElementById("videocamIcon");
    if (x.innerHTML === "videocam_off") {
        x.innerHTML = "videocam";
    } else {
        x.innerHTML = "videocam_off";
    }
}
//mic icon change
function micBtn() {
    var x = document.getElementsByClassName("micIcon");
    for (var i = 0; i < x.length; i++) {
        if (x[i].innerHTML === "mic_off") {
            x[i].innerHTML = "mic";
        } else {
            x[i].innerHTML = "mic_off";
        }
    }
}

//copy
function copyEvent(id) {
    var str = document.getElementById(id);
    window.getSelection().selectAllChildren(str);
    document.execCommand("Copy")
}


link ='<title>Conference Room</title>\
<!-- boostrap5 -->\
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet"\
    integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous">\
\
<!-- Google icon -->\
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">\
<link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet">\
\
<link rel="stylesheet" href="assets/css/reset.css">\
<link rel="stylesheet" href="assets/css/style.css?=<?php echo time(); ?>">\
\
<!--??????jQuery-->\
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>\
<!-- boostrap5 -->\
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8" crossorigin="anonymous"></script>';
document.write(link);