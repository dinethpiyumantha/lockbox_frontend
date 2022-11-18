import './App.less';
import MainLayout from './layouts/MainLayout';
import {useAuth0} from '@auth0/auth0-react';



function App() {
  const {
    loginWithRedirect, 
    logout,
    user, 
    isAuthenticated} = useAuth0() 

  return (
          
      <div className='App'>
          
              <button onClick={loginWithRedirect}>Login</button><br/><br/>
                    
              <button onClick={logout}>Logout</button>
        
          
          <h3>User is {isAuthenticated? "Loged in" : "Not Loged in"}</h3>
          {isAuthenticated && (
            <pre style={{textAlign: 'start'}}>
            {JSON.stringify(user, null, 2)}</pre>
          )}
          <MainLayout/>
        </div> 
      
  );
}

export default App;
