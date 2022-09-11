<template>
    <div>
        <v-dialog v-model="dialog" max-width="290" persistent>
            <v-card>
                <v-card-title class="text-h5 grey lighten-4">
                    Editar
                </v-card-title>

                <v-card-text class="mt-5">
                    Informe a novo título
                </v-card-text>
                <v-text-field class="px-5"  v-model="titulo" label="Título" outlined clearable>
                </v-text-field>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red darken-1" text @click="$emit('fechaModal')">
                        Cancelar
                    </v-btn>
                    <v-btn color="primary darken-1" text @click="handleEditar">
                        Confirmar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    props: ["tarefa"],
    data: () => ({
        dialog: true,
        titulo: null
    }),
    created(){
        this.titulo = this.tarefa.titulo;
    },
    methods: {
        handleEditar(){
            let novaTarefa = {
                titulo: this.titulo,
                id: this.tarefa.id
            }
            this.$store.dispatch('editaTarefa', novaTarefa);
            this.$emit("fechaModal");
        }
    }
}
</script>

<style>

</style>