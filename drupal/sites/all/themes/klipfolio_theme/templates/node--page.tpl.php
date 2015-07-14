<article id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>

    <header>
        <?php if ($field_h1): ?>
            <h1><?php $field = field_get_items('node', $node, 'field_h1');  print render(field_view_value('node', $node, 'field_h1', $field[0])); ?></h1>
        <?php endif; ?>
    </header>

    <?php
        // Hide comments, tags, and links now so that we can render them later.
        hide($content['comments']);
        hide($content['links']);
        hide($content['field_tags']);
        hide($content['field_h1']);
        print render($content);
    ?>

    <?php if (!empty($content['field_tags']) || !empty($content['links'])): ?>
        <footer>
            <?php print render($content['field_tags']); ?>
            <?php print render($content['links']); ?>
        </footer>
    <?php endif; ?>

    <?php print render($content['comments']); ?>

</article> <!-- /.node -->
