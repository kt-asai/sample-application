<template>
  <div class="todo">
    <v-sheet height="90" elevation="1">
      <v-form>
        <v-container>
          <v-row>
            <v-col>
              <v-text-field
                v-model="form.text"
                label="Todo"
                variant="underlined"
                required
              ></v-text-field>
            </v-col>
            <v-col>
              <v-btn v-on:click="addTodo" icon><v-icon>mdi-plus</v-icon></v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-sheet>
    <v-sheet elevation="1">
      <todo-list />
    </v-sheet>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoList from "../components/TodoList.vue";
import type { Todo } from "../store";

export default defineComponent({
  name: "todoView",
  components: {
    TodoList,
  },
  data() {
    return {
      form: {
        text: "",
      },
    };
  },
  computed: {
    todos(): Todo[] {
      return this.$store.state.todos;
    },
  },
  methods: {
    addTodo() {
      let lastIndex = 0;
      if (this.todos.length > 0) {
        const lastItem = this.todos.slice(-1)[0];
        lastIndex = lastItem.id;
      }
      this.$store.commit("addTodo", {
        todo: {
          id: lastIndex + 1,
          text: this.form.text,
        },
      });
      this.form.text = "";
    },
  },
});
</script>

<style scoped>
.v-sheet {
  margin-bottom: 10px;
  padding: 10px;
}
</style>
