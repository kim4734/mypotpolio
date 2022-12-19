
const hmenu=document.querySelector('header ul.menu')
const hlm=document.querySelectorAll('header li.main')
const hsub=document.querySelectorAll('header ul.sub')
const sect1 =document.getElementById('sect1')
const sect2 = document.querySelector('#sect2')
const sect3 = document.querySelector('#sect3')
const sect4 = document.querySelector('#sect4')
const sect5 = document.querySelector('#sect5')
const s5a2txt=sect5.querySelector('.aboutext')
const s2tli =sect2.querySelectorAll('.tmenu li')
const tmenu = sect3.querySelector('.tmenu')
const s3tli =  tmenu.querySelectorAll('li')
const s4tli=  sect4.querySelectorAll('.tmenu li')
const s5tli =sect5.querySelectorAll('.tmenu li')
let s2it
let ars
let idxa5
let like=localStorage.getItem("like");
let hate=localStorage.getItem("hate")
//  let hate=localStorage.getitem("hate");


 window.addEventListener("load",() =>{
  maintxtshow()
  $('.rb .lc').text(like)
  $('.rb .hc').text(hate)
  movemenu(s2tli)
  s2it= setInterval(s2time,3000)
  ars= s5a2txt.innerText.split(" ")
  s5a2txt.innerHTML=""
  idxa5=0
  render()
 
 })

hmenu.addEventListener("mouseenter",(e)=>{
 hsub.forEach((el,i) =>{
    el.style.height=200+'px'

  })
 })
hmenu.addEventListener("mouseleave",(e)=>{
  
  hsub.forEach((el,i) =>{
     el.style.height=0
 
  })
 })

 $("#sect2 aside").mouseenter(function(){
  clearInterval(s2it)
 })
 $("#sect2 aside").mouseleave(function(){
  s2it= setInterval(s2time,3000)

})

let idx2=0

function s2time(){
    idx2++
    if (idx2>24)idx2=0
    showslide($("#sect2 .rtm li").eq(idx2))
    let sz=idx2*(178)
    $("#sect2 aside").stop().animate({scrollTop:sz+"px"})
}

 let stopId
function bannerRotate(){
$('.ani').animate({rotate:'+=2deg'},50,'linear')
}

$('.quick').mouseenter(function(){
    stopId= setInterval(bannerRotate,50)
    $('.rb .qsub').fadeIn()
          })

$('.quick').mouseleave(function(){
  $('.rb .qsub').fadeOut()
    clearInterval(stopId)
   })

    
  $('.rb h2').click(function(){
 let no= prompt("가고싶은 위치를 1 에서 5번까지 입력하시오?")
 if (no==1)
  window.scrollTo({top:set1,left:0,behavior:'smooth'}) 
   else if(no==2)
  window.scrollTo({top:set2,left:0,behavior:'smooth'}) 
   else if(no==3)
  window.scrollTo({top:set3,left:0,behavior:'smooth'}) 
  else if(no==4)
  window.scrollTo({top:set4,left:0,behavior:'smooth'}) 
  else if(no==5)
  window.scrollTo({top:set5,left:0,behavior:'smooth'}) 
 })    

 
 $('.rb .like').click(function(){

 like++
 $('.rb .lc').text(like)
 localStorage.setItem("like",like)
})  

$('.rb .hate').click(function(){
  
  hate++
  $('.rb .hc').text(hate)
  localStorage.setItem("hate",hate)
 })  
 


