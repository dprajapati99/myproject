<template>
  <div>
    <h1>calculator</h1>
    Enter number 1:<input type="number" name="number1" v-model="number1" />
    <p></p>
    Enter number 2:<input type="number" name="number2" v-model="number2" />
    <p></p>
    <button @click="add()">Sum</button>
    <button @click="sub()">sub</button>
    <button @click="div()">div</button>
    <button @click="mul()">mul</button>
    <button @click="mod()">mod</button>
    <button @click="reset()">reset</button>
    <hr />

    <p>TOTAL:{{ result }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      number1: "",
      number2: "",
      result: 0,
    };
  },
  methods: {
    add() {
      this.result = parseInt(this.number1) + parseInt(this.number2);
    },
    sub() {
      this.result = parseInt(this.number1) - parseInt(this.number2);
    },
    div() {
      this.result = parseInt(this.number1) / parseInt(this.number2);
    },
    mul() {
      this.result = parseInt(this.number1) * parseInt(this.number2);
    },
    mod() {
      this.result = parseInt(this.number1) % parseInt(this.number2);
    },
    reset() {
      this.number1 = 0;
      this.number2 = 0;
    },
  },
};
</script>