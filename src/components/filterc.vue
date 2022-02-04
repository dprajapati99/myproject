<template>
    <div>
        
       <span class="post-author">{{ uppercase(title) }}</span><br>
         <span class="post-author">{{currency(amount) }}</span>
         <!-- <h1>{{title | ucase}}</h1>
         <h1>{{amount | currency}}</h1> -->
       
    </div>
</template>
<script>
export default{
    data(){
        return{
         title:"filter method",
         amount:100
        }

    },
    computed:{
         uppercase(){
            return (v)=>{
              return v.toUpperCase()
              }
           },
           currency(){
            return (v)=>{
              return v*75
              }
           }
    }
}
</script>