import { PartialType } from '@nestjs/mapped-types';
import { CreateGetCharacterDto } from './create-get-character.dto';

export class UpdateGetCharacterDto extends PartialType(CreateGetCharacterDto) {}
