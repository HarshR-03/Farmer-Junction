import express from 'express';
const router = express.Router();

router.post('/', (req, res) => {
    // Clear session token
    res.sendStatus(200);
});

export default router;