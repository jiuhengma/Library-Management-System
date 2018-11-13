/*
    业务逻辑处理页面
*/
const db = require('./db.js');


// 渲染主页面
exports.allBooks = (req, res) => {
    let sql = 'select * from book';
    db.base(sql, null, (result) => {
        res.json(result);
    });
};


// 添加图书并保存数据
exports.addBook = (req, res) => {
    // 获取表单数据
    let info = req.body;
    let sql = 'insert into book set ?';
    db.base(sql, info, (result) => {
        if(result.affectedRows == 1){
            res.json({flag : 1});
        }else{
            res.json({flag : 2});
        }
    });
};

// 跳转到编辑图书页面
exports.getBookById = (req, res) => {
    let id = req.params.id;
    let sql = 'select * from book where id = ?';
    let data = [id];
    db.base(sql, data, (result) => {
        res.json(result[0]);
    });
    
};

// 编辑图书并更新数据
exports.editBook = (req, res) => {
    let info = req.body;
    let sql = 'update book set name=?, author=?, category=?, description=? where id=?';
    let data = [info.name, info.author, info.category, info.description, info.id];
    db.base(sql, data, (result) => {
        if(result.affectedRows == 1){
            res.json({flag: 1});
        }else{
            res.json({flag: 2});
        }
    });
};

// 删除图书信息
exports.deleteBook = (req, res) => {
    let id = req.params.id;
    let sql = 'delete from book where id =?';
    let data = [id];
    db.base(sql, data, (result) => {
        if(result.affectedRows == 1){
            res.json({flag: 1});
        }else{
            res.json({flag: 2});
        }
    });
};

