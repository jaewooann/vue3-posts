<template>
  <div>
    <h2>About View</h2>
    <p>{{ $route.path }}</p>
    <button class="btn btn-primary" @click="$router.push('/')">Home으로 이동</button>
    <h2>Store</h2>
    <p>counter: {{ counter }}</p>
    <p>doubleCount: {{ doubleCount }}</p>
    <button @click="increment()">click!!!!!!!!</button>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';

const route = useRoute();

const store = useCounterStore();
const { counter, doubleCount } = storeToRefs(store);
const { increment } = store;
</script>

<style lang="scss" scoped></style>
