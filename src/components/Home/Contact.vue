<template>
  <section class="shadow contact-clean" style="background: rgb(3, 77, 139)">
    <form
      class="bg-light border rounded border-secondary shadow-lg"
      method="post"
      style="background: rgb(248, 248, 249)"
    >
      <h2 class="text-center">Contact us</h2>
      <!-- Start: Success Example -->
      <div class="form-group mb-3">
        <input
          class="form-control"
          type="text"
          name="name"
          placeholder="Name"
        />
      </div>
      <!-- End: Success Example -->
      <!-- Start: Success Example -->
      <div class="form-group mb-3">
        <input
          class="form-control"
          type="text"
          name="phone"
          placeholder="Phone"
          inputmode="tel"
        />
      </div>
      <!-- End: Success Example -->
      <!-- Start: Error Example -->
      <div class="form-group mb-3">
        <input
          class="form-control"
          type="email"
          name="email"
          placeholder="Email"
        />
      </div>
      <!-- End: Error Example -->
      <div class="form-group mb-3">
        <textarea
          class="form-control"
          name="message"
          placeholder="Message"
          rows="14"
        ></textarea>
      </div>
      <div class="form-group mb-3">
        <button class="btn btn-primary" type="submit">send</button>
      </div>
      <div class="form-group mb-3">
        <p class="text-center text-info" style="font-size: 12px">
          Copyright © 2021 Moorcam Development. All Rights Reserved.
        </p>
      </div>
    </form>
  </section>
</template>

<script>
export default {};
</script>
