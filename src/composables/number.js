import { computed, reactive, unref } from 'vue';

export const useNumber = (number) => {
  const isOdd = computed(() => unref(number) % 2 === 1);
  const isEven = computed(() => !isOdd);

  return {
    isOdd,
    isEven
  };
};
