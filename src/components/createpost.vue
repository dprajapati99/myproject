<template>
    <div>
        <form @submit.prevent="createPost()">
            <div>
                <label for="userid">post user id </label>
                <input type="text" id="userid" v-model="formData.userid">
            </div>
            <div>
                <label for="title">post title </label>
                <input type="text" id="title" v-model="formData.title">
            </div>
            <div>
                <label for="body">post body</label>
                <input type="text" id="body" v-model="formData.body">
            </div>
            <button>createpost</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    
    data(){
        return{
            formData:{
                userid:'',
                title:'',
                body:''
            },
        }
    },
    methods:{
        createPost(){
            console.log("hello")
           axios.post('https://jsonplaceholder.typicode.com/posts',this.formData)
           .then((response) => console.log(response))
           .catch((error) => console.log(error))
        }
    }
}
</script>

<style scoped>

</style>