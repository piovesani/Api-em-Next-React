import { NextApiHandler } from 'next';
import { Users } from '../../../utils/users';

//Getting all users
const handlerGet: NextApiHandler = (req, res) => {
    const {searchId } = req.query;
 
    if(!searchId){
        res.status(200).json(Users);
    }
    else{
        //const getUser = Users.map(getId => getId.id);

        const userValid = Users.filter(user => user.id.toString() === searchId);
        
        if(userValid.length === 0){
            res.status(404).json({ error: "Usuário não encontrado!"});
        }
        else{
            res.status(200).json(userValid);
        }
        
        return;

    }
    
}

//Inserting new user
const handlerPost: NextApiHandler = (req, res) => {
    const { name, lastname } = req.body;

    res.status(201).json({status: true, user: {name, lastname}});
}

const handler: NextApiHandler = (req, res) => {

    switch(req.method){
        case 'GET':
            handlerGet(req, res);
            break;

        case 'POST':
            handlerPost(req, res);
            break;
    }
    
    
}

export default handler;