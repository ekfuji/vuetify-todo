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
        <ModalEditar v-if="items[0].modal" @fechaModal="items[0].modal = false" :tarefa="tarefa"/>
        <ModalDeletar v-if="items[1].modal" @fechaModal="items[1].modal = false" :tarefa="tarefa"/>
    </div>
</template>

<script>
import ModalDeletar from '../modal/ModalDeletar.vue';
import ModalEditar from '../modal/ModalEditar.vue'
export default {
  components: { ModalEditar, ModalDeletar },
  props: ["tarefa"],
    data: () => ({
      items: [
        { 
            title: 'Editar', 
            icone: 'mdi-pencil',
            modal: false,
            click(){
                this.modal = true;
            }
        },
        { 
            title: 'Excluir', 
            icone: 'mdi-delete',
            modal: false,
            click(){
                this.modal = true;
            } 
        },
      ],
    }),
}
</script>

<style>

</style>