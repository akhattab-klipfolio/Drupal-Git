<?php drupal_add_js(drupal_get_path( 'theme', 'klipfolio_theme') . '/js/landing-page.js'); ?>

<article id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>
	<div class="landing-page">
	<!-- 	<div class="lp-banner-image"><?php print render($content['field_lp_banner_image']); ?></div>
	 -->	<?php print render($content); ?>

		<div id="footer">
		    <div class="footer-area">
		        <div class="container">
		            <div class="row">
		                <div class="col-md-3">
		                    <div id="social-media">
		                        <a href="https://twitter.com/klipfolio" target="_blank" class="gatrack" data-ga_event_category="Social" data-ga_event_action="Follow" data-ga_event_label="Twitter">
		                            <div class="twitter-button"></div>
		                        </a>
		                        <a href="https://www.facebook.com/Klipfolio" target="_blank" class="gatrack" data-ga_event_category="Social" data-ga_event_action="Follow" data-ga_event_label="Facebook">
		                            <div class="facebook-button"></div>
		                        </a>
		                        <a href="https://plus.google.com/u/0/112086926916128622849" target="_blank" class="gatrack" data-ga_event_category="Social" data-ga_event_action="Follow" data-ga_event_label="Google Plus">
		                            <div class="googleplus-button"></div>
		                        </a>
		                        <a href="http://www.linkedin.com/company/klipfolio" target="_blank" class="gatrack" data-ga_event_category="Social" data-ga_event_action="Follow" data-ga_event_label="LinkedIn">
		                            <div class="linkedin-button"></div>
		                        </a>
		                        <a href="http://www.youtube.com/klipfolio" target="_blank" class="gatrack" data-ga_event_category="Social" data-ga_event_action="Follow" data-ga_event_label="YouTube">
		                            <div class="youtube-button"></div>
		                        </a>
		                        <a href="http://pinterest.com/klipfolio/" target="_blank" class="gatrack" data-ga_event_category="Social" data-ga_event_action="Follow" data-ga_event_label="Pinterest">
		                            <div class="pinterest-button"></div>
		                        </a>
		                    </div>
		                </div>
		                <div class="col-md-9 helpful-links">
		                    <h4 style="display: inline; padding: 0 10px;"><a href="/" class="active">Klipfolio</a></h4>
		                    <h4 style="display: inline; padding: 0 10px;"><a href="/features" class="active">Features</a></h4>
		                    <h4 style="display: inline; padding: 0 10px;"><a href="/pricing" class="active">Pricing</a></h4>
		                    <h4 style="display: inline; padding: 0 10px;"><a href="/resources/dashboard-examples" class="active">Examples</a></h4>
		                    <h4 style="display: inline; padding: 0 10px;"><a href="/resources/webinars" class="active">Webinars</a></h4>
		                </div>
		            </div>
		        </div>
		    </div>

		    <div id="legal">
		        <div class="container">
		            <div class="row">
		                <div id="made-in-canada" class="col-sm-5"><span class="maple-leaf"></span><small>Proudly designed and built in Canada, eh.</small>
		                </div>
		                <div id="copyright" class="col-sm-7"><small>Copyright &#169; 2014 Klipfolio Inc.<br class="visible-xs"/> All Rights Reserved.<br class="visible-xs"/> <?php print l(t("Terms of use"), drupal_get_normal_path("legal/terms-of-use")); ?></small>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
	</div>
</article>
