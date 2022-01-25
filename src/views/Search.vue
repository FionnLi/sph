<template>
  <div>
    <h1>搜索页面接收到的params参数------{{$route.params.keyword}}</h1>
    <h1>搜索页面接收到的query参数------{{$route.query.k}}</h1> 
  </div>
</template>

<script>
export default {
  props: ['keyword'],
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>