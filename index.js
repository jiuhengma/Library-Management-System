/*
    实现图书管理系统的后台接口
*/
const express = require('express');
const router = require('./router.js');
const bodyParser = require('body-parser');

const app = express();

app.use('/www', express.static('public'));
app.use(bodyParser.urlencoded({ extended : false }));
app.use(router);

app.listen(8080, () => {
    console.log('running...');
});