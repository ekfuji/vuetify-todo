<template>
    <div>
        <v-menu bottom left>
            <template v-slot:activator="{ on, attrs }">
                <v-btn dark icon v-bind="attrs" v-on="on">
                    <v-icon color="grey darken-3">mdi-dots-vertical</v-icon>
                </v-btn>
            </template>

            <v-list>
                <v-list-item v-for="(item, i) in items" :key="i" @click.stop="item.click()">
                    <v-icon color="grey darken-3" left>{{ item.icone }}</v-icon>
                    <v-list-item-title>{{ item.title }}
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <ModalEditar/>
    </div>
</template>

<script>
import ModalEditar from '../modal/ModalEditar.vue'
export default {
  components: { ModalEditar },
    data: () => ({
      items: [
        { 
            title: 'Editar', 
            icone: 'mdi-pencil',
            click(){
                console.log("Editar")
            }
        },
        { 
            title: 'Excluir', 
            icone: 'mdi-delete',
            click(){
                console.log("Excluir")
            } 
        },
      ],
    }),
}
</script>

<style>

</style>