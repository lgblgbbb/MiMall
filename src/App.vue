<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: "App",
  data(){
    return{
      res:{}
    }
  },
  // mounted(){
  //   this.axios.get('/login/user').then((result)=>{
  //     console.log(result);
  //     // console.log(this.res);
  //   })
  // }
};
</script>

<style lang="scss">
@import './assets/scss/reset.scss';


</style>
