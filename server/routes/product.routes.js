const ProductController = require('../controllers/product.controller');
module.exports = app => {
  app.get('/api', ProductController.index);
  app.post('/api/products/new', ProductController.createProduct);
  app.get('/api/products/:id', ProductController.OneProduct);
  app.put('/api/products/:id/edit', ProductController.updateProduct);
  app.delete('/api/products/:id/delete', ProductController.deleteProduct);
}