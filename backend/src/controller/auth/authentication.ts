import { Request, Response, RequestHandler } from "express";


export const register: RequestHandler = async (req: Request, res: Response) => {
    try{
        res.json("hello")
    }catch(error){
        console.log(error);
    }

}