import { Module } from '@nestjs/common';
import { LineasService } from './lineas.service';
import { LineasController } from './lineas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';


@Module({
  controllers: [LineasController],
  providers: [LineasService],
  imports: [PrismaModule],
})
export class LineasModule {}


