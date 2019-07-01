import ajax from "../utils/ajax.js"
//查找所有的门店
export function storeList(data) {
  return new Promise((resolve, reject) => {
    ajax.request("storeList","POST",data, function (res) {
      resolve(res);
    }, function (err) {
      reject(err);
    })
  })
}

//当前门店
export function storeInfo(data) {
  return new Promise((resolve, reject) => {
    ajax.request("storeInfo", "POST", data, function (res) {
      resolve(res);
    }, function (err) {
      reject(err);
    })
  })
}

//轮播图
export function banner(data) {
  data=data||{}
  return new Promise((resolve, reject) => {
    ajax.request("banner", "POST", data, function (res) {
      resolve(res);
    }, function (err) {
      reject(err);
    })
  })
}

//排队人数
export function lineNum(data) {
  data = data || {}
  return new Promise((resolve, reject) => {
    ajax.request("order/findNormarQueue", "GET", data, function (res) {
      resolve(res);
    }, function (err) {
      reject(err);
    })
  })
}

//线上下单
export function saveOrder(data) {
  data = data || {}
  return new Promise((resolve, reject) => {
    ajax.request("order/saveOrder", "POST", data, function (res) {
      resolve(res);
    }, function (err) {
      reject(err);
    })
  })
}
//查询订单信息
export function orderList(data) {
  data = data || {}
  return new Promise((resolve, reject) => {
    ajax.request("order/list", "GET", data, function (res) {
      resolve(res);
    }, function (err) {
      reject(err);
    })
  })
}
//取消订单
export function cancelOrder(data) {
  data = data || {}
  return new Promise((resolve, reject) => {
    ajax.request("order/cancelOrder", "POST", data, function (res) {
      resolve(res);
    }, function (err) {
      reject(err);
    })
  })
}
//订单评论
export function commentOrder(data) {
  data = data || {}
  return new Promise((resolve, reject) => {
    ajax.request("order/commentOrder", "POST", data, function (res) {
      resolve(res);
    }, function (err) {
      reject(err);
    })
  })
}

//查询门店服务列表
export function serviceList(data) {
  data = data || {}
  return new Promise((resolve, reject) => {
    ajax.request("store/service/list", "GET", data, function (res) {
      resolve(res);
    }, function (err) {
      reject(err);
    })
  })
}

//获取门店技师列表
export function staffList(data) {
  data = data || {}
  return new Promise((resolve, reject) => {
    ajax.request("staff/list", "GET", data, function (res) {
      resolve(res);
    }, function (err) {
      reject(err);
    })
  })
}

//汽车品牌
export function getCarBands(data) {
  data = data || {}
  return new Promise((resolve, reject) => {
    ajax.request("getCarBands", "POST", data, function (res) {
      resolve(res);
    }, function (err) {
      reject(err);
    })
  })
}

//增加我的车辆
export function addCars(data) {
  data = data || {}
  return new Promise((resolve, reject) => {
    ajax.request("addCars", "POST", data, function (res) {
      resolve(res);
    }, function (err) {
      reject(err);
    })
  })
}

//我的车辆
export function myCars(data) {
  data = data || {}
  return new Promise((resolve, reject) => {
    ajax.request("myCars", "GET", data, function (res) {
      resolve(res);
    }, function (err) {
      reject(err);
    })
  })
}

//获取车辆所有规格
export function getDisplacement(data) {
  data = data || {}
  return new Promise((resolve, reject) => {
    ajax.request("getDisplacement", "POST", data, function (res) {
      resolve(res);
    }, function (err) {
      reject(err);
    })
  })
}

//删除我的车辆
export function deleteCar(data) {
  data = data || {}
  return new Promise((resolve, reject) => {
    ajax.request("deleteCar", "POST", data, function (res) {
      resolve(res);
    }, function (err) {
      reject(err);
    })
  })
}

//微信登录
export function login_by_weixin(data) {
  data = data || {}
  return new Promise((resolve, reject) => {
    ajax.request("login_by_weixin", "POST", data, function (res) {
      resolve(res);
    }, function (err) {
      reject(err);
    })
  })
}


