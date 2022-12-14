import db from '../services/localbase'

export default {
    async adicionaTarefa({ commit }, titulo) {
        await commit('adicionaTarefa', titulo);
        await commit('buscaTarefas')
    },
    editaTarefa({ commit }, novaTarefa) {
        if (novaTarefa && novaTarefa.titulo.trim()) {
            db.collection('tarefas').doc({ id: novaTarefa.id }).update({
                titulo: novaTarefa.titulo
            }).then(() => {
                commit('buscaTarefas');
            });
        }
    },
    removeTarefa({ commit }, id) {
        db.collection('tarefas').doc({ id: id }).delete().then(() => {
            commit('buscaTarefas');
        });
    },
    mudarConclusaoDaTarefa({ commit }, tarefa) {
        db.collection('tarefas').doc({ id: tarefa.id }).update({
            concluido: tarefa.concluido
        }).then(() => {
            commit('buscaTarefas');
        });
    }
}