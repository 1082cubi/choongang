const num=["100","100","100","5000","200","200",]



window.onload = function() {
    for(i=0; i<num.length; i++){
    $(".fff div:eq(" + i + ")").html(num[i])

   

}
$(".kkk").on("click", function(){
    let kum;
    let su = Number(su.value);
    kum = su *500;
})

    
}

























// const title = ["빨강", "노란", "파랑", "초록", "보라", "흰색"]

// window.onload = function () {


                // 텍스트에 글씨 넣기
//     for (i = 0; i < title.length; i++) {
//         $(".fff div:eq(" + i + ")").html(title[i])
//     }
                // 텍스트 클릭했을 때 글씨가 하나씩 변하는 것
//     $(".fff div").on("click", function () {
//         let su = $(this).index();
//         $(".eee").html(title[su]);
                    

                // 텍스트 눌렀을 때 사진으로 바뀌는 것
//         $(".pic").attr("src","s"+(su+1)+".jpg");
//     })


// }


