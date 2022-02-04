<template>
    <div>
        <!-- <button v-on:click="updateTitle"> update </button> -->
          <h1>props in vue js</h1>
          <h3 v-for ="user in users" :key="user.name">
              {{user.name}}
          </h3>
    </div>
</template>

<script>
export default{
    name:'child',
    props:['users']
    
}
</script>