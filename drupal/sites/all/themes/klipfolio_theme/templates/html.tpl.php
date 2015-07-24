<!DOCTYPE html>
<html lang="<?php print $language->language; ?>">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="google-site-verification" content="8AuET8HvtYju7QAKLIDcpHpT7xLjhrWWo9lPda97ViE" />
    <?php print $head; ?>
    <title><?php print $head_title; ?></title>

    <link href="/<?php print path_to_theme() ?>/css/bootstrap.min.css" rel="stylesheet">
    <?php print $styles; ?>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,700,300,600,400' rel='stylesheet' type='text/css'>
    <script src="//cdn.optimizely.com/js/739880420.js"></script>
    <?php print $scripts; ?>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->
</head>
<body class="<?php print $classes; ?>" <?php print $attributes;?> data-spy="scroll" data-target=".kf-sidebar"
      data-offset="<?php if (drupal_lookup_path("alias", current_path()) == "features") { print 140; } else { print 70; } ?>">

    <!-- Google Tag Manager -->
        <noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-PNCCDQ"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-PNCCDQ');</script>
    <!-- End Google Tag Manager -->

    <header id="navbar" role="banner" class="navbar">
        <div class="navbar-inner">
            <div class="container">
                <div class="navbar-header pull-right">
                    <div id="nav-menu" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"></div>
                </div>

                <a class="logo pull-left" href="/" title="<?php print t('Home'); ?>"></a>

                <div class="pull-right hidden-xs">
                    <ul class="nav navbar-nav uppercase" style="margin-right:0;">
                        <li><a href="http://app.klipfolio.com/" target="_blank" class="sign-in-link">Sign in</a></li>
                        <li class="hidden-sm"><a href="#" class="visible-desktop trial-link trial-header open-trial-modal" data-toggle="modal" data-target="#TrialForm">Try it now</a></li>
                    </ul>
                </div>



                <div class="collapse navbar-collapse">
                    <nav role="navigation">
                        <ul class="nav navbar-nav uppercase">
                            <?php $menuLinks = menu_navigation_links("main-menu", 0); ?>
                            <?php foreach(array_slice($menuLinks, 0, 4) as $link): ?>
                                <li><?php print l($link['title'], $link['href'], $link) ?></li>
                            <?php endforeach?>
                            <li class="dropdown">
                                <a class="dropdown-toggle" style="cursor:pointer;" data-toggle="dropdown">More<span class="caret"></span></a>
                                <ul class="dropdown-menu nav">
                                    <?php foreach(array_slice($menuLinks, 4, 7) as $link): ?>
                                        <?php
                                            if ($link['title'] == "Support") {
                                                $link['attributes']['target'] = "_blank";
                                            }
                                        ?>

                                        <li><?php print l($link['title'], $link['href'], $link) ?></li>
                                    <?php endforeach?>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>

    <?php print $page_top; ?>
    <?php print $page; ?>


    <footer id="footer">
        <div class="footer-area">
            <div class="container">
                <div class="row">
                    <div class="col-sm-1 col-lg-2">
                        <div id="social-media">
                            <a href="https://twitter.com/klipfolio" target="_blank" class="social-media-follow-btn"><div class="twitter-button"></div></a>
                            <a href="https://www.facebook.com/Klipfolio" target="_blank" class="social-media-follow-btn"><div class="facebook-button"></div></a>
                            <a href="https://plus.google.com/u/0/112086926916128622849" target="_blank" class="social-media-follow-btn"><div class="googleplus-button"></div></a>
                            <a href="http://www.linkedin.com/company/klipfolio" target="_blank" class="social-media-follow-btn"><div class="linkedin-button"></div></a>
                            <a href="http://www.youtube.com/klipfolio" target="_blank" class="social-media-follow-btn"><div class="youtube-button"></div></a>
                            <a href="http://pinterest.com/klipfolio/" target="_blank" class="social-media-follow-btn"><div class="pinterest-button"></div></a>
                        </div>
                    </div>
                    <?php foreach (menu_tree_output(menu_tree_all_data("menu-footer-menu")) as $menu): ?>
                        <?php if (!empty($menu['#title'])): ?>
                            <div class="col-sm-2">
                                <?php if ($menu['#title'] == "Other"): ?>
                                    <h4 style="color:grey"><?php print $menu['#title'] ?></h4>
                                <?php else: ?>
                                    <h4>
                                        <?php if (!empty($menu['#href']) && !empty($menu['#title'])): ?>
                                            <?php print l($menu['#title'], $menu['#href'], $menu); ?>
                                        <?php endif; ?>
                                    </h4>
                                <?php endif; ?>
                                <?php if (!empty($menu['#below'])): ?>
                                    <ul class="pagegroup">
                                        <?php foreach ($menu['#below'] as $link): ?>
                                            <?php if (!empty($link['#href']) && !empty($link['#title'])): ?>
                                                <?php
                                                    if ($link['#title'] == "Guides" || $link['#title'] == "Support") {
                                                        $link['attributes']['target'] = "_blank";
                                                    }
                                                ?>

                                                <li>
                                                    <?php print l($link['#title'], $link['#href'], $link) ?>
                                                </li>
                                            <?php endif; ?>
                                        <?php endforeach; ?>
                                    </ul>
                                <?php endif; ?>
                            </div>
                        <?php endif; ?>
                    <?php endforeach; ?>
                    <div class="col-sm-3 col-lg-2">
                        <div id="third-parties">
                            <div class="trial-link uppercase strong trial-footer open-trial-modal" data-toggle="modal" data-target="#TrialForm">Free Trial</div>
                            <small>Hosted on:</small><span class="rackspace"></span>
                            <small>Trusted by:</small><span class="verisign"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="legal">
            <div class="container">
                <div class="row">
                    <div id="made-in-canada" class="col-sm-5"><span class="maple-leaf"></span><small>Proudly designed and built in Canada, eh.</small></div>
                    <div id="copyright" class="col-sm-7"><small>Copyright &#169; 2015 Klipfolio Inc.<br class="visible-xs"/> All Rights Reserved.<br class="visible-xs"/> <?php print l(t("Terms of use"), drupal_get_normal_path("legal/terms-of-use")); ?></small></div>
                </div>
            </div>
        </div>
    </footer>

    <div class="responsive-indicator"></div>

    <script src="/<?php print path_to_theme() ?>/js/bootstrap.min.js"></script>
    <?php print $page_bottom; ?>
    <script src="/<?php print path_to_theme() ?>/js/klipfolio.footer.js"></script>
</body>
</html>
