const express = require('express');
const router = express.Router();
const ArtikelController = require('../controllers/Artikel');
const upload = require('../middleware/upload');


router.get('/', ArtikelController.getArticles);  
router.get('/:id', ArtikelController.getArticleById);  
router.post('/', upload.single('image'), ArtikelController.createArticle);  
router.put('/:id', upload.single('image'), ArtikelController.updateArticle);  
router.delete('/:id', ArtikelController.deleteArticle);  

module.exports = router;
