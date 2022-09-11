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
        list: [
            { name: "John", id: 0 },
            { name: "João", id: 1 },
            { name: "Jean", id: 2 }
        ],
        dragging: false
    }),
    computed: {
        tarefasComputadas() {
            console.log(this.$store.state.tarefas);
            return this.$store.state.tarefas;
        }
    },
    methods: {
        checkMove: function (e) {
            window.console.log("Future index: " + e.draggedContext.futureIndex);
        }
    }
}
</script>

<style>

</style>