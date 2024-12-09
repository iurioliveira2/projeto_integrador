const path = require('path');
const fs = require('fs');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

module.exports = {
    uploadFile: [
        upload.single('file'),
        (req, res) => {
            try {
                res.status(201).json({ message: 'File uploaded successfully.', file: req.file });
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Error uploading file.' });
            }
        }
    ],

    async getFile(req, res) {
        try {
            const filePath = path.join(__dirname, '../../uploads', req.params.filename);
            if (fs.existsSync(filePath)) {
                res.sendFile(filePath);
            } else {
                res.status(404).json({ error: 'File not found.' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error retrieving file.' });
        }
    },

    async deleteFile(req, res) {
        try {
            const filePath = path.join(__dirname, '../../uploads', req.params.filename);
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
                res.json({ message: 'File deleted successfully.' });
            } else {
                res.status(404).json({ error: 'File not found.' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error deleting file.' });
        }
    }
};