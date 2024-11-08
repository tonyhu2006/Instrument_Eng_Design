import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import InstAdministration from './components/inst_administration/InstAdministration';
import ProjectManagement from './components/inst_projects/ProjectManagement';
import InstrumentManagement from './components/inst_instrument_index/InstrumentManagement';

// 导入其他组件...

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route exact path="/" component={Dashboard} />
      <Route path="/inst_administration" component={InstAdministration} />
      <Route path="/inst_projects" component={ProjectManagement} />
      <Route path="/inst_instrument_index" component={InstrumentManagement} />
      {/* 其他路由 */}
           
    </Routes>
  </Router>
);

export default Routes;