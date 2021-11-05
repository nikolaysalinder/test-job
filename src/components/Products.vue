<template>
  <div class="products">
    <div class="container">
      <AddGood></AddGood>
    </div>
  </div>
</template>

<script>
import AddGood from "@/components/AddGood.vue";
export default {
  name: "Products",
  components: {
    AddGood,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  max-width: 1377px;
  margin: 0 auto;
  outline: 1px solid green;
}
</style>
