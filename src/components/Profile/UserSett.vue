<template>
  <div class="card shadow mb-3">
    <div class="card-header py-3">
      <p class="text-primary m-0 fw-bold">User Settings</p>
    </div>
    <div class="card-body">
      <form>
        <div class="row">
          <div class="col">
            <div class="mb-3">
              <label class="form-label" for="name"
                ><strong>Username</strong></label
              ><input
                class="form-control"
                type="text"
                id="name"
                placeholder="user.name"
                name="name"
              />
            </div>
          </div>
          <div class="col">
            <div class="mb-3">
              <label class="form-label" for="email"
                ><strong>Email Address</strong></label
              ><input
                class="form-control"
                type="email"
                id="email"
                placeholder="user@example.com"
                name="email"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="mb-3">
              <label class="form-label" for="first_name"
                ><strong>First Name</strong></label
              ><input
                class="form-control"
                type="text"
                id="first_name"
                placeholder="John"
                name="first_name"
              />
            </div>
          </div>
          <div class="col">
            <div class="mb-3">
              <label class="form-label" for="last_name"
                ><strong>Last Name</strong></label
              ><input
                class="form-control"
                type="text"
                id="last_name"
                placeholder="Doe"
                name="last_name"
              />
            </div>
          </div>
        </div>
        <div class="mb-3">
          <button class="btn btn-primary btn-sm" type="submit">
            Save Settings
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>
