<template>
  <div class="select">
    <multiselect
      v-model="value"
      :options="options"
      :searchable="false"
      :close-on-select="true"
      :show-labels="false"
      placeholder="По умолчанию"
      @select="sortGoods"
    ></multiselect>
  </div>
</template>

<script>
/**
 * @module src/components/Select.vue
 * @desc компонент селект

 */
export default {
  name: "Select",
  data() {
    return {
      value: null,
      options: [
        "По цене min (от меньшего к большему)",
        "По цене max (от большего к меньшему)",
        "По наименованию",
      ],
    };
  },
  methods: {
    sortGoods() {
      this.$nextTick(() => {
        this.$store.commit("sortGoods", this.value);
      });
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css">
.select {
  width: 300px;
}
</style>
<style lang="scss" scoped>
.select {
  width: 332px;
  padding-right: 16px;
}
</style>
