import fetch from '../config/fetch'

/**
 * 获取首页病床列表
 */
export const bedList = () => fetch('xihealthcare/bedInfo/stationPatients?StationID=0397',{
});

/**
 * 获取病床详情
 */
export const bedDetails = (bedid) => fetch('xihealthcare/bedInfo/detailPatient?FeeNo=' + bedid,{
});

/**
 * 检测帐号是否存在
 */
export const accountLogin =(username,password) => fetch('xihealthcare/login_pdaLogin',{
  username,
  password,
},'POST');

/**
 * 获取信息公告
*/
export const news = () => fetch('xihealthcare/information/getInformation?StationID=0397', {
})

/**
 * 获取检查安排
 */
export const ops = () => fetch('xihealthcare/checkPlan/checks?StationID=0397', {
})

/**
 * 获取需求信息
 * */
export const im = () => fetch('xihealthcare/demandInfo/demand?StationID=0397', {
})

/**
 * 处理需求信息
 * */
export const im_list = (xh) => fetch('xihealthcare/demandInfo/demandStatusPDA?StationID=0397&xh=' + xh,{
},'POST')

/**
 * 获取检查安排
 * */
export const examineData = () => fetch('xihealthcare/operationPlan/operations?StationID=0397', {
})
