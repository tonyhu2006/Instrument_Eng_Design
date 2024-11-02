import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserList from './components/UserManagement/UserList';
import ProjectDashboard from './components/ProjectManagement/ProjectDashboard';
// 导入其他组件...

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/users" component={UserList} />
      <Route path="/projects" component={ProjectDashboard} />
      {/* 其他路由 */}
      <Route path="/" exact component={HomePage} />
    </Switch>
  </Router>
);

export default Routes;