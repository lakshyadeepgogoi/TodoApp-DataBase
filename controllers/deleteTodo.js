//Import the Model
const Todo = require("../models/Todo");

//Define Route Handler
//Async use because we don't want the main thread , don't want any affect in other function

exports.deleteTodo = async(req, res) => {
    try{
        const {id} = req.params;

        await Todo.findByIdAndDelete(id);

        res.json({
            success:true,
            messgae:"Todo Deleted",
        })

    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message: 'Server Error',
        });
    }
}

`