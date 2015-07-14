<?php drupal_add_js(drupal_get_path( 'theme', 'klipfolio_theme') . '/js/fullsize.js'); ?>
<?php $node = menu_get_object(); $author_id = $node->uid; ?>

<article id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>

<div class="blog-entry">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="post-body">
                     <?php if (!empty($content['field_image'])): ?>
                        <div class="blog-banner"><?php print render($content['field_image']); ?></div>
                    <?php endif; ?>
                    <?php if (!empty($title)): ?>
                        <h1 style="text-align: center;"><?php print $title; ?></h1>
                    <?php endif; ?>
                    <div class="author-date">
                         
                            <?php  print render($content['field_blog_author_name']); ?> 
                            <?php print render($content['field_date']); ?>  
                        
                    </div> 
                    <?php print render($content['body']); ?>
                </div>
            </div>
        </div>
    </div>
    <!-- About The Author Block -->
    
</div>
</article> <!-- /.node -->
