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
<div class="blog-post-body">
    <div class="row ">
        <div class="col-md-3">
            <?php if (!empty($fields['field_image']->content)): ?>
                <div class="blog-thumb"><?php print $fields['field_banner_thmubnail']->content; ?></div>
            <?php endif; ?>
        </div>
        <div class="col-md-9">
            <?php print $fields['title']->content; ?>
            <div class="author-date">
                <span>By <span style="display:inline-block"><?php print $fields['field_blog_author_name']->content; ?></span> - <?php print $fields['field_date']->content; ?>  </span>
            </div>
            <?php print $fields['body']->content; ?> 
            <p style="margin: 10px 0;">
                <strong>Topics: </strong><span class="blog-topics"><?php print $fields['field_blog_topic']->content; ?></span>
                <!-- <span class="blog-read-more"> <?php //print l("Read More", drupal_get_path_alias("node/" . $row->nid))?></span> -->
            </p>
        </div>
    </div>
</div>

