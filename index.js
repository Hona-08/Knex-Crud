const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile');

const app = express();
const port = 3000;

const db = knex(knexConfig.development);

app.use(express.json());

// Create an item
app.post('/items', async (req, res) => {
  try {
    const [id] = await db('items').insert(req.body);
    res.status(201).json({ id });
  } catch (error) {
    res.status(500).json({ error: 'Error creating item' });
  }
});

// Read all items
app.get('/items', async (req, res) => {
  try {
    const items = await db('items');
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving items' });
  }
});

// Update an item
app.put('/items/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await db('items').where({ id }).update(req.body);
    res.json({ message: 'Item updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error updating item' });
  }
});

// Delete an item
app.delete('/items/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await db('items').where({ id }).del();
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting item' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
