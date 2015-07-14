<?php

/**
 * @file
 * Default simple view template to all the fields as a row.
 *
 * - $view: The view in use.
 * - $fields: an array of $field objects. Each one contains:
 *   - $field->content: The output of the field.
 *   - $field->raw: The raw data for the field, if it exists. This is NOT output safe.
 *   - $field->class: The safe class id to use.
 *   - $field->handler: The Views field handler object controlling this field. Do not use
 *     var_export to dump this object, as it can't handle the recursion.
 *   - $field->inline: Whether or not the field should be inline.
 *   - $field->inline_html: either div or span based on the above flag.
 *   - $field->wrapper_prefix: A complete wrapper containing the inline_html to use.
 *   - $field->wrapper_suffix: The closing tag for the wrapper.
 *   - $field->separator: an optional separator that may appear before a field.
 *   - $field->label: The wrap label text to use.
 *   - $field->label_html: The full HTML of the label to use including
 *     configured element type.
 * - $row: The raw result object from the query, with all data it fetched.
 *
 * @ingroup views_templates
 */
?>
<div class="row">
    <div class="col-sm-2">
        <?php print $fields['field_date']->content; ?>
    </div>
    <div class="col-sm-7">
        <div class="post-body">
            <?php if (!empty($fields['field_image']->content)): ?>
            <div class="blog-banner"><?php print $fields['field_image']->content; ?></div>
            <?php endif; ?>
            <?php print $fields['title']->content; ?>
            <?php print $fields['body']->content; ?>
            <div class="gap-south-big gap-north-small">
                <?php print l("Read More", drupal_get_path_alias("node/" . $row->nid), array("attributes" => array("class" => array("blue-link")))) ?>
            </div>
        </div>
    </div>
    <div class="col-sm-3 hidden-xs">
        <div class="posted-by">
            <?php if (!empty($fields['picture']->content)): ?>
                <div style="display:inline-block; margin-right:10px;">
                    <?php print $fields['picture']->content; ?>
                </div>
            <?php endif; ?>
            <div style="display:inline-block; vertical-align:top;">
                <span class="quiet">Posted by:</span>
                <?php print $fields['field_display_name']->content; ?>
            </div>
        </div>
    </div>
</div>

