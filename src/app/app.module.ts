import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { GroupPage } from '../pages/group/group';
import { SellPage } from '../pages/sell/sell';
import { MePage } from '../pages/me/me';
import { BrowsePage } from '../pages/browse/browse';
import { ActivityPage } from '../pages/activity/activity';
import { RecommendedPage } from '../pages/recommended/recommended';
import { InvitefriendPage } from '../pages/invitefriend/invitefriend';
import { InboxPage } from '../pages/inbox/inbox';
import { MylikePage } from '../pages/mylike/mylike';
import { TabsPage } from '../pages/tabs/tabs';


@NgModule({
  declarations: [
    MyApp,
    GroupPage,
    SellPage,
    MePage,
    BrowsePage,
    ActivityPage,
    RecommendedPage,
    InvitefriendPage,
    InboxPage,
    MylikePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GroupPage,
    SellPage,
    MePage,
    BrowsePage,
    ActivityPage,
    RecommendedPage,
    InvitefriendPage,
    InboxPage,
    MylikePage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
