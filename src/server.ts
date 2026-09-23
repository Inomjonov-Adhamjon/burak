// Architectual pattern:  
//      (MVC) Model View Controller, 
//      (DI) Dependency Injection, 
//      (MVP) Model View Presenter
//  backend dagi malumotlar oqimini tartibgaga soladigan vosita


// Design pattern:  Middleware, Decorator

import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import app from './app';

mongoose.connect(process.env.MONGO_URL as string, {})
    .then(data => {
        console.log('mongodb connection succeed');
        const PORT = process.env.PORT ?? 3003;
        app.listen(PORT, function () {
            console.log(`server is running successfully on port: ${PORT}`)
        })
    })
    .catch(err => console.log('error on connection on mongodb:', err));

