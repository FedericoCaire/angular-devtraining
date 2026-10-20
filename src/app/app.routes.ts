import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "posts",
        loadChildren: () => import('./PostsModule/posts.module').then((m) => m.PostsModule)
    },
    {
        path: "",
        redirectTo: "posts",
        pathMatch: "full"
    }
];
