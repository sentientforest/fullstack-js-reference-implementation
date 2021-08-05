import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header class="navbar navbar-expand navbar-dark px-4 flex-column flex-md-row">
        <a routerlink="/"
           aria-label="Home"
           class="navbar-brand mr-md-2 mr-0"
           href="/react">
           <img class="logo" src={logo} className="App-logo" alt="logo" />
           <span class="ml-2 d-xl-none d-lg-none d-md-none d-inline">React Client</span>
         </a>
         <div class="navbar-nav-scroll">
           <ul class="navbar-nav flex-row">
             <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
             <li class="nav-item"><a class="nav-link" href="/react">React Client</a></li>
           </ul>
         </div>
      </header>
      <div class="fsjs container">
        <div class="row">
          <div class="col-md-6 list-frame">
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 list-frame">
            <p><i>Todo: implement list view here</i></p>
          </div>
          <div class="col-md">
            <p><i>Todo: implement detail / edit view of countries provided by API call</i></p>
            <p><i>Clicking a country in the left hand list view should update this
              detail view with that country's data.</i></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
