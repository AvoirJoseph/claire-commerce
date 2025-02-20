import express from "express";
import mysql from "mysql";
import cors from "cors";
import { fileURLToPath } from 'url';
import path from 'path';
import multer from "multer";

const port = 8800;
const app = express();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads'); 
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + Math.round(Math.random() * 1E9);
      cb(null, uniqueSuffix + '.' + file.mimetype.split('/')[1]); 
    }
})

const upload = multer({ storage: storage });

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password1!",
  database: "clairecommerce"
});

app.use(express.json());
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.post('/upload', upload.single('image'), (req, res) => {
  const fileName = req.file.filename; // This is the filename generated by Multer
  res.json({ filePath: `/uploads/${fileName}` });
});

app.put("/product/:productID", upload.fields([
    { name: "productImage1" },
    { name: "productImage2" },
    { name: "productImage3" },
    { name: "productImage4" },
    { name: "productImage5" },
    { name: "productImage6" },
    { name: "productImage7" }
  ]), (req, res) => {
    const productID = req.params.productID;
  
    const productImages = {};
    for (const key in req.files) {
      if (req.files[key][0]) {
        productImages[key] = req.files[key][0].filename; // Store only the filename
      }
    }
  
    const query = `
      UPDATE product
      SET
        productName = ?,
        productDescription = ?,
        productQuantity = ?,
        productImage1 = ?,
        productImage2 = ?,
        productImage3 = ?,
        productImage4 = ?,
        productImage5 = ?,
        productImage6 = ?,
        productImage7 = ?,
        productTag1 = ?,
        productTag2 = ?,
        productTag3 = ?,
        productTag4 = ?,
        productTag5 = ?,
        productTag6 = ?,
        productTag7 = ?
      WHERE productID = ?`;
  
    const values = [
      req.body.productName,
      req.body.productDescription,
      req.body.productQuantity,
      productImages.productImage1 || req.body.productImage1, // If no new image, keep old value
      productImages.productImage2 || req.body.productImage2,
      productImages.productImage3 || req.body.productImage3,
      productImages.productImage4 || req.body.productImage4,
      productImages.productImage5 || req.body.productImage5,
      productImages.productImage6 || req.body.productImage6,
      productImages.productImage7 || req.body.productImage7,
      req.body.productTag1,
      req.body.productTag2,
      req.body.productTag3,
      req.body.productTag4,
      req.body.productTag5,
      req.body.productTag6,
      req.body.productTag7
    ];
  
    db.query(query, [...values, productID], (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Database update failed!" });
      }
      return res.status(200).json({ message: "Product successfully updated!" });
    });
  });  

app.get("/products", (req, res) => {
  const query = "SELECT * FROM product";
  db.query(query, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
});

app.post("/login", (req, res) => {
  const { userName, password } = req.body;
  const query = "SELECT * FROM usertable WHERE userName = ?";
  
  db.query(query, [userName], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length === 0) return res.status(404).json("User not found");
      
      const user = data[0];

      // Check if it's the admin user
      if (userName === 'admin' && password === 'admin') {
          return res.status(200).json({ success: true, message: "Admin logged in successfully", isAdmin: true });
      }

      if(password !== user.password) {
          return res.status(401).json("Invalid Password");
      }

      // Regular user login
      res.status(200).json({ success: true, message: "Logged in successfully", isAdmin: false });
  });
});

app.get("/products", (req, res) => {
  const query = "SELECT * FROM product";
  db.query(query, (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
  });
});

app.put("/usertable/:userID", (req, res) => {
  const userID = req.params.userID;
  const query = "UPDATE usertable SET userName = ?, password = ?, image = ? WHERE userID = ?";
  
  const values = [req.body.userName, req.body.password, req.body.image];
  
  db.query(query, [...values, userID], (err, data) => {
      if (err) return res.json(err);
      return res.json("User Successfully Updated!");
  });
});

app.get("/", (req, res) => {
  res.json("This is the backend server.");
});

app.get("/usertable", (req, res) => {
  const query = "SELECT * FROM usertable";
  db.query(query, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
  });
});

app.post("/usertable", (req, res) => {
  const query = "INSERT INTO usertable (userName, password) VALUES (?, ?)";
  const values = [req.body.userName, req.body.password];
  
  db.query(query, values, (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(201).json("User added successfully");
  });
});

app.delete("/usertable/:userID", (req, res) => {
  const userID = req.params.userID;
  const query = "DELETE FROM usertable WHERE userID = ?";
  
  db.query(query, [userID], (err, data) => {
      if (err) return res.json(err);
      return res.json("User Successfully deleted");
  });
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(port, () => {
  console.log("Server connected to port", port);
});
