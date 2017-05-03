/**
 * Created by programer on 2/3/17.
 */
import Express from 'express';
import path from 'path';
import React from 'react';
import Public from './routes/public';
import Mail from './routes/Mailing';



let app=Express();


app.use(Express.static(path.join(__dirname+'public')));
app.set('view engine','ejs');
app.set('views',path.join(__dirname+'views'));



app.use('/',Public);

app.use('/mail',Mail);





app.listen(3000);