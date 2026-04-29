import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import path from 'path';
import Note from './models/Note';

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/sticky_notes')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req: Request, res: Response) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.render('index', { notes });
  } catch (error) {
    res.status(500).send('Error fetching notes');
  }
});

app.get('/add', (req: Request, res: Response) => {
  res.render('add');
});

app.post('/add', async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    await newNote.save();
    res.redirect('/');
  } catch (error) {
    res.status(500).send('Error saving note');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
