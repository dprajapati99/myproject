<template>
    <div>
        <h1>mixa</h1>
        <button @click="increment()">add {{count}}</button>
    </div>
</template>
<script>
import count from '/src/mix/count.js'
export default{
      mixins:[count]
}
</script>