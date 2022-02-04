<template>
  <div id="app">
    <router-link to="/HelloWorld">HelloWorld</router-link><br />
    <router-link to="/Mount/beforemount">mount</router-link><br />
    <router-link to="/signup">signup</router-link><br />
    <router-link to="/compute">compute</router-link><br />
    <router-link to="/DataBind">DataBind</router-link><br />
    <router-link to="/cal">cal</router-link><br />
    <router-link to="/java">java</router-link><br />
    <router-link to="/php">php</router-link><br />
    <router-link to="/Slote">slote</router-link><br />
    <router-link to="/Update">Update</router-link><br />
    <router-link to="/child">child</router-link><br />
    <router-link to="/watch">watch</router-link><br />
    <router-link to="/pagenot">pagenot</router-link><br />
     <router-link to="/createpost">createpost</router-link><br />
    <router-link to="/comp1">comp1</router-link><br />
    <router-link to="/comp2">comp2</router-link><br />
    <router-link to="/get">get</router-link><br />
    <router-link to="/customed">customed</router-link><br />
     <Test v-bind:header="header"/>
    <Test2 v-bind:header="header"/>
    
    <router-link to="/search">search</router-link><br />
   
     <router-link to="/filterc">filterc</router-link><br />
      <router-link to="/mixa">mixa</router-link><br />
       <router-link to="/mixb">mixb</router-link><br />
     
    <router-view></router-view>
    
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
  
    
  },
  data() {
    return {
      
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
