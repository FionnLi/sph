<template>
  <div>
      <TypeNav></TypeNav>
      <ListContainer></ListContainer>
      <Recommend></Recommend>
      <Rank></Rank>
      <Like></Like>
      <Floor></Floor>
      <Floor></Floor>
      <Brand></Brand>
      <!-- <button @click="addHomeSum">点击加1</button>
      <span>Home模块仓库数据{{a}}</span><br/>
      <button @click="addSearchSum">点击加1</button>
       <span>Search模块仓库数据{{b}}</span> -->
  </div>
</template>

<script>
import ListContainer from "../Home/ListContainer";
import Recommend from "../Home/Recommend";
import Rank from "../Home/Rank";
import Like from "../Home/Like"
import Floor from "../Home/Floor"
import Brand from "../Home/Brand"

import {mapState} from 'vuex'
export default {
  components: {
      ListContainer,
      Recommend,
      Rank,
      Like,
      Floor,
      Brand
    },
    computed: {
      //...mapState(['count'])
      ...mapState({
        a:state => state.moduleHome.a,
        b:state => state.moduleSearch.b
        
      })
    },
    methods: {
      addHomeSum() {
        this.$store.dispatch('addHome');
        //派发action
        //this.$store.dispatch('add');
      },
      addSearchSum() {
        this.$store.dispatch('addSearch');
        //派发action
        //this.$store.dispatch('add');
      }
    }
 
    
}
</script>

<style>

</style>