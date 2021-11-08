import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    goods: [
      {
        id: 1,
        image: "/assets/Camera.jpg",
        title: "Наименование товара 1",
        description:
          "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
        price: 10000,
      },
      {
        id: 2,
        image: "/assets/Camera.jpg",
        title: "Наименование товара 2",
        description:
          "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
        price: 10000,
      },
      {
        id: 3,
        image: "/assets/Camera.jpg",
        title: "Наименование товара 3",
        description:
          "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
        price: 10000,
      },
      {
        id: 4,
        image: "/assets/Camera.jpg",
        title: "Наименование товара 4",
        description:
          "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
        price: 10000,
      },
      {
        id: 5,
        image: "/assets/Camera.jpg",
        title: "Наименование товара 5",
        description:
          "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
        price: 10000,
      },
    ],
  },
  mutations: {
    deleteGood(state, id) {
      state.goods = state.goods.filter((good) => good.id !== id);
    },
    addGood(state, good) {
      state.goods.push(good);
    },
    saveGoodsToLocalStorage(state) {
      console.log(state.goods);
      localStorage.setItem("goods", JSON.stringify(state.goods));
    },
    setGoodFromLocalStorage(state) {
      state.goods = JSON.parse(localStorage.getItem("goods"));
      console.log(state.goods);
    },
  },
  actions: {},
  modules: {},
});
