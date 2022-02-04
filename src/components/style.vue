<template>
    <div>
        <h1 class="vueStyle">class style binding</h1>
        <h1 v-bind:style="{color:'skyblue'}"> style binding </h1>
        <h1 v-bind:class="{display:show,vueStyle:show}">class with object</h1>
        <h1 v-bind:class="[checkDisplay?d:v]">class with object</h1>
    </div>
</template>

<script>
 export default{
      name:"Home",
      data(){
          return{
              colorName:'skyblue',
              show:true,
              d:'display',
              v:'vueStyle',
              checkDisplay:false
          }
      }
 };
 </script>

 <style scoped>
 .vueStyle{
     color:orange

 }
 .display{
     background-color: peru;
     padding: 5px;
 }
 </style>