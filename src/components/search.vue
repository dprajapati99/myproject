<template>
  <div>

    
    <!-- <input
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
    /> -->
    <div class="text-left">
      <h3>Cutsom Filter using VueJs</h3>
      <input type="text" v-model="search" />
      <ul v-for="user in searchResult" :key="user.id">
        <li>{{ user.name }}</li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {

  props: {
    value: String,
  },
  data(){
    return {
      search: null,
      users: [
        { id: 1, name: "john", email: "john@xyz.com" },
        { id: 2, name: "lee min", email: "leemin@xyz.com" },
        { id: 3, name: "alexa", email: "alexa@xyz.com" },
        { id: 4, name: "rosy", email: "rosy@xyz.com" },
        { id: 5, name: "joy", email: "joy@xyz.com" },
        { id: 6, name: "john", email: "john@vue.com" },
      ],
    };
  },
  computed: {
    searchResult() {
      if (this.search) {
        return this.users.filter((item) => {
          return this.search
            .toLowerCase()
            .split(" ")
            .every((v) => item.name.toLowerCase().includes(v));
        });
      } else {
        return this.users;
      }
    },
  
  }
};
</script>
