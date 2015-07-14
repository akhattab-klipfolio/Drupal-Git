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
<?php $partner_id = strtolower(str_replace(" ", "-", $fields['title_1']->content)); ?>
<a id="<?php print $partner_id; ?>" class="nav-anchor"></a>
<div class="row">
    <div class="col-md-4">
        <div class="partner-logo">
            <span class="helper"></span><?php print $fields['field_image']->content; ?>
        </div>
    </div>
    <div class="col-md-8">
        <?php print $fields['title']->content; ?>
        <?php print $fields['body']->content; ?>
        <?php if($fields['field_country']->content): ?>
            <div>
                <span class="contact-label">Country:</span>
                <?php print $fields['field_country']->content; ?>
            </div>
        <?php endif; ?>
        <?php if($fields['field_web']->content): ?>
            <div>
                <span class="contact-label">Web:</span>
                <a href="http://<?php print $fields['field_web']->content;?>" target="_blank" class="gatrack"
                    data-ga_event_category="Partner" data-ga_event_action="Website" data-ga_event_label="<?php print $fields['title_1']->content; ?>">
                    <?php print $fields['field_web']->content;?>
                </a>
            </div>
        <?php endif; ?>
        <?php if($fields['field_email']->content): ?>
            <div>
                <span class="contact-label">Email:</span>
                <a href="mailto:<?php print $fields['field_email']->content;?>" class="gatrack"
                   data-ga_event_category="Partner" data-ga_event_action="Email" data-ga_event_label="<?php print $fields['title_1']->content; ?>">
                    <?php print $fields['field_email']->content;?>
                </a>
            </div>
        <?php endif; ?>
        <?php if($fields['field_phone']->content): ?>
            <div>
                <span class="contact-label">Phone:</span>
                <?php print $fields['field_phone']->content; ?>
            </div>
        <?php endif; ?>
    </div>
</div>
