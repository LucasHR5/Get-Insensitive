import { Injectable } from '@nestjs/common';
import { CreateGetCharacterDto } from './dto/create-get-character.dto';
import { UpdateGetCharacterDto } from './dto/update-get-character.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GetCharacterService {
  constructor (private readonly prisma: PrismaService){}
  async create(data: CreateGetCharacterDto) {
    return await this.prisma.user.create({
      data
    })
  }

  async findByName(name?: string) {
    return await this.prisma.user.findMany({
      where:{
        name:{
          contains: name,
        },
      
      }
    })
  }

  async findAll() {
    return await this.prisma.user.findMany()
  }

  async findOne(id: number) {
    return await this.prisma.user.findFirst({
      where:{
        id: id
      }
    })
  }

  async update(id: number, data: UpdateGetCharacterDto) {
    return await this.prisma.user.update({
      where: {
        id: id
      },
      data
    })
  }

  async remove(id: number) {
    return await this.prisma.user.delete({
      where: {
        id: id
      }
    })
  }
}
