import { Module } from '@nestjs/common';
import { RecorridoService } from './recorrido.service';
import { RecorridoController } from './recorrido.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [RecorridoController],
  providers: [RecorridoService],
  imports: [PrismaModule],
})
export class RecorridoModule {}
