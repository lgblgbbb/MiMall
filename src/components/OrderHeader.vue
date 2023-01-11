<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="content">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="title">
          <h2>{{ title }}<slot name="tip"></slot></h2>
        </div>
        <div class="username">
          <a href="javascript:;">{{ username }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "order-header",
  props: ["title"],
  computed: {
    ...mapState(["username"]),
  },
};
</script>

<style lang="scss" scoped>
.order-header {
  padding: 30px 0;
  border-bottom: 2px solid #ff6600;
  .content {
    display: flex;
    justify-content: space-between;
    .header-logo {
      display: inline-block;
      width: 55px;
      height: 55px;
      background-color: #ff6600;
      a {
        display: inline-block;
        width: 110px;
        height: 55px;
        &:before {
          content: "";
          display: inline-block;
          width: 55px;
          height: 55px;
          background: url("../../public/imgs/mi-logo.png") no-repeat center;
          background-size: 55px;
          transition: margin 0.2s;
        }
        &:after {
          content: "";
          display: inline-block;
          width: 55px;
          height: 55px;
          background: url("../../public/imgs/mi-home.png") no-repeat center;
          background-size: 55px;
        }
        &:hover:before {
          margin-left: -55px;
          transition: margin 0.2s;
        }
      }
    }
    .title,
    .username {
      display: inline-block;
      height: 55px;
      line-height: 55px;
    }
    .title {
      margin-right: 150px;
      h2 {
        font-size: 28px;
        color: #333;
      }
      span {
        font-size: 14px;
        margin-left: 17px;
        color: #999;
        font-weight: 400;
      }
    }
    .username {
      a {
        color: #666;
        font-size: 16px;
      }
    }
  }
}
</style>