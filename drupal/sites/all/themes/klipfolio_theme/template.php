<?php

/**
 * Preprocess variables for page.tpl.php
 *
 * @see page.tpl.php
 */
function klipfolio_theme_preprocess_page(&$vars) {
    $node = "";
    if (isset($vars['node'])) {
        $node = $vars['node'];
    } elseif (arg(0) == 'node' && is_numeric(arg(1)) && arg(2) !== 'edit') {
        $node = node_load(arg(1));
    }

    $type = "";
    if($node && isset($node->type)) {
        $type = $node->type;
    }

    $vars['node_type'] = $type;

    $vars['current_page'] = drupal_lookup_path("alias", current_path());
}


/**
 * Preprocess variables for region.tpl.php
 *
 * @see region.tpl.php
 */
function klipfolio_theme_preprocess_region(&$variables, $hook) {
    if ($variables['region'] == "sidebar_first") {
        if(($key = array_search("well", $variables['classes_array'])) !== false) {
            unset($variables['classes_array'][$key]);
        }
    }
}

/**
 * Returns the correct span class for a region
 */
//function klipfolio_theme_content_span($columns = 1) {
//    $class = FALSE;
//
//    switch($columns) {
//        case 1:
//            $class = 'col-md-12';
//            break;
//        case 2:
//            $class = 'col-md-9';
//            break;
//        case 3:
//            $class = 'col-md-6';
//            break;
//    }
//
//    return $class;
//}