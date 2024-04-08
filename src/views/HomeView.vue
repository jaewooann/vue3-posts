<template>
  <div>
    <h2>Home View</h2>
    <p>{{ $route.path }}</p>
    <p>{{ $route.name }}</p>
    <button class="btn btn-primary" @click="goAboutPage">About으로 이동</button>
  </div>
  <hr class="my-4" />
  <AppGrid :items="items" v-slot="{ item }">
    <AppCard>{{ item }}</AppCard>
  </AppGrid>
  <hr />
  <h2>{{ $person.name }}</h2>
  <button class="btn btn-primary" @click="person.say">click person</button>
</template>

<script>
export default {
  created() {
    // console.log(this.$person.name);
    // this.$person.say();
  }
};
</script>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { inject } from 'vue';

const router = useRouter();
const goAboutPage = () => {
  router.push('/about');
};

const items = ref(['사과', '딸기', '포도', '바나나']);

const person = inject('person');
console.log('person.name', person.name);
</script>

<style lang="scss" scoped></style>
