<template>
  <div>
    <h1>post component</h1>
      Name :<input type="text" name="name" v-model="name" /><br /><br />
      Email: <input type="text" name="email" v-model="email" /><br /><br />
      Address: <input type="text" name="add" v-model="add" /><br /><br />
      <button v-on:click ="adduser()">post</button>
   
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
    
        name:"",
        email: "",
        add:"",
    
    };
  },
  methods: {
  async adduser() {
        
       let result= await axios.post('http://localhost:3000/users',{
            name :this.name,
            email:this.email,
            add:this.add
        })
        console.warn(result)
  
    },
  },
};
</script>