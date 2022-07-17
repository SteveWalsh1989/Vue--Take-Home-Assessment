import { reactive } from 'vue';

export const search = reactive({
  term: '',

  updateTerm(newTerm) {
    this.term = newTerm;
  },
});
