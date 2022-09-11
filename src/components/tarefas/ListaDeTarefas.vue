<template>
    <div>
        <draggable :list="tarefasComputadas" class="list-group" ghost-class="ghost" @start="dragging = true"
            @end="dragging = false">
            <div v-for="tarefa, index in tarefasComputadas" :key="index">
                <Tarefa :tarefa="tarefa" />
            </div>
        </draggable>
    </div>
</template>

<script>
import draggable from "vuedraggable"
import Tarefa from "./Tarefa.vue";
export default {
    components: {
    draggable,
    Tarefa
},
    data: () => ({
        dialog: true,
        dragging: false
    }),
    computed: {
        tarefasComputadas() {
            return this.$store.state.tarefas;
        }
    },
}
</script>

<style>

</style>