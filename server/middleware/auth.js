// middleware/auth.js
const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token = req.cookies.token;  // Menerima token dari cookie (atau Anda bisa mengirimkannya melalui header)

  // Jika tidak ada token, kirim respon error
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  try {
    // Verifikasi token dan dekode informasi pengguna
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;  // Menyimpan informasi pengguna ke dalam objek req untuk digunakan di rute berikutnya
    next();  // Lanjut ke rute berikutnya
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: 'Unauthorized' });  // Tangani kesalahan jika token tidak valid
  }
};

module.exports = authenticate;
