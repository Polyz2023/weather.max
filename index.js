const express = require("express");
const path = require("path");
const app = express();

// Указываем Express использовать папку 'dist' для статических файлов
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
    // Отправляем файл 'index.html' при запросе к корню
    res.sendFile(path.join(__dirname,  'dist', 'index.html'));
});
// Прослушивание порта 1488
app.listen(8410, () => {
    console.log("Server is running on port 1488");
});
