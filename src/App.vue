<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-img src="@/assets/bg.jpg"
      dark 
      gradient="to top right, rgba(25,32,72,.7), rgba(55,236,186,.7)"
      class="pt-5 text-center">
      <v-avatar size="100">
        <img src="@/assets/avatar.jpeg" alt="John">
      </v-avatar>
        <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Vue.js
          </v-list-item-title>
          <v-list-item-subtitle>
            Lista de tarefas
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      </v-img>
      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      color="#43a047"
      height="190"
      dark
      prominent
      src="@/assets/bg.jpg"
      app
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <center>
        <v-app-bar-title class="mt-16">
        <InputTarefa/>
      </v-app-bar-title>
      </center>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import InputTarefa from './components/tarefas/InputTarefa.vue';
export default {
    data: () => ({
        drawer: null,
        items: [
            { title: "Tarefas", icon: "mdi-view-dashboard", to: "/" },
        ],
        right: null,
    }),
    components: { InputTarefa }
}
</script>