
import {Request, Response} from "express";

export const get = async (req : Request, res : Response) => { 
    return res.status(200).json({ping: "pong 🏓", timestamp: Date.now()})
 }
