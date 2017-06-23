(function FileServiceInit() {
    'use strict';

    angular.module('services')
        .factory('services.file', FileService);

    FileService.$inject = ['$http', 'Upload', '$q'];

    function FileService($http, uploadService, $q) {
        return {
            upload: upload
        };

        function uploadImage(file) {
            var formData;

            formData = new FormData();
            formData.append('file', file);
            return $http.post('/files/upload', formData);
        }

        function upload(file) {
			return uploadService.upload({
				url: '/files/upload',
				data: {
					file: file
				}
			}).then(function success(resp) { //upload function returns a promise
				if (resp.data.error) {
					return $q.reject(resp.data.error);
				}
                return $q.resolve(resp.data.file);
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