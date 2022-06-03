// 统一设置/获取/删除localStorage

// 设置localStorage
export const setLocal = (name,data) => {
  // 设置的数据是 对象/数组
  if (typeof data === 'object' ) {
    return window.localStorage.setItem(name,JSON.stringify(data))
  }
  // 设置的数据就是普通字符
  window.localStorage.setItem(name,data)
}
// 获取localStorage
export const getLocal = name => {
  // 获取localStorage
  const data = window.localStorage.getItem(name)
  try {
    // 如果报错，代表data不是一个数组或者对象
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}
// 删除localStorage
export const delLocal = name => {
  // 获取localStorage
  window.localStorage.removeItem(name)
}