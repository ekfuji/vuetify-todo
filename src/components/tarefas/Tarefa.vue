<template>
    <div>
        <v-list-item :class="{'blue lighten-4': tarefa.concluido }" @click="handleConcluido">
            <template v-slot:default="{}">
                <v-list-item-action>
                    <v-checkbox :input-value="tarefa.concluido"  @click="handleConcluido"></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                    <v-list-item-title :class="{'text-decoration-line-through': tarefa.concluido}">
                        {{ tarefa.titulo }}
                    </v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                    <TarefaMenu :tarefa="tarefa"/>
                </v-list-item-action>
            </template>
        </v-list-item>
        <v-divider />
    </div>
</template>

<script>
import TarefaMenu from './TarefaMenu.vue'
export default {
    props: ['tarefa'],
    components: {
        TarefaMenu,
    },
    methods: {
        handleConcluido(){
            let novaTarefa = {
                titulo: this.tarefa.titulo,
                id: this.tarefa.id,
                concluido: !this.tarefa.concluido
            }
            this.$store.dispatch('mudarConclusaoDaTarefa', novaTarefa);
        }
    }
}
</script>

<style>

</style>