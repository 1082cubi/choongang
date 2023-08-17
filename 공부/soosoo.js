const nice = ["6", "공부", "열심히", "하셔야"];
window.onload=function() {
  /*
  $("div div").on("click", function() {
    for(i = 0; i < nice.length; i++) {
      console.log(nice[i]);
    }
  })
  */
  for(i = 0; i < nice.length; i++) {
    $("#a div:eq(" + i + ")").html(nice[i]);
  }
  $("#a div").on("click", function() {
    let no = $(this).index();
    $(".b").html(nice[no]);
    $("#a div").css(" ", "white").css("color", "black");
    $(this).css("background", "black").css("color", "white");
  })
}
