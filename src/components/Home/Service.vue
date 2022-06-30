<template>
                <div class="container-fluid">
          <a
            class="btn btn-link link-primary mb-3"
            role="button"
            href="services.html"
            ><i class="fas fa-arrow-left"></i>&nbsp;Back</a
          >
          <div
            class="d-sm-flex justify-content-between align-items-center mb-4"
          >
            <h3 class="text-dark mb-0">Create Service</h3>
          </div>
          <form>
            <div class="card shadow mb-3">
              <div class="card-header py-3">
                <p class="text-primary m-0 fw-bold">
                  Fill in the required fields *
                </p>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-12 col-md-8 col-lg-8">
                    <div class="mb-3">
                      <label class="form-label" for="service_name"
                        ><strong>Name service *</strong></label
                      ><input
                        class="form-control"
                        type="text"
                        id="service_name"
                        placeholder="Name service"
                        name="service_name"
                        required=""
                      />
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-4 col-lg-4">
                    <div class="mb-3">
                      <label class="form-label" for="service_price"
                        ><strong>Price *</strong><br /></label
                      ><input
                        class="form-control"
                        type="text"
                        id="service_price"
                        placeholder="$0000"
                        name="client_phone"
                        required=""
                      />
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label" for="client_description"
                    ><strong>Description *</strong><br /></label
                  ><textarea
                    class="form-control"
                    id="service_description"
                    rows="4"
                    name="service_description"
                    placeholder="Description service"
                    required=""
                  ></textarea>
                </div>
                <div class="mb-3">
                  <label
                    class="form-label"
                    for="service_client_payment_validated"
                    ><strong>Payment validated *</strong></label
                  >
                  <div class="form-group mb-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        id="service_client_payment_validated-1"
                        name="RadioOption"
                        required=""
                      /><label
                        class="form-check-label"
                        for="service_client_payment_validated-1"
                        >Yes</label
                      >
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        id="service_client_payment_validated-2"
                        name="RadioOption"
                        required=""
                      /><label
                        class="form-check-label"
                        for="service_client_payment_validated-2"
                        >No</label
                      >
                    </div>
                  </div>
                </div>
                <div class="row mb-2">
                  <div class="col">
                    <div class="mb-3">
                      <label class="form-label" for="service_client_start_date"
                        ><strong>Start date *</strong></label
                      ><input
                        class="form-control"
                        id="service_client_start_date"
                        type="date"
                        name="service_client_start_date"
                        required=""
                      />
                    </div>
                  </div>
                  <div class="col">
                    <div class="mb-3">
                      <label class="form-label" for="service_client_end_date"
                        ><strong>End date *</strong><br /></label
                      ><input
                        class="form-control"
                        id="service_client_end_date"
                        type="date"
                        name="service_client_end_date"
                        required=""
                      />
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label
                    class="form-label"
                    for="service_client_payment_validated"
                    ><strong>Client name *</strong></label
                  >
                  <div class="form-group mb-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        id="client_name_1"
                        name="RadioOption"
                        required=""
                      /><label class="form-check-label" for="client_name_1"
                        >Airi Satou<br
                      /></label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        id="client_name_2"
                        name="RadioOption"
                        required=""
                      /><label class="form-check-label" for="client_name_2"
                        >Angelica Ramos</label
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-end mb-3">
              <button class="btn btn-primary btn-lg" type="submit">
                Save&nbsp;service</button
              ><a
                class="btn btn-danger btn-lg"
                role="button"
                href="services.html"
                >Cancel</a
              >
            </div>
          </form>
        </div>

</template>

<script>
export default {
    
}
</script>