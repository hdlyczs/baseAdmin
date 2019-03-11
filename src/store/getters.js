const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  visitedViews: state => state.tagsView.visitedViews,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  func: state => state.func.firstMenuIndex
}
export default getters
