<article id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>

    <div class="row">
        <div class="col-md-2">
            <h4 class="release-date quiet weak">
                <?php print render($content['field_date']); ?>
            </h4>
        </div>
        <div class="col-md-10">
            <h2 class="quiet"><?php $field = field_get_items('node', $node, 'field_source');  print render(field_view_value('node', $node, 'field_source', $field[0])); ?></h2>
            <?php if (!empty($title)): ?>
                <h1><?php print $title; ?></h1>
            <?php endif; ?>
            <h5>
                <?php if(!empty($field_external_author)): ?>
                    <span style="margin-right:3px;">By:</span>
                    <?php $field = field_get_items('node', $node, 'field_external_author');  print render(field_view_value('node', $node, 'field_external_author', $field[0])); ?>
                <?php endif; ?>
            </h5>

            <?php print render($content['body']); ?>

            <a href="<?php $field = field_get_items('node', $node, 'field_external_url');  print render(field_view_value('node', $node, 'field_external_url', $field[0])); ?>" target="_blank">Read Original Article</a>
        </div>
    </div>

</article> <!-- /.node -->
