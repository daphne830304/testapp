
  
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
  
 
  
  function App() {
    
    return (
      <React.Fragment>
        <ReactRouterDOM.BrowserRouter>
        <ReactBootstrap.Navbar>
            <ReactBootstrap.Nav >
            <ReactBootstrap.Nav.Link >
                <ReactRouterDOM.Link className='navbarlink' to='/movies'>movies
              </ReactRouterDOM.Link>
           
              </ReactBootstrap.Nav.Link>
            </ReactBootstrap.Nav>
  
          </ReactBootstrap.Navbar>

          <ReactRouterDOM.Switch>
          <ReactRouterDOM.Route path="/" exact >
                <Test/>
              </ReactRouterDOM.Route>
            <ReactRouterDOM.Route path='/movies'>
              <Test/>
            </ReactRouterDOM.Route>
          </ReactRouterDOM.Switch>
        
        </ReactRouterDOM.BrowserRouter>
   
  
     </React.Fragment>
    );
  }

  ReactDOM.render(
    <App />,
    document.getElementById('root'))
  
  
      //react async issue-- fixed by adding a conditional in the TestMap component 
  
  //push vs concat. push returns the new length of the array concat returns a new array