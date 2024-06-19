import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {EventosModule} from "./eventos/eventos.module";
import {AssentosModule} from "./assentos/assentos.module";
import {PrismaModule} from "@app/core/prisma/prisma.module";
import {AuthModule} from "@app/core/auth/auth.module";

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath: '.env.partner2', isGlobal: true}),
    PrismaModule,
    AuthModule,
    EventosModule,
    AssentosModule
  ],
})
export class Partner2Module {}
