<template>
  <div class="good">
    <img
      width="332"
      height="200"
      class="image"
      :src="image"
      alt="Супер камера"
    />
    <div class="wrapper">
      <div class="cover">
        <h3 class="title">{{ good.title }}</h3>
        <p class="description">
          {{ good.description }}
        </p>
      </div>
      <p class="price">{{ good.price | splitNumber }} <span>руб.</span></p>
    </div>
    <button class="delete" @click="deleteGood(good.id)"></button>
  </div>
</template>

<script>
/**
 * @module src/components/Good.vue
 * @desc карточка товара
 * @vue-prop {type} good - товар
 */
export default {
  name: "Good",
  props: {
    good: {
      type: Object,
      // eslint disable next line
      default: () => ({}),
    },
  },
  filters: {
    splitNumber: function (value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
  },
  methods: {
    deleteGood(id) {
      this.$store.commit("deleteGood", id);
    },
  },
  computed: {
    image() {
      return this.good.link ? this.good.link : require("@/assets/Camera.jpg");
    },
  },
};
</script>

<style lang="scss" scoped>
.good {
  position: relative;
  width: 332px;
  min-width: 332px;
  height: 423px;
  margin-right: 16px;
  background: #fffefb;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  margin-bottom: 16px;
  &:hover {
    .delete {
      visibility: visible;
      opacity: 1;
    }
  }
  .wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 223px;
    padding: 16px 16px 50px;
  }
  .image {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    width: 100%;
    height: 200px;
  }
  .title {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #3f3f3f;
    margin: 0;
  }
  .description {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #3f3f3f;
    margin-top: 16px;
  }
  .price {
    position: absolute;
    bottom: -5px;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    color: #3f3f3f;
    margin-top: auto;
  }
  .delete {
    display: block;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
    position: absolute;
    top: -8px;
    right: -8px;
    width: 32px;
    height: 32px;
    border-radius: 10px;
    background: #ff8484;
    background-repeat: no-repeat;
    background-image: url("../assets/delete.svg");
    background-repeat: no-repeat;
    background-position: 9px 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border: none;
  }
}
</style>
