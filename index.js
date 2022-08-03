
$('#wrap').fullpage({
    autoScrolling:true ,
    anchors:['1page' , '2page' , '3page'],
    navigation:true
});

$('#wrap .section:nth-child(3)').on('click',function(){
   
    window.open('about:blank').location.href="https://daramg92.github.io/DD92/";
});
