function show_time() {
  var date = new Date();
  document.getElementsByClassName("time_hour")[0].innerHTML =
    (date.getHours() % 12) + " Hours";
  document.getElementsByClassName("time_minute")[0].innerHTML =
    date.getMinutes() + " mins";
  document.getElementsByClassName("time_second")[0].innerHTML =
    date.getSeconds() + " secs";

  if (date.getHours() >= 12)
    document.getElementsByClassName("time_ap")[0].innerHTML = "<br> PM";
  else document.getElementsByClassName("time_ap")[0].innerHTML = "<br> AM";

  //date.toLocaleString([],    { hour12: true }  );
  // time_hour
  // time_minute
  // time_second
  // time_ap
}

function setTimeWithImage() {
  // alarm_detail
  // wake_up
  // lunch_time
  // nap_time
  // night_time

  document.getElementsByClassName("ald_text")[0].innerHTML =
    " Wake up time :" + document.getElementById("wake_up").value;
  document.getElementsByClassName("ald_text")[1].innerHTML =
    " Lunch time :" + document.getElementById("lunch_time").value;
  document.getElementsByClassName("ald_text")[2].innerHTML =
    " Nap time :" + document.getElementById("nap_time").value;
  document.getElementsByClassName("ald_text")[3].innerHTML =
    " Night time :" + document.getElementById("night_time").value;
  checkTime();
}
function checkTime() {
  var ch = 1;
  var d = new Date();
  var nowDate =
    "" + d.toLocaleString([], { hour: "2-digit", seconds: "2-digit" });

  if (document.getElementById("wake_up").value.indexOf(nowDate) != -1) {
    ch = 1;
  } else if (
    document.getElementById("lunch_time").value.indexOf(nowDate) != -1
  ) {
    ch = 2;
  } else if (document.getElementById("nap_time").value.indexOf(nowDate) != -1) {
    ch = 3;
  } else if (
    document.getElementById("night_time").value.indexOf(nowDate) != -1
  ) {
    ch = 4;
  }
  switch (ch) {
    case 1:
      document.getElementsByClassName("grab_text")[0].innerHTML =
        "Grab some helthy brekfast!!";
      document.getElementsByClassName("gmwu_lable")[0].innerHTML =
        "Good morning !! ";
      document.getElementsByClassName("lady")[0].style.background =
        "url('./images/nap_time_image.png')  0% 0% no-repeat padding-box";
      break;
    case 2:
      document.getElementsByClassName("grab_text")[0].innerHTML =
        "let's have some lunch !!";
      document.getElementsByClassName("gmwu_lable")[0].innerHTML =
        "Good afternoon !! take some sleep";

      document.getElementsByClassName("lady")[0].style.background =
        "url('./images/lunch_time_image.svg')  0% 0% no-repeat padding-box";
      break;
    case 3:
      document.getElementsByClassName("grab_text")[0].innerHTML =
        "stop yawning get some tea.. Its just evaning";
      document.getElementsByClassName("gmwu_lable")[0].innerHTML =
        "Good evaning !! ";
      document.getElementsByClassName("lady")[0].style.background =
        "url('./images/wake_up_time_image.png')  0% 0% no-repeat padding-box";
      break;
    case 4:
      document.getElementsByClassName("grab_text")[0].innerHTML =
        "Close you eyes and go to sleep";
      document.getElementsByClassName("gmwu_lable")[0].innerHTML =
        "Good night !! ";
      document.getElementsByClassName("lady")[0].style.background =
        "url('./images/sleep_time.svg')  0% 0% no-repeat padding-box";
      break;
  }
}
setTimeWithImage();
setInterval(show_time, 1000);
