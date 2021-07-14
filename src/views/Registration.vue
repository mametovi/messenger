<template>
  <div class="home">
    <div class="form">
      <b-container>

        <build-form :fields="regForm">
          <template v-slot:footer="disabled">
            <div class="btn-button">
              <b-button :disabled="disabled.disabled" variant="primary" @click="$router.push({ name: 'Contacts' })"
                >Далее
              </b-button>
            </div>
          </template>
        </build-form>
      </b-container>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import exForm from "@/components/Form.vue";

import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

// const valdCaptcha = (captcha) => {
//   return (value) => captcha === value
// }

export default {
  name: "Registration",
  components: {
    "build-form": exForm,
  },

  data() {
    return {
      regForm: [
        {
          type: "pas",
          placeholder: "",
          img: 'data:image/png;base64,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',
          name: "pas",
          grup: "docs",
          validation: {
            required,
          }    
        },
        {
          placeholder: "Имя",
          type: "text",
          name: "text",
          validation: {
            required,
          },
        },
        {
          placeholder: "Фамилия",
          type: "text",
          name: "password",
          validation: {
            required,
          },
        },
        {
          placeholder: "Amet",
          type: "text",
          name: "repeatPassword",
          validation: {
            required,
          },
        },
        {
          placeholder: 'Номер телефона начиная с "+"',
          type: "text",
          name: "number",
          validation: {
            required,
          },
        },
        {
          type: "checkbox",
          placeholder: "i agree with & configuration",
          name: "termofuse",
          grup: "docs",
          validation: {
            required,
          },
        },
         
      ],
    };
  },
};
</script>
