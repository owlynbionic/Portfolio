<template>
  <div>
    <NavbarDefault />
    <div class="container mx-auto px-4 w-full md:w-3/4 lg:w-3/5 xl:w-1/2 my-20">
      <h2 class="text-4xl">All Posts</h2>
      <div v-if="$apollo.loading"></div>

      <div v-else>
        <PostListItem v-for="wp_post in wp_posts" :key="wp_post.ID" :wp_post="wp_post" class="mt-10"></PostListItem>
      </div>
    </div>
    <div id="sb-site">
      <header id="header">
        <div id="logo">
          <h3><a href="index.html">Shane | Engineer</a></h3>
        </div>
        <div id="navbar">
          <ul class="navigation">
            <li class="active"><a href="index.html">
              Projects
            </a></li>
            <li><a href="about.html">
              About
            </a></li>
            <li><a href="contact.html">
              Contact
            </a></li>
          </ul><span class="panel-activation sb-toggle-left navbar-left menu-btn fa fa-bars"></span>
        </div>
      </header>
      <section id="body">
        <div class="flush-top blog-header blog-header-image" style="  background-image: url(images/1/8/0/9/7/180971d97cb6e89ce084fd57b1aac95495053a34-blog-header.jpg);
"></div>
        <div id="breadcrumbs"><span itemprop="title">Projects</span></div>
        <div class="content-wrapper blog-content-list grid pure-g">
          <div id="listing" class="block pure-u-2-3 h-feed">
            <div class="list-item h-entry">
              <div class="list-blog-header"><span class="list-blog-date"><time class="dt-published" datetime="2018-03-25T20:47:31-07:00"><span>25</span><em>Mar</em><em>2018</em></time></span>
                <h4 class="p-name"><a href="blog/power-drawbar-x2-mini-mill.html" class="u-url">Power Drawbar for X2 Mini Mill</a></h4><img alt src="images/6/7/1/1/4/67114f4e192da3f45ab17eb52da61de13a119df9-header-2.jpg" />
              </div>
              <div class="list-blog-padding">
                <div class="p-summary e-content">
                  <p>My goal is to make a CNC mill that is as autonomous as possible. Ideally spitting out parts for me without having to touch it (unlikely). One challenge on the road to that goal is for the mill to be able to automatically switch tools for different types of cutting operations. Before I can even consider building an automatic tool changer I need for my mill to be able to selectively grab and release tools which is a project unto itself. I&#39;ll get in...</p>
                  <p><a href="blog/power-drawbar-x2-mini-mill.html">Continue reading...</a></p>
                </div>
              </div>
            </div>
            <div class="list-item h-entry">
              <div class="list-blog-header"><span class="list-blog-date"><time class="dt-published" datetime="2018-03-21T11:58:59-07:00"><span>21</span><em>Mar</em><em>2018</em></time></span>
                <h4 class="p-name"><a href="blog/cnc-mill-coolant-ring.html" class="u-url">CNC Mill Coolant Spray Ring</a></h4><img alt src="images/d/5/4/6/d/d546d2c897df94739779d7554b8217b4bd3787c9-img1708.jpg" />
              </div>
              <div class="list-blog-padding">
                <div class="p-summary e-content">
                  <p>I&#39;ve been converting my small X2-style manual mill into a full featured CNC machine. There&#39;s quite a few interesting things I hope to share related to that build, including plans, but for now I&#39;m going to warm up with a small recent addition to the project of a flood coolant spray ring. Before we get too deep into things, understand that a lot of these features don&#39;t make a lot of sense on such a small machine. Unless you&#39;re like me and trying to...</p>
                  <p><a href="blog/cnc-mill-coolant-ring.html">Continue reading...</a></p>
                </div>
              </div>
            </div>
            <div class="list-item h-entry">
              <div class="list-blog-header"><span class="list-blog-date"><time class="dt-published" datetime="2016-02-19T19:15:32-08:00"><span>19</span><em>Feb</em><em>2016</em></time></span>
                <h4 class="p-name"><a href="blog/kindle-handlebar-mount.html" class="u-url">Kindle Handlebar Mount</a></h4><img alt src="images/f/9/9/0/f/f990f86e4389067faa5df635fd410b9f6b13070f-img7392.jpg" />
              </div>
              <div class="list-blog-padding">
                <div class="p-summary e-content">
                  <p>This is a laser cut platform which allows you to mount your kindle on your bike handlebars. This is not as stupid as it sounds! If like me you spend coundless hours riding a bike indoors on a stationary trainer you need as many ways as possible to pass the time. It is designed for a kindle paperwhite, though it also works with the standard kindle. </p>
                  <p><a href="blog/kindle-handlebar-mount.html">Continue reading...</a></p>
                </div>
              </div>
            </div>
            <div class="list-item h-entry">
              <div class="list-blog-header"><span class="list-blog-date"><time class="dt-published" datetime="2016-02-15T00:00:00-08:00"><span>15</span><em>Feb</em><em>2016</em></time></span>
                <h4 class="p-name"><a href="blog/how-to-get-hired-at-a-startup-when-you-don-t-know-anyone.html" class="u-url">How to get hired at a startup when you don&#39;t know anyone</a></h4><img alt src="images/4/7/3/1/e/4731ede109512b4eb832e2f6847c9a5b158bc33d-sliced.png" />
              </div>
              <div class="list-blog-padding">
                <div class="p-summary e-content">
                  <p>If you really want to be at a company you can do so much better than a resume. </p>
                  <p>A few years ago I saw an early stage startup that I knew I had to be a part of. The only problem was that it was 900 miles away and I had no connection to them. The startup was <a href="http://www.formlabs.com/">Formlabs</a>. At the time they had 10 employees, and like most startups reduced risk by hiring people they knew. They were also situated equidistant between MIT and Harvard so there was heal...</p>
                  <p><a href="blog/how-to-get-hired-at-a-startup-when-you-don-t-know-anyone.html">Continue reading...</a></p>
                </div>
              </div>
            </div>
            <div class="list-item h-entry">
              <div class="list-blog-header"><span class="list-blog-date"><time class="dt-published" datetime="2011-05-25T00:00:00-07:00"><span>25</span><em>May</em><em>2011</em></time></span>
                <h4 class="p-name"><a href="blog/3d-printer-v1.html" class="u-url">3D Printer V1</a></h4><img alt src="images/1/3/d/6/e/13d6eb45bffa1f95d8a41260a29baf930c50383a-comparison02.png" />
              </div>
              <div class="list-blog-padding">
                <div class="p-summary e-content">
                  <p>A great way to speed up the design process is to have a way to quickly make prototypes of objects to see how they look/feel/behave physically. This is especially true when designing something to be ergonomic. Always wanting to take my design skills and resources to the next level I decided that I needed a rapid prototype machine to &quot;print&quot; objects from 3D models. Unfortunately rapid prototype machines are quite expensive, but it turns out there i...</p>
                  <p><a href="blog/3d-printer-v1.html">Continue reading...</a></p>
                </div>
              </div>
            </div>
            <div class="list-item h-entry">
              <div class="list-blog-header"><span class="list-blog-date"><time class="dt-published" datetime="2011-02-11T00:00:00-08:00"><span>11</span><em>Feb</em><em>2011</em></time></span>
                <h4 class="p-name"><a href="blog/usb-hub-design.html" class="u-url">USB Hub Design</a></h4>
              </div>
              <div class="list-blog-padding">
                <div class="p-summary e-content">
                  <p><img alt="Transformation" src="https://shane.engineer/user/pages/01.blog/usb-hub-design/imageSeq.png" /></p>
                  <p>Sometimes when I&#39;m at the coffee shop I need to use more USB devices than my MacBook can support. I love Apple design and was disappointed to see that there weren&#39;t any aluminum hubs that matched my Macs, and really there didn&#39;t seem to be any that weren&#39;t junk - so I set out to design my own. This is a conceptual 3 port hub that follows Apple&#39;s &quot;unibody&quot; design. The hub has a simple mechanism that allows it to pop up with a touch to store its...</p>
                  <p><a href="blog/usb-hub-design.html">Continue reading...</a></p>
                </div>
              </div>
            </div>
            <div class="list-item h-entry">
              <div class="list-blog-header"><span class="list-blog-date"><time class="dt-published" datetime="2010-12-31T00:00:00-08:00"><span>31</span><em>Dec</em><em>2010</em></time></span>
                <h4 class="p-name"><a href="blog/iphone-game-playing-robot.html" class="u-url">iPhone Game Playing Robot</a></h4><img alt src="images/c/a/9/c/0/ca9c04ea768238803cf561e0cd1170d353efccd2-gamerobotfront.png" />
              </div>
              <div class="list-blog-padding">
                <div class="p-summary e-content">
                  <p>I have been having a lot of fun with an iPhone game called tilt to live. The game is relatively simple to play - you steer a ship around the screen by tilting the phone. You are trying to avoid enemies, pick up power-ups which you can use to kill enimies. It seemed like the type of game that a program could do very well at <em>if</em> you cive a computer the ability to tilt the phone and see what is going on. In this project I built a motion platform which I hope can be used to get a really high score in this or other tilt based games.</p>
                  <p><a href="blog/iphone-game-playing-robot.html">Continue reading...</a></p>
                </div>
              </div>
            </div>
            <div class="list-item h-entry">
              <div class="list-blog-header"><span class="list-blog-date"><time class="dt-published" datetime="2010-04-30T00:00:00-07:00"><span>30</span><em>Apr</em><em>2010</em></time></span>
                <h4 class="p-name"><a href="blog/unnamed-robot.html" class="u-url">Unnamed Robot</a></h4>
              </div>
              <div class="list-blog-padding">
                <div class="p-summary e-content">
                  <p><img alt="Jr. Design Robot" src="https://shane.engineer/user/pages/01.blog/unnamed-robot/meetRobot_03.png" /></p>
                  <p>In the undergraduate BSME program at UNCC, Juniors are required to design and build a robot. I was tasked with designing a simple and lightweight robot to transfer simulated nuclear fuel rods.</p>
                  <p>Weighing in at 1.2lb, it is quite light - most of the weight due to the required batteries. Every detail of the robot was refined to reduce weight, increase integration. Nothing that wasn&#39;t required was used, and every gram of material that could be rem...</p>
                  <p><a href="blog/unnamed-robot.html">Continue reading...</a></p>
                </div>
              </div>
            </div>
            <div class="list-item h-entry">
              <div class="list-blog-header"><span class="list-blog-date"><time class="dt-published" datetime="2009-12-30T00:00:00-08:00"><span>30</span><em>Dec</em><em>2009</em></time></span>
                <h4 class="p-name"><a href="blog/wooden-iphone-case.html" class="u-url">Wooden iPhone Case</a></h4><img alt src="images/9/b/4/8/9/9b4897a2e222b21a5ac9d6bfb407c3d32ee213f3-img3019.jpg" />
              </div>
              <div class="list-blog-padding">
                <div class="p-summary e-content">
                  <p>One of the things that I wanted to get my fiance this Christmas was an iPhone case. Normally cases are made of plastic or sometimes aluminum - I could make an aluminum case but I didn&#39;t think she would be into that, and an injection molder to get a high quality plastic case is not something I have (though I am slowly designing one - though it&#39;s nowhere near close to even being built). I stumbled upon a site that sold wooden cases. At around $130...</p>
                  <p><a href="blog/wooden-iphone-case.html">Continue reading...</a></p>
                </div>
              </div>
            </div>
            <div class="list-item h-entry">
              <div class="list-blog-header"><span class="list-blog-date"><time class="dt-published" datetime="2009-10-31T00:00:00-07:00"><span>31</span><em>Oct</em><em>2009</em></time></span>
                <h4 class="p-name"><a href="blog/diy-engagement-ring.html" class="u-url">DIY Engagement Ring</a></h4><img alt src="images/7/2/7/e/e/727ee1a7f0d4debc7aa62a65ead42cd25a4a6dc8-mainringimage.jpg" />
              </div>
              <div class="list-blog-padding">
                <div class="p-summary e-content">
                  <p>Ever since I <a href="blog/diy-centrifuge-casting.html">cast the lily ring</a> I knew I wanted to make my wife&#39;s engagement ring.</p>
                  <p>Luckily I had some experience casting from other projects. Without that I may have not attempted it because there is so little information on the subject. I hope this article will give enough information that anyone good with their hands can make their own. Note that I only carved the ring, I had a smith cast the ring for me. I would have loved to build all of...</p>
                  <p><a href="blog/diy-engagement-ring.html">Continue reading...</a></p>
                </div>
              </div>
            </div>
            <ul class="pagination">
              <li><a rel="prev" href="index.html">«</a></li>
              <li><a href="index.html">1</a></li>
              <li><span>2</span></li>
              <li><a href="page_3.html">3</a></li>
              <li><a rel="next" href="page_3.html">»</a></li>
            </ul>
          </div>
          <div id="sidebar" class="block size-1-3 pure-u-1-3">
            <div class="sidebar-content"></div>
          </div>
        </div>
      </section>

    </div>

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
import PostListItem from "../blog/PostListItem";
import NavbarDefault from "../../../components/core/navbars/NavbarDefault";

