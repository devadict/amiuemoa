<template>
  <div class="container py-4 py-xl-5">
    <div class="row mb-5">
      <div class="col-md-8 col-xl-6 text-center mx-auto">
        <h2>{{ port.title }}</h2>
      </div>
    </div>
    <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
      <div class="col">
        <div class="card h-100">
          <div class="card-body d-flex flex-column justify-content-between p-4">
            <div class="mx-auto">
              <div>
                <h5 class="text-uppercase fw-bold">PACK JUNIOR</h5>
                <h5 class="display-6 fw-bold">60 000$ - 100 000$</h5>
                <h6 class="display-6 fw-bold text-muted">
                  39 000 000FCFA - 65 000 000FCFA
                </h6>
              </div>
              <hr />
              <ul class="list-unstyled">
                <li class="d-flex mb-2">
                  <span
                    class="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      class="bi bi-check-lg text-primary"
                    >
                      <path
                        d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                      ></path></svg></span
                  ><span>Lectus ut nibh quam, felis porttitor.</span>
                </li>
                <li class="d-flex mb-2">
                  <span
                    class="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      class="bi bi-check-lg text-primary"
                    >
                      <path
                        d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                      ></path></svg></span
                  ><span>Ante nec venenatis etiam lacinia.</span>
                </li>
                <li class="d-flex mb-2">
                  <span
                    class="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      class="bi bi-check-lg text-primary"
                    >
                      <path
                        d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                      ></path></svg></span
                  ><span>Porta suscipit netus ad ac.</span>
                </li>
              </ul>
            </div>
            <b-button v-b-modal.modal-1>Avantages</b-button>
            <b-button v-b-modal.modal-2>Souscrire</b-button>

            <b-modal id="modal-1" title="BootstrapVue">
              <p class="my-4">Avantages 1</p>
            </b-modal>
            <b-modal id="modal-2" title="BootstrapVue">
              <p class="my-4">Souscrire 2</p>
            </b-modal>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <div class="card-body d-flex flex-column justify-content-between p-4">
            <div>
              <h6 class="text-uppercase text-muted">Enterprise</h6>
              <h4 class="display-6 fw-bold">$70</h4>
              <hr />
              <ul class="list-unstyled">
                <li class="d-flex mb-2">
                  <span
                    class="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      class="bi bi-check-lg text-primary"
                    >
                      <path
                        d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                      ></path></svg></span
                  ><span>Lectus ut nibh quam, felis porttitor.</span>
                </li>
                <li class="d-flex mb-2">
                  <span
                    class="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      class="bi bi-check-lg text-primary"
                    >
                      <path
                        d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                      ></path></svg></span
                  ><span>Ante nec venenatis etiam lacinia.</span>
                </li>
                <li class="d-flex mb-2">
                  <span
                    class="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      class="bi bi-check-lg text-primary"
                    >
                      <path
                        d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                      ></path></svg></span
                  ><span>Porta suscipit netus ad ac.</span>
                </li>
                <li class="d-flex mb-2">
                  <span
                    class="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      class="bi bi-check-lg text-primary"
                    >
                      <path
                        d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                      ></path></svg></span
                  ><span>Morbi praesent aptent integer at.</span>
                </li>
                <li class="d-flex mb-2">
                  <span
                    class="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      class="bi bi-check-lg text-primary"
                    >
                      <path
                        d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                      ></path></svg></span
                  ><span>Nisl potenti ut auctor lobortis.</span>
                </li>
                <li class="d-flex mb-2">
                  <span
                    class="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      class="bi bi-check-lg text-primary"
                    >
                      <path
                        d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                      ></path></svg></span
                  ><span>Ornare accumsan curae duis eget.</span>
                </li>
              </ul>
            </div>
            <b-button v-b-modal.modal-5>Avantages</b-button>
            <b-button v-b-modal.modal-6>Souscrire</b-button>

            <b-modal id="modal-5" title="BootstrapVue">
              <p class="my-4">Avantages 3</p>
            </b-modal>
            <b-modal id="modal-6" title="BootstrapVue">
              <p class="my-4">Souscrire 4</p>
            </b-modal>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import port from "../../helper/portefeuille.json";
export default {
  data() {
    return {
      port: port,
    };
  },
};
</script>
