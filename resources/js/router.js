import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      // the 404 route, when none of the above matches
      path: "/",
      redirect: "posts",
      component: () => import("./views/pages/blog/PostList"),
      children: [
        {
          path:'/posts',
          name: 'wp_posts',
          component: () => import("./views/pages/blog/PostList")
        },
        {
          path: '/post/:id',
          name: 'wp_post',
          component: () => import("./views/pages/blog/Post")
        },
        {
          path: '/authors/:id',
          name: 'wp_author',
          component: () => import("./AuthorPostList")
        },
      ],
    },

    {
      path: "/home",
      component: () => import("./views/pages/home/Home"),
      children: [
        { path: "/home", name: "home",
          component: () => import("./views/pages/home/Home")
        },
      ]
    },
    {
      path: "/about",
      component: () => import("./views/pages/about/About"),
      children: [
        { path: "/about", name: "about",
          component: () => import("./views/pages/about/About")
        },
      ]
    },
    {
      path: "/blog",
      component: () => import("./views/pages/blog/Blog"),
      children: [
        { path: "/blog", name: "blog",
          component: () => import("./views/pages/blog/Blog")
        },
      ]
    },
    {
      path: "/projects",
      component: () => import("./views/pages/portfolio/Portfolio"),
      children: [
        { path: "/portfolio", name: "projects",
          component: () => import("./views/pages/portfolio/Portfolio")
        },
        {
          path: '/projects/:id',
          name: 'project',
          component: () => import("./views/pages/blog/Post")
        },
      ]
    },
    {
      path: "/music",
      component: () => import("./views/pages/music/Music"),
      children: [
        { path: "/music", name: "music",
          component: () => import("./views/pages/music/Music")
        },
      ]
    },
    {
      path: "/news",
      component: () => import("./views/pages/news/News"),
      children: [
        { path: "/news", name: "news",
          component: () => import("./views/pages/news/News")
        },
      ]
    },
    {
      path: "/game",
      component: () => import("./views/pages/game/Game"),
      children: [
        { path: "/game", name: "game",
          component: () => import("./views/pages/game/Game")
        },
      ]
    },
    {
      path: "/services",
      component: () => import("./views/pages/shop/Shop"),
      children: [
        { path: "/services", name: "services",
          component: () => import("./views/pages/shop/Shop")
        },
      ]
    },
    {
      path: "/board",
      component: () => import("./Board"),
      children: [
        { path: "/board", name: "board",
          component: () => import("./Board")
        },
      ]
    },
    {
      name: "login",
      path: "/login",
      component: () => import("./Login")
    },
    {
      name: "register",
      path: "/register",
      component: () => import("./Register")
    },
    // {
    //   path: "/",
    //   component: () => import("./Login"),
    //   children: [
    //     {
    //       name: "login",
    //       path: "/login",
    //       component: () => import("./Login")
    //     },
    //     {
    //       name: "register",
    //       path: "/register",
    //       component: () => import("./Register")
    //     }
    //   ]
    // },
    // {
    //   path: "/dashboard",
    //   redirect: "/dashboard",
    //   component: () => import("./views/pages/Dashboard.vue"),
    //   children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: () => import("./views/pages/Dashboard.vue")
        },
        {
          path: "/dashboard/builder",
          name: "builder",
          component: () => import("./views/pages/Builder.vue")
        },
        // {
          // path: "/vue-bootstrap",
          // name: "vue-bootstrap",
          // component: () =>
          //   import("./views/vue-bootstrap/VueBootstrap.vue"),
          // children: [
            {
              path: "/dashboard/vue-bootstrap/alert",
              name: "vue-bootstrap-alert",
              component: () => import("./views/vue-bootstrap/Alert.vue")
            },
            {
              path: "/dashboard/vue-bootstrap/badge",
              name: "vue-bootstrap-badge",
              component: () => import("./views/vue-bootstrap/Badge.vue")
            },
            {
              path: "/dashboard/vue-bootstrap/button",
              name: "vue-bootstrap-button",
              component: () => import("./views/vue-bootstrap/Button.vue")
            },
            {
              path: "/dashboard/vue-bootstrap/button-group",
              name: "vue-bootstrap-button-group",
              component: () =>
                import("./views/vue-bootstrap/ButtonGroup.vue")
            },
            {
              path: "/dashboard/vue-bootstrap/button-toolbar",
              name: "vue-bootstrap-button-toolbar",
              component: () =>
                import("./views/vue-bootstrap/ButtonToolbar.vue")
            },
            {
              path: "/dashboard/vue-bootstrap/card",
              name: "vue-bootstrap-card",
              component: () => import("./views/vue-bootstrap/Card.vue")
            },
            {
              path: "/dashboard/vue-bootstrap/carousel",
              name: "vue-bootstrap-carousel",
              component: () => import("./views/vue-bootstrap/Carousel.vue")
            },
            {
              path: "/dashboard/vue-bootstrap/collapse",
              name: "vue-bootstrap-collapse",
              component: () => import("./views/vue-bootstrap/Collapse.vue")
            },
            {
              path: "/dashboard/vue-bootstrap/dropdown",
              name: "vue-bootstrap-dropdown",
              component: () => import("./views/vue-bootstrap/Dropdown.vue")
            },
            {
              path: "/dashboard/vue-bootstrap/embed",
              name: "vue-bootstrap-embed",
              component: () => import("./views/vue-bootstrap/Embed.vue")
            },
            {
              path: "/dashboard/vue-bootstrap/form",
              name: "vue-bootstrap-form",
              component: () => import("./views/vue-bootstrap/Form.vue")
            },
            {
              path: "/dashboard/vue-bootstrap/form-checkbox",
              name: "vue-bootstrap-form-checkbox",
              component: () =>
                import("./views/vue-bootstrap/FormCheckbox.vue")
            },
            {
              path: "/dashboard/vue-bootstrap/form-file",
              name: "vue-bootstrap-form-file",
              component: () => import("./views/vue-bootstrap/FormFile.vue")
            },
            {
              path: "/dashboard/vue-bootstrap/form-group",
              name: "vue-bootstrap-form-group",
              component: () =>
                import("./views/vue-bootstrap/FormGroup.vue")
            },
            {
              path: "/dashboard/vue-bootstrap/form-input",
              name: "vue-bootstrap-form-input",
              component: () =>
                import("./views/vue-bootstrap/FormInput.vue")
            },
            {
              path: "/dashboard/vue-bootstrap/form-radio",
              name: "vue-bootstrap-form-radio",
              component: () =>
                import("./views/vue-bootstrap/FormRadio.vue")
            },
            {
              path: "/dashboard/vue-bootstrap/form-select",
              name: "vue-bootstrap-form-select",
              component: () =>
                import("./views/vue-bootstrap/FormSelect.vue")
            },
            {
              path: "/dashboard/vue-bootstrap/form-textarea",
              name: "vue-bootstrap-form-textarea",
              component: () =>
                import("./views/vue-bootstrap/FormTextarea.vue")
            },
            {
              path: "/dashboard/vue-bootstrap/image",
              name: "vue-bootstrap-image",
              component: () => import("./views/vue-bootstrap/Image.vue")
            },
            {
              path: "/dashboard/vue-bootstrap/input-group",
              name: "vue-bootstrap-input-group",
              component: () =>
                import("./views/vue-bootstrap/InputGroup.vue")
            },
            {
              path: "/dashboard/vue-bootstrap/jumbotron",
              name: "vue-bootstrap-jumbotron",
              component: () =>
                import("./views/vue-bootstrap/Jumbotron.vue")
            },
            {
              path: "/dashboard/vue-bootstrap/layout-grid-system",
              name: "vue-bootstrap-layout-grid-system",
              component: () =>
                import("./views/vue-bootstrap/LayoutGridSystem.vue")
            },
            {
              path: "/dashboard/vue-bootstrap/link",
              name: "vue-bootstrap-link",
              component: () => import("./views/vue-bootstrap/Link.vue")
            },
            {
              path: "/dashboard/vue-bootstrap/list-group",
              name: "vue-bootstrap-list-group",
              component: () =>
                import("./views/vue-bootstrap/ListGroup.vue")
            },
            {
              path: "/dashboard/vue-bootstrap/media",
              name: "vue-bootstrap-media",
              component: () => import("./views/vue-bootstrap/Media.vue")
            },
            {
              path: "/dashboard/vue-bootstrap/modal",
              name: "vue-bootstrap-modal",
              component: () => import("./views/vue-bootstrap/Modal.vue")
            },
            {
              path: "/dashboard/vue-bootstrap/nav",
              name: "vue-bootstrap-nav",
              component: () => import("./views/vue-bootstrap/Nav.vue")
            },
            {
              path: "/dashboard/vue-bootstrap/navbar",
              name: "vue-bootstrap-navbar",
              component: () => import("./views/vue-bootstrap/Navbar.vue")
            },
            {
              path: "/dashboard/vue-bootstrap/pagination",
              name: "vue-bootstrap-pagination",
              component: () =>
                import("./views/vue-bootstrap/Pagination.vue")
            },
            {
              path: "/dashboard/vue-bootstrap/pagination-nav",
              name: "vue-bootstrap-pagination-nav",
              component: () =>
                import("./views/vue-bootstrap/PaginationNav.vue")
            },
            {
              path: "/dashboard/vue-bootstrap/notify-popover",
              name: "vue-bootstrap-popover",
              component: () => import("./views/vue-bootstrap/Popover.vue")
            },
            {
              path: "/dashboard/vue-bootstrap/notify-toasts",
              name: "vue-bootstrap-toasts",
              component: () => import("./views/vue-bootstrap/Toasts.vue")
            },
            {
              path: "/dashboard/vue-bootstrap/notify-tooltip",
              name: "vue-bootstrap-tooltip",
              component: () => import("./views/vue-bootstrap/Tooltip.vue")
            },
            {
              path: "/dashboard/vue-bootstrap/progress",
              name: "vue-bootstrap-progress",
              component: () => import("./views/vue-bootstrap/Progress.vue")
            },
            {
              path: "/dashboard/vue-bootstrap/progress-spinner",
              name: "vue-bootstrap-spinner",
              component: () => import("./views/vue-bootstrap/Spinner.vue")
            },
            {
              path: "/dashboard/vue-bootstrap/table",
              name: "vue-bootstrap-table",
              component: () => import("./views/vue-bootstrap/Table.vue")
            },
            {
              path: "/dashboard/vue-bootstrap/tabs",
              name: "vue-bootstrap-tabs",
              component: () => import("./views/vue-bootstrap/Tabs.vue")
            },
          // ]
        // },
        // {
        //   path: "/vuetify",
        //   name: "vuetify",
        //   component: () => import("./views/vuetify/Vuetify.vue"),
        //   children: [
            {
              path: "/dashboard/vuetify/alerts",
              name: "vuetify-alerts",
              component: () => import("./views/vuetify/Alerts.vue")
            },
            {
              path: "/dashboard/vuetify/avatars",
              name: "vuetify-avatars",
              component: () => import("./views/vuetify/Avatars.vue")
            },
            {
              path: "/dashboard/vuetify/badges",
              name: "vuetify-badges",
              component: () => import("./views/vuetify/Badges.vue")
            },
            {
              path: "/dashboard/vuetify/buttons",
              name: "vuetify-buttons",
              component: () => import("./views/vuetify/Buttons.vue")
            },
            {
              path: "/dashboard/vuetify/calendars",
              name: "vuetify-calendars",
              component: () => import("./views/vuetify/Calendars.vue")
            },
            {
              path: "/dashboard/vuetify/cards",
              name: "vuetify-cards",
              component: () => import("./views/vuetify/Cards.vue")
            },
            {
              path: "/dashboard/vuetify/chips",
              name: "vuetify-chips",
              component: () => import("./views/vuetify/Chips.vue")
            },
            {
              path: "/dashboard/vuetify/dialog",
              name: "vuetify-dialog",
              component: () => import("./views/vuetify/Dialog.vue")
            },
            {
              path: "/dashboard/vuetify/forms-autocompletes",
              name: "vuetify-autocompletes",
              component: () =>
                import("./views/vuetify/forms/Autocompletes.vue")
            },
            {
              path: "/dashboard/vuetify/forms-file-inputs",
              name: "vuetify-file-inputs",
              component: () =>
                import("./views/vuetify/forms/FileInputs.vue")
            },
            {
              path: "/dashboard/vuetify/forms",
              name: "vuetify-forms",
              component: () => import("./views/vuetify/forms/Forms.vue")
            },
            {
              path: "/dashboard/vuetify/forms-selection-controls",
              name: "vuetify-selection-controls",
              component: () =>
                import("./views/vuetify/forms/SelectionControls.vue")
            },
            {
              path: "/dashboard/vuetify/forms-selects",
              name: "vuetify-selects",
              component: () => import("./views/vuetify/forms/Selects.vue")
            },
            {
              path: "/dashboard/vuetify/forms-textareas",
              name: "vuetify-textareas",
              component: () =>
                import("./views/vuetify/forms/Textareas.vue")
            },
            {
              path: "/dashboard/vuetify/forms-text-fields",
              name: "vuetify-text-fields",
              component: () =>
                import("./views/vuetify/forms/TextFields.vue")
            },
            {
              path: "/dashboard/vuetify/tables-simple-tables",
              name: "vuetify-simple-tables",
              component: () =>
                import("./views/vuetify/tables/SimpleTables.vue")
            },
            {
              path: "/dashboard/vuetify/tables-data-tables",
              name: "vuetify-data-tables",
              component: () =>
                import("./views/vuetify/tables/DataTables.vue")
            },
            {
              path: "/dashboard/vuetify/tabs",
              name: "vuetify-tabs",
              component: () => import("./views/vuetify/Tabs.vue")
            },
            {
              path: "/dashboard/vuetify/timelines",
              name: "vuetify-timelines",
              component: () => import("./views/vuetify/Timelines.vue")
            },
            {
              path: "/dashboard/vuetify/tooltips",
              name: "vuetify-tooltips",
              component: () => import("./views/vuetify/Tooltips.vue")
            },
            {
              path: "/dashboard/vuetify/treeview",
              name: "vuetify-treeview",
              component: () => import("./views/vuetify/Treeview.vue")
            },
        //   ]
        // },
        // {
        //   path: "/custom-wizard",
        //   name: "wizard",
        //   component: () => import("./views/wizard/Wizard.vue"),
        //   children: [
            {
              path: "/dashboard/custom-wizard/wizard-1",
              name: "wizard-1",
              component: () => import("./views/wizard/Wizard-1.vue")
            },
            {
              path: "/dashboard/custom-wizard/wizard-2",
              name: "wizard-2",
              component: () => import("./views/wizard/Wizard-2.vue")
            },
            {
              path: "/dashboard/custom-wizard/wizard-3",
              name: "wizard-3",
              component: () => import("./views/wizard/Wizard-3.vue")
            },
            {
              path: "/dashboard/custom-wizard/wizard-4",
              name: "wizard-4",
              component: () => import("./views/wizard/Wizard-4.vue")
            },
        //   ]
        // },
        // {
          // path: "/custom-plugins",
          // name: "plugins",
          // component: () => import("./views/plugins/Plugins.vue"),
          // children: [
            {
              path: "/dashboard/custom-plugins/cropper",
              name: "cropper",
              component: () => import("./views/plugins/Cropper.vue")
            },
            {
              path: "/dashboard/custom-plugins/treeselect",
              name: "treeselect",
              component: () => import("./views/plugins/Treeselect.vue")
            },
        //   ]
        // },
        // {
        //   path: "/profile",
        //   name: "profile",
        //   component: () => import("./views/profile/Profile.vue"),
        //   children: [
            {
              path: "/dashboard/profile/profile-1",
              name: "profile-1",
              component: () => import("./views/profile/Profile-1.vue")
            },
            {
              path: "/dashboard/profile/profile-2",
              name: "profile-2",
              component: () => import("./views/profile/Profile-2.vue")
            },
            {
              path: "/dashboard/profile/profile-3",
              name: "profile-3",
              component: () => import("./views/profile/Profile-3.vue")
            },
            {
              path: "/dashboard/profile/profile-4",
              name: "profile-4",
              component: () => import("./views/profile/Profile-4.vue")
            },
        //   ]
        // },
    //   ]
    // },
    // {
    //   path: "/custom-error",
    //   name: "error",
    //   component: () => import("./views/error/Error.vue"),
    //   children: [
        {
          path: "/dashboard/custom-error/error-1",
          name: "error-1",
          component: () => import("./views/error/Error-1.vue")
        },
        {
          path: "/dashboard/custom-error/error-2",
          name: "error-2",
          component: () => import("./views/error/Error-2.vue")
        },
        {
          path: "/dashboard/custom-error/error-3",
          name: "error-3",
          component: () => import("./views/error/Error-3.vue")
        },
        {
          path: "/dashboard/custom-error/error-4",
          name: "error-4",
          component: () => import("./views/error/Error-4.vue")
        },
        {
          path: "/dashboard/custom-error/error-5",
          name: "error-5",
          component: () => import("./views/error/Error-5.vue")
        },
        {
          path: "/dashboard/custom-error/error-6",
          name: "error-6",
          component: () => import("./views/error/Error-6.vue")
        },
    //   ]
    // },
    // {
    //   path: "/",
    //   component: () => import("./views/auth/login_pages/Login-1.vue"),
    //   children: [
    //     {
    //       name: "login",
    //       path: "/login",
    //       component: () => import("./views/auth/login_pages/Login-1.vue")
    //     },
    //     {
    //       name: "register",
    //       path: "/register",
    //       component: () => import("./views/auth/login_pages/Login-1.vue")
    //     }
    //   ]
    // },
    {
      path: "*",
      redirect: "/404"
    },
    {
      // the 404 route, when none of the above matches
      path: "/404",
      name: "404",
      component: () => import("./views/error/Error-1.vue")
    }
  ]
});
