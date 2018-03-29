'use strict';

import admin from './admin'

//通过 app.use 挂载到不同的路径
export default app => {
	app.get('/', (req, res, next) => {
		res.send('ok');
	});
  app.use('/admin', admin);
}

