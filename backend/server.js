const express = require('express');
const path = require('path');
const app = express();
const PORT = 7000;

// Serve static PDF files
app.use('/pdf', express.static(path.join(__dirname, 'pdfs'), {
  setHeaders: (res, path, stat) => {
    res.set('Content-Disposition', 'inline'); // Force inline display
    res.set('Cache-Control', 'no-store'); // Disable caching
  }
}));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
