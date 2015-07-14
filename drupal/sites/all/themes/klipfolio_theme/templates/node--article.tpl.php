<article id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>

    <?php
        // Hide comments, tags, and links now so that we can render them later.
        hide($content['field_tags']);
        print render($content['body']);
    ?>

    <?php if (!empty($content['field_tags'])): ?>
        <footer>
            <?php print render($content['field_tags']); ?>
        </footer>
    <?php endif; ?>

</article> <!-- /.node -->