$('.rb h5').click(function(){
 if(confirm("종료 하시겠습니까?"))
 {
 alert("good bye")
//  self.opener=self;
//    window.close();
   window.open('','_self').close(); 
 }
})
const maintext=sect1.querySelector('#main-txt')
 function maintxtshow(){
  maintext.style.opacity=1

  $('#sect1 h1').delay(300).animate({top:0+'px'},700)
  $('#sect1 h2').delay(600).animate({top:70+'px'},700)
  $('#sect1 h3').delay(900).animate({left:0+'px'},700)
  $('#sect1 h4').delay(1200).animate({left:-430+'px'},700)
  $('#sect1 h5').delay(1500).animate({top:160+'px'},700)
}


 const rmtli = document.querySelectorAll('#remotenav li')
 rmtli.forEach( (li,i) => {
    li.querySelector('a').addEventListener('click',function(e){
        e.preventDefault()
        let href=this.getAttribute('href')
       
        let sectionTop=document.querySelector(href).offsetTop
        window.scrollTo({top:sectionTop,left:0,behavior:'smooth'}) 
    })
    li.querySelector('a').addEventListener('mouseenter',function(e){
      e.preventDefault()
      let href=this.getAttribute('href')
      let ti=null
       if(href[href.length-1]==1)
        ti="INTRO"
       else if(href[href.length-1]==2)
        ti="WORK"
       else if(href[href.length-1]==3)
        ti="GRAPHIC"
       else if(href[href.length-1]==4)
       ti="PROJECT"
       else if(href[href.length-1]==5)
       ti="ABOUTME"
          
      let stext=document.createElement("p")
      let de=document.createTextNode(ti)
     
      stext.appendChild(de)
      let cu= li.appendChild(stext)
      
      cu.style.position="absolute";
      cu.style.fontSize=20+"px"
      cu.style.fontFamily= "Verdana, sans-serif";
      cu.style.webkitTextStroke ="1px"
      cu.style.textShadow=" 1px 2px 2px blue"
      let t = i*40
      cu.style.top=t-5+"px"      
      cu.style.left=30 +"px"

      li.querySelector('a').addEventListener('mouseleave',function(e){
      stext.remove()
      })
    })
      
 });

function remtchange(idx){
   const rmtli = document.querySelectorAll('#remotenav li')
    for (let i=0;i<5;i++)
     {
      rmtli[i].classList.remove('red')
      rmtli[i].classList.remove('blue')
     } 
      if (idx % 2){
       rmtli[idx].classList.add('blue')
      }
      else{
        rmtli[idx].classList.add('red')
      }
   }
   
    let set1
    let set2
    let set3
    let set4
    let set5
    window.addEventListener("scroll", (e)=>{

      set1=sect1.offsetTop
      set2=sect2.offsetTop
      set3=sect3.offsetTop
      set4=sect4.offsetTop
      set5=sect5.offsetTop
     
      let pst = window.scrollY+100
         
      $(".rb .qsub h1").text(pst)
    
        if (pst < set2)
        {
          maintxtshow()
          remtchange(0)
        }
        else if( pst < set3)
        {
      
        remtchange(1)   
      
        }
        else if(pst < set4)
        {   
     
         remtchange(2)   
          }
        else if(pst < set5)
        {
         
          remtchange(3) 
         
       }
       else 
        {
        
          remtchange(4)
      
    //  let im= sect5.querySelectorAll('.stk')
      }
      
   })

 const bgdn=document.querySelector('.bgdn')
 const sun=document.querySelector('.sun img')
 let dn = 0
 let opc = 0

 setInterval(function(){
  
  $('#sect1 .bird').animate({left :'30px',top:'200px','opacity':'0'},2000)
  $('#sect1 .bird').animate({left :'50%',top:'200px','opacity':'1'},2000)
  $('#sect1 .bird').animate({left :'60%',top:'400px'},2000)
  $('#sect1 .bird').animate({left :'100%',top:'600px'},2000)
  $('#sect1 .bird').animate({left :'110%',top:'600px','opacity':'0'},2000)
   if(opc>=0.8)
  dn = 1
  if(opc<=0)
  dn = 0
  if (dn==0){
   
    opc += 0.1
  } else{
  
    opc -= 0.1
  }
  if(opc < 0.5)
  {
   
    sun.src= './img/sun.png'
  }
  else{
    sun.src ='./img/달.png'
  }
  bgdn.style.opacity = opc


 },3000)

 


 $("#sect2 .tp").click(function(){
let k=$("#sect2 aside").scrollTop()
$("#sect2 aside").stop().animate({scrollTop:"500px"})

}) 


 $("#sect2 .rtm li").click(function(e){
  movemenu(s2tli)
  idx2=$(this).index()
  showslide($(this))
 })
