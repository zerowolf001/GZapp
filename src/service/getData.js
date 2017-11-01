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
 * 获取病床检查项目
 */
export const bedExmd = (id) => fetch('xihealthcare/bedList/getChecks?feeNo='+id,{});
export const bedExamine = (feeNo,checkCode,checkDate) => fetch('xihealthcare/bedList/getCheckItem?feeNo='+feeNo+'&checkCode='+checkCode+'&checkDate='+checkDate,{});
export const getBList = (id) => fetch('xihealthcare/bedList/getBList?feeNo='+id,{});
export const getCtList = (id) => fetch('xihealthcare/bedList/getCtList?feeNo='+id,{});
export const getBListDetail = (id) => fetch('xihealthcare/bedList/getBListDetail?xh='+id,{});
export const getCtListDetail = (id) => fetch('xihealthcare/bedList/getCtListDetail?xh='+id,{});
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
export const  examineData = (StationID,bedNum) => fetch('xihealthcare/inspect/getInspect?StationID='+StationID+'&bedNum='+bedNum, {});

/** 获取检查详情*/
export const examineDetail = (id) => fetch('xihealthcare/inspect/getInspectDetails?xh='+id,{});

/** 获取出入院 */
export const InOut = (StationID) => fetch('xihealthcare/entryExitHospital/getEntryExit?StationID='+StationID,{});

/** 获取出入院详情*/
export const ioDetail = (id) => fetch('xihealthcare/entryExitHospital/getEntryExitDetail?xh='+id,{});

/** 获取手术安排 */
export const opsData = (StationID) => fetch('xihealthcare/operationList/getOperation?StationID='+StationID,{});

/** 获取手术详情 */
export const opsDetail = (id) => fetch('xihealthcare/operationList/getOperationDetail?xh='+id,{});

/** 获取需求(任务)信息 */
export const mission = (StationID) => fetch('xihealthcare/stayHandle/getNewAdvice?StationID='+StationID, {});
export const getDemand = (StationID) => fetch('xihealthcare/needInfo/getDemandAndPanic?StationID='+StationID, {});
export const getMessage = (id) => fetch('xihealthcare/needInfo/getMessageDetail?Xh='+id, {});


/** 获取医嘱任务列表*/
export const imYZData = (StationID,dnName) => fetch('xihealthcare/stayHandle/getAdvice?StationID='+StationID+'&dnName='+dnName,{});
export const yzDetail = (id) => fetch('xihealthcare/stayHandle/getAdviceDetail?xh='+id,{});
export const imXQData = (StationID) => fetch('xihealthcare/needInfo/demand?StationID='+StationID,{});

/** 处理需求信息 */
export const im_list = (StationID,xh) => fetch('xihealthcare/needInfo/demandStatusPDA?StationID='+StationID+'&xh='+xh,{});
export const yzClickData = (StationID,xh,type,name) => fetch('xihealthcare/stayHandle/disposeAdvice?StationID='+StationID+'&xh='+xh+'&type='+type+'&name='+name,{});

/** 医嘱 */
export const advcieType = () => fetch('xihealthcare/doctorAdvice/getAdviceType',{});
export const docadvData = (StationID,nameOrNum,chartNo,startTime,endTime) => fetch('xihealthcare/doctorAdvice/getAdvice?StationID='+StationID+'&nameOrNum='+nameOrNum+'&chartNo='+chartNo+'&startTime='+startTime+'&endTime='+endTime,{});

/** 排班 */
export const dutyListYS = (str,stationID) => fetch('xihealthcare/scheduling/getDoctorSchedule?date='+str+'&StationID='+stationID,{});
export const dutyListHS = (str,stationID) => fetch('xihealthcare/scheduling/getNurseSchedule?date='+str+'&StationID='+stationID,{});

/** 个人中心 */
export const me = (dnName) => fetch('xihealthcare/personal/personalStatistic?dnName='+dnName,{});
export const user = (dnName) => fetch('xihealthcare/personal/personalInfo?dnName='+dnName,{});
export const faq = () => fetch('xihealthcare/problem/getProblemList',{});
export const suggest = (dnName) => fetch('xihealthcare/satisfaction/getFeedBack?dnName='+dnName,{});
export const mark = (dnName) => fetch('xihealthcare/satisfaction/getPercent?dnName='+dnName,{});
export const myMonthdate = (str,employeeID) => fetch('xihealthcare/scheduling/getScheduleMonth?date='+str+'&employeeID='+employeeID,{});
export const stayAdvice = (dnName) => fetch('xihealthcare/stayHandle/stayAdvice?&dnName='+dnName,{});
export const stayRequest = (dnName) => fetch('xihealthcare/stayHandle/stayRequest?dnName='+dnName,{});
export const demandRequest = (xh) => fetch('xihealthcare/stayHandle/demandRequest?xh='+xh,{});