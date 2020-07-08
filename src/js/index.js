






  // 导航 
  $(function(){
    $('#lia li').mouseover(function(){
       
       $('.span-a').stop().animate({
           left:(60+10)*$(this).index()
       },100)
    })
    })
    
    //  平台公告 会员公告 分站公告
    //选项卡
    $('.help-tab:first .hd:first ul:first li').on("mouseover",function(){
         $(this).addClass('active').siblings().removeClass('active').parent().next().children().eq($(this).index()).addClass('active').siblings().removeClass('active')
     })
    
    
    // 轮播图
        var mySwiper = new Swiper('.swiper1', {
          direction: 'horizontal', // 左右切换选项
          loop: true,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          },
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
          // 如果需要前进后退按钮
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          // 如果需要滚动条
          scrollbar: {
            el: '.swiper-scrollbar',
          },
        })
    
    //  console.log($('help-tab:first hd:first tab:first li').parent().next().children().eq())
    // $('help-tab:first hd:first tab:first li').on("mouseover",function(){
    //     $(this).addClass('active').siblings().removeClass('active').parent().parent().next().children().eq($(this).index()).addClass('avtive').siblings().removeClass('active')
    //  })
    
    
        
        // 二楼轮播图
        var mySwiper = new Swiper ('.swiper3', {
        direction: 'horizontal', // 左右切换选项
        loop: true, // 循环模式选项
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        },
        // 如果需要分页器
        // pagination: {
        //   el: '.swiper-pagination',
        // },
        
        // 如果需要前进后退按钮
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
        
        // 如果需要滚动条
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      })  
    
    
        // 星期天滚动条
        var box1 = document.getElementById('box')
        console.log(box1)
        var timer = null
        var num = 0
        timer = setInterval(autoplay, 50)
        function autoplay() {
          num--
          box1.style.top = num + 'px'
          if (num <= -box1.children[0].offsetHeight) {
            num = 0
          }
        }
        box1.onmouseover = function () {
          clearInterval(timer)
        }
        box1.onmouseout = function () {
          timer = setInterval(autoplay, 50)
        }
     
     // 三楼轮播
        var mySwiper = new Swiper ('.swiper2', {
        // direction: 'horizontal', // 左右切换选项
        // loop: true, // 循环模式选项
        // autoplay: {
        //   delay: 2000,
        //   disableOnInteraction: false,
        //   stopOnLastSlide: false,
        // },
        // // 如果需要分页器
        // pagination: {
        //   el: '.swiper-pagination',
        // },
        
        // // 如果需要前进后退按钮
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
        
        // // 如果需要滚动条
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
        effect : 'coverflow',
        slidesPerView: 3,
        centeredSlides: true,
        coverflowEffect: {
        rotate: 30,
        stretch: 10,
        depth: 60,
        modifier: 3,
        slideShadows : true
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
         },
      })  
    
// 流氓广告
      r_btn.onclick = function(){
        sese_r.style.display = 'none'
        setTimeout(function(){
          sese_r.style.display = 'block'
        },2000)
      }
      l_btn.onclick = function(){
        sese_l.style.display = 'none'
        setTimeout(function(){
          sese_l.style.display = 'block'
        },2000)
      }
  






// console.log($('.help-tab:first .hd:first ul:first li'))
// $('.help-tab:first .hd:first ul:first li').on("mouseover",function(){
//      $(this).addClass('active').siblings().removeClass('active').parent().next().children().eq($(this).index()).addClass('active').siblings().removeClass('active')
//  })

//  1获取第一个ul下所有的li-> 2给他们绑定点击事件-> 3被点击的那个添加active类名-> 4筛选出所有的兄弟元素,不包括自己-> 5删除其他的兄弟元素active类名-> 6筛选出所有直接父元素,到了ul那里-> 7筛选出后面紧邻的兄弟元素,到了第二个ul-> 8括号里面不写内容,表示筛选出所有子元素-> 9里面接索引,表示筛选选择器集合中的第几个子元素,从0开始-> 10把被点击的这个元素的索引和跟他相同索引的元素添加active类名-> 11筛选出所有的兄弟元素,不包括自己-> 12删除其他的兄弟元素active类名

//         // 封装函数
//         function getStyle(dom,attr){
//             if(window.getComputedStyle){
//                 return window.getComputedStyle(dom,null)[attr]
//             }else{
//                 return dom.currentStyle[attr]
//             }
//         }
//         // 缓动
//         function animate(dom,target,fn){
//             clearInterval(dom.timer)
//             dom.timer = setInterval(function(){
//                var flag = true
//                for(var attr in target){
//                    // 获取元素原来位置
//                    if(attr == 'opacity'){
//                     var current = parseInt(getStyle(dom,'opacity')*100)
//                    }else{
//                        var current = parseInt(getStyle(dom,attr))
//                    }
//                    // 计算速度
//                    var speed = (target[attr] - current) / 10
//                    // 计算当前位置
//                    if(attr == 'zIndex'){
//                        current = target
//                        zIndex
//                    }else{
//                        current = current + speed
//                    }
//                    // 判断是否到达
//                    if(current != target[attr]){
//                        flag = false
//                    }
//                    // 定位元素
//                    if(attr == 'zIndex'){
//                        dom.style.zIndex = current
//                    }else if(attr == 'opacity'){
//                        dom.style.opacity = current / 100
//                        dom.style.filter = 'alpha(opacity='+ current +')'
//                    }else{
//                        dom.style[attr] = current + 'px'
//                    }
//                }  
//                if(flag){
//                    clearInterval(dom.timer)
//                    if(fn){
//                        fn()
//                    }
//                }       
//             },20)
//         }