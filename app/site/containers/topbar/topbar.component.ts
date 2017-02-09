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
            name: 'OSS Paket Grup',
            exact: true,
            id: 'OSS_PACKAGE_GROUP'
        },
        {
            link: '/dashboard/tariff-group',
            name: 'Tarif Grup',
            exact: true,
            id: 'TARIFF_GROUP'
        },
        {
            link: '/dashboard/oss-package',
            name: 'OSS Paket',
            exact: true,
            id: 'OSS_PACKAGE'
        },
        {
            link: '/dashboard/tariff',
            name: 'Tarifeler',
            exact: true,
            id: 'TARIFF'
        },
        {
            link: '/dashboard/products',
            name: 'Ürünler',
            exact: true,
            id: 'ESHOP_PRODUCTS'
        }
    ];

    constructor(public router: Router) { }

    ngOnInit() { }
}