(function StarRatingControllerInit() {
	'use strict';

	angular.module(WEBUI_MODULE_NAME).
	controller('controllers.starrating', StarRatingController);

	function StarRatingController() {
		this.$onChanges = function onChanges() {
			if (!this.max) {
				this.max = 5;
			}
			updateStars.call(this);
		};
		this.toggle = function toggle(index) {
			if (!this.readonly) {
				this.rating = index + 1;
				updateStars.call(this);
				this.onSelect({
					rating: this.rating
				});
			}
		};

		function updateStars() {
			var i;

			this.stars = [];
			for (i = 0; i < this.max; i += 1) {
				this.stars.push({
					filled: i < this.rating
				});
			}
		};
	}
})();