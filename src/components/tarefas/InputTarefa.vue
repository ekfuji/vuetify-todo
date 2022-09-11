<template>
  <div>
    <v-col cols="12">
      <v-text-field v-model="tarefaCampoInput" label="Qual a sua tarefa?" outlined clearable
        @keyup.enter="handleAddTarefa">
      </v-text-field>
    </v-col>
  </div>
</template>

<script>
export default {
    data: () => ({
    tarefaCampoInput: '',
  }),
  methods: {
    handleAddTarefa() {
      this.$store.dispatch('adicionaTarefa', this.tarefaCampoInput);
      this.tarefaCampoInput = '';
    },
  }
}
</script>

<style>

</style>