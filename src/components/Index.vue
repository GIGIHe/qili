<template>
  <div class="wrapper">
     <swiper :options="swiperOption" class="swiper">
                <swiper-slide v-for="(item,index) in swipeData" :key="index">
                    <img :src="item.img">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div> -->
            </swiper>
            <div class="tabbar">
              <div> <i class="iconfont icon-yemian-copy"></i></div>
            </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
        swipeData:[
        {img:'../../static/image/1.jpg'},
        {img:'../../static/image/2.jpg'},
        {img:'../../static/image/3.jpg'},
        {img:'../../static/image/4.jpg'}
        ],
 swiperOption: {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          // navigation: {
          //   nextEl: '.swiper-button-next',
          //   prevEl: '.swiper-button-prev'
          // },
           autoplay: {
          delay: 2500,
          disableOnInteraction: false
        }
        }
      }
    },
};
</script>

<style scoped lang = 'scss'>
.wrapper {
  width: 400px;
  height: 400px;
  border: 1px solid #f00;
  margin: 20px auto;
}
.swiper{
  width:380px;
height: 140px;
img{
  width: 100%;
  height: 100%;
}

}
.tabbar{
  border: 1px solid #eee;
  height: 40px;
}
</style>
