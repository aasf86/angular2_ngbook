System.register(["@angular/platform-browser-dynamic", "@angular/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var platform_browser_dynamic_1, core_1;
    var RedditApp, ArticleComponent;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let RedditApp = class RedditApp {
                constructor() {
                }
                addArticle(title, link) {
                    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
                }
            };
            RedditApp = __decorate([
                core_1.Component({
                    selector: 'reddit',
                    directives: [ArticleComponent],
                    template: (`
        <form class="ui large form segment">
            <h3 class="ui header">Add a Link</h3>
            <div class="field">
                <label for="title">Title:</label>
                <input name="title" #newtitle>
            </div>
            <div class="field">
                <label for="link">Link:</label>
                <input name="link" #newlink>
            </div>
            <button (click)="addArticle(newtitle, newlink)" class="ui positive right floated button">
                Submit link
            </button>            
        </form>
        <div class="ui grid posts">
            <reddit-article></reddit-article>
        </div>        
    `)
                }), 
                __metadata('design:paramtypes', [])
            ], RedditApp);
            let ArticleComponent = class ArticleComponent {
                constructor() {
                    this.title = 'Angular 2';
                    this.link = 'http://angular.io';
                    this.votes = 10;
                }
                voteUp() {
                    this.votes += 1;
                }
                voteDown() {
                    this.votes -= 1;
                }
            };
            ArticleComponent = __decorate([
                core_1.Component({
                    selector: 'reddit-article',
                    host: {
                        class: 'row'
                    },
                    template: (`
        <div class="four wide column center aligned votes">
            <div class="ui statistic">
                <div class="value">
                    {{ votes }}
                </div>
                <div class="label">
                    Points
                </div>
            </div>
        </div>
        <div class="twelve wide column">
            <a class="ui large header" href="{{ link }}">
                {{ title }}
            </a>
            <ul class="ui big horizontal list voters">
                <li class="item">
                <a href (click)="voteUp()">
                    <i class="arrow up icon"></i>
                    upvote
                </a>
                </li>
                <li class="item">
                    <a href (click)="voteDown()">
                        <i class="arrow down icon"></i>
                        downvote
                    </a>
                </li>
            </ul>
        </div>
`) }), 
                __metadata('design:paramtypes', [])
            ], ArticleComponent);
            exports_1("ArticleComponent", ArticleComponent);
            platform_browser_dynamic_1.bootstrap(RedditApp);
        }
    }
});
//# sourceMappingURL=app.js.map