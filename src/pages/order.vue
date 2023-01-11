<template>
  <div>
    <order-header :title="title">
      <template v-slot:tip> 
        <span>{{tip}}</span>
      </template>
    </order-header>
    <router-view />
    <nav-footer />
  </div>
</template>

<script>
import NavFooter from '@/components/NavFooter.vue'
import OrderHeader from '@/components/OrderHeader.vue'
export default {
  components: { NavFooter, OrderHeader},
  data(){
    return{
      title:'',
      tip:''
    }
  },
  mounted(){
    let path = this.$route.path
    if(path == '/order/list'){
      this.title = '订单列表'
      this.tip = '谨慎防钓鱼链接或诈骗电话'
    }else if(path == '/order/confirm'){
       this.title = '订单确认'
      this.tip = '请填写收货地址'
    }else if(path == '/order/pay'){
       this.title = '订单支付'
      this.tip = '支付您的订单'
    }
  }

}
</script>

<style>

</style>