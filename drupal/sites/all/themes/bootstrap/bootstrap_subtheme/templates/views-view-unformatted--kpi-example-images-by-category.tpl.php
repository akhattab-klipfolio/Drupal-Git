<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<ul class="list-unstyled">
    <?php foreach ($rows as $id => $row): ?>
        <li style="display:inline-block;">
            <?php print $row; ?>
        </li>
    <?php endforeach; ?>
</ul>
