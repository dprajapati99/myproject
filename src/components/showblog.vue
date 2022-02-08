<template>
    <div id="show-blogs">
        <h1>All Blog Articles</h1>
        <input type="text" v-model="search" placeholder="search blogs" />
      <div v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
      <h1>{{ blog.title }}</h1>
      <article>{{ blog.content }}</article>
      <p>{{ blog.author }}</p>
    </div>
    </div>
</template>
<script>
// Imports
export default {
    data () {
        return {
            blogs: [],
            search: ''
        }
    },
    created() {
    let d = this;
    this.$http.get("https://myproject-7acf3-default-rtdb.firebaseio.com/posts.json").then(function (data) {
      var blogsArray = [];
      let blog_data = data.data
      for (let key in blog_data){
        blog_data[key].id = key;
        blogsArray.push(blog_data[key]);
      }
      d.blogs = blogsArray;
      console.log(d.blogs);
    })
    },computed: {
        filteredBlogs: function(){
            return this.blogs.filter((blog) => {
                return blog.title.match(this.search);
            });
        }
    
}
}
</script>
<style scoped>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
    border: 1px dotted #aaa;
}
#show-blogs a{
    color: #444;
    text-decoration: none;
}
input[type="text"]{
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
}
</style>