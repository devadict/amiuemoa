<template>
  <div id="wrapper">
    <div class="d-flex flex-column" id="content-wrapper">
      <div id="content">
        <div class="container-fluid">
          <SideBar />
          <h3 class="text-dark mb-4">Profil</h3>
          <div class="row mb-3">
            <div class="col-lg-4">
              <Photo />
              <Projects />
            </div>
            <div class="col-lg-8">
              <div class="row">
                <div class="col">
                  <UserSett />
                  <ContactSett />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import SideBar from "../components/Home/SideBar.vue";
import Photo from "../components/Profile/Photo.vue";
import Projects from "../components/Profile/Projects.vue";
import UserSett from "../components/Profile/UserSett.vue";
import ContactSett from "../components/Profile/ContactSett.vue";
import Footer from "../components/Footer.vue";
export default {
  components: { SideBar, Photo, Projects, UserSett, ContactSett, Footer },
};
</script>
