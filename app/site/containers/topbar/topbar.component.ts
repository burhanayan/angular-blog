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
        // {
        //     link: '/',
        //     name: 'HOME',
        //     exact: true,
        //     id: '_home'
        // },
        {
            link: '/about',
            name: 'ABOUT',
            exact: true,
            id: '_about'
        },
        {
            link: '/contact',
            name: 'CONTACT',
            exact: true,
            id: '_contact'
        }
    ];
    home = {
        img: 'assets/angular_whiteTransparent.png',
        link: '/'

    };

    constructor(public router: Router) { }

    ngOnInit() { }
}