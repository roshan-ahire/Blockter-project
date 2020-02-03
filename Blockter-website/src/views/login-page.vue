<template>
  <div>
    <div class="login-page">
      <div class="form">
        <form class="login-form">
          <b-form-group>
            <b-form-input
              v-model="form.email"
              id="email"
              type="email"
              required
              placeholder="username"
            ></b-form-input>
            <div
              v-if="$v.form.email.$error && !$v.form.email.required && removeText"
              class="error-txt"
            >gmail is required</div>
          </b-form-group>
          <!-- password -->
          <b-form-group>
            <div class="position-relative">
              <b-form-input
                v-model="form.password"
                id="password"
                type="password"
                required
                placeholder="password"
              ></b-form-input>

              <div class="eye-icon">
                <div v-if="show">
                  <font-awesome-icon @click="changeIcon()" :icon="['fas', 'eye']" class="small" />
                </div>
                <div v-if="!show">
                  <font-awesome-icon
                    @click="changeIcon()"
                    :icon="['fas', 'eye-slash']"
                    class="small"
                  />
                </div>
              </div>
            </div>
            <div
              v-if="
                  $v.form.password.$error &&
                    !$v.form.password.required &&
                    removeText
                "
              class="error-txt"
            >password is required</div>
          </b-form-group>

          <button @click="onSubmit(form)">login</button>
          <p class="message">
            Not registered?
            <a href="#">Create an account</a>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { required } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      show: true,
      errors: [],
      bootstrapBtnPromise: "",
      submitStatus: "true",
      removeText: "true",
      form: {
        email: "",
        password: ""
      }
    };
  },
  validations: {
    form: {
      email: {
        required
      },
      password: {
        required
      }
    }
  },
  methods: {
    onSubmit(data) {
      this.removeText = true;
      this.$v.form.$touch();
      if (this.$v.form.$error) {
        return;
      } else {
        this.$toaster.success("Your data fill succsesfully.", {
          timeout: 3000
        });
      }
    },

    changeIcon() {
      var x = document.getElementById("password");
      console.log("hellow", x.type);
      if (x.type == "password") {
        x.type = "text";
        this.show = true;
      } else {
        x.type = "password";
        this.show = false;
      }
    }
  }
};
</script>
<style>
.login-page {
  padding: 8% 0 0;
  margin: auto;
  background: #76b852; /* fallback for old browsers */
  background: -webkit-linear-gradient(right, #76b852, #8dc26f);
  background: -moz-linear-gradient(right, #76b852, #8dc26f);
  background: -o-linear-gradient(right, #76b852, #8dc26f);
  background: linear-gradient(to left, #76b852, #8dc26f);
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}

.form {
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 27px;
  box-sizing: border-box;
  font-size: 14px;
}

.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4caf50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}

.form button:hover,
.form button:active,
.form button:focus {
  background: #43a047;
}

.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}

.form .message a {
  color: #4caf50;
  text-decoration: none;
}

.form .register-form {
  display: none;
}

.eye-icon {
  position: absolute;
  top: 14px;
  right: 20px;
}
.form input {
  /* padding: 27px !important; */
}
.error-txt {
  color: red;
  text-align: left;
  font-size: 15px;
}
</style>