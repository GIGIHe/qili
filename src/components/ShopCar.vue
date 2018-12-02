<template>
  <div>
    <div class="wraper fz">
      <div class="item" v-for="(item,index) in shopData" :key="index">
        <div class="fl">
          <label for="" class="checkbox"><input type="checkbox"></label>
          <img class="img" :src="item.img" alt="">
        </div>
        <div class="fr">
          <div class="desc">{{item.desc}}</div>
          <div class="price">
            <span>￥{{item.price}}</span>
            <span></span>
          </div>
        </div>
      </div>
      <div class="total-price">
        <div class="to-fl">
          <label for="to-check" @change="handleChange"><input type="checkbox" id="to-check">全选</label>
        </div>
        <div class="to-fr">
          <span>合计:</span>￥{{total}}
          <button class="pay">结算</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      shopData: [
        {
          img: "../../static/image/1.jpg",
          desc: "第一件宝贝的描述",
          price: 666,
          count: 2
        },
        {
          img: "../../static/image/2.jpg",
          desc: "第二件宝贝的描述",
          price: 999,
          count: 1
        },
        {
          img: "../../static/image/3.jpg",
          desc: "第三件宝贝的描述",
          price: 521,
          count: 1
        },
        {
          img: "../../static/image/4.jpg",
          desc: "第四件宝贝的描述",
          price: 777,
          count: 3
        }
      ],
      totalPrice: 0
    };
  },
  methods: {
    handleChange(e) {
      var input = document.getElementsByTagName("input");
      var checkbox = document.getElementById("to-check");
      var len = input.length;
      checkbox.onclick = function() {
        for (var i = 0; i < len; i++) {
          input[i].checked = this.checked;
        }
      };
    }
  },
  computed: {
    total() {
      var that = this;
      console.log(this.shopData);
      this.shopData.forEach(item => {
        // if (item.checked == true) {
          that.totalPrice = item.price * item.count;
        // }
      });
      return this.totalPrice;
    }
  }
};
</script>

<style scoped>
.wraper {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #eee;
  margin: 20px auto;
  color: #666;
  overflow: scroll-y;
}
.item {
  height: 60px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 4px;
}
.fl {
  height: 50px;
  display: flex;
  width: 80px;
  justify-content: space-around;
  margin-right: 20px;
}
.img {
  width: 50px;
}
.price {
  color: #f00;
}
.total-price {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid rgb(250, 113, 113);
  height: 40px;
  line-height: 40px;
  display: flex;
}
.pay {
  width: 60px;
  height: 30px;
  line-height: 30px;
  border-radius: 8px;
  background-color: #f00;
  outline: none;
  border: none;
  color: #fff;
  margin-left: 2px;
}
.to-fl {
  margin: 0 60px 0 10px;
}
.checkbox {
  margin-top: 14px;
}
#to-check {
  vertical-align: middle;
}
.fz {
  font-size: 14px;
}
</style>