function showslide(ts){
 
  $("#sect2 .rtm li").removeClass('on')
  $(ts).addClass('on')
  
  $("#sect2 main h2").removeClass('on')
  $("#sect2 main h2").eq(idx2).addClass('on')
 
  $("#sect2 main .slide").stop().fadeOut(1000)
  $("#sect2 main .slide").eq(idx2).stop().fadeIn(1000)
   
  $("#sect2 main h2").stop().animate({top:"-50px", opacity:"0"},function(){
    $("#sect2 main h2").eq(idx2).stop().animate({top:"0px",opacity:"1"})
   })
}

//sect3


const s3menu = sect3.querySelector('ul.menu')
const art =  sect3.querySelectorAll('article')
const s3wrap= sect3.querySelector('#sect3 .wrap')
const desc=sect3.querySelector(".desc")
const s3p=desc.querySelector("p")
const divbox=sect3.querySelectorAll('article > div')
let s3img

divbox.forEach((el,i)=>{
  el.addEventListener("mousemove",(e)=>{
  e.preventDefault()
  let x=el.getBoundingClientRect().left-s3wrap.getBoundingClientRect().left
  let y=el.getBoundingClientRect().top-s3wrap.getBoundingClientRect().top

  s3p.innerHTML=el.getAttribute('class')
  s3img= el.children[0].getAttribute('src')
  desc.style.left= x +'px'
  desc.style.top= y +'px'
  desc.style.opacity=1

 })
 s3wrap.addEventListener("mouseleave",(e)=>{
    e.preventDefault()
  desc.style.opacity=0
  })
})
function movemenu(th){
    th.forEach((el,i) => {
      el.animate([
      {top: "0px"},
      {top:"30px"},
      {top:"0px"}
      ], {
      duration: 1000,
      fill: "forwards",
      iterations:2,
      delay : i*100
  }); 
  // let r=random()
  let r1=Math.round(Math.random()*255)
  let r2=Math.round(Math.random()*255)
  
  el.style.webkitTextFillColor ="rgb(" + r1 + ",120," + r2 + ")"
      // -webkit-text-fill-color: #0f0;
 })
}
let idx3=2
let culi=s3menu.children[2];

s3menu.addEventListener("mouseover",(e) => {
desc.style.opacity=0
})

s3menu.addEventListener("click",(e) => {
e.preventDefault()
let elem = e.target;

  while(!(elem.nodeName =='LI')){
    elem = elem.parentNode;
    if(elem.nodeName =='BODY'){
      elem=null
      return
    }
   }
   console.log(culi)
   if (culi)
   culi.classList.remove('on')
  //  console.log(elem)
   elem.classList.add('on')
   culi=elem
 
   movemenu(s3tli)
 
  art[idx3].classList.remove('on')
  idx3=elem.getAttribute('data-s')
  art[idx3].classList.add('on')
 
})

desc.addEventListener("click",(e)=>{

  $('#sect3 .modalbox img').attr('src',s3img)
   $("#sect3 .line").stop().animate({opacity:0},function(){
    $("#sect3 .s1").animate({opacity:1},function(){
      $("#sect3 .s2").animate({opacity:1},function(){
        $("#sect3 .s3").animate({opacity:1},function(){
          $("#sect3 .s4").animate({opacity:1},function(){
          })
        })
      })
    })
  $('#sect3 .modal').stop().fadeIn(0)
  })
})

$('#sect3 .close').click(function(){
  $('#sect3 .modal').stop().fadeOut()
  
})


