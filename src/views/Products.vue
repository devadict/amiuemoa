<template>
  <div id="wrapper">
    <nav
      class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0"
    >
      <div class="container-fluid d-flex flex-column p-0">
        <a
          class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
          href="#"
        >
          <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
          </div>
          <div class="sidebar-brand-text mx-3">
            <span>African Masters Investor</span>
          </div>
        </a>
        <hr class="sidebar-divider my-0" />
        <ul class="navbar-nav text-light" id="accordionSidebar">
          <li class="nav-item">
            <a class="nav-link" href="/index.html"
              ><i class="fas fa-tachometer-alt"></i
              ><span>Tableau de bord</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/profile.html"
              ><i class="fas fa-user"></i><span>Achat et vente</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/table.html"
              ><i class="typcn typcn-directions"></i><span>Operations</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/login.html"
              ><i class="fas fa-balance-scale"></i><span>Balance</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/register.html"
              ><i class="fas fa-dollar-sign"></i
              ><span>Liste Transaction</span></a
            ><a class="nav-link" href="/register.html"
              ><i class="fas fa-user-circle"></i><span>Mon compte</span></a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link d-md-flex align-items-md-center"
              href="#submenu"
              style="font-size: 14px"
              ><i class="fas fa-user-circle"></i><span>Register</span
              ><button
                class="btn btn-primary"
                id="sidebarToggle"
                type="button"
                style="
                  margin: 0;
                  padding: 0;
                  width: 30px;
                  height: 30px;
                  border-radius: 100px;
                "
              ></button
            ></a>
          </li>
          <!-- Start: Ludens Client - Login Dropdown -->
          <li class="nav-item dropdown">
            <a
              class="dropdown-toggle nav-link"
              aria-expanded="false"
              data-bs-toggle="dropdown"
              href="#"
              ><i class="fa fa-user" style="font-size: 20px; margin: 4px"></i
              ><span style="font-size: 14px">Operations</span>&nbsp;</a
            >
            <div class="dropdown-menu dropdown-menu-end">
              <a class="dropdown-item" href="#">Depot</a
              ><a class="dropdown-item" href="#">Transfert</a
              ><a class="dropdown-item" href="#">Retratt</a>
            </div>
          </li>
          <!-- End: Ludens Client - Login Dropdown -->
        </ul>
        <div class="text-center d-none d-md-inline">
          <button
            class="btn rounded-circle border-0"
            id="sidebarToggle"
            type="button"
          ></button>
        </div>
      </div>
    </nav>
    <div class="d-flex flex-column" id="content-wrapper">
      <div id="content">
        <nav
          class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top"
        >
          <div class="container-fluid">
            <button
              class="btn btn-link d-md-none rounded-circle me-3"
              id="sidebarToggleTop"
              type="button"
            >
              <i class="fas fa-bars"></i>
            </button>
            <form
              class="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search"
            >
              <div class="input-group">
                <input
                  class="bg-light form-control border-0 small"
                  type="text"
                  placeholder="Rechercher"
                /><button class="btn btn-primary py-0" type="button">
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </form>
            <ul class="navbar-nav flex-nowrap ms-auto">
              <li class="nav-item dropdown d-sm-none no-arrow">
                <a
                  class="dropdown-toggle nav-link"
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  href="#"
                  ><i class="fas fa-search"></i
                ></a>
                <div
                  class="dropdown-menu dropdown-menu-end p-3 animated--grow-in"
                  aria-labelledby="searchDropdown"
                >
                  <form class="me-auto navbar-search w-100">
                    <div class="input-group">
                      <input
                        class="bg-light form-control border-0 small"
                        type="text"
                        placeholder="Search for ..."
                      />
                      <div class="input-group-append">
                        <button class="btn btn-primary py-0" type="button">
                          <i class="fas fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </li>
              <li class="nav-item dropdown no-arrow mx-1">
                <div class="nav-item dropdown no-arrow">
                  <a
                    class="dropdown-toggle nav-link"
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                    href="#"
                    ><span class="badge bg-danger badge-counter">3+</span
                    ><i class="fas fa-bell fa-fw"></i
                  ></a>
                  <div
                    class="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in"
                  >
                    <h6 class="dropdown-header">alerts center</h6>
                    <a class="dropdown-item d-flex align-items-center" href="#">
                      <div class="me-3">
                        <div class="bg-primary icon-circle">
                          <i class="fas fa-file-alt text-white"></i>
                        </div>
                      </div>
                      <div>
                        <span class="small text-gray-500"
                          >December 12, 2019</span
                        >
                        <p>A new monthly report is ready to download!</p>
                      </div> </a
                    ><a
                      class="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div class="me-3">
                        <div class="bg-success icon-circle">
                          <i class="fas fa-donate text-white"></i>
                        </div>
                      </div>
                      <div>
                        <span class="small text-gray-500"
                          >December 7, 2019</span
                        >
                        <p>$290.29 has been deposited into your account!</p>
                      </div> </a
                    ><a
                      class="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div class="me-3">
                        <div class="bg-warning icon-circle">
                          <i class="fas fa-exclamation-triangle text-white"></i>
                        </div>
                      </div>
                      <div>
                        <span class="small text-gray-500"
                          >December 2, 2019</span
                        >
                        <p>
                          Spending Alert: We've noticed unusually high spending
                          for your account.
                        </p>
                      </div> </a
                    ><a
                      class="dropdown-item text-center small text-gray-500"
                      href="#"
                      >Show All Alerts</a
                    >
                  </div>
                </div>
              </li>
              <li class="nav-item dropdown no-arrow">
                <div class="nav-item dropdown no-arrow">
                  <a
                    class="dropdown-toggle nav-link"
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                    href="#"
                    ><span class="d-none d-lg-inline me-2 text-gray-600 small"
                      >Valerie Luna</span
                    ><img
                      class="border rounded-circle img-profile"
                      src="/assets/img/avatars/avatar3.jpeg?h=c5166867f10a4e454b5b2ae8d63268b3"
                  /></a>
                  <div
                    class="dropdown-menu shadow dropdown-menu-end animated--grow-in"
                  >
                    <a class="dropdown-item" href="#"
                      ><i class="fas fa-user fa-sm fa-fw me-2 text-gray-400"></i
                      >&nbsp;Profile</a
                    ><a class="dropdown-item" href="#"
                      ><i class="fas fa-cogs fa-sm fa-fw me-2 text-gray-400"></i
                      >&nbsp;Settings</a
                    ><a class="dropdown-item" href="#"
                      ><i class="fas fa-list fa-sm fa-fw me-2 text-gray-400"></i
                      >&nbsp;Activity log</a
                    >
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#"
                      ><i
                        class="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"
                      ></i
                      >&nbsp;Logout</a
                    >
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div class="container-fluid">
          <h3 class="text-dark mb-4">Team</h3>
        </div>
        <!-- Start: shopping-ecommerce-products -->
        <div class="container mtr-5 mb-2">
          <div class="row">
            <div class="col-md-2 col-12 border">
              <p class="lead text-center mb-0">Max Price:</p>
              <input
                type="number"
                class="form-control text-center"
                value="200"
              /><input
                class="form-range w-100"
                type="range"
                min="0"
                max="200"
              />
              <hr />
              <p class="lead text-center mb-0">Sort By:</p>
              <select class="form-control" name="sort">
                <option value="all" selected="">Price: Low to High</option>
                <option value="reviews">Reviews</option>
                <option value="price_high">Price: High to Low</option>
                <option value="newest">Newest Arrivals</option>
              </select>
              <hr />
              <p class="lead text-center mb-0">Gender:</p>
              <select class="form-control" name="gender">
                <option value="all" selected="">All</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="unisex">Unisex</option>
              </select>
              <hr />
              <p class="lead text-center mb-0">Brand:</p>
              <select class="form-control" name="brand">
                <option value="all" selected="">All</option>
                <option value="Nike">Nike</option>
              </select>
              <hr />
              <p class="lead text-center mb-0">Color:</p>
              <select class="form-control mb-2" name="color">
                <option value="all" selected="">All</option>
                <option value="orange">Orange</option>
              </select>
            </div>
            <div class="col-md-10 col-12">
              <!-- Start: shopping-grid -->
              <div class="shopping-grid">
                <div class="container">
                  <div class="row">
                    <div class="col-md-3 col-sm-6">
                      <div class="product-grid7">
                        <div class="product-image7">
                          <a href="#"
                            ><img
                              class="pic-1"
                              src="https://via.placeholder.com/300" /><img
                              class="pic-2"
                              src="https://via.placeholder.com/150"
                          /></a>
                          <ul class="social">
                            <li><a class="fa fa-search"></a></li>
                            <li><a class="fa fa-shopping-bag"></a></li>
                            <li><a class="fa fa-shopping-cart"></a></li>
                          </ul>
                          <span class="product-new-label">New</span>
                        </div>
                        <div class="product-content">
                          <h3 class="title"><a href="#">Men's Blazer</a></h3>
                          <ul class="rating">
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                          </ul>
                          <div class="price">
                            <span>$15.00</span><span>$20.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                      <div class="product-grid7">
                        <div class="product-image7">
                          <a href="#"
                            ><img src="img-3.jpg" class="pic-1" /><img
                              src="img-4.jpg"
                              class="pic-2"
                          /></a>
                          <ul class="social">
                            <li><a class="fa fa-search"></a></li>
                            <li><a class="fa fa-shopping-bag"></a></li>
                            <li><a class="fa fa-shopping-cart"></a></li>
                          </ul>
                        </div>
                        <div class="product-content">
                          <h3 class="title">
                            <a href="#">Women's White Shirt</a>
                          </h3>
                          <ul class="rating">
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                          </ul>
                          <div class="price"><span>$15.00</span></div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                      <div class="product-grid7">
                        <div class="product-image7">
                          <a href="#"
                            ><img src="img-5.jpg" class="pic-1" /><img
                              src="img-6.jpg"
                              class="pic-2"
                          /></a>
                          <ul class="social">
                            <li><a class="fa fa-search"></a></li>
                            <li><a class="fa fa-shopping-bag"></a></li>
                            <li><a class="fa fa-shopping-cart"></a></li>
                          </ul>
                          <span class="product-new-label">New</span>
                        </div>
                        <div class="product-content">
                          <h3 class="title"><a href="#">Men's Blazer</a></h3>
                          <ul class="rating">
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                          </ul>
                          <div class="price">
                            <span>$15.00</span><span></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                      <div class="product-grid7">
                        <div class="product-image7">
                          <a href="#"
                            ><img src="img-7.jpg" class="pic-1" /><img
                              src="img-8.jpg"
                              class="pic-2"
                          /></a>
                          <ul class="social">
                            <li><a class="fa fa-search"></a></li>
                            <li><a class="fa fa-shopping-bag"></a></li>
                            <li><a class="fa fa-shopping-cart"></a></li>
                          </ul>
                          <span class="product-new-label">New</span>
                        </div>
                        <div class="product-content">
                          <h3 class="title"><a href="#">Men's Blazer</a></h3>
                          <ul class="rating">
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                          </ul>
                          <div class="price">
                            <span>$15.00</span><span>$20.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End: shopping-grid -->
            </div>
          </div>
        </div>
        <!-- End: shopping-ecommerce-products -->
      </div>
      <footer class="bg-white sticky-footer">
        <div class="container my-auto">
          <div class="text-center my-auto copyright">
            <span>Copyright © Brand 2022</span>
          </div>
        </div>
      </footer>
    </div>
    <a class="border rounded d-inline scroll-to-top" href="#page-top"
      ><i class="fas fa-angle-up"></i
    ></a>
  </div>
</template>
