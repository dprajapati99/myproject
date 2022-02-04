<template>
    
    <div>
        <p>before created and create{{name}}</p>
     <slot>chid componnets </slot>
     <header>
     <slot name="header"></slot>
     </header>
     <main>
     <slot name="main"></slot>
     </main>
     <footer>
     <slot name="footer"></slot>
     </footer>

    </div>

</template>

<script>
export default
{ 
    
    data(){
        console.warn("created")
        return{
            //name:'dp'
            counter:0
        }
    }
//    ,beforeCreate()
//    {
//        alert("beforecreate")
//    }
//    ,created(){
//        this.name='sm'
//        alert("created")
//    }
,beforeMount(){
    console.warn("beforemounte",this.$el)
}
,mounted(){
    console.warn("mounted",this.$el)
}


}
</script>