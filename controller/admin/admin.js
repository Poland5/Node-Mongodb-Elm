'use strict';

import adminModle from '../../models/admin/admin';

class Admin{
  login(req, res, next){
    //用于解析表单数据的Node.js模块，特别是文件上传
    const form = new formidable.IncomingForm();
    
    
  }
}

//在外部import的时候，获取的是一整个Admin实例
export default new Admin();