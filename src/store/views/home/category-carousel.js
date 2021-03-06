import { Category } from "../../../api/sano";

const categoryCarouselStore = {
  namespaced: true,
  state: {
    status: "idle",
    categories: []
  },
  actions: {
    async fetchCategories({ commit }) {
      commit("setStatus", "loading");
      const categories = await Category.getAll();
      commit("setCategories", categories);
      commit("setStatus", "idle");
    }
  },
  getters: {
    isLoading(state) {
      return state.status === "loading";
    }
  },
  mutations: {
    setCategories(state, categories) {
      state.categories = categories;
    },
    setStatus(state, status) {
      state.status = status;
    }
  }
}

export default categoryCarouselStore;