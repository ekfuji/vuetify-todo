<template>
  <div>
    <v-col cols="12">
      <v-text-field v-model="tarefaCampoInput" label="Qual a sua tarefa?" outlined clearable @keyup.enter="handleAddTarefa">
      </v-text-field>
    </v-col>
    <v-list flat subheader>
      <v-list-item-group multiple active-class="">
        <div v-for="tarefa, index in $store.state.tarefas" :key="index">
          <Tarefa :tarefa="tarefa" />
        </div>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
  import Tarefa from '../components/tarefas/Tarefa.vue'
  export default {
    name: 'Home',
    components: {
      Tarefa
    },
    data: () => ({
        tarefaCampoInput: '',
    }),
    created(){
      this.$store.commit('buscaTarefas');
    },
    methods: {
      handleAddTarefa(){
        this.$store.dispatch('adicionaTarefa', this.tarefaCampoInput);
        this.tarefaCampoInput = '';
      },
    }
  }
</script>
