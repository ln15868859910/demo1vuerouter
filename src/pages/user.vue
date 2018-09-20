<template>
    <div>
        <div class="user-list">
            <router-link v-for="item in userList" style="padding:0 20px" :to="{path:'/user/'+item.tip+'/'+item.id,query:{info:'follow'}}" :key="item.id">{{item.username}}</router-link>
            <div class="user-info">
                <p>姓名：{{userinfo.username}}</p>
                <p>性别：{{userinfo.sex}}</p>
                <p>爱好：{{userinfo.hobby}}</p>
            </div>
            <hr>
            <div v-if="userinfo.username" class="info-list">
                <!-- <router-link exact to="?info=follow">她的关注</router-link>
                <router-link exact to="?info=share">她的分享</router-link> -->
                <router-link exact :to="{path:'',query:{info:'follow'}}">她的关注</router-link>
                <router-link exact :to="{path:'',query:{info:'share'}}">她的分享</router-link>
                <hr>
                <div>
                    {{ $route.query}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
let data = [
            {
                id:1,
                tip:'vip',
                username:'lala',
                sex:'男',
                hobby:'打球'
            },
            {
                id:2,
                tip:'vip',
                username:'nana',
                sex:'女',
                hobby:'看书'
            },
            {
                id:3,
                tip:'common',
                username:'wowo',
                sex:'男',
                hobby:'游戏'
            },
            
        ];
export default {
    data () {
        return {
               userList:data,
               userinfo: {}
        }
        
    },
    watch:{
        //路径发生变化， $route会重新赋值，监控了这个属性，
        //会执行这个函数
        $route(){
              this.getdate(); 
        }
    },
      created() { 
          //渲染这个组件的时候会调用生命周期，在复用这
          //组价的时候，这个函数不会被调用，地址一旦发生变化，$route
          //会更新生成一个路由信息对象
               this.getdate();    
        },
    methods:{
        getdate(){
             var id = this.$route.params.id; 
              if(id){
                this.userinfo = this.userList.filter((item)=>{
                  return item.id == id;
              })[0];   
              } 
              else{
                  this.userinfo = {};
              }
        }
    }
}
</script>

<style>
    .isactive{
        background: yellow;
    }
</style>
