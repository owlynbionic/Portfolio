<template>
  <div>
    <NavbarDefault />
    <section id="body">
      <div id="breadcrumbs"><span itemprop="title">Projects</span></div>

      <div class="container mx-auto px-4 w-full md:w-3/4 lg:w-3/5 xl:w-1/2 my-20">
        <div v-if="$apollo.loading"></div>

        <div v-else>
          <div class="content-wrapper blog-content-list grid pure-g">

            <div id="listing" class="block pure-u-2-3 h-feed">
              <ProjectList/>
            </div>
          </div>

        </div>
      </div>
    </section>


    <div class="row g-0">
      <div class="col">
        <div class="container">
          <h1 class="my-4">Featured Projects<br></h1>
          <div class="row g-0">
            <div class="col-md-8"><img class="img-fluid" src="http://placehold.it/750x500" alt="Alt Text"></div>
            <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                  <h3 class="my-3">Project Description</h3>
                  <h6 class="text-muted card-subtitle mb-2">Subtitle</h6>
                  <p class="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                </div>
                <div class="card-footer"><a href="#">Link</a><a href="#">Link</a></div>
              </div>
            </div>
          </div>
          <hr>
          <h3 class="my-4">Recent Projects<br></h3>
          <div class="row">
            <div class="col-sm-6 col-md-3 mb-4"><a href="#"><img class="img-fluid" src="http://placehold.it/500x300"></a></div>
            <div class="col-sm-6 col-md-3 mb-4"><a href="#"><img class="img-fluid" src="http://placehold.it/500x300"></a></div>
            <div class="col-sm-6 col-md-3 mb-4"><a href="#"><img class="img-fluid" src="http://placehold.it/500x300"></a></div>
            <div class="col-sm-6 col-md-3 mb-4"><a href="#"><img class="img-fluid" src="http://placehold.it/500x300"></a></div>
          </div>
          <hr>
        </div>
      </div>
      <div class="col-12">
        <div class="container">
          <section class="pt-2 mt-5">
            <div class="d-flex align-items-center">
              <h1 class="flex-grow-1">Projects</h1><a class="flex-grow-1 a-filter" id="sb1-toggle" href="#0">Filter</a>
            </div>
            <div class="row g-0 mx-auto home-gallery bg-white">
              <div class="col">
                <div class="row g-0 filtr-container">
                  <div class="col-lg-6 mb-4 filtr-item">
                    <div class="card h-100"><a href="#"><img class="img-fluid" src="bench-hollowknight.jpg"></a>
                      <div class="card-body">
                        <h4 class="card-title">Project One</h4>
                        <h6 class="text-muted card-subtitle mb-2">Subtitle</h6>
                        <p class="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                        <div class="d-flex card-text"><a href="#">Read more</a><span class="d-flex align-items-center ms-auto"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" class="bi bi-suit-heart d-flex">
                                                        <path fill-rule="evenodd" d="M8 6.236l.894-1.789c.222-.443.607-1.08 1.152-1.595C10.582 2.345 11.224 2 12 2c1.676 0 3 1.326 3 2.92 0 1.211-.554 2.066-1.868 3.37-.337.334-.721.695-1.146 1.093C10.878 10.423 9.5 11.717 8 13.447c-1.5-1.73-2.878-3.024-3.986-4.064-.425-.398-.81-.76-1.146-1.093C1.554 6.986 1 6.131 1 4.92 1 3.326 2.324 2 4 2c.776 0 1.418.345 1.954.852.545.515.93 1.152 1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"></path>
                                                    </svg></span></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 mb-4 filtr-item">
                    <div class="card h-100"><a href="#"><img class="img-fluid" src="http://placehold.it/700x400"></a>
                      <div class="card-body">
                        <h4 class="card-title">Project One</h4>
                        <h6 class="text-muted card-subtitle mb-2">Subtitle</h6>
                        <p class="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                        <div class="d-flex card-text"><a href="#">Read more</a><span class="d-flex align-items-center ms-auto"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" class="bi bi-suit-heart d-flex">
                                                        <path fill-rule="evenodd" d="M8 6.236l.894-1.789c.222-.443.607-1.08 1.152-1.595C10.582 2.345 11.224 2 12 2c1.676 0 3 1.326 3 2.92 0 1.211-.554 2.066-1.868 3.37-.337.334-.721.695-1.146 1.093C10.878 10.423 9.5 11.717 8 13.447c-1.5-1.73-2.878-3.024-3.986-4.064-.425-.398-.81-.76-1.146-1.093C1.554 6.986 1 6.131 1 4.92 1 3.326 2.324 2 4 2c.776 0 1.418.345 1.954.852.545.515.93 1.152 1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"></path>
                                                    </svg></span></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 mb-4 filtr-item">
                    <div class="card h-100"><a href="#"><img class="img-fluid" src="http://placehold.it/700x400"></a>
                      <div class="card-body">
                        <h4 class="card-title">Project One</h4>
                        <h6 class="text-muted card-subtitle mb-2">Subtitle</h6>
                        <p class="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                        <div class="d-flex card-text"><a href="#">Read more</a><span class="d-flex align-items-center ms-auto"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" class="bi bi-suit-heart d-flex">
                                                        <path fill-rule="evenodd" d="M8 6.236l.894-1.789c.222-.443.607-1.08 1.152-1.595C10.582 2.345 11.224 2 12 2c1.676 0 3 1.326 3 2.92 0 1.211-.554 2.066-1.868 3.37-.337.334-.721.695-1.146 1.093C10.878 10.423 9.5 11.717 8 13.447c-1.5-1.73-2.878-3.024-3.986-4.064-.425-.398-.81-.76-1.146-1.093C1.554 6.986 1 6.131 1 4.92 1 3.326 2.324 2 4 2c.776 0 1.418.345 1.954.852.545.515.93 1.152 1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"></path>
                                                    </svg></span></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 mb-4 filtr-item">
                    <div class="card h-100"><a href="#"><img class="img-fluid" src="http://placehold.it/700x400"></a>
                      <div class="card-body">
                        <h4 class="card-title">Project One</h4>
                        <h6 class="text-muted card-subtitle mb-2">Subtitle</h6>
                        <p class="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                        <div class="d-flex card-text"><a href="#">Read more</a><span class="d-flex align-items-center ms-auto"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" class="bi bi-suit-heart d-flex">
                                                        <path fill-rule="evenodd" d="M8 6.236l.894-1.789c.222-.443.607-1.08 1.152-1.595C10.582 2.345 11.224 2 12 2c1.676 0 3 1.326 3 2.92 0 1.211-.554 2.066-1.868 3.37-.337.334-.721.695-1.146 1.093C10.878 10.423 9.5 11.717 8 13.447c-1.5-1.73-2.878-3.024-3.986-4.064-.425-.398-.81-.76-1.146-1.093C1.554 6.986 1 6.131 1 4.92 1 3.326 2.324 2 4 2c.776 0 1.418.345 1.954.852.545.515.93 1.152 1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"></path>
                                                    </svg></span></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 mb-4 filtr-item">
                    <div class="card h-100"><a href="#"><img class="img-fluid" src="http://placehold.it/700x400"></a>
                      <div class="card-body">
                        <h4 class="card-title">Project One</h4>
                        <h6 class="text-muted card-subtitle mb-2">Subtitle</h6>
                        <p class="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                        <div class="d-flex card-text"><a href="#">Read more</a><span class="d-flex align-items-center ms-auto"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" class="bi bi-suit-heart d-flex">
                                                        <path fill-rule="evenodd" d="M8 6.236l.894-1.789c.222-.443.607-1.08 1.152-1.595C10.582 2.345 11.224 2 12 2c1.676 0 3 1.326 3 2.92 0 1.211-.554 2.066-1.868 3.37-.337.334-.721.695-1.146 1.093C10.878 10.423 9.5 11.717 8 13.447c-1.5-1.73-2.878-3.024-3.986-4.064-.425-.398-.81-.76-1.146-1.093C1.554 6.986 1 6.131 1 4.92 1 3.326 2.324 2 4 2c.776 0 1.418.345 1.954.852.545.515.93 1.152 1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"></path>
                                                    </svg></span></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 mb-4 filtr-item">
                    <div class="card h-100"><a href="#"><img class="img-fluid" src="http://placehold.it/700x400"></a>
                      <div class="card-body">
                        <h4 class="card-title">Project One</h4>
                        <h6 class="text-muted card-subtitle mb-2">Subtitle</h6>
                        <p class="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                        <div class="d-flex card-text"><a href="#">Read more</a><span class="d-flex align-items-center ms-auto"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" class="bi bi-suit-heart d-flex">
                                                        <path fill-rule="evenodd" d="M8 6.236l.894-1.789c.222-.443.607-1.08 1.152-1.595C10.582 2.345 11.224 2 12 2c1.676 0 3 1.326 3 2.92 0 1.211-.554 2.066-1.868 3.37-.337.334-.721.695-1.146 1.093C10.878 10.423 9.5 11.717 8 13.447c-1.5-1.73-2.878-3.024-3.986-4.064-.425-.398-.81-.76-1.146-1.093C1.554 6.986 1 6.131 1 4.92 1 3.326 2.324 2 4 2c.776 0 1.418.345 1.954.852.545.515.93 1.152 1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"></path>
                                                    </svg></span></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 mb-4 filtr-item">
                    <div class="card h-100"><a href="#"><img class="img-fluid" src="http://placehold.it/700x400"></a>
                      <div class="card-body">
                        <h4 class="card-title">Project One</h4>
                        <h6 class="text-muted card-subtitle mb-2">Subtitle</h6>
                        <p class="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                        <div class="d-flex card-text"><a href="#">Read more</a><span class="d-flex align-items-center ms-auto"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" class="bi bi-suit-heart d-flex">
                                                        <path fill-rule="evenodd" d="M8 6.236l.894-1.789c.222-.443.607-1.08 1.152-1.595C10.582 2.345 11.224 2 12 2c1.676 0 3 1.326 3 2.92 0 1.211-.554 2.066-1.868 3.37-.337.334-.721.695-1.146 1.093C10.878 10.423 9.5 11.717 8 13.447c-1.5-1.73-2.878-3.024-3.986-4.064-.425-.398-.81-.76-1.146-1.093C1.554 6.986 1 6.131 1 4.92 1 3.326 2.324 2 4 2c.776 0 1.418.345 1.954.852.545.515.93 1.152 1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"></path>
                                                    </svg></span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-3 col-md-3">
                <div class="b-nav menu closed">
                  <div class="modal fade" role="dialog" tabindex="-1" id="alertModal">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-body">
                          <div class="embed-responsive">
                            <ul id="myTab-1" class="nav nav-tabs nav-pills with-arrow lined flex-column flex-sm-row text-center">
                              <li><a class="nav-link text-uppercase fw-bold">Product Categories</a></li>
                            </ul>
                            <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-1" checked=""><label class="form-check-label" for="formCheck-1">All</label></div>
                            <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-2"><label class="form-check-label" for="formCheck-2">Web</label></div>
                            <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-3"><label class="form-check-label" for="formCheck-3">Data Science</label></div>
                          </div>
                        </div>
                        <div class="modal-footer"><button class="btn btn-light" type="button" data-bs-dismiss="modal">Close</button></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div class="col">
        <div class="container">
          <h1 class="my-4">One Column Portfolio Layout with border</h1>
          <div class="row">
            <div class="col-md-7 mb-4">
              <div class="card h-100"><a href="#"><img class="img-fluid" src="http://placehold.it/700x300"></a></div>
            </div>
            <div class="col-md-5 mb-4">
              <div class="card h-100">
                <div class="card-body">
                  <h4 class="card-title">Project One</h4>
                  <h6 class="text-muted card-subtitle mb-2">Subtitle</h6>
                  <p class="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p><button class="btn btn-primary" type="button">View Project<br></button>
                </div>
              </div>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-md-7 mb-4">
              <div class="card h-100"><a href="#"><img class="img-fluid" src="http://placehold.it/700x300"></a></div>
            </div>
            <div class="col-md-5 mb-4">
              <div class="card h-100">
                <div class="card-body">
                  <h4 class="card-title">Project Two</h4>
                  <h6 class="text-muted card-subtitle mb-2">Subtitle</h6>
                  <p class="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p><button class="btn btn-primary" type="button">View Project<br></button>
                </div>
              </div>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-md-7 mb-4">
              <div class="card h-100"><a href="#"><img class="img-fluid" src="http://placehold.it/700x300"></a></div>
            </div>
            <div class="col-md-5 mb-4">
              <div class="card h-100">
                <div class="card-body">
                  <h4 class="card-title">Project Three</h4>
                  <h6 class="text-muted card-subtitle mb-2">Subtitle</h6>
                  <p class="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p><button class="btn btn-primary" type="button">View Project<br></button>
                </div>
              </div>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-md-7 mb-4">
              <div class="card h-100"><a href="#"><img class="img-fluid" src="http://placehold.it/700x300"></a></div>
            </div>
            <div class="col-md-5 mb-4">
              <div class="card h-100">
                <div class="card-body">
                  <h4 class="card-title">Project Four</h4>
                  <h6 class="text-muted card-subtitle mb-2">Subtitle</h6>
                  <p class="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p><button class="btn btn-primary" type="button">View Project<br></button>
                </div>
              </div>
            </div>
          </div>
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import ProjectList from "../portfolio/ProjectList";
import NavbarDefault from "../../../components/core/navbars/NavbarDefault";

