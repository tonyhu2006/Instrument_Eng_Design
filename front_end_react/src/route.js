import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserList from './components/inst_administration/UserList';
import ProjectDashboard from './components/inst_projects/ProjectDashboard';
import Dashboard from './Dashboard';
// 导入其他组件...

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/inst_administration" component={UserList} />
      <Route path="/inst_projectst" component={ProjectDashboard} />
      {/* 其他路由 */}
      <Route path="/" exact component={Dashboard} />
    </Switch>
  </Router>
);

export default Routes;