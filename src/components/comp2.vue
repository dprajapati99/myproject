<template>
  <div>
    <p>Age: {{ age }}</p>
    <button @click.once="changeAge">Change Age</button>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  data() {
    return {
      age: 21,
    };
  },
  methods: {
    changeAge: function() {
      this.age = 42;
      eventBus.$emit("age-changed", this.age);
    },
  },
};
</script>

<style scoped></style>