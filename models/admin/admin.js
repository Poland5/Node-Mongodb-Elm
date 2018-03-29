'use strict';

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const adminSchema = new Schema({
  user_name: String,
  password: String,
  id: Number,
  create_time: String,
  admin:{type: String, default: '管理员'},
  status: Number, //1.普通管理, 2.超级管理员
  avatar:{type: String, default: 'default.jpg'},
  city: String
})

adminSchema.index({id:1}) //1是正序， -1是逆序，复合索引是为了提高查询速度。

//由Schema构造生成的模型，除了Schema定义的数据库骨架以外，还具有数据库操作的行为，类似于管理数据库属性、行为的类。
const Admin = mongoose.model('Admin', adminSchema);

export default Admin;
