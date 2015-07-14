<?php

/**
 * @file
 * Default simple view template to display a rows in a grid.
 *
 * - $rows contains a nested array of rows. Each row contains an array of
 *   columns.
 *
 * @ingroup views_templates
 */
?>
<?php foreach ($rows as $row_number => $columns): ?>
    <div class="row <?php if ($row_classes[$row_number]) { print $row_classes[$row_number];  } ?>">
        <?php foreach ($columns as $column_number => $item): ?>
            <div class="col-md-6 <?php if ($column_classes[$row_number][$column_number]) { print $column_classes[$row_number][$column_number];  } ?>">
                <?php print $item; ?>
            </div>
        <?php endforeach; ?>
    </div>
<?php endforeach; ?>
