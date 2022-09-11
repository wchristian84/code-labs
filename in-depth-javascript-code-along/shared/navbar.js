import Home from "../pages/home.js";
import Settings from "../pages/settings.js";
import { userservice } from "../user/user.service.js";

export default class Navbar {

    constructor() {
        this.render();
        this.addEventListeners();
        this.changeUsername(userservice.user.username);
        userservice.userObsv.subscribe((data) => {
            this.changeUsername(data);
        })
    }

    render() {
        let appElem = document.getElementById('app');
        appElem.insertAdjacentHTML("beforeend", `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active" id='home' style='cursor:pointer'>
        <a class="nav-link">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item" id='settings'>
        <a class="nav-link" style='cursor:pointer'>Settings</a>
      </li>
      <li class="nav-item" id='user'>
      <div></div>
    </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
        `)
    }
    addEventListeners() {
        // declare variables/access elements //
        let homeElem = document.getElementById('home');
        let settingsElem = document.getElementById('settings');
        let appElem = document.getElementById('app');

        // attach event listeners //
        homeElem.addEventListener('click', ()=> {
            // clear the app element //
            appElem.innerHTML ='';
            // reinitialize the navbar and home //
            new Navbar();
            new Home();

        });

        settingsElem.addEventListener('click', ()=>{
            // clear the app element //
            appElem.innerHTML ='';
            // reinitialize the navbar and settings //
            new Navbar();
            new Settings();
        });
    }

    changeUsername(username) {
        let userElem = document.getElementById('user');
        userElem.innerText = ``;
    }
}