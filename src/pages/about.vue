<template>
    <div>
        关于
        <hr>
        <ul class="nav">
            <!-- <router-link to="/about" exact tag="li">
                <a>study</a>
            </router-link>
            <router-link to="/about/work" tag="li">
                <a>work</a>
            </router-link>
            <router-link to="/about/hobby" tag="li">
                <a>hobby</a>
            </router-link> -->
            <router-link :to="{name:'About'}" exact tag="li">
                <a>study</a>
            </router-link>
            <router-link :to="{name:'Work'}" tag="li">
                <a>work</a>
            </router-link>
            <router-link :to="{name:'Hobby'}" tag="li">
                <a>hobby</a>
            </router-link>
            {{test}}
        </ul>
        <hr>
        <router-view />
    </div>

</template>

<script>
export default {
    data () {
        return {
            test:'改变前'
        }
    },
    beforeRouteEnter(to,from,next){
        next((vm)=>{
            vm.test = '改变了'
        });
        //this没有值，因为当前的组件还没有被创建出来

    },
    //子组件跳转之后是否渲染
    // beforeRouterUpdate (to,from,next) {
    //     next()
    // },
    //离开之后是否进入到目的组件
    beforeRouteLeave(to, from, next) {
        next();
    }
}
</script>

<style scoped>
    .isactive{
        background: yellow;
    }
</style>
