<article id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>

    <?php if (!empty($title)): ?>
        <h1><?php print $title; ?></h1>
    <?php endif; ?>

    <?php if (!empty($content['field_subtitle'])): ?>
        <div class="subtitle"><?php print render($content['field_subtitle']); ?></div>
    <?php endif; ?>

    <?php print render($content['field_image']); ?>
    <?php print render($content['body']); ?>

</article> <!-- /.node -->
