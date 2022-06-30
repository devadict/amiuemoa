<template>
  <div class="container">
    <div class="card shadow-lg o-hidden border-0 my-5">
      <div class="card-body p-0">
        <div class="row">
          <div class="col-lg-5 d-none d-lg-flex">
            <div
              class="flex-grow-1 bg-register-image"
              style="
                background-image: url('/assets/img/dogs/image2.jpeg?h=a0a7d00bcd8e4f84f4d8ce636a8f94d4');
              "
            ></div>
          </div>
          <div class="col-lg-7">
            <div class="p-5">
              <div class="text-center">
                <h4 class="text-dark mb-4">Create an Account!</h4>
              </div>
              <form ref="form" class="user" @submit.prevent="handleRegister">
                <div class="row mb-3">
                  <!-- <div class="col-sm-6 mb-3 mb-sm-0">
                    <input
                      class="form-control form-control-user"
                      type="text"
                      id="exampleFirstName"
                      placeholder="First Name"
                      name="first_name"
                    />
                  </div>
                  <div class="col-sm-6">
                    <input
                      class="form-control form-control-user"
                      type="text"
                      id="exampleFirstName"
                      placeholder="Last Name"
                      name="last_name"
                    />
                  </div> -->
                  <div class="col-sm-6">
                    <input
                      class="form-control form-control-user"
                      type="text"
                      v-model="user.username"
                      id="exampleFirstName"
                      placeholder="username"
                      name="username"
                    />
                  </div>
                </div>
                <div class="mb-3">
                  <input
                    class="form-control form-control-user"
                    type="email"
                    v-model="user.email"
                    id="exampleInputEmail"
                    aria-describedby="emailHelp"
                    placeholder="Email Address"
                    name="email"
                  />
                </div>
                <div class="row mb-3">
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <input
                      v-model="user.password"
                      class="form-control form-control-user"
                      type="password"
                      id="examplePasswordInput"
                      placeholder="Password"
                    />
                  </div>
                  <!-- <div class="col-sm-6">
                    <input
                      class="form-control form-control-user"
                      type="password"
                      id="exampleRepeatPasswordInput"
                      placeholder="Repeat Password"
                      name="password_repeat"
                    />
                  </div> -->
                </div>
                <button class="btn btn-primary d-block btn-user w-100">
                  Register Account
                </button>
                <hr />
                <a
                  class="btn btn-primary d-block btn-google btn-user w-100 mb-2"
                  role="button"
                  ><i class="fab fa-google"></i>&nbsp; Register with Google</a
                ><a
                  class="btn btn-primary d-block btn-facebook btn-user w-100"
                  role="button"
                  ><i class="fab fa-facebook-f"></i>&nbsp; Register with
                  Facebook</a
                >
                <hr />
              </form>
              <div class="text-center">
                <a class="small" href="forgot-password.html"
                  >Forgot Password?</a
                >
              </div>
              <div class="text-center">
                <a class="small" href="/login.html"
                  >Already have an account? Login!</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
        isAdmin: false,
        email: "",
      },
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/");
    }
  },
  methods: {
    handleRegister() {
      this.$store.dispatch("auth/register", this.user).then(
        (data) => {
          console.log(data);
          this.$router.push("/");
        },
        (error) => {
          console.log(error)(
            error.response && error.response.data && error.response.data.message
          ) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
};
</script>
