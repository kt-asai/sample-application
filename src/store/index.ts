import { createStore } from "vuex";

export type Todo = {
  id: number;
  text: string;
};

export default createStore({
  state: {
    todos: [] as Todo[],
  },
  mutations: {
    addTodo(state, payload) {
      console.log("addTodo:", payload);
      state.todos.push(payload.todo);
    },
    removeTodo(state, payload) {
      console.log("removeTodo:", payload);
      state.todos = state.todos.filter((item) => item.id !== payload.id);
    },
    clear(state) {
      state.todos = [];
    },
  },
});
