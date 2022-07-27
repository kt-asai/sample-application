<template>
  <v-table>
    <thead>
      <th class="text-left">ID</th>
      <th class="text-left">Todo</th>
      <th></th>
    </thead>
    <tbody>
      <tr v-for="item in todos" v-bind:key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.text }}</td>
        <td>
          <button v-on:click="deleteTodo(item.id)" icon>
            <v-icon>mdi-trash-can-outline</v-icon>
          </button>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { Todo } from "../store";

export default defineComponent({
  computed: {
    todos(): Todo[] {
      return this.$store.state.todos;
    },
  },
  methods: {
    deleteTodo(id: number) {
      this.$store.commit("removeTodo", {
        id,
      });
    },
  },
});
</script>

<script scoped></script>
