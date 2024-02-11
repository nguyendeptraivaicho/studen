const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());

// Mock database
const users = [];

// Đăng ký tài khoản
app.post("/signup", (req, res) => {
  const { email, password } = req.body;

  // Kiểm tra xem email đã tồn tại chưa
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: "Email already exists." });
  }

  // Lưu thông tin người dùng vào "database"
  users.push({ email, password });
  res.status(200).json({ message: "Signed up successfully." });
});

// Đăng nhập
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Kiểm tra xem email và password có khớp không
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    return res.status(200).json({ message: "Login successful." });
  } else {
    return res.status(401).json({ message: "Invalid email or password." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
