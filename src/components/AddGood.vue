<template>
  <div class="add-good">
    <h3 class="title">Добавление товара</h3>
    <form class="add-good__form">
      <label class="add-good__label" for="description">Описание товара</label>
      <textarea
        class="add-good__textarea"
        type="textarea"
        name="name"
        id="description"
        placeholder="Введите описание товара"
      ></textarea>
      <label class="add-good__label add-good__label--required" for="name"
        >Ссылка на изображение товара</label
      >
      <input
        class="add-good__input"
        type="text"
        name="name"
        id="name"
        placeholder="Введите ссылку "
      />
    </form>
  </div>
</template>

<script>
/**
 * @module src/components/AddGood.vue
 * @desc компонет для добавления товара.
 */
export default {
  name: "Add-Goods",
};
</script>

<style lang="scss" scoped>
.add-good {
  outline: 1px solid green;
  .title {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 28px;
    color: #3f3f3f;
  }
  &__form {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 322px;
    padding: 24px;
    background: #fffefb;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
      0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
  }
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
  &__textarea {
    padding: 10px 16px;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: #3f3f3f;
    border: none;
    background: #fffefb;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    max-width: 274px;
    min-width: 274px;
    min-height: 108px;
    margin-bottom: 16px;
  }
}
</style>
