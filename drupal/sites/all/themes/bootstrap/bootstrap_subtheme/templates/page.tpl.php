<?php if ($current_page == "home"): ?>

    <?php print render($page['content']); ?>

<?php elseif ($node_type == "landing_page"): ?>

    <?php if (!empty($page['banner'])): ?>
        <div id="top-banner">
            <?php print render($page['banner']); ?>
        </div>
    <?php endif; ?>

    <?php print render($page['content']); ?>

<?php else: ?>

    <?php if (!empty($secondary_menu)): ?>
        <div id="second-navbar">
            <div class="container">
                <nav class="navbar" role="second-navigation">
                    <ul class="nav navbar-nav">
                        <?php foreach($secondary_menu as $link): ?>
                            <?php
                                if ($link['title'] == "Guides" || $link['title'] == "Ideas" || $link['title'] == "Community") {
                                    $link['attributes']['target'] = "_blank";
                                }
                            ?>

                            <li>
                                <?php print l($link['title'], $link['href'], $link) ?>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </nav>
            </div>
        </div>
    <?php endif; ?>

    <?php if (!empty($page['banner'])): ?>
        <div id="top-banner">
            <?php print render($page['banner']); ?>
        </div>
    <?php endif; ?>

    <div id="top-container" class="container">
        <?php if (!empty($breadcrumb)): ?>
            <?php print $breadcrumb; ?>
        <?php else: ?>
            <?php print "<ul class='breadcrumb'>"; ?>
                <li class="active"><?php print $title; ?></li>
            <?php print "</ul>"; ?>
        <?php endif; ?>
    </div>

    <div class="main-container container">
        <?php if (!empty($site_slogan) || !empty($page['header'])): ?>
            <header role="banner" id="page-header">
                <?php if (!empty($site_slogan)): ?>
                    <p class="lead"><?php print $site_slogan; ?></p>
                <?php endif; ?>

                <?php print render($page['header']); ?>
            </header> <!-- /#header -->
        <?php endif; ?>

        <div class="row">
            <?php if (!empty($page['sidebar_first'])): ?>
                <aside class="col-sm-3 hidden-xs" role="complementary" style="padding: 0;">
                    <div class="kf-sidebar left clearfix">
                        <div>
                            <?php print render($page['sidebar_first']); ?>
                        </div>
                    </div>
                </aside>  <!-- /#sidebar-first -->
            <?php endif; ?>

            <section <?php print $content_column_class; ?>>
                <?php if (!empty($page['highlighted'])): ?>
                    <div class="highlighted hero-unit"><?php print render($page['highlighted']); ?></div>
                <?php endif; ?>
                <a id="main-content"></a>
                <?php print $messages; ?>
                <?php if (!empty($tabs)): ?>
                    <?php print render($tabs); ?>
                <?php endif; ?>
                <?php if (!empty($page['help'])): ?>
                    <div class="well"><?php print render($page['help']); ?></div>
                <?php endif; ?>
                <?php if (!empty($action_links)): ?>
                    <ul class="action-links"><?php print render($action_links); ?></ul>
                <?php endif; ?>
                <?php print render($page['content']); ?>
                <?php if (!empty($page['below_content'])): ?>
                    <?php print render($page['below_content']); ?>
                <?php endif; ?>
            </section>

            <?php if (!empty($page['sidebar_second'])): ?>
                <aside class="col-sm-3 hidden-xs" role="complementary" >
                    <div class="kf-sidebar right clearfix">
                        <div>
                            <?php print render($page['sidebar_second']); ?>
                        </div>
                    </div>
                </aside>  <!-- /#sidebar-second -->
            <?php endif; ?>
        </div>
    </div>

    <?php if (!empty($page['footer'])): ?>
        <footer class="footer container">
            <?php print render($page['footer']); ?>
        </footer>
    <?php endif; ?>

<?php endif; ?>

