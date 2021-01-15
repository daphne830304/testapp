
  
function Test() {
  
  function clickCounter() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }
  return (
  <div className='myInput'>
    <div id="result">results</div>
    <button onClick={()=>clickCounter()}>Click me!</button>
    <p>Click the button to see the counter increase.</p>
    <p>Close the browser tab (or window), and try again, and the counter will continue to count (is not reset).</p>
  </div>)
}
  
  const AuthContext = React.createContext(null);
  
  function App() {
    
    const [loggedIn, setLoggedIn] = React.useState(null);
  

    const VARIANTS = {
      true: 'success',
      false: 'danger'
    };
  
    React.useEffect(() => {
      fetch('/api/check_session')
        .then(res => res.json())
        .then(data => {
          setLoggedIn(data.session) 
          // console.log(data.session)
          // console.log(loggedIn)
        })
    }, [loggedIn]);
  
    const NavLinks = {
      true: (
  
          <ReactBootstrap.Navbar id='homepage-nav-bar' className='navbarcolor' fixed="top" variant="light">
            <ReactBootstrap.Navbar.Brand className='home-navbarlink' href="/">HOME</ReactBootstrap.Navbar.Brand>
            <ReactBootstrap.Nav >
              <ReactBootstrap.Nav.Link >
                <ReactRouterDOM.Link className='navbarlink' to='/movies'>FILMS
              </ReactRouterDOM.Link>
              </ReactBootstrap.Nav.Link>
              <ReactBootstrap.Nav.Link >
                <ReactRouterDOM.Link className='navbarlink' to='/tables'>tables
              </ReactRouterDOM.Link>
              </ReactBootstrap.Nav.Link>
            </ReactBootstrap.Nav>
           
          </ReactBootstrap.Navbar>
      ),
  
      false: (
        <div id='homepage-login' class='h1-homepage'>
          <ReactBootstrap.Navbar id='homepage-nav-bar' className='navbarcolor' fixed="top" variant="light">
            <ReactBootstrap.Nav >
            <ReactBootstrap.Nav.Link >
                <ReactRouterDOM.Link className='navbarlink' to='/movies'>movies
              </ReactRouterDOM.Link>
           
              </ReactBootstrap.Nav.Link>
            </ReactBootstrap.Nav>
  
          </ReactBootstrap.Navbar>
        </div>
  
      )
    };
    return (
      <AuthContext.Provider value={{loggedIn, setLoggedIn}}>
  
        <ReactRouterDOM.BrowserRouter>
          
          {NavLinks[loggedIn]}
          
          <ReactRouterDOM.Switch>
          <ReactRouterDOM.Route path="/" exact >
                <Test/>
              </ReactRouterDOM.Route>
            <ReactRouterDOM.Route path='/movies'>
              <Test/>
            </ReactRouterDOM.Route>
          </ReactRouterDOM.Switch>
        
        </ReactRouterDOM.BrowserRouter>
   
  
  
    </AuthContext.Provider>
     
    );
  }

  ReactDOM.render(
    <App />,
    document.getElementById('root'))
  
  
      //react async issue-- fixed by adding a conditional in the TestMap component 
  
  //push vs concat. push returns the new length of the array concat returns a new array