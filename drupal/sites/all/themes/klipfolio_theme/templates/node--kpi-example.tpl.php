<article id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>

    <?php if (!empty($title)): ?>
        <h1><?php print $title; ?></h1>
    <?php endif; ?>

    <?php if (!empty($content['field_subtitle'])): ?>
        <h2 style="margin: 10px 0 40px 0;"><?php print render($content['field_subtitle']); ?></h2>
    <?php endif; ?>

    <?php print render($content['field_image']); ?>
    <?php print render($content['body']); ?>

</article> <!-- /.node -->
