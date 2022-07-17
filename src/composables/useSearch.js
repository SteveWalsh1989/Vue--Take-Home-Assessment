import { reactive } from 'vue';

export const search = reactive({
  term: '',

  updateSearchTerm(term) {
    this.term = term;
  },
});
