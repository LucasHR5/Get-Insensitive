import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query } from '@nestjs/common';
import { GetCharacterService } from './get-character.service';
import { CreateGetCharacterDto } from './dto/create-get-character.dto';
import { UpdateGetCharacterDto } from './dto/update-get-character.dto';

@Controller('get-character')
export class GetCharacterController {
  constructor(private readonly getCharacterService: GetCharacterService) {}

  @Get()
  async findByName(@Query('name') name?: string){
    return this.getCharacterService.findByName(name);
  }

  @Post()
  create(@Body() data: CreateGetCharacterDto) {
    return this.getCharacterService.create(data);
  }

  @Get()
  findAll() {
    return this.getCharacterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.getCharacterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateGetCharacterDto) {
    return this.getCharacterService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.getCharacterService.remove(id);
  }
}
