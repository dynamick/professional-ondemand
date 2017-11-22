import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  template:  `
  <nav
    class="navbar navbar-expand-lg navbar-light " style="background-color: #e3f2fd;">
    <a class="navbar-brand" href="#">
      <img
        src="/assets/Professional-Consultancy-Icon.png"
        width="30"
        height="30"
        class="d-inline-block align-top"
        alt="">
      Professional OnDemand
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span
        class="navbar-toggler-icon"></span>
    </button>

    <div
      class="collapse navbar-collapse"
      id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" routerLink="/" routerLinkActive="active">
          <a class="nav-link" href="javascript:;">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item"  routerLink="/users" routerLinkActive="active">
          <a class="nav-link" href="javascript:;" >Utenti</a>
        </li>
        <li class="nav-item"  routerLink="/roles" routerLinkActive="active">
          <a class="nav-link" href="javascript:;">Ruoli</a>
        </li>
        <li class="nav-item"  routerLink="/professions" routerLinkActive="active">
          <a class="nav-link" href="javascript:;">Professioni</a>
        </li>
        <li class="nav-item"  routerLink="/locations" routerLinkActive="active">
          <a class="nav-link" href="javascript:;">Regioni/Provincie</a>
        </li>
        <!--<li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
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
        </li>-->
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Cerca"
          aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Cerca</button>
      </form>
    </div>
  </nav>`,
  styleUrls: ['./app.component.css']
})
export class AppMenuComponent {
  title = 'app';
}
