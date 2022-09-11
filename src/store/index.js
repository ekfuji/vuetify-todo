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
  },
  actions: {
    async adicionaTarefa({commit}, titulo){
     await commit('adicionaTarefa', titulo);
     await commit('buscaTarefas')
    },
    editaTarefa({commit}, novaTarefa){
      if(novaTarefa && novaTarefa.titulo.trim()){
        db.collection('tarefas').doc({ id: novaTarefa.id }).update({
          titulo: novaTarefa.titulo
        }).then(() => {
          commit('buscaTarefas');
        });
      }
     },
     removeTarefa({commit}, id){
      db.collection('tarefas').doc({ id: id }).delete().then(() => {
        commit('buscaTarefas');
      });
     },
     mudarConclusaoDaTarefa({commit}, tarefa){
      db.collection('tarefas').doc({ id: tarefa.id }).update({
        concluido: tarefa.concluido
      }).then(() => {
        commit('buscaTarefas');
      });
     }
  },
  modules: {
  }
})
