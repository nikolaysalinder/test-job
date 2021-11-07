<template>
  <div class="add-good">
    <h2 class="title">Добавление товара</h2>
    <form class="add-good__form">
      <div class="wrapper">
        <label class="add-good__label add-good__label--name" for="name"
          ><span class="dot"></span>Наименование товара</label
        >
        <input
          class="add-good__input"
          :class="{ 'add-good__input--error': hasNameError }"
          type="text"
          id="name"
          placeholder="Введите наименование товара"
          v-model="name"
          required
          @input="validateInputName"
        />
        <span class="add-good__error" :class="{ 'show-error': hasNameError }"
          >Поле является обязательным</span
        >
      </div>
      <label class="add-good__label" for="description">Описание товара</label>
      <textarea
        class="add-good__textarea"
        type="textarea"
        id="description"
        placeholder="Введите описание товара"
        v-model="description"
      ></textarea>
      <div class="wrapper">
        <label class="add-good__label add-good__label--image" for="link"
          ><span class="dot"></span>Ссылка на изображение товара</label
        >
        <input
          class="add-good__input"
          :class="{ 'add-good__input--error': hasLinkError }"
          type="text"
          id="link"
          placeholder="Введите ссылку"
          v-model="link"
          required
          @input="validateInputLink"
        />
        <span class="add-good__error" :class="{ 'show-error': hasLinkError }"
          >Поле является обязательным</span
        >
      </div>
      <label class="add-good__label add-good__label--price" for="price"
        ><span class="dot"></span>Цена товара</label
      >
      <div class="wrapper">
        <input
          class="add-good__input"
          :class="{ 'add-good__input--error': hasPriceError }"
          type="text"
          id="price"
          placeholder="Введите цену"
          v-model="price"
          required
          @input="validateInputPrice"
        />
        <span class="add-good__error" :class="{ 'show-error': hasPriceError }"
          >Поле является обязательным</span
        >
      </div>
      <button
        @click.prevent="addGood"
        class="add-good__button"
        :disabled="!isButtonEnabled"
      >
        Добавить товар
      </button>
    </form>
  </div>
</template>

<script>
/**
 * @module src/components/AddGood.vue
 * @desc компонет для добавления товара.
 */
export default {
  name: "AddGood",
  data() {
    return {
      name: "",
      description: "",
      link: "",
      price: "",
      hasNameError: false,
      hasLinkError: false,
      hasPriceError: false,
      firstInput: false,
    };
  },
  methods: {
    addGood() {
      const good = {
        name: this.name,
        description: this.description,
        link: this.link,
        price: this.price,
      };
      this.$store.commit("addGood", good);
    },
    validateInputName() {
      if (this.name.length === 0) {
        this.hasNameError = true;
      } else {
        this.hasNameError = false;
      }
    },
    validateInputLink() {
      if (this.link.length === 0) {
        this.hasLinkError = true;
      } else {
        this.hasLinkError = false;
      }
    },
    validateInputPrice() {
      if (this.price.length === 0) {
        this.hasPriceError = true;
      } else {
        this.hasPriceError = false;
      }
    },
  },
  computed: {
    isButtonEnabled() {
      if (
        this.name.length > 0 &&
        this.link.length > 0 &&
        this.price.length > 0
      ) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
.add-good {
  outline: 1px solid green;
  margin-right: 16px;
  margin-bottom: 16px;
  .wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    padding-bottom: 16px;
  }
  .title {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 28px;
    color: #3f3f3f;
  }
  &__error {
    position: absolute;
    bottom: 3px;
    display: none;
    font-style: normal;
    font-weight: normal;
    font-size: 8px;
    line-height: 10px;
    letter-spacing: -0.02em;
    color: #ff8484;
    margin-top: 4px;
  }
  .show-error {
    display: block;
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
    &--name {
      span {
        position: absolute;
        left: 96px;
        display: block;
        width: 4px;
        height: 4px;
        background: #ff8484;
        border-radius: 50%;
      }
    }
    &--image {
      span {
        position: absolute;
        left: 134px;
        display: block;
        width: 4px;
        height: 4px;
        background: #ff8484;
        border-radius: 50%;
      }
    }
    &--price {
      span {
        position: absolute;
        left: 54px;
        display: block;
        width: 4px;
        height: 4px;
        background: #ff8484;
        border-radius: 50%;
      }
    }
  }
  &__input {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: #3f3f3f;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: 1px solid #ffffff;
    padding: 10px 16px 11px;
    outline: none;
    &--error {
      border: 1px solid #ff8484;
    }
  }
  &__textarea {
    padding: 10px 16px;
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
  &__button {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    letter-spacing: -0.02em;
    border: none;
    padding: 11px 0;
    background: #7bae73;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #ffffff;
    &:disabled {
      background: #eeeeee;
      color: #b4b4b4;
    }

    &[disabled] {
      background: #eeeeee;
      color: #b4b4b4;
    }
  }
}
</style>
