import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateParadaDto } from './dto/create-parada.dto';
import { UpdateParadaDto } from './dto/update-parada.dto';

@Injectable()
export class ParadasService {
  constructor(private prisma: PrismaService) {}
  create(createParadaDto: CreateParadaDto) {
    return this.prisma.paradas.create({ data: createParadaDto });
  }

  findAll() {
    return this.prisma.paradas.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} parada`;
  }

  update(id: number, updateParadaDto: UpdateParadaDto) {
    return this.prisma.parada.update({
      where: { id },
      data: updateParadaDto,
    });
  }

  remove(id: number) {
    return this.prisma.paradas.delete({ where: { id } });
  }
}
