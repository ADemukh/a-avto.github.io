/*eslint strict:0  */
var File, cloudinary, config, fs;

cloudinary = require('../cloudinary');
config = require('../config');
fs = require('fs');
File = require('../models/file');

function uploadToCloudinary(filePath, uploadClbk) {
    cloudinary.uploader.upload(filePath, function uploadCompleted(result) {
        uploadClbk(result);
    });
}

function removerFromUploadFolder(filePath, next) {
    next();
}

function saveAsCloudinaryFile(cloudinaryFile, next) {
    new File({
        cloudinary: cloudinaryFile,
        srcUrl: cloudinaryFile.url
    }).save(next);
}

function saveAsStorageFile(reqFile, next) {
    new File({
        storage: {
            fileName: reqFile.fileName,
            originalName: reqFile.originalname,
            format: fileFormat(reqFile),
            resourceType: fileResourceType(reqFile),
            filePath: reqFile.path
        },
        srcUrl: srcUrl(reqFile.path)
    }).save(next);
}

function fileFormat(reqFile) {
    return reqFile.mimetype.split('/')[1];
}

function fileResourceType(reqFile) {
    return reqFile.mimetype.split('/')[1];
}

function srcUrl(filePath) {
    return filePath;
}

function removeTemporarilyStoredFile(filePath, next) {
    fs.exists(filePath, function (exists) {
        if (exists) {
            fs.unlink(filePath, next);
        } else {
            next();
        }
    });
}

module.exports = {
    upload: function upload(reqFile, uploadClbk) {
        if (config.storage.mode.inCloudinary) {
            uploadToCloudinary(reqFile.path, function onComplete(cloudinaryFile) {
                removeTemporarilyStoredFile(reqFile.path, function save() {
                    saveAsCloudinaryFile(cloudinaryFile, uploadClbk);
                });
            });
        } else {
            saveAsStorageFile(reqFile, uploadClbk);
        }
    }
};