<template>
    <div>
        <h1>before update</h1>
        <h1 ref="count">{{counter}}</h1>
       <button v-on:click="counter=counter+1">click me</button>
    </div>
</template>
<script>
export default{
    data(){
        return{
            counter:0
        }
    },
    beforeUpdate(){
        console.log("before update",this.$refs['count'].textContent);
    },
    updated(){
        console.log("update counter ",this.$refs['count'].textContent);
    }
}
</script>
