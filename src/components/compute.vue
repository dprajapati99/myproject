<template>
<div>
    <h1>compute value</h1>
    <h2>{{getresult}}</h2>
</div> 
</template>

<script>
 export default{
    
     data(){
         return{
             dollar:100,
             rup:70,
             discount: 10,
        
         }
     },computed:{
         getresult()
         {
             return(this.dollar*this.rup)-this.discount;
         }

     }
 }
 </script>