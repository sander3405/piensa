import { Module } from '@nestjs/common';
import { ParadasService } from './paradas.service';
import { ParadasController } from './paradas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ParadasController],
  providers: [ParadasService],
  imports: [PrismaModule],
})
export class ParadasModule {}
