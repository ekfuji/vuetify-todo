import Vue from 'vue'
import Vuex from 'vuex'
import LocalBase from 'localbase'

let db = new LocalBase('db')
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas: []
  },
  getters: {
  },
  mutations: {
    buscaTarefas(state){
      db.collection('tarefas').get().then(tarefasDB => {
        state.tarefas = tarefasDB;
      })
    },
    adicionaTarefa(state, titulo){
      if(titulo && titulo.trim()){
        db.collection('tarefas').add({
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
    async adicionaTarefa({commit}, titulo){
     await commit('adicionaTarefa', titulo);
     await commit('buscaTarefas')
    }
  },
  modules: {
  }
})
