<template>
  <div class="form-input"></div>
</template>

<script>
/**
 * @module src/components/FormInput.vue
 * @desc текстовое поле для заполнения
 * @vue-prop {type} name - desc
 * @vue-data {type} name - desc
 * @vue-computed {type} name - desc
 */
export default {
  name: "FormInput",
  props: {
    type: required,
  },
};
</script>

<style lang="scss" scoped>
.form-input {
  &__label {
    font-size: 10px;
    line-height: 13px;
    letter-spacing: -0.02em;
    color: #49485e;
    margin-bottom: 4px;
    position: relative;
    &--required {
      &:before {
        position: absolute;
        left: 96px;
        content: "";
        display: block;
        width: 4px;
        height: 4px;
        background: #ff8484;
        border-radius: 50%;
      }
    }
  }
  &__input {
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: #3f3f3f;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: none;
    padding: 10px 16px 11px;
    margin-bottom: 16px;
  }
}
</style>
