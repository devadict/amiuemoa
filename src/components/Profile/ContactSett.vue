<template>
  <div class="card shadow">
    <div class="card-header py-3">
      <p class="text-primary m-0 fw-bold">Contact Settings</p>
    </div>
    <div class="card-body">
      <form>
        <div class="mb-3">
          <label class="form-label" for="address"
            ><strong>Address</strong></label
          ><input
            class="form-control"
            type="text"
            id="address"
            placeholder="Sunset Blvd, 38"
            name="address"
          />
        </div>
        <div class="row">
          <div class="col">
            <div class="mb-3">
              <label class="form-label" for="city"><strong>City</strong></label
              ><input
                class="form-control"
                type="text"
                id="city"
                placeholder="Los Angeles"
                name="city"
              />
            </div>
          </div>
          <div class="col">
            <div class="mb-3">
              <label class="form-label" for="country"
                ><strong>Country</strong></label
              ><input
                class="form-control"
                type="text"
                id="country"
                placeholder="USA"
                name="country"
              />
            </div>
          </div>
        </div>
        <div class="mb-3">
          <button class="btn btn-primary btn-sm" type="submit">
            Save&nbsp;Settings
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>
