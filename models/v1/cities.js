//引入初始值
import mongoose from 'mongoose';
import cityData from '../../InitData/cities'

//创建模式
const citySchema = new mongoose.Schema({
  data:{}
});

//创建模型
const Cities = mongoose.model('Cities', citySchema);//这里就能同步到数据库


//查找Data 或 创建collections

//创建cityGuess模型方法

//创建hotCity模型方法

//创建cityGroup模型方法
citySchema.statics.cityGruop = function(){
  return new Promise(async (resolve, reject) => {
    try{
      const city = this.findOne();
      const cityObj = city.data;
      delete(cityObj._id);
      delete(cityObj.hotCities);
      resolve();
    }catch(err){
      reject({
        name:'ERROR_DATA',
        message:'数据查找失败'
      });
      console.log(err);
    }
  })
}

Cities.findOne((err, data) => {
  if(!data){
    Cities.create({data: cityData})
  }
})

//暴露模型
export default Cities;