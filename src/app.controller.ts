import { Controller, Logger, Post } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(): string {
    Logger.debug("Received http request");
    return this.appService.getHello();
  }
}