const s4figure=sect4.querySelector('aside figure')
const s4tmli=sect4.querySelectorAll('ul.tm li')
const fimg=s4figure.querySelector("img")
const s4mainli=sect4.querySelectorAll('main li')
let ps=0,dir=1;
let ts=null
let s4sp
let rafcount=1

// stop.addEventListener("click",()=>{
//  cancelAnimationFrame(rafid)
// })

  let k=['<img src="./img/c1.png" alt="">',
    '<img src="./img/c2.png" alt="">',
    '<img src="./img/c3.png" alt="">',
    '<img src="./img/c4.png" alt="">',
    '<img src="./img/c5.png" alt="">',
    '<img src="./img/c6.png" alt="">',
    '<img src="./img/a1.png" alt="">',
  ]
            
$('#sect4 ul.tm li').click(function(e){
    movemenu(s4tli)
    $('#sect4  ul.cimg li').stop(0,1).animate({opacity:0})
    let ix=$(this).index()
    let sz=-ix*(100)
    $('#sect4 .s4wrap').animate({left:sz+'%'})
    // $('#sect4 main h2').animate({left:'30%'})  
    // $('#sect4 main h2').animate({left:'40%'})

    $('#sect4 main h2').css({'transform':'translate3d(0, -80px, 0)'})
    $('#sect4 figure').css({'transform': 'scale3d(.1, .1, .1)'})
   
    setTimeout(() => {
      $('#sect4 figure').css({'transform':'translate3d(0, -80px, 0)'})
    
      }, 200);
            
    setTimeout(() => {
    $('#sect4 main h2').css({'transform':'translate3d(0, 0px, 0)'})  
    $('#sect4 figure').css({'transform': 'scale3d(1,1,1)'})
    $('#sect4 figure').css({'transform':'translate3d(0, 0px, 0)',})
    
   }, 1000);

  let i=0;
  let txt;
  let r1=Math.round(Math.random()*255)
  let r2=Math.round(Math.random()*255)
   
  $(this).find("span").css({color :"rgb(" + r1 + ",0," + r2 + ")"})
 
 
  txt= $(this).find('span').text() 
  $(this).find('span').text("")
  setTimeout(typeWriter, 50);

  let t=""
    function typeWriter(e) {
      if (i < txt.length) {
        t = t + txt.charAt(i)
        $('#sect4 ul.tm li').find('span').eq(ix).text(t)
        i++;
        setTimeout(typeWriter, 300);
      }
    }
  e.preventDefault()
    for (let j=0;j<6;j++){
      s4tmli[j].classList.remove('on')
      }
      this.classList.add('on')
      let sc=this.children[0].getAttribute("src")
      fimg.setAttribute('src',sc)
 })



