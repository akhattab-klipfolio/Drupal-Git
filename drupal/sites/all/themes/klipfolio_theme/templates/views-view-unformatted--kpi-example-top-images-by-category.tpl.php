<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>


<div class="col-md-offset-1 col-md-7 kpi-examples-images">
	<?php foreach ($rows as $id => $row): ?>
		<div class="col-xs-4">
			<div class="section-images">
				<?php print $row; ?>
			</div>
		</div>
	<?php endforeach; ?>
</div>