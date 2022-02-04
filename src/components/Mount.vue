<template>
    <div>
        <h1 ref="Mount">beforemounte </h1>
        <h1 >{{route}} dynamic data</h1>
      
    </div>
</template>
<script>
import {useRoute} from 'vue-router'
export default{
          data(){
              return{
                  Mount:''
              }
          },
          beforeUnmount(){
              console.log("beforeunmounte" ,this.$refs['Mount'])
          },
          unmounted(){
                console.log("unmounted",this.$refs['Mount'])
          },
        mounted(){
            const route = useRoute();
            console.warn("route",route.params.name);
            this.route =route.params.name
        }
}
</script>