$('#sect5 ul.tm li').click(function(){
 movemenu(s5tli)
  const hm=100,cs=90,jq=80,js=70,pt=60,il=50,react=30;
  let idx=$(this).index()
  $('#sect5 ul.tm li').removeClass('on')
  $(this).addClass('on')
  let posX=($(this).offset().left-5)
  let aWidth=($(this)).width()/2
  $('.tabline img').animate({left:posX +aWidth  +'px'})
  $("#sect5 .bars .bar").css({width:'0%'})
  $("#sect5 .bars img").remove()
    
     for (let j=1;j<=10;j++)
      setTimeout(() => {
      if ( j <= hm /10  ){
         $('#sect5 .item1 .cb').append(k[0])
         $('#sect5 .item1 span').text(j*10+'%')
         $('#sect5 .item1 .h3bg').css({height:j*10+"%"})
       }
      setTimeout(() => {
      if( j<= cs/10){
       $('#sect5 .item2 .cb').append(k[1])
       $('#sect5 .item2  span').text(j*10+'%')
       $('#sect5 .item2 .h3bg').css({height:j*10+"%"})
      }
      },1000)

      setTimeout(()=>{
       if (j<=jq/10){
        $('#sect5 .item3 .cb').append(k[2])
        $('#sect5 .item3  span').text(j*10+'%')
        $('#sect5 .item3 .h3bg').css({height:j*10+"%"})
       }
      },2000)
      setTimeout(()=>{
      if (j<=js/10){
        $('#sect5 .item4 .cb').append(k[3])
        $('#sect5 .item4 span').text(j*10+'%')
        $('#sect5 .item4 .h3bg').css({height:j*10+"%"})
      }
     },3000)
     setTimeout(()=>{
    if (j<=pt/10){
        
        $('#sect5 .item5 .cb').append(k[4])
        $('#sect5 .item5 span').text(j*10+'%')
        $('#sect5 .item5 .h3bg').css({height:j*10+"%"})
      }
    },4000)
    setTimeout(()=>{

      if (j<=il/10){
        $('#sect5 .item6 .cb').append(k[5])
        $('#sect5 .item6 span').text(j*10+'%')
        $('#sect5 .item6 .h3bg').css({height:j*10+"%"})
       }
    },5000)
    
    setTimeout(()=>{
      if(j<= react/10){
        $('#sect5 .item7 .cb').append(k[6])
        $('#sect5 .item7 span').text(j*10+'%')
        $('#sect5 .item7 .h3bg').css({height:j*10+"%"})
      }
    },6000)
   }, 100*j);
   
  })
  const s5a3item=sect5.querySelectorAll('.art3 .item')
  const s5a3con=sect5.querySelectorAll('.art3 .condent')
  let s5a3cu=0
  s5a3item.forEach((el,i)=>{
      el.addEventListener('click',(e)=>{
    
      el.classList.toggle('on')
      s5a3con[i].classList.toggle('on')       
    })
  })
 const ufo= document.querySelector('#ufo')
let mousex;
let mousey;

window.addEventListener('mousemove', e =>{
 mousex=e.pageX-20
 mousey=e.pageY-100
 ufo.style.left=mousex+'px'
 ufo.style.top=mousey+'px'
})
window.addEventListener('click', e =>{

  $('.beam').animate({height:60+'px'})

  setTimeout(() => {
    $('.beam').animate({height:1+'px'})
  }, 1000);
})
let meteox=300;
let meteoy=750;
let meteodirx = 1
let meteodiry = 1
const meteo=document.querySelector('#meteo')

function render(){
  if(rafcount % 4800 == 0)
  meteodiry=-meteodiry
 
  if(rafcount % 1200 == 0)
  {
   meteo.className=''
   meteodirx = -meteodirx
   if (meteodirx > 0 && meteodiry >0){
    meteo.classList.add('r1')
   }else if(meteodirx <0 && meteodiry>0){
    meteo.classList.add('r2')
   }else if(meteodirx<0 && meteodiry<0){
    meteo.classList.add('r3')
   }else if(meteodirx>0 && meteodiry<0){
    meteo.classList.add('r4')
   }
  }
   
   meteox = meteox + 1 * meteodirx
   meteoy= meteoy +1 * meteodiry
    
   meteo.style.left=meteox+'px'
   meteo.style.top=meteoy+'px'


     let w =  sect4.querySelector('aside').offsetWidth
     if (ps > w-150)
     dir =-1
     if(ps<0)
     dir = 1
     ps=ps+1 * dir
     s4figure.style.left = ps + "px"
        if (rafcount % 20 == 0){
        
          idxa5++
          if (idxa5>=ars.length)
          {
          idxa5=0
          s5a2txt.innerText =""
          }
        ars[idxa5]
        let r1=Math.round(Math.random()*255)
        let r2=Math.round(Math.random()*255)
        
       
        s5a2txt.innerText +=ars[idxa5]+"\u00a0"
       }
     
     rafcount++
     rafid= requestAnimationFrame(render);
 }