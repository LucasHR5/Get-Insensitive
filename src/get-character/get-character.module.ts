import { Module } from '@nestjs/common';
import { GetCharacterService } from './get-character.service';
import { GetCharacterController } from './get-character.controller';

@Module({
  controllers: [GetCharacterController],
  providers: [GetCharacterService],
})
export class GetCharacterModule {}
