
const Transaction = require('../models/Transaction')



//@desc get all transaction
//@route get /api/v1/transaction
//@access Public
exports.getTransactions =async(req,res,next)=>{
    // res.send('GET Transactions');
    try {
        const transactions = await Transaction.find();

        return res.status(200).json({
            success:true,
            count:transactions.length,
            data: transactions
        });

    } catch (err) {
        return res.status(500).json({
            success:false,
            error:'Server Error',
        });
    }

}
//@desc add transaction
//@route post /api/v1/transaction
//@access Public
exports.addTransactions =async(req,res,next)=>{
    // res.send('POST Transactions');
    try {
        const {text,amount} = req.body;

        const transaction = await Transaction.create(req.body);

        return res.status(201).json({
            success:true,
            data: transaction
        });

    } catch (err) {
        if(err.name === 'ValidationError'){
            const messages = Object.values(err.errors).map(val => val.message);

            return res.status(400).json({
                success:false,
                error:messages
            });
        }else{
            return res.status(500).json({
                success:false,
                error:'Server Error',
            });
        }
    }
}

//@desc delete transaction
//@route delete /api/v1/transaction/:id
//@access Public
exports.deleteTransactions =async(req,res,next)=>{
    // res.send('DELETE Transactions');
    try {
        const transaction = await Transaction.findById(req.params.id);

        if(!transaction){
            return res.status(404).json({
                success:true,
                error:"No Transaction Found"
            });
        }

        await transaction.remove();

        return res.status(200).json({
            success:true,
            data:{}
        })
    } catch (err) {
        return res.status(500).json({
            success:false,
            error:'Server Error',
        });
    }
}