<template>
  <div>
    <nav
      class="fixed-top navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top"
    >
      <!-- Add "fixed-top" to class navbar -->
      <div class="px-4">
        <b-button v-b-toggle.sidebar-1 variant="outline-primary">
          Menu</b-button
        >
        <b-sidebar id="sidebar-1" :title="name" shadow>
          <div class="px-3 py-2">
            <b-list-group>
              <b-list-group-item
                to="/"
                class="d-flex justify-content-between align-items-center"
              >
                Tableau de bord
                <b-badge variant="primary" pill>0</b-badge>
              </b-list-group-item>

              <b-list-group-item
                to="/profile"
                class="d-flex justify-content-between align-items-center"
              >
                Achat et vente
                <b-badge variant="primary" pill>2</b-badge>
              </b-list-group-item>

              <b-list-group-item
                to="/table"
                class="d-flex justify-content-between align-items-center"
              >
                Opérations
                <b-badge variant="primary" pill>2</b-badge>
              </b-list-group-item>

              <b-list-group-item
                to="/login"
                class="d-flex justify-content-between align-items-center"
              >
                Login
                <b-badge variant="primary" pill>2</b-badge>
              </b-list-group-item>
              <b-list-group-item
                to="/register"
                class="d-flex justify-content-between align-items-center"
              >
                Register
                <b-badge variant="primary" pill>2</b-badge>
              </b-list-group-item>
            </b-list-group>
          </div>
        </b-sidebar>
      </div>
      <b-container fluid="md">
        <form
          class="mx-auto d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search"
        >
          <div class="input-group">
            <b-form-input placeholder="Rechercher"></b-form-input>
          </div>
        </form>
        <div>
          <b-dropdown
            id="dropdown-right"
            right
            text="Alert"
            variant="primary"
            class="m-2"
          >
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here</b-dropdown-item>
          </b-dropdown>
        </div>
      </b-container>
    </nav>
    <div class="container-fluid">
      <div class="d-sm-flex justify-content-between align-items-center mb-4">
        <h3 class="text-dark mb-0">Tableau de bord</h3>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
/* @import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss"; */
</style>

<style>
body {
  padding: 1rem;
}
</style>

<script>
export default {
  name: "SideBar",
  props: ["name"],
};
</script>
