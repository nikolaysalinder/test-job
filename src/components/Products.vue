<template>
  <div class="products">
    <div class="container container--flex">
      <AddGood></AddGood>
      <div class="goods">
        <div class="sorting">
          <Select></Select>
        </div>
        <Good v-for="(good, index) in goods" :good="good" :key="index"></Good>
      </div>
    </div>
  </div>
</template>

<script>
import AddGood from "@/components/AddGood.vue";
import Good from "@/components/Good.vue";
import Select from "@/components/Select.vue";
export default {
  name: "Products",
  data() {
    return {};
  },
  components: {
    AddGood,
    Good,
    Select,
  },
  computed: {
    goods() {
      this.$store.commit("setGoodFromLocalStorage");
      return this.$store.state.goods;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  max-width: 1407px;
  padding: 0 15px;
  margin: 0 auto;
  &--flex {
    display: flex;
  }
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-right: -16px;
  }
  .sorting {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    mim-height: 40px;
  }
  .wrapper {
    display: flex;
    width: 121px;
  }
}
@media screen and (max-width: 768px) {
  .container--flex {
    flex-direction: column;
  }
}
</style>
