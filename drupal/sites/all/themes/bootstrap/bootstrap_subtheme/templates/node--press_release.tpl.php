<article id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>

    <div class="row">
        <div class="col-md-2">
            <h4 class="release-date quiet weak">
                <?php print render($content['field_date']); ?>
            </h4>
        </div>
        <div class="col-md-10">
            <?php if (!empty($title)): ?>
                <h1><?php print $title; ?></h1>
            <?php endif; ?>

            <?php print render($content['body']); ?>
        </div>
    </div>

</article> <!-- /.node -->
