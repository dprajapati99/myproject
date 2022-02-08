<template>
  <div id="blog">
    <h1>create New Blog</h1><br>
        <form v-show=!submited>
            <label for="title">Blog Title</label><br>
            <input type="text" id="title" v-model.lazy="blog.title" required /><br><br>
            <label for="content">Blog Contant</label><br>
            <textarea id="content" v-model.lazy="blog.content" ></textarea><br><br>
            <label>Categories</label>
            <div id="checkbox">
              <div id="checkboxes">
                <input
                  type="checkbox"
                  value="food"
                  v-model="blog.categories"
                  id="food"
                />
                <label for="food">Food</label>
              </div>
              <div id="checkboxes">
                <input
                  type="checkbox"
                  value="travel"
                  v-model="blog.categories"
                  id="travel"
                />
                <label for="travel">Travel</label>
              </div>
              <div id="checkboxes">
                <input
                  type="checkbox"
                  value="technology"
                  v-model="blog.categories"
                  id="technology"
                />
                <label for="technology">Technology</label>
              </div>
              <div id="checkboxes">
                <input
                  type="checkbox"
                  value="life"
                  v-model="blog.categories"
                  id="life"
                />
                <label for="life">Life</label>
                </div>
                <div id="checkboxes">
                <input
                  type="checkbox"
                  value="entertainment"
                  v-model="blog.categories"
                  id="entertainment"
                />
                <label for="entertainment">Entertainment</label>
                </div>
                <div id="checkboxes">
                <input
                  type="checkbox"
                  value="faineance"
                  v-model="blog.categories"
                  id="faineance"
                />
                <label for="faineance">Faineance</label>
              </div>
            </div><br>
            <label for="authors">Author</label><br>
            <select id="authors" v-model="blog.author"> 
              <option value="Andy Warhol">Andy Warhol</option>
              <option value="Vincent Van Gogh">Vincent Van Gogh</option>
              <option value="Jackson Pollock" selected>Jackson Pollock</option>
              <option value="Claude Monet">Claude Monet</option>
              <option value="Salvador Dalí">Salvador Dalí</option>
            </select>
            <button v-on:click.prevent='postmethod()'>
              Add Blog
            </button>
        </form>
    <div id="preview" v-show=submited>
      <h2>Preview Blog</h2>
      <p>Blog Title : {{ blog.title }}</p>
      <p>Blog Contant : {{ blog.content }}</p>
      <p>Blog Categories : 
        <ul>
          <li v-for='i in blog.categories' :key='i'>{{i}}</li>
        </ul>
      </p>
      <p>Author : {{blog.author}}</p>
      <button v-on:click.prevent='updateblog()'>
        Add New Blog
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog",
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: "Author",
      },
      submited: false,
    };
  },
  methods: {
    postmethod() {
      this.submited = true;
      alert("Blog will submit after preview.");
      this.$http
        .post(
          "https://myproject-7acf3-default-rtdb.firebaseio.com/posts.json",
          this.blog
        )
        .then(function (data) {
          console.log(data);
        });
    },
    updateblog() {
      this.submited = false;
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  text-align: left;
}
#blog {
  margin: 20px auto;
  padding: 20px;
  width: 60%;
  box-shadow: 0px 0px 2px 2px #ccc;
}
input,
textarea,
select,
option {
  padding: 5px 10px;
  width: 90%;
  margin: 10px 0px;
  font-size: 17px;
}
textarea {
  height: 200px;
}
#preview {
  box-shadow: 0px 0px 2px 2px #ccc;
  padding: 20px;
  margin: 30px 15px;
}
p {
  margin: 20px;
  font-size: 17px;
}
#checkboxes {
  display: inline-block;
  margin: 5px 20px;
}
#checkboxes input {
  margin: 0px;
  display: inline-block;
}
#checkboxs label {
  display: inline-block;
}
button {
  padding: 10px 30px;
  font-size: 18px;
  margin-top: 20px;
  font-weight: bold;
  border: none;
  background: #000;
  color: #fff;
  cursor: pointer;
}
button:hover {
  background: #1f1e1e;
}
</style>