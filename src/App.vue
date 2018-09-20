<template>
  <div id="app">
    <router-link to="/" tag="li" exact active-class="isActive">
      <i></i>
      <span>首页</span>
    </router-link>
    <router-link to="/about" tag="li" active-class="isActive">
      <i></i>
      <span>关于</span>
    </router-link>
    <router-link to="/document" tag="li" active-class="isActive">
      <i></i>
      <span>文件</span>
    </router-link>
    <router-link to="/user" tag="li" active-class="isActive">
      <i></i>
      <span>用户</span>
    </router-link>
    <button @click="back()">后退</button>
    <button @click="forward()">前进</button>
    <button @click="gohead()">步数</button>
    <button @click="pushHander()">push</button>
    <button @click="repalceHander()">替换</button>
    <div>
      <!-- 当前导航的下标 -->
      {{$route.meta.index}}
      <!-- <router-view name="slider" /> -->
      <transition :name="names">
        <router-view class="center" />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      names:'left'
    }
  },
  watch: {
    $route(to,from){
      // console.log(to.meta.index);
      // console.log(from.meta.index);
      if(to.meta.index < from.meta.index){
        this.names = 'right'
      }
      else{
        this.names = 'left'
      }
    }
  },
  methods:{
    back(){
      this.$router.back();
    },
    forward(){
       this.$router.forward();
    } ,
    gohead(){
       this.$router.go(2);
    },
    pushHander(){
      // this.$router.push('/document');
       this.$router.push({path:'/home'});
    },
    repalceHander(){
      this.$router.replace('/home');
    }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.center{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 170px;
  left: 0;
}
.isActive{
  background: red;
}
.v-enter{
  opacity: 0;
}
.v-enter-to{
  opacity: 1;
}
.v-enter-active{
  transition: 1s;
}
.v-leave{
   opacity: 1;
}
.v-leave-to{
   opacity: 0;
}
.v-leave-active{
   transition: 2s
}
.left-enter{
  /* 组件在屏幕之外 */
  transform: translateX(100%)
}
.left-enter-active{
  /* 组件在屏幕之外 */
  transition: 1s;
}
.left-leave-to{
  /* 组件在屏幕之内 */
  transform: translateX(-100%)
}
.right-enter{
  /* 组件在屏幕之外 */
  transform: translateX(-100%)
}
.right-enter-active{
  /* 组件在屏幕之外 */
  transition: 1s;
}
.right-leave-to{
  /* 组件在屏幕之内 */
  transform: translateX(100%)
}
</style>
