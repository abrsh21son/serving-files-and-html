import express from "express";
import bodyParser from "body-parser"; 
import adminRoute from './routes/admin.js';
import shopRoute from './routes/shope.js';
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminRoute);
app.use(shopRoute);

app.use((req, res, next) => {
    console.log('Page location:', path.join(__dirname, 'views', 'page-notfound.html'));
    res.status(404).sendFile(path.join(__dirname, 'views', 'page-notfound.html'));
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});