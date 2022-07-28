
$('#wrap').fullpage({
    autoScrolling:true ,
    anchors:['1page' , '2page' , '3page'],
    navigation:true
});

// new fullpage('#wrap',
//     {
//     autoScrolling:true ,
//     anchors:['1page' , '2page' , '3page'],
//     navigation:true
//     // ㄴ 오른쪽에 페이지 올라갔다 내려갔다 점3개 생김
// });

$('#wrap .section:nth-child(2) .slide:nth-child(1)').on('click',function(){
   
    window.open('about:blank').location.href="https://google.com";
});