const File = require('../models/file');
const multer = require('multer');
const cloudinary = require('../core/cloudinary');
const cloudinaryStorage = require('../core/storages/cloudinaryStorage');

const cloudinaryMulter = multer({
    storage: cloudinaryStorage,
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
            url: req.file.url,
        }).save((err, file) => {
            if (err) {
                res.json({
                    error: 'При загрузке картинки возникла ошибка.',
                    details: err,
                });
            }
            res.json({
                success: true,
                message: 'Файл успешно загружен.',
                details: file,
            });
        });
    } else {
        res.json({
            error: 'При загрузке картинки возникла ошибка.',
            details: 'Загрузка в cloudinary не удалась',
        });
    }
}

function findFileByFileName(fileName) {
    return File.findOne({
        fileName,
    }).exec();
}

function deleteFileByFileName(fileName) {
    return cloudinary.uploader.destroy(fileName)
        .then((res) => {
            if (res && res.result === 'ok') {
                return File.find({ fileName }).remove().exec();
            }
            return Promise.reject();
        });
}

module.exports = {
    uploadSingleImage: uploadSingleImageToCloudinary,
    onUploadSingleImage: onUploadSingleImageToCloudinary,
    findByFileName: findFileByFileName,
    deleteByFileName: deleteFileByFileName,
};
