<template>
  <div id="wrapper">
    <SideBar />
    <div class="d-flex flex-column" id="content-wrapper">
      <div id="content">
        <div class="container-fluid">
          <h3 class="text-dark mb-4">Team</h3>
          <!-- Start: Bootstrap DataTables -->
          <TableOne />
          <!-- End: Bootstrap DataTables -->
          <TableTwo />
        </div>
      </div>
      <Footer/>
    </div>
    <a class="border rounded d-inline scroll-to-top" href="#page-top"
      ><i class="fas fa-angle-up"></i
    ></a>
  </div>
</template>

<script>
import TableTwo from "../components/Table/TableTwo.vue";
import TableOne from "../components/Table/TableOne.vue";
import SideBar from "../components/Home/SideBar.vue";
import Footer from "../components/Footer.vue";
export default {
  components: { TableTwo, TableOne, SideBar, Footer },
};
</script>
