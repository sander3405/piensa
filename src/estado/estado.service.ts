import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEstadoDto } from './dto/create-estado.dto';
import { UpdateEstadoDto } from './dto/update-estado.dto';

@Injectable()
export class EstadoService {
  constructor(private prisma: PrismaService) {}
  create(createEstadoDto: CreateEstadoDto) {
    return this.prisma.estado.create({ data: createEstadoDto });
  }

  findAll() {
    return this.prisma.estado.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} estado`;
  }

  update(id: number, updateEstadoDto: UpdateEstadoDto) {
    return this.prisma.estado.update({
      where: { id },
      data: updateEstadoDto,
    });
  }

  remove(id: number) {
    return this.prisma.estado.delete({ where: { id } });
  }
}


