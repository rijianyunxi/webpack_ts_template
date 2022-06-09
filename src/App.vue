<template>
  <div>
    <h1>{{count}}</h1>
    <p1>{{count}}</p1>
    <button @click="add">增加</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "App",
  data() {
    return {
    count:0
    };
  },
  methods: {
    add() {
        this.count = ++this.count
    },
  }
};
</script>
<style>
</style>