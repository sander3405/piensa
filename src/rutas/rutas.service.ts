import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRutaDto } from './dto/create-ruta.dto';
import { UpdateRutaDto } from './dto/update-ruta.dto';

@Injectable()
export class RutasService {
  constructor(private prisma: PrismaService) {}
  create(createRutaDto: CreateRutaDto) {
    return this.prisma.ruta.create({ data: createRutaDto });
  }

  findAll() {
    return this.prisma.ruta.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} ruta`;
  }

  update(id: number, updateRutaDto: UpdateRutaDto) {
    return this.prisma.ruta.update({
      where: { id },
      data: updateRutaDto,
    });
  }

  remove(id: number) {
    return this.prisma.ruta.delete({ where: { id } });
  }
}
