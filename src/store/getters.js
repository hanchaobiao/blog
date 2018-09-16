/*
*包含state的所有计算属性
* */

export default { // 只能放get
  // 总数量
  totalCount (state) {
    return state.todos.length
  },
  // 完成数量
  completeSize (state) {
    return state.todos.reduce((preTotal, todo) => preTotal + (todo.complete ? 1 : 0), 0)
  },
  // 是否全部选中
  isAllCheck (state, getters) {
    return getters.totalCount === getters.completeSize && state.todos.length > 0
  }

}
