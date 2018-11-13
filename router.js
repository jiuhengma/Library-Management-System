/*
    路由模块
    restsful api 
    get        http://localhost:8080/books
    get        http://localhost:8080/books/book
    post       http://localhost:8080/books/book
    get        http://localhost:8080/books/book/1
    put        http://localhost:8080/books/book
    delete     http://localhost:8080/books/book/2
*/

const express = require('express');
const router = express.Router();
const service = require('./service.js');

// 显示所有的图书信息
router.get('/books', service.allBooks);
// 添加图书（提交表单）
router.post('/books/book', service.addBook);
// 编辑图书 根据id查询相应信息
router.get('/books/book/:id', service.getBookById);
// 提交编辑的数据
router.put('/books/book', service.editBook);
// 删除图书操作
router.delete('/books/book/:id', service.deleteBook);

module.exports = router;