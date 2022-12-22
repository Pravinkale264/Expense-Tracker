const express = require('express');
const { getTransactions,addTransactions, deleteTransactions } = require('../controllers/transactions');
const router = express.Router();

// router.get('/',(req,res)=> res.send('hello'));
router.route('/').get(getTransactions).post(addTransactions);

router.route('/:id').delete(deleteTransactions);

module.exports = router;

