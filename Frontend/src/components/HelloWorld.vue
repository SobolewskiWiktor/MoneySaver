<template>
  <div id="content">
    <img id="mainLogo" src="@/Images/Logo_Black.png" />
    <div id="loginBoxPanel" v-if="panelType === 'login'">
      <div id="LoginPanelTitle">
        <h1>Login</h1>
      </div>
      <v-text-field
        v-model="loginLogin"
        class="w-100 h-0 text-white loginInput"
        label="Name"
        color="white"
      ></v-text-field>
      <v-text-field
        class="w-100 h-0 text-white loginInput"
        v-model="loginPassword"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show1 ? 'text' : 'password'"
        label="Password"
        counter
        @click:append="show1 = !show1"
      ></v-text-field>
      <div id="buttons">
        <v-btn
          @click.prevent="login('login')"
          class="bg-transparent text-white w-50"
        >
          Login
        </v-btn>
      </div>
      <div id="buttons">
        <v-btn
          @click.prevent="turnRegister()"
          class="bg-transparent text-white w-50"
        >
          Register Insted
        </v-btn>
      </div>
    </div>

    <div id="loginBoxPanelRegister" v-else>
      <div id="LoginPanelTitle">
        <h1>Register</h1>
      </div>
      <div id="registerFormSection">
        <div class="registerFormRow">
          <v-text-field
            v-model="registerName"
            class="w-25 text-white"
            label="Name"
            color="white"
          ></v-text-field>
          <v-text-field
            v-model="registerSurname"
            class="ml-2 w-25 text-white"
            label="Surname"
            color="white"
          ></v-text-field>
        </div>
        <div class="registerFormRow">
          <v-text-field
            v-model="registerLogin"
            class="w-25 text-white"
            label="Login"
            color="white"
          ></v-text-field>
          <v-text-field
            v-model="registerMail"
            class="ml-2 w-25 text-white"
            label="email"
            color="white"
          ></v-text-field>
        </div>
        <div class="registerFormRow">
          <v-text-field
            v-model="registerPassword"
            class="w-25 text-white"
            label="Password"
            color="white"
            type="password"
          ></v-text-field>
          <v-text-field
            v-model="registerPasswordConfirm"
            class="ml-2 w-25 text-white"
            label="Password"
            color="white"
            type="password"
          ></v-text-field>
        </div>
      </div>
      <div id="buttons">
        <v-btn
          @click.prevent="login('register')"
          class="bg-transparent text-white w-50"
        >
          Register
        </v-btn>
      </div>
      <div id="buttons">
        <v-btn
          @click.prevent="turnLogin()"
          class="bg-transparent text-white w-50"
        >
          Login Insted
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import router from "@/router/index";
import "@/CSS/Main.css";
import { useToast } from "vue-toastification";
import axios from "axios";

const toast = useToast();
export default {
  data() {
    return {
      toastService: toast,
      show1: false,
      show2: true,
      password: "",
      panelType: "login",
      loginPassword: "",
      loginLogin: "",
      registerName: "",
      registerSurname: "",
      registerLogin: "",
      registerMail: "",
      registerPassword: "",
      registerPasswordConfirm: "",
    };
  },
  methods: {
    turnRegister() {
      this.panelType = "register";
    },

    turnLogin() {
      this.panelType = "login";
    },
    async login(action: string) {
      if (action == "login") {
        let checkFailedLogin = 0;
        if (this.loginLogin == "") {
          this.myUseToast("Enter Login", "warning");
          checkFailedLogin = 1;
        }
        if (this.loginPassword == "") {
          this.myUseToast("Enter Password", "warning");
          checkFailedLogin = 1;
        }

        if (checkFailedLogin == 0) {
          let user = {
            login: this.loginLogin,
            password: this.loginPassword,
          };
          try {
            let loggin = await axios.post(
              "http://localhost:3100/api/user/login",
              user
            );
            if (loggin.status == 200) {
              this.myUseToast("Login Success", "success");
              let token = loggin.data.token;
              localStorage.setItem("token", token);
              this.$router.push("/dashboard");
            }
          } catch (err) {
            this.myUseToast("Login Failed", "error");
          }
        }
      } else {
        let checkFailedRegister = 0;
        if (this.registerLogin == "") {
          this.myUseToast("Enter Login", "warning");
          checkFailedRegister = 1;
        }
        if (this.registerPassword == "") {
          this.myUseToast("Enter Password", "warning");
          checkFailedRegister = 1;
        }
        if (this.registerName == "") {
          this.myUseToast("Enter Name", "warning");
          checkFailedRegister = 1;
        }
        if (this.registerSurname == "") {
          this.myUseToast("Enter Surname", "warning");
          checkFailedRegister = 1;
        }
        if (this.registerPassword != this.registerPasswordConfirm) {
          this.myUseToast("Passwords not match", "error");
          checkFailedRegister = 1;
        }

        if (checkFailedRegister == 0) {
          let user = {
            name: this.registerName,
            surname: this.registerSurname,
            login: this.registerLogin,
            password: this.registerPassword,
            mail: this.registerMail,
          };

          const loggin = await axios.post(
            "http://localhost:3100/api/user/register",
            user
          );
          if (loggin.status == 200) {
            if(loggin.data.registerStatus == "Accout exist")
            {
              this.myUseToast("Login has been taken", "error");
            }
            else
            {
              this.myUseToast("Register Success", "success");
              this.registerName = '',
              this.registerSurname = '',
              this.registerLogin = '',
              this.registerPassword = '',
              this.registerMail = '',
              this.registerPasswordConfirm = '';
              this.panelType = "login";
            }
          }
        }
      }
    },

    myUseToast(message: string, type: string) {
      if (type == "success") {
        this.toastService.success(message, {
          timeout: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: false,
          closeButton: "button",
          icon: true,
          rtl: false,
        });
      }
      if (type == "error") {
        this.toastService.error(message, {
          timeout: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: false,
          closeButton: "button",
          icon: true,
          rtl: false,
        });
      }
      if (type == "warning") {
        this.toastService.warning(message, {
          timeout: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: false,
          closeButton: "button",
          icon: true,
          rtl: false,
        });
      }
    },
  },
};
</script>
