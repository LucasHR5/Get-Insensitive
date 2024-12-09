import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { GetCharacterModule } from './get-character/get-character.module';

@Module({
  imports: [GetCharacterModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
