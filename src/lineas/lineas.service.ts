import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLineaDto } from './dto/create-linea.dto';
import { UpdateLineaDto } from './dto/update-linea.dto';

@Injectable()
export class LineasService {
  constructor(private prisma: PrismaService) {}
  create(createLineaDto: CreateLineaDto) {
    return this.prisma.linea.create({ data: createLineaDto });
  }

  findAll() {
    return this.prisma.linea.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} linea`;
  }

  update(id: number, updateLineaDto: UpdateLineaDto) {
    return this.prisma.linea.update({
      where: { id },
      data: updateLineaDto,
    });
  }

  remove(id: number) {
    return this.prisma.linea.delete({ where: { id } });
  }
}
