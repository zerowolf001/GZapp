import fetch from '../config/fetch'

/**
 * 获取首页病床列表
 */
export const bedList = () => fetch('project/spa/data.json',{
  StationID:'0397'
});
