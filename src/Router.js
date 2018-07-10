import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';  

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar >
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" />
        </Scene>
        <Scene key="main" initial>
          <Scene 
            rightTitle="Add"
            key="employeeList" 
            onRight={() => Actions.employeeCreate()}
            component={EmployeeList} 
            title="Employee List"

          />
          <Scene
            key="employeeCreate"
            title="Create Employee"
            component={EmployeeCreate}

          />  
        </Scene>
      </Scene>
    </Router>
  );
};


export default RouterComponent;
