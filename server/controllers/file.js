/*eslint strict:0  */
var File, cloudinary, cloudinaryMulter, cloudinaryStorage, multer;

File = require('../models/file');
multer = require('multer');
cloudinary = require('../core/cloudinary');
cloudinaryStorage = require('../core/storages/cloudinaryStorage');
cloudinaryMulter = multer({
    storage: cloudinaryStorage
});

function uploadSingleImageToCloudinary(req, res, next) {
    cloudinaryMulter.single('image')(req, res, next);
}

function onUploadSingleImageToCloudinary(req, res) {
    if (req.file) {
        new File({
            fileName: req.file.public_id,
            format: req.file.format,
            resourceType: req.file.resource_type,
            url: req.file.url
        }).save(function saved(err, file) {
            if (err) {
                res.json({
                    error: 'При загрузке картинки возникла ошибка.',
                    details: err
                });
            }
            res.json({
                success: true,
                message: 'Файл успешно загружен.',
                details: file
            });
        });
    } else {
        res.json({
            error: 'При загрузке картинки возникла ошибка.',
            details: 'Загрузка в cloudinary не удалась'
        });
    }
}

function findFileByFileName(fileName) {
	return File.findOne({
			fileName: fileName
		}).exec();
}

function deleteFileByFileName(fileName) {
    return cloudinary.uploader.destroy(fileName)
        .then(function success(res) {
            if (res && res.result === 'ok') {
                return File.find({ fileName: fileName }).remove().exec();
            }
            return Promise.reject();
        });
}

module.exports = {
    uploadSingleImage: uploadSingleImageToCloudinary,
    onUploadSingleImage: onUploadSingleImageToCloudinary,
    findByFileName: findFileByFileName,
    deleteByFileName: deleteFileByFileName
};