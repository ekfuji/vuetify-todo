<template>
    <div>
        <v-dialog v-model="dialog" max-width="290">
            <v-card>
                <v-card-title class="text-h5 grey lighten-4">
                    Editar
                </v-card-title>

                <v-card-text class="mt-5">
                    Informe a novo título
                </v-card-text>
                <v-text-field class="px-5"  v-model="tarefaCampoInput" label="Título" outlined clearable>
                </v-text-field>
                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="red darken-1" text @click="dialog = false">
                        Cancelar
                    </v-btn>

                    <v-btn color="primary darken-1" text @click="dialog = false">
                        Confirmar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    data: () => ({
        dialog: true,
        tarefaCampoInput: ''
    }),
}
</script>

<style>

</style>