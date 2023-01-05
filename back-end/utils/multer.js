const multer = require("multer");
const storage = (path) =>
  multer.diskStorage({
    destination: "./uploads/" + path,
    filename: (req, file, cb) => {
      cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname);
    },
  });
const upload = (path) =>
  multer({
    storage: storage(path),
    fileFilter: (req, file, cb) => {
      if (
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg"
      ) {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error("format img not allowed"));
      }
    },
  });
module.exports=upload
