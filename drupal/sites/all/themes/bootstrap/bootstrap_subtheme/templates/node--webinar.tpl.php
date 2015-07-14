<?php
    drupal_add_js(drupal_get_path('theme', 'klipfolio_theme') . '/js/jquery-youtube.analytics/jquery-youtube.analytics.js');
?>

<article id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>

    

    <?php print render($content['body']); ?>


</article> <!-- /.node -->