export default {
  name: "Projects",
  components: {
    ProjectList,
    NavbarDefault
  },
};
</script>

<style scoped>
  /*@import "../../../../../resources/css/bootstrap.min.css";*/
  @import "../../../../../resources/css/styles.min.css";

  #body {
    -webkit-text-size-adjust: 100%;
    font-size: 1rem;
    line-height: 1.7;
    color: #444;
    -webkit-font-smoothing: antialiased;
    font-family: "Raleway", "Helvetica", "Tahoma", "Geneva", "Arial", sans-serif;
    font-weight: 400;
    box-sizing: border-box;
    display: block;
    background: #fff;
    padding-top: 8rem;
    padding-bottom: 11rem;
    transition: all 0.5s ease;
    padding-left: 7rem;
    padding-right: 7rem;
  }

  .content-wrapper.blog-content-list.grid.pure-g {
    -webkit-text-size-adjust: 100%;
    font-size: 1rem;
    line-height: 1.7;
    color: #444;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    letter-spacing: -.31em;
    text-rendering: optimizespeed;
    display: flex;
    flex-flow: row;
    list-style: none;
    margin: 0;
    padding: 0;
    font-family: "Raleway", "Helvetica", "Tahoma", "Geneva", "Arial", sans-serif;
    font-weight: 400;
    padding-left: 7rem;
    padding-right: 7rem;
  }

  #listing {
    -webkit-text-size-adjust: 100%;
    font-size: 1rem;
    line-height: 1.7;
    color: #444;
    -webkit-font-smoothing: antialiased;
    list-style: none;
    box-sizing: border-box;
    width: 66.6667%;
    display: inline-block;
    zoom: 1;
    letter-spacing: normal;
    word-spacing: normal;
    vertical-align: top;
    text-rendering: auto;
    -webkit-box-flex: 1;
    flex: 1;
    min-width: 0;
    min-height: 0;
    font-family: "Raleway", "Helvetica", "Tahoma", "Geneva", "Arial", sans-serif;
    font-weight: 400;
  }

  span {
    -webkit-text-size-adjust: 100%;
    color: #444;
    -webkit-font-smoothing: antialiased;
    list-style: none;
    letter-spacing: normal;
    word-spacing: normal;
    text-rendering: auto;
    font-family: "Raleway", "Helvetica", "Tahoma", "Geneva", "Arial", sans-serif;
    text-align: center;
    box-sizing: border-box;
    display: block;
    font-size: 1.75rem;
    font-weight: 600;
    line-height: 110%;
  }

</style>

