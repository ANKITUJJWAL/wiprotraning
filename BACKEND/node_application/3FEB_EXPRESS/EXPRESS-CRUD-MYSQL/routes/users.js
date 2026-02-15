import { Router } from "express";
import pool from "../db/pool.js";

const router = Router();

// POST /api/v1/users/login
router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const [rows] = await pool.query(
      "SELECT * FROM users WHERE username = ? AND password = ?",
      [username, password]
    );

    if (rows.length > 0) {
      return res.json({ status: "success" });
    }

    return res.json({ status: "failed" });

  } catch (err) {
    next(err);
  }
});


// POST /api/v1/users/register
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ status: 'failed', message: 'Missing fields' });
    }

    const [result] = await pool.query(
      'INSERT INTO users (username, password) VALUES (?, ?)',
      [username, password]
    );

    res.status(201).json({ status: 'success' });

  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ status: 'failed', message: 'User exists' });
    }
    res.status(500).json({ status: 'failed' });
  }
});

export default router;
