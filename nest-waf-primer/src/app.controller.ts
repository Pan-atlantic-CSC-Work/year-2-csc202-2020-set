import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //used to specify (HTTP get routes)routes and html or other files
  //Then request information from appservice
  @Get('hello2')
  @Render('index.html')
  getHello2(): {} {
    return this.appService.getHello2();
}
  @Get('hello')
  @Render('home.html')
  getHome(): {} {
    return this.appService.getHome();
}
/*
  @Get('about-us')
  @Render('about-us.html’)
  getAboutUs(): {} {
    return this.appService.getAboutUs();
  }
*/
}
