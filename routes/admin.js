import express from 'express';
import Admin from '../controller/admin/admin'
const router = express.Router();

/* GET home page. */
router.post('/login', Admin.login);

//每个路由文件通过生成一个 express.Router 实例 router 并导出，通过 app.use 挂载到不同的路径
export default router;
