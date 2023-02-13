import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRecorridoDto } from './dto/create-recorrido.dto';
import { UpdateRecorridoDto } from './dto/update-recorrido.dto';

@Injectable()
export class RecorridoService {
  constructor(private prisma: PrismaService) {}
  create(createRecorridoDto: CreateRecorridoDto) {
    return this.prisma.recorrido.create({ data: createRecorridoDto });
  }

  findAll() {
    return this.prisma.recorrido.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} recorrido`;
  }

  update(id: number, updateRecorridoDto: UpdateRecorridoDto) {
    return this.prisma.recorrido.update({
      where: { id },
      data: updateRecorridoDto,
    });
  }

  remove(id: number) {
    return this.prisma.recorrido.delete({ where: { id } });
  }
}
