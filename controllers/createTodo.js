//Import the Model
const Todo = require("../models/Todo");

//Define Route Handler
//Async use because we don't want the main thread , don't want any affect in other function

exports.createTodo = async(req, res) => {
    try{
        //Extract title and description from request body
        const {title,description} = req.body;
        //Create a new Todo Obj and insert in DB
        const response = await Todo.create({title,description});
        //Send a json response with a  success flag
        res.status(200).json( //200  -- OK
            {
                success:true,
                data:response,
                message:"Entry Created Successfully"
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500) //500 Internal Server Error
        .json({
            success:false,
            data:"Internal Server Error",
            message:err.message,
        })
    }
}

