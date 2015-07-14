<?php
    $banner_gradient = field_get_items('node', $node, 'field_gradient');
    $banner_gradient_value = $banner_gradient ? $banner_gradient[0]['value'] : "";

    $banner_class = field_get_items('node', $node, 'field_class');
    $banner_class_value = field_view_value('node', $node, 'field_class', $banner_class[0]);

    $banner_height = field_get_items('node', $node, 'field_banner_height');
    $banner_height_value = $banner_gradient ? $banner_height[0]['value'] : "";
?>

<div class="banner <?php print $banner_gradient_value; ?> <?php print render($banner_class_value); ?> size-<?php print $banner_height_value; ?>">

    <div class="banner-image" style="<?php
        $files_dir = variable_get('file_public_path', conf_path() . '/files');
        if (!empty($field_image)) {
            print 'background-image:url(/' . $files_dir . '/banners/' . $field_image[0]['filename'] . ');';
        }
        ?>">

        <?php if(!empty($field_banner_text)): ?>
            <div class="container label-wrapper">
                <h2>
                    <?php $field = field_get_items('node', $node, 'field_banner_text');  print render(field_view_value('node', $node, 'field_banner_text', $field[0])); ?>
                </h2>
            </div>
        <?php endif; ?>
    </div>

</div>
