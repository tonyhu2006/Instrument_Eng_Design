import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserList from './components/user_management/UserList';
import ProjectDashboard from './components/project_management/ProjectDashboard';
// 导入其他组件...

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/user_management" component={UserList} />
      <Route path="/project_management" component={ProjectDashboard} />
      {/* 其他路由 */}
      <Route path="/" exact component={HomePage} />
    </Switch>
  </Router>
);

export default Routes;