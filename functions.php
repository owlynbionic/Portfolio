<?php
/**
 * portfolio-v1 functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package portfolio-v1
 */

if ( ! function_exists( 'portfolio_v1_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function portfolio_v1_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on portfolio-v1, use a find and replace
		 * to change 'portfolio-v1' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'portfolio-v1', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'menu-1' => esc_html__( 'Primary', 'portfolio-v1' ),
		) );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		// Set up the WordPress core custom background feature.
		add_theme_support( 'custom-background', apply_filters( 'portfolio_v1_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		) ) );

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );
	}
endif;
add_action( 'after_setup_theme', 'portfolio_v1_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function portfolio_v1_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'portfolio_v1_content_width', 640 );
}
add_action( 'after_setup_theme', 'portfolio_v1_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function portfolio_v1_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'portfolio-v1' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'portfolio-v1' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
	register_sidebar( array(
		'name'			=> esc_html__('Sidebar2', 'filter'),
		'id'			=> 'sidebar2',
		'descriotion'	=> esc_html__('Add widgets here2.','filter'),
		'before_widget' => '<aside>',
		'after_title'	=> '</aside>',
		'before_title'	=> '<h2 class="widgettitle">',
		'after_title'	=> '</h2>'
	));
}
add_action( 'widgets_init', 'portfolio_v1_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function portfolio_v1_scripts() {
	wp_enqueue_style( 'portfolio-v1-style', get_stylesheet_uri() );

	wp_enqueue_script( 'portfolio-v1-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true );

	wp_enqueue_script( 'portfolio-v1-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

	wp_enqueue_script('filter',get_theme_file_uri('/js/filter.js'), array(), '1.0', true);

	// wp_enqueue_script('filter',
	// get_theme_file_uri('/js/filter.js'), 
	// array(), '1.0', true);

	wp_enqueue_style(
        'portfolio-custom-styles', get_template_directory_uri() . '/css/styles.css', 
        array(), 
        false, 
        'all'
	);

	wp_enqueue_script( 
		'twdbakery-navigation', 
		get_template_directory_uri() . '/js/navigation.js', 
		array(), 
		'20151215', true );
		

	wp_enqueue_script( 'twdbakery-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );

	wp_enqueue_script( 
		'twdbakery-animation-aos', 
		get_template_directory_uri() . '/js/aos.js', 
		array(), 
		false,
		 'all' );

	wp_enqueue_script( 
		'twdbakery-custom-scripts', 
		get_template_directory_uri() . '/js/script.js', 
		array(), 
		'1.0.0',
		 'all' );

	wp_enqueue_script( 
		'twdbakery-menu', 
		get_template_directory_uri() . '/js/menu.js', 
		array(), 
		false,
		 'all' );

		wp_enqueue_script( 
		'twdbakery-slider-preloader', 
		get_template_directory_uri() . '/js/preloader.js',
		array(), 
		false,
		 'all' );

		wp_enqueue_script( 
		'twdbakery-slider-kontext', 
		get_template_directory_uri() . '/js/kontext.js', 
		array(), 
		false,
		 'all' );
}
add_action( 'wp_enqueue_scripts', 'portfolio_v1_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}


/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function portfolio_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'twdbakery' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'twdbakery' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
	register_sidebar( array(
		'name'			=> esc_html__('Sidebar2', 'filter'),
		'id'			=> 'sidebar2',
		'descriotion'	=> esc_html__('Add widgets here2.','filter'),
		'before_widget' => '<aside>',
		'after_title'	=> '</aside>',
		'before_title'	=> '<h2 class="widgettitle">',
		'after_title'	=> '</h2>',
	));
}
add_action( 'widgets_init', 'portfolio_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function twdbakery_scripts() {
	wp_deregister_script('jquery');
	wp_enqueue_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js', array(), null, true);
		// if ( is_category( 'course' ) ) {
	    // wp_enqueue_script( 'imagesloaded', get_theme_file_uri( '/js/libs/imagesloaded.pkgd.min.js' ), array( 'jquery' ), '4.1.1', true );
	    // wp_enqueue_script( 'isotope', get_theme_file_uri( '/js/libs/isotope.pkgd.min.js' ), array( 'imagesloaded' ), '3.0.1', true );
	    // wp_enqueue_script( 'isotopeinwp-settings', get_theme_file_uri( '/js/isotope.settings.js' ), array( 'isotope' ), '1.0', true );
	// }
	wp_enqueue_script('filter',get_theme_file_uri('js/filter.js'), array(), '1.0', true);

	wp_enqueue_style( 'twdbakery-style', get_stylesheet_uri() );

	wp_enqueue_style(
        'twdbakery-custom-styles', get_template_directory_uri() . '/css/styles.css', 
        array(), 
        false, 
        'all'
    );
	wp_enqueue_script( 
		'twdbakery-navigation', 
		get_template_directory_uri() . '/js/navigation.js', 
		array(), 
		'20151215', true );
		

	wp_enqueue_script( 'twdbakery-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );

	// wp_enqueue_script( 
	// 	'twdbakery-animation-aos', 
	// 	get_template_directory_uri() . '/js/aos.js', 
	// 	array(), 
	// 	false,
	// 	 'all' );

	wp_enqueue_script( 
		'twdbakery-custom-scripts', 
		get_template_directory_uri() . '/js/script.js', 
		array(), 
		'1.0.0',
		 'all' );

	wp_enqueue_script( 
		'twdbakery-menu', 
		get_template_directory_uri() . '/js/menu.js', 
		array(), 
		false,
		 'all' );

		wp_enqueue_script( 
		'twdbakery-slider-preloader', 
		get_template_directory_uri() . '/js/preloader.js',
		array(), 
		false,
		 'all' );

		wp_enqueue_script( 
		'twdbakery-slider-kontext', 
		get_template_directory_uri() . '/js/kontext.js', 
		array(), 
		false,
		 'all' );
	

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'twdbakery_scripts' );

/**
 *  ----------------------------------------------------------------------------
 * 	custom functions
 * 
 * Task:
 *  - Student CPT
 *  	- Student list template (a template page that displays ACF: the CPT --> taxonomy --> term:all students ?) 
 *  		- TERMS (from taxonomy template) - Designer & Developer
 * ----------------------------------------------------------------------------
 *  - Staff CPT
 * 	- Staff Template (ACF: courses, link uri )
 *  		- TERMS - Faculty and Administrative 
 * ----------------------------------------------------------------------------
 *  - Schedule Page
 *  	- ACF Repeater field 
 * ----------------------------------------------------------------------------
 *  - Home Page
 * 		- image slider, ACF Gallery field
 * -----------------------------------------------------------------------------
 */
/** Create CPT
 * Student: CPT: twd-student | taxonomy: twd-student-cat | terms: designer, developer
 * Staff: 	CPT: twd-staff 	 | taxonomy: twd-staff-cat	 | terms: faculty, administrative
 * Tutorials: CPT: twd-tutorial | taxonomy: twd-tutorial-cat | terms:
 */

function njn_register_custom_post_types() {
    $labels = array(
        'name'               => _x( 'Projects', 'post type general name' ),
        'singular_name'      => _x( 'Product', 'post type singular name'),
        'menu_name'          => _x( 'Projects', 'admin menu' ),
        'name_admin_bar'     => _x( 'Product', 'add new on admin bar' ),
        'add_new'            => _x( 'Add New', 'product' ),
        'add_new_item'       => __( 'Add New Product' ),
        'new_item'           => __( 'New Product' ),
        'edit_item'          => __( 'Edit Product' ),
        'view_item'          => __( 'View Product' ),
        'all_items'          => __( 'All Projects' ),
        'search_items'       => __( 'Search Projects' ),
        'parent_item_colon'  => __( 'Parent Projects:' ),
        'not_found'          => __( 'No projects found.' ),
        'not_found_in_trash' => __( 'No projects found in Trash.' ),
        'archives'           => __( 'Product Archives'),
        'insert_into_item'   => __( 'Insert into product'),
        'uploaded_to_this_item' => __( 'Uploaded to this product'),
        'filter_item_list'   => __( 'Filter projects list'),
        'items_list_navigation' => __( 'Projects list navigation'),
        'items_list'         => __( 'Projects list'),
        'featured_image'     => __( 'Product feature image'),
        'set_featured_image' => __( 'Set product feature image'),
        'remove_featured_image' => __( 'Remove product feature image'),
        'use_featured_image' => __( 'Use as feature image'),
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'show_in_nav_menus'  => true,
        'show_in_admin_bar'  => true,
        'show_in_rest'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'projects' ),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
		'menu_position'      => 5,
        'menu_icon'          => 'dashicons-archive',
        'supports'           => array( 'title', 'thumbnail', 'editor' )
    );
    register_post_type( 'njn-product', $args );
}
add_action( 'init', 'njn_register_custom_post_types' );

// Create two taxonomies, Subject and Author
function isotopeinwp_taxonomies() {
	// Add Subject taxonomy, make it hierarchical (like categories)
	$labels = array(
		'name'              => _x( 'Product Categories', 'taxonomy general name' ),
		'singular_name'     => _x( 'product category', 'taxonomy singular name' ),
		'search_items'      => __( 'Search Product Categories' ),
		'all_items'         => __( 'All Product Categories' ),
		'parent_item'       => __( 'Parent product category' ),
		'parent_item_colon' => __( 'Parent product category:' ),
		'edit_item'         => __( 'Edit product category' ),
		'update_item'       => __( 'Update product category' ),
		'add_new_item'      => __( 'Add New product category' ),
		'new_item_name'     => __( 'New product category Name' ),
		'menu_name'         => __( 'product category' ),
	);
	$args = array(
		'hierarchical'      => true,
		'labels'            => $labels,
		'show_ui'           => true,
		'show_admin_column' => true,
		'query_var'         => true,
		// 'rewrite'           => array( 'slug' => 'subject' ),
		'rewrite'           => array( 'slug' => 'product' ),
	);
	//change to slug id
	register_taxonomy( 'njn-product-cat', array( 'njn-product' ), $args );

    // Add Author taxonomy, make it hierarchical (like categories)
	$labels = array(
		'name'              => _x( 'Product Authors', 'taxonomy general name' ),
		'singular_name'     => _x( 'Product Author', 'taxonomy singular name' ),
		'search_items'      => __( 'Search Product Authors' ),
		'all_items'         => __( 'All Product Authors' ),
		'parent_item'       => __( 'Parent Product Author' ),
		'parent_item_colon' => __( 'Parent Product Author:' ),
		'edit_item'         => __( 'Edit Product Author' ),
		'update_item'       => __( 'Update Product Author' ),
		'add_new_item'      => __( 'Add New Product Author' ),
		'new_item_name'     => __( 'New Product Author Name' ),
		'menu_name'         => __( 'Product Author' ),
	);
	$args = array(
		'hierarchical'      => true,
		'labels'            => $labels,
		'show_ui'           => true,
		'show_admin_column' => true,
		'query_var'         => true,
		'rewrite'           => array( 'slug' => 'product-author' ),
	);
	register_taxonomy( 'product-author', array( 'njn-product' ), $args );
}
add_action( 'init', 'isotopeinwp_taxonomies', 0 );

/**
 * Load all available posts on Course index page.
 */
function isotpeinwp_index( $query ) {
    if ( !is_admin() && $query->is_main_query() ) {
        if ( is_category( 'njn-product-cat' ) ) {
            $query->set( 'posts_per_page', '-1' );
        }
    }
}
add_action( 'pre_get_posts', 'isotpeinwp_index' );

/**
 * Create classes from every taxonomy term applied to the current post.
 * - Creates an array $terms of terms from all taxonomies listed in $tax_array,
 * - Loops through $terms to concatenate term names,
 * - Returns a list of class names separated by spaces.
 */
function isotpeinwp_create_tax_classes() {
    $tax_array = array(
            'product',
            // 'product-author'
        );
    $terms = get_the_terms( get_the_ID(), $tax_array );
    $classes = array();

    if($terms) {
        foreach ($terms as $term) {
            $classes[] = $term->slug;
        }
        $the_classes = implode(' ', $classes);
        return $the_classes;
    }
}

/**
 * If the current display is the Course category index,
 * add classes to post_class() dynamically through a filter
 * by running isotpeinwp_create_tax_classes() on each post.
 */
function isotopeinwp_add_classes( $classes ) {
    if ( is_category( 'njn-product-cat' ) ) {
        $classes[] = isotpeinwp_create_tax_classes();
    }
    return $classes;
}

add_filter( 'post_class', 'isotopeinwp_add_classes' );

/**
 * Enqueue jQuery, imagesLoaded, Isotope and its settings.
 */
// function isotopeinwp_scripts() {
// 	if ( is_category( 'products' ) ) {
// 	    wp_register_script( 'imagesloaded', get_theme_file_uri( '/js/libs/imagesloaded.pkgd.min.js' ), array( 'jquery' ), '4.1.1', true );
// 	    wp_register_script( 'isotope', get_theme_file_uri( '/js/libs/isotope.pkgd.min.js' ), array( 'imagesloaded' ), '3.0.1', true );
// 	    wp_enqueue_script( 'isotopeinwp-settings', get_theme_file_uri( '/js/isotope.settings.js' ), array( 'isotope' ), '1.0', true );
// 	}
// }

// add_action( 'wp_enqueue_scripts', 'isotopeinwp_scripts' );
// function twdbakerychild_scripts() {
//     wp_enqueue_script('js/menu.js')
//     wp_enqueue_script('js/nav-fullcanvas.js')
//     get_theme_file_uri('js/menu.js', array(), '1.0', true );
//     get_theme_file_uri('js/nav-fullcanvas.js', array(), '1.0', true );

// }

// add_action( 'wp_enqueue_scripts', 'twdbakerychild_scripts' );

