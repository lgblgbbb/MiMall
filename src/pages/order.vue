<template>
  <div>
    <router-view />
    <service-bar/>
    <nav-footer />
  </div>
</template>

<script>
import NavFooter from "@/components/NavFooter.vue";
import ServiceBar from "@/components/ServiceBar.vue";
export default {
  components: { NavFooter,ServiceBar },
  data() {
    return {
      title: "",
      tip: "",
    };
  }
};
</script>

<style>
</style>