(function FileServiceInit() {
    'use strict';

    angular.module(SERVICES_MODULE_NAME)
        .factory('services.file', FileService);

    FileService.$inject = ['$http', 'Upload', '$q'];

    function FileService($http, uploadService, $q) {
        return {
            upload: uploadFile,
            uploadImage: uploadImage
        };

        function uploadFile(file) {
            var formData;

            formData = new FormData();
            formData.append('file', file);
            return $http.post('/files/upload', formData);
        }

        function uploadImage(image) {
			return uploadService.upload({
				url: '/upload/image',
				data: {
					image: image
				}
			}).then(function success(resp) { //upload function returns a promise
				if (resp.data.error) {
					return $q.reject(resp);
				}
                return $q.resolve(resp);
			}, function failure(resp) { //catch error
				return $q.reject('При выполнении операции произошла ошибка.')
			}, function progress(evt) {
				// var progressPercentage;

				// progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
				// console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
				// vm.progress = 'progress: ' + progressPercentage + '% ';
			});
        }
    }
})();