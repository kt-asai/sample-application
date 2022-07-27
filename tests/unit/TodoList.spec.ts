import { mount } from '@vue/test-utils'
import Vuex, { createStore, Store } from 'vuex'
import TodoList from "@/components/TodoList.vue";

const todoMock = [
  {
    id: 1,
    text: "First Todo"
  },
  {
    id: 2,
    text: "Second Todo"
  }
]

const store = createStore({
  state: {
    todos: todoMock
  },
  mutations: {
    addTodo: jest.fn(),
    removeTodo: jest.fn(),
    clear: jest.fn()
  }
})

describe("TodoList.vue", () => {
  let store: Store<any>;
  let mutations;

  beforeEach(() => {
    mutations = {
      addTodo: jest.fn(),
      removeTodo: jest.fn(),
      clear: jest.fn()
    }
    store = new Vuex.Store({
      state: {
        todos: todoMock
      },
      mutations
    })
  })

  it("renders todo text stored vuex when passed", () => {
    const wrapper = mount(TodoList, {
      global: {
        plugins: [store],
      }
    });
    const deleteIcon = "mdi-trash-can-outline"

    // check text
    expect(wrapper.text()).toMatch(todoMock[0].text);
    expect(wrapper.text()).toMatch(todoMock[1].text);

    // check delete icon
    expect(wrapper.text()).toMatch(deleteIcon);
  });
});
