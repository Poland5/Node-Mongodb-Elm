'use strict';

module.exports = {
  port: '8003',
  url:'mongodb://localhost/elmhd',
  session:{
    name:'SID',
    secret:'SID',
    cookie:{
      httpOnly:true,
      secure:false,
      maxAge:   365 * 24 * 60 * 60 * 1000,
    }
  }
}