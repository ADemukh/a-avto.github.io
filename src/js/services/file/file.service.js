(function FileServiceInit() {
    'use strict';

    angular.module('services')
        .factory('services.file', FileService);

    FileService.$inject = ['$http'];

    function FileService($http) {
        return {
            uploadImage: uploadImage,
            imageSrcUrl: imageSrcUrl
        };

        function uploadImage(file) {
            var formData;

            formData = new FormData();
            formData.append('file', file);
            return $http.post('/file/uploadImage', formData);
        }

        function imageSrcUrl(id) {
            return '/uploads/' + id;
        }
    }
})();