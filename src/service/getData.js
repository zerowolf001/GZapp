import fetch from '../config/fetch'

/**
 * 获取首页病床列表
 */
export const bedList = () => fetch('json/bedlist.asp',{
  StationID:'0397'
});

/**
 * 获取病床详情
 */
export const bedDetails = (bedid) => fetch('json/bedDetail.asp?id=' + bedid,{

});
