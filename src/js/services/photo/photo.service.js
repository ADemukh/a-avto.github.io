(function PhotoServiceInit() {
    'use strict';

    angular.module('services')
        .factory('services.photo', PhotoService);

    PhotoService.$inject = ['$http'];

    function PhotoService($http) {
        return {
            uploadUserPhoto: uploadUserPhoto,
            getPhotoSrcUrl: getPhotoSrcUrl
        };

        function uploadUserPhoto(userId, file) {
            var formData;

            formData = new FormData();
            formData.append('userId', userId);
            formData.append('file', file);
            // return $http.post('/file/uploaduserphoto', formData, {
            //     headers: { 'Content-Type': undefined },
            //     transformRequest: angular.identity
            // });
            return $http.post('/file/uploaduserphoto', formData);
        }

        function getPhotoSrcUrl(photoId) {
            return $http.post('/file/photosrcurl', { id: photoId });
        }
    }
})();