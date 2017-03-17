import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-site-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {

    posts = [
        {
            title: 'Lorem Ipsum',
            thumbnail: '',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            title: 'de Finibus Bonorum et Malorum',
            thumbnail: '',
            content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
        },
        {
            title: 'Orci varius natoque penatibus',
            thumbnail: '',
            content: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse pellentesque scelerisque nisi, et finibus turpis mollis sit amet. Praesent nec interdum diam. Nunc malesuada, est id egestas pellentesque, magna purus convallis augue, quis feugiat augue justo vel tortor. Proin augue sapien, facilisis sit amet varius a, sagittis vel justo. In dictum mauris vitae velit dignissim, a finibus tellus dictum. Aliquam a tincidunt purus. In ut nisi sed erat maximus vulputate id eu neque. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
        },
        {
            title: 'Proin aliquam sapien',
            thumbnail: '',
            content: 'Proin aliquam sapien at turpis vehicula, quis iaculis tellus tempor. Curabitur cursus congue tristique. Phasellus vel ultrices elit. In blandit imperdiet mi aliquet ullamcorper. Integer urna nisl, hendrerit vitae feugiat nec, elementum ac arcu. Morbi nulla purus, malesuada vitae orci quis, egestas sodales nunc. Quisque et dolor vitae nibh maximus tempus.'
        },
        {
            title: 'Ut dapibus tincidunt blandit',
            thumbnail: '',
            content: 'Ut dapibus tincidunt blandit. Sed volutpat lacus ac eleifend aliquam. Aenean vitae ullamcorper magna, et lacinia velit. Proin lacinia, sapien sit amet maximus fermentum, orci mauris maximus nunc, ultrices suscipit massa diam eu purus. Praesent eu sapien nisi. Nulla ante tellus, placerat et elit et, efficitur ultricies lectus. Donec tincidunt diam lacus, id tempus felis molestie sed. Praesent a est et metus placerat consectetur sed eu felis. Nulla ac sapien laoreet, volutpat enim ut, auctor nunc. Aenean nisl nulla, elementum eget fringilla ac, congue at diam. Ut posuere nisl ante, id semper elit facilisis vel. Nulla facilisi. Mauris mi lectus, euismod et tristique non, vulputate et metus. Etiam a ipsum vehicula, egestas dolor eu, mollis eros. Sed finibus dolor non massa pretium congue. Proin fringilla massa eu velit laoreet, non ultricies sem mollis.'
        }
    ];

    constructor() { }

    ngOnInit() { }
}