export default {
  name: "Projects",
  components: {
    PostListItem,
    NavbarDefault
  },
  apollo: {
    wp_posts: gql`
    {
      wp_posts(where: {AND: [
        { column: POST_TYPE, operator: EQ, value: "jetpack-portfolio" }
        { column: POST_STATUS, operator: EQ, value: "publish" }
      ]
      }) {
        ID
        post_title
        post_content
        post_date
        post_author
      }
    }
    `
  }
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

  .list-item.h-entry {
    -webkit-text-size-adjust: 100%;
    font-size: 1rem;
    line-height: 1.7;
    color: #444;
    -webkit-font-smoothing: antialiased;
    list-style: none;
    letter-spacing: normal;
    word-spacing: normal;
    text-rendering: auto;
    font-family: "Raleway", "Helvetica", "Tahoma", "Geneva", "Arial", sans-serif;
    font-weight: 400;
    box-sizing: border-box;
    border-bottom: 1px solid #EEEEEE;
    margin-bottom: 3rem;
  }

  .list-blog-header {
    -webkit-text-size-adjust: 100%;
    font-size: 1rem;
    line-height: 1.7;
    color: #444;
    -webkit-font-smoothing: antialiased;
    list-style: none;
    letter-spacing: normal;
    word-spacing: normal;
    text-rendering: auto;
    font-family: "Raleway", "Helvetica", "Tahoma", "Geneva", "Arial", sans-serif;
    font-weight: 400;
    box-sizing: border-box;
    position: relative;
  }

  .list-blog-date {
    -webkit-text-size-adjust: 100%;
    font-size: 1rem;
    line-height: 1.7;
    color: #444;
    -webkit-font-smoothing: antialiased;
    list-style: none;
    letter-spacing: normal;
    word-spacing: normal;
    text-rendering: auto;
    font-family: "Raleway", "Helvetica", "Tahoma", "Geneva", "Arial", sans-serif;
    font-weight: 400;
    box-sizing: border-box;
    margin-left: 20px;
    float: right;
    text-align: center;
  }

  .dt-published {
    -webkit-text-size-adjust: 100%;
    font-size: 1rem;
    line-height: 1.7;
    color: #444;
    -webkit-font-smoothing: antialiased;
    list-style: none;
    letter-spacing: normal;
    word-spacing: normal;
    text-rendering: auto;
    font-family: "Raleway", "Helvetica", "Tahoma", "Geneva", "Arial", sans-serif;
    font-weight: 400;
    text-align: center;
    box-sizing: border-box;
  }

  span, time span {
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

  time em {
    -webkit-text-size-adjust: 100%;
    font-size: 1rem;
    line-height: 1.7;
    color: #444;
    -webkit-font-smoothing: antialiased;
    list-style: none;
    letter-spacing: normal;
    word-spacing: normal;
    text-rendering: auto;
    font-family: "Raleway", "Helvetica", "Tahoma", "Geneva", "Arial", sans-serif;
    font-weight: 400;
    text-align: center;
    box-sizing: border-box;
    display: block;
    border-top: 1px solid #EEEEEE;
    font-style: normal;
    text-transform: uppercase;
  }

  .p-name {
    -webkit-text-size-adjust: 100%;
    line-height: 1.7;
    color: #444;
    -webkit-font-smoothing: antialiased;
    list-style: none;
    word-spacing: normal;
    box-sizing: border-box;
    margin: 0.85rem 0 1.7rem 0;
    font-size: 1.75rem;
    font-family: "Montserrat", "Helvetica", "Tahoma", "Geneva", "Arial", sans-serif;
    font-weight: 400;
    text-rendering: optimizeLegibility;
    letter-spacing: -0px;
    margin-bottom: 0.5rem;
  }

  .u-url {
    -webkit-text-size-adjust: 100%;
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
    list-style: none;
    word-spacing: normal;
    font-size: 1.75rem;
    font-family: "Montserrat", "Helvetica", "Tahoma", "Geneva", "Arial", sans-serif;
    font-weight: 400;
    text-rendering: optimizeLegibility;
    letter-spacing: -0px;
    box-sizing: border-box;
    background: transparent;
    text-decoration: none;
    color: #444;
  }
</style>

