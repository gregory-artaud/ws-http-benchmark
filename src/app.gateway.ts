import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import { AppService } from "./app.service";
import { Logger } from "@nestjs/common";
import { Server, Socket } from "socket.io";

@WebSocketGateway()
export class AppGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly appService: AppService) {}

  @SubscribeMessage("message")
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleHello(client: Socket, @MessageBody() message: string) {
    Logger.debug("Received ws message");
  }
}
