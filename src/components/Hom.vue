<template>
<div>
    <h1> for loop in java </h1>
    <table border="2px">
        <tr>
            <td>id</td><td>name</td><td>email</td>
        </tr>
        <tr v-for="user in users"   :key="user.id">
            <td>{{user.id}}</td>
            <td>{{user.name}}</td>
            <td>{{user.email}}</td>
        </tr>
    </table>
                    <!-- <h1 v-if="show">hello from home components</h1>
    <h1 v-else>else side</h1> -->
    <!-- <h1>{{data}}</h1>
     <h1>{{msg}}</h1> -->
     <!-- <button v-on:mouseover="hello('data')">call hello function</button> -->
     <!-- <button v-on:click="display">toggle</button> -->
</div>
</template>
<script>
export default{
     name:'Home',
     props:{
         data:String,
         msg:String
     },data()
     {
         return{
            users: [
                 {id:1,name:'peter',email:'peter@test.com'},
                  {id:2,name:'peter',email:'pinar@test.com'},
                   {id:3,name:'peter',email:'tony@test.com'},
             ]
             //show:false
         };
     }
};
</script>