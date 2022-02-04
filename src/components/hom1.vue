<template>
    <div>
        <p v-html="header"></p>
        <h2 v-once>{{name}}</h2>
        <h2>{{name}}</h2>
        <button v-bind:disabled="btnDisable" v-on:click="hello">click me </button>
        <h3>{{ok? "yes":"no"}}</h3>
    </div>
</template>
<script>
export default{
    name:"Home",
    data(){
        return{
            name:"dp",
            ok:true,
            header:"<h1>you are here </h1>",
           btnDisable:true
        }
    },methods:{
        hello(){
            this.ok=!this.ok
        }
    }
};
</script>