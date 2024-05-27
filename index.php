<?php get_header();?>

<section class="pagesection">
<div class="pagecontatentwrapper">
	
<h1><?php the_title();?></h1>

<?php if( have_posts() ): while( have_posts() ): the_post();?>

   <?php if ( has_post_thumbnail() ) :
                            $featured_image = wp_get_attachment_image_src( get_post_thumbnail_id( get_the_ID() ), 'large' ); ?>
                            <img style="width:100px;height:100px;"  class="index-featured-img" src="<?php echo $featured_image[0]; ?>" alt="" />
   <?php endif; ?>

    <?php 
    the_content();
    the_ID();
    ?>
   <?php  
              $args = array(
                'post_type' => 'attachment',
                'post_mime_type' => 'image',
                'numberposts' => 1,
                'orderby' => 'menu_order',
                'order' => 'ASC',
                'post_parent' => $post->ID
            );
            $images = get_posts($args);
           
            if($images){ 
            echo wp_get_attachment_image($images[0]->ID, $size='attached-image');
            }

    ?>

<?php endwhile; else: endif;?>
<?php wp_reset_postdata(); ?>
</div>
</section>
				
<?php get_footer();?>