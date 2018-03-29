'use strict';

var mongoose = require('mongoose')
var chalk = require('chalk');

mongoose.connect('mongodb://localhost/elmhd');

const db = mongoose.connection;

db.on("error",function(error){
  console.log(
    chalk.red("数据库链接失败", error)
  )
  mongoose.disconnect();
});

db.once("open", function(){
  console.log(
    chalk.green("数据库链接成功")
  );
})

db.on("close", function(){
  console.log(
    chalk.red("数据库断开，重新链接数据")
  );
  mongoose.connect('mongodb://localhost/elmhd')
})