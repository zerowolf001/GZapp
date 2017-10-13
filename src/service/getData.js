import fetch from '../config/fetch'

/**
 * 获取首页病床列表
 */
export const bedList = (StationID,nameOrNo) => fetch('xihealthcare/bedList/getPatient?StationID='+StationID+'&nameOrNo='+nameOrNo,{});

/**
 * 获取病床详情
 */
export const bedDetails = (bedid) => fetch('xihealthcare/bedList/getDetail?FeeNo=' + bedid,{
});

/**
 * 获取病床医嘱
 * */
export const bedAdvDetail = (id) => fetch('xihealthcare/bedList/getAdviceDetail?feeNo='+id,{});

/**
 * 获取病床用药详情
 * */
export const medication = (id) => fetch('xihealthcare/bedList/getMedication?feeNo='+id,{});

/**
 * 检测帐号是否存在
 */
export const accountLogin =(dnName,password) => fetch('xihealthcare/personal/pdaLogin',{dnName,password,},'POST');

/** 获取信息公告*/
export const news = (StationID) => {
  let data = {
    limit: '20',
  };
  return fetch('xihealthcare/notice/getNotice?StationID='+StationID,data);
};

/** 获取信息详情 */
export const newspage = (id) => fetch('xihealthcare/notice/getNoticeDetail?xh='+id,{});

/** 获取检查安排 */
export const  examineData = (StationID) => fetch('xihealthcare/inspect/getInspect?StationID='+StationID, {});

/** 获取出入院 */
export const InOut = (StationID) => fetch('xihealthcare/entryExitHospital/getEntryExit?StationID='+StationID,{});

/** 获取出入院详情*/
export const ioDetail = (id) => fetch('xihealthcare/entryExitHospital/getEntryExitDetail?xh='+id,{});

/** 获取手术安排 */
export const opsData = (StationID) => fetch('xihealthcare/operationList/getOperation?StationID='+StationID,{});

/** 获取手术详情 */
export const opsDetail = (id) => fetch('xihealthcare/operationList/getOperationDetail?xh='+id,{});


/** 获取需求信息 */
export const im = () => fetch('xihealthcare/demandInfo/demanded?StationID=0397', {});

/** 处理需求信息 */
export const im_list = (xh) => fetch('xihealthcare/demandInfo/demandStatusPDA?StationID=0397&xh=' + xh,{},'POST');

/** 医嘱 */
export const docadvData = (StationID,nameOrNum,chartNo,startTime,endTime) => fetch('xihealthcare/doctorAdvice/getAdvice?StationID='+StationID+'&nameOrNum='+nameOrNum+'&chartNo='+chartNo+'&startTime='+startTime+'&endTime='+endTime,{});

/** 排班 */
export const dutyList = (date,stationID) => fetch('xihealthcare/scheduling/getNurseSchedule',{});

/** 个人中心 */
export const me = (dnName) => fetch('xihealthcare/personal/personalStatistic?dnName='+dnName,{});
export const user = (dnName) => fetch('xihealthcare/personal/personalInfo?dnName='+dnName,{});

export const faq = () => fetch('xihealthcare/problem/getProblemList',{});
export const suggest = (dnName) => fetch('xihealthcare/satisfaction/getFeedBack?dnName='+dnName,{});