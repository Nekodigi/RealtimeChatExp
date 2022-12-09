const { admin, projectBucket } = require("../firebase/firebase");

const storage = admin.storage();
module.exports.storage = storage;
const bucket = storage.bucket(projectBucket());
module.exports.bucket = bucket;

exports.uploadFile = async (filePath, path) => {//upload
    await bucket.upload(filePath, {destination:path});
}

exports.getUrl = async (path) => {
    await bucket.file(path).makePublic();
    return bucket.file(path).publicUrl();
}