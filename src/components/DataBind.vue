<template>
    <div>
        <h1>{{message}}</h1>
        <textarea type="text" v-model="message" />
    </div>
</template>


<script>
export default{
    name :'HomeBind',
    data(){
        return{
            message:"hi"
        }
    }
}
</script>