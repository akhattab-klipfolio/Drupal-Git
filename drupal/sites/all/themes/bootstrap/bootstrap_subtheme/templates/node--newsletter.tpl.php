<article id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>

    <h1><?php print render($content['field_date']); ?></h1>

    <div class="newsletter-wrapper">
        <?php print render($content['body']); ?>
    </div>

</article> <!-- /.node -->
