<template>
  <div>
    <order-header />
    <router-view />
    <nav-footer />
  </div>
</template>

<script>
import NavFooter from '@/components/NavFooter.vue'
import OrderHeader from '@/components/OrderHeader.vue'
export default {
  components: { NavFooter, OrderHeader}

}
</script>

<style>

</style>