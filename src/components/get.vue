<template>
    <div>
        <h1>get request</h1>
        <!-- <div v-for="" class="single-blog"></div> -->
        <table border="1px">
            <tr>
                <td>name</td>
                <td>email</td>
                <td>address</td>
            </tr>
            <tr v-for="item in list" v-bind:key="item.id">
                <td>{{item.name}}</td>
                <td>{{item.email}}</td>
                <td>{{item.add}}</td>
            </tr>
        </table>
 
    </div>
</template>

<script>
export default {
     data(){
         return{
             list:undefined,
         }
     },
    
        mounted(){
            this.axios.get('http://localhost:3000/users')
            .then((resp)=>{
                this.list=resp.data
            console.log(resp.data);
            })
        }
   
    //  created(){
    //      this.$http.get('https://jsonplaceholder.typicode.com/todos/1/posts').then(function(data){
    //         console.log(data);
    //         //this.blogs = data.body.slice(0,10)
          
    //      })
    //  }
}
</script>