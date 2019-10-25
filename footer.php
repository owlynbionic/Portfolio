<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package portfolio-v1
 */

?>

	</div><!-- #content -->

	<footer>
    <div class="footerfloat">
        <div class="socialcont">
            <div class="sociallink">
                <a target="blank_" href=""><i class="fa fa-envelope" aria-hidden="true"></i>
                </i>
                </a>
                <div class="tooltip"><span>Gmail</span></div>
            </div>
            <div class="sociallink">
                <a target="blank_" href=""><i class="fa fa-twitter" aria-hidden="true"></i></a>
                <div class="tooltip"><span>Twitter</span></div>
            </div>

            <div class="sociallink">
                <a target="blank_" href=""><i class="fa fa-github" aria-hidden="true"></i>
                </a>
                <div class="tooltip"><span>Github</span></div>
            </div>
        </div> 
        <!-- end social cont-->
        <div class="footernavcont">
            <!-- <div class="projmenuCont"> -->
                <img class="projmenu" src="images/svg/patrickfoldersvg.png" alt="folder svg" >
            <!-- </div> -->
            
            <ul class="projfolder">
                <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                <!-- <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li> -->
            </ul>
        </div>
    </div>        
</footer>
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
