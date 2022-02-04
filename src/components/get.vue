<template>
    <div>
        <h1>get request</h1>
        <!-- <div v-for="" class="single-blog"></div> -->
 
    </div>
</template>

<script>
export default {
     data(){
         return{
            blogs:[]
         }
     },
     methods:{

     },
     created(){
         this.$http.get('https://jsonplaceholder.typicode.com/todos/1/posts').then(function(data){
            console.log(data);
            //this.blogs = data.body.slice(0,10)
          
         })
     }
}
</script>