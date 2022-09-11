<template>
    <div>
        <v-dialog v-model="dialog" max-width="290">
            <v-card>
                <v-card-title class="text-h5 grey lighten-4">
                    Excluir
                </v-card-title>
                <v-card-text class="mt-5">
                    Tem certeza que deseja excluir a tarefa?
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary darken-1" text @click="$emit('fechaModal')">
                        Cancelar
                    </v-btn>
                    <v-btn color="red darken-1" text @click="handleExcluir">
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
    }),
    methods: {
        handleExcluir(){
            this.$store.commit('removeTarefa', this.tarefa.id);
            this.$emit("fechaModal");
        }
    }
}
</script>

<style>

</style>