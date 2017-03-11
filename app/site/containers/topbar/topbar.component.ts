import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface Nav {
    link: string;
    name: string;
    exact: boolean;
    id: string;
}
interface SocialMedia {
    link: string;
    src: string;
    name: string;
    target: string;
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

    socialMediaIcons: SocialMedia[] = [
        {
            link: 'https://www.facebook.com',
            name: 'Facebook',
            src: 'assets/icons/facebook.png',
            target: '_blank'
        },       
        {
            link: 'https://www.twitter.com',
            name: 'Twitter',
            src: 'assets/icons/twitter.png',
            target: '_blank'
        },        {
            link: 'https://www.linkedin.com',
            name: 'Linkedin',
            src: 'assets/icons/linkedin.png',
            target: '_blank'
        },        
        {
            link: 'https://www.github.com',
            name: 'Github',
            src: 'assets/icons/github.png',
            target: '_blank'
        }
    ];

    home = {
        img: 'assets/angular_whiteTransparent.png',
        link: '/'

    };

    constructor(public router: Router) { }

    ngOnInit() { }
}