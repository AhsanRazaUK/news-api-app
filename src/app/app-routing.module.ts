import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TopHeadlinesComponent } from "./top-headlines/top-headlines.component";
import { CategoriesService } from "./shared/ui/header/services/categories.service";

let routes: Routes = [
    { path: '', component: TopHeadlinesComponent },
    { path: 'politics', component: TopHeadlinesComponent },
    { path: 'business', component: TopHeadlinesComponent },
    { path: 'entertainment', component: TopHeadlinesComponent },
    { path: 'technology', component: TopHeadlinesComponent },
    { path: 'science', component: TopHeadlinesComponent },
    { path: 'health', component: TopHeadlinesComponent }
];

@NgModule(
    {
        providers: [CategoriesService],
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })

export class AppRoutingModule {
}
