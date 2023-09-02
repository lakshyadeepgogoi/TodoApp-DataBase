//Import the Model
const Todo = require("../models/Todo");

//Define Route Handler
//Async use because we don't want the main thread , don't want any affect in other function

exports.getTodo = async(req, res) => {
    try{
            //Fetch All Todo items from database
            const todos = await Todo.find({});

            //Response
            res.status(200)
            .json({
                success:true,
                data:todos,
                message:"Entire Todo Data is fetched",
            });
    }
    catch(err) {
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message: 'Server Error',
        });
    }
}

exports.getTodoById = async(req, res) => {
    try{
        //Extract Todo items basic on id
        const id = req.params.id;
        const todo = await Todo.findById( {_id: id})

        //Data for given Id not Found
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No Data Found Worth Fiven ID",
            })
        }
        //Data For given Id Found
        res.status(200).json({
            success:true,
            data:todo,
            message: `Todo ${id} data Successfully Fetched  `,
        });
    }
    catch(err) {
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message: 'Server Error',
        });
        
    }
}