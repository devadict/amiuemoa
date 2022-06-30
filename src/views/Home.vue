<template>
  <div id="page-top" style="font-family: Teko, sans-serif; letter-spacing: 1px">
    <div id="wrapper">
      <div class="d-flex flex-column" id="content-wrapper">
        <div id="content">
          <SideBar :name="this.user.name" />

          <Alert />
          <!-- <Pricing /> -->

          <!-- <SecHead /> -->

          <ThirdHead />

          <Contact />

          <Service />

          <Footer />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "../components/Home/SideBar.vue";
import Alert from "../components/Home/Alert.vue";
// import Pricing from "../components/Home/Pricing.vue";
// import SecHead from "../components/Home/SecHead.vue";
import ThirdHead from "../components/Home/ThirdHead.vue";
import Contact from "../components/Home/Contact.vue";
import Service from "../components/Home/Service.vue";
import Footer from "../components/Footer.vue";
import { mapActions, mapGetters } from "vuex";
// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return {
      user: null,
    };
  },
  methods: {
    ...mapActions(["fetchOneUser"]),
  },
  computed: mapGetters(["oneUser"]),
  async created() {
    await this.fetchOneUser();
    this.user = this.oneUser;
  },
  components: {
    SideBar,
    Alert,
    // Pricing,
    // SecHead,
    ThirdHead,
    Contact,
    Service,
    Footer,
  },
};
</script>
