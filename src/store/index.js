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
    sortGoods(state, sortOrder) {
      if (sortOrder === "По цене min (от меньшего к большему)") {
        state.goods = state.goods.sort((a, b) => {
          return a.price - b.price;
        });
      } else if (sortOrder === "По цене max (от большего к меньшему)") {
        state.goods = state.goods.sort((a, b) => {
          return b.price - a.price;
        });
      } else if (sortOrder === "По наименованию") {
        state.goods = state.goods.sort((a, b) => {
          if (a.title < b.title) return -1;
          if (b.title > a.title) return 1;
          return 0;
        });
      }
    },
  },
  actions: {},
  modules: {},
});
