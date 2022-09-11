<template>
  <div>
    <v-col cols="12">
      <v-text-field v-model="tarefaCampoInput" label="Qual a sua tarefa?" outlined clearable
        @keyup.enter="handleAddTarefa">
      </v-text-field>
    </v-col>
    <ListaDeTarefas />
  </div>
</template>

<script>
import ListaDeTarefas from '@/components/tarefas/ListaDeTarefas.vue';
export default {
  name: 'Home',
  components: {
    ListaDeTarefas
  },
  data: () => ({
    tarefaCampoInput: '',
  }),
  created() {
    this.$store.commit('buscaTarefas');
  },
  methods: {
    handleAddTarefa() {
      this.$store.dispatch('adicionaTarefa', this.tarefaCampoInput);
      this.tarefaCampoInput = '';
    },
  }
}
</script>
