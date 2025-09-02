const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

// Example products (50 items can be added here)
const products = Array.from({length: 50}, (_, i) => ({
  id: i+1,
  name: `Product ${i+1}`,
  price: Math.floor(Math.random() * 5000) + 500,
  image: `https://picsum.photos/200/200?random=${i+1}`
}));

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(5000, () => console.log('Server running on http://192.168.0.183:5000'));
// at bottom
if (require.main === module) {
  app.listen(5000, '0.0.0.0', () => console.log('Server started'));
} else {
  module.exports = app;
}
