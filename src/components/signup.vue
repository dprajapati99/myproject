<template>
    <div>
        <h1> form checkbox and radio button </h1>
        <form>
        <input type="text" placeholder="enter your name" v-model="signup.username" /><br><br>
         <input type="password" placeholder="enter your password" /><br><br>
         <p>choose hobbies</p>
         <input type="checkbox" id="cricket" value="crickte" />
         <label for="cricket"> cricket
         </label>
         <input type="checkbox" id="football" value="football" />
         <label for="football"> football
         </label>
           <br><br>
           <p>select gender</p>
         <input type="radio" id="cricket" value="" />
         <label for="male">male
         </label>
         <input type="radio" id="football" value="" />
         <label for="female"> female
         </label>
         <br><br>
         <button v-on:click="signupuser">sign up </button>
        </form>

         

    </div>
</template>

<script>
export default {
    data(){
        return{
            usename:null,
            signup:{
                username:"",
                password:null,
                hobbies:[],
                gender:null
            }
        }
    }
}
</script>