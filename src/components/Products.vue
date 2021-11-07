<template>
  <div class="products">
    <div class="container container--flex">
      <AddGood></AddGood>
      <div class="goods">
        <Good v-for="(good, index) in goods" :good="good" :key="index"></Good>
      </div>
    </div>
  </div>
</template>

<script>
import AddGood from "@/components/AddGood.vue";
import Good from "@/components/Good.vue";
export default {
  name: "Products",
  components: {
    AddGood,
    Good,
  },
  computed: {
    goods() {
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
  outline: 1px solid green;
  &--flex {
    display: flex;
  }
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-right: -16px;
  }
}
</style>
