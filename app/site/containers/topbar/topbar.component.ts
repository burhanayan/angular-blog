import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface Nav {
  link: string;
  name: string;
  exact: boolean;
  id: string;
}
@Component({
    selector: 'app-site-topbar',
    templateUrl: 'topbar.component.html',
    styleUrls: ['topbar.component.scss']
})
export class TopbarComponent implements OnInit {

    nav: Nav[] = [
        {
            link: '/dashboard/oss-package-group',
            name: 'HOME',
            exact: true,
            id: '_home'
        },
        {
            link: '/dashboard/tariff-group',
            name: 'ABOUT',
            exact: true,
            id: '_about'
        },
        {
            link: '/dashboard/oss-package',
            name: 'CONTACT',
            exact: true,
            id: '_contact'
        },
        {
            link: '/dashboard/tariff',
            name: 'Tarifeler',
            exact: true,
            id: 'TARIFF'
        }
    ];

    constructor(public router: Router) { }

    ngOnInit() { }
}