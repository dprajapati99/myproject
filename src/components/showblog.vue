<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
  
    <!-- <router-link v-bind:to="'/blog/' + blogs.id"
        ><h2>{{ blogs.title }}</h2></router-link
      >
      <article>{{ blogs.content }}</article> -->
      
    <div v-for="blog in blogs" :key="blog.id">
      <h1>{{ blog.title }}</h1>
      <article>{{ blog.content }}</article>
      <p>{{ blog.author }}</p>
    </div>
  </div>
</template>
<script>
// Imports
export default {
  data() {

    return {
      blogs: [
      ],
      
    };
  },
  created() {
    this.$http
      .get("https://myproject-7acf3-default-rtdb.firebaseio.com/posts.json")
      .then(function (data) {
      
        this.blogs=data.data
          console.log(this.blogs)
        //return data.data;
      })
      // .then(function (data) {
      //     var blogsArray = [];
      //       for (let key in data){
      //           data[key].id = key;
      //           blogsArray.push(data[key]);
      //       }
      //   console.log(data);
      //   //this.blogs=data;  //or data.data
      // });
  },
};
</script>
