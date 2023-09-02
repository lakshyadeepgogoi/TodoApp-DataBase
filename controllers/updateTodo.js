//Import the Model
const Todo = require("../models/Todo");

//Define Route Handler
//Async use because we don't want the main thread , don't want any affect in other function

exports.updateTodo = async(req, res) => {
    try{
        //Id Fetch 
        const {id} = req.params;
        const {title, description} = req.body;

        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title, description, updateAt : Date.now()},
        )

        res.status(200).json({
            success:true,
            data:todo,
            message:"Updated Successfully",
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

