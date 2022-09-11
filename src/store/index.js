import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas: []
  },
  getters: {
  },
  mutations: {
    adicionaTarefa(state, titulo){
      if(titulo && titulo.trim()){
        state.tarefas.push({
          id: new Date().getTime(),
          titulo, 
          concluido: false
        })
      }
    },
    removeTarefa(state, id){
      if(id){
       state.tarefas = state.tarefas.filter(t => t.id !== id);
      }
    },
    editaTarefa(state, novaTarefa){
      if(novaTarefa && novaTarefa.titulo.trim()){
         let tarefa = state.tarefas.filter(t => t.id == novaTarefa.id)[0];
         tarefa.titulo = novaTarefa.titulo;
       }
    }
  },
  actions: {
  },
  modules: {
  }
})
