import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LineasModule } from './lineas/lineas.module';
import { RutasModule } from './rutas/rutas.module';
import { ParadasModule } from './paradas/paradas.module';
import { RecorridoModule } from './recorrido/recorrido.module';
import { PrismaModule } from './prisma/prisma.module';
import { EstadoModule } from './estado/estado.module';

@Module({
  imports: [LineasModule, RutasModule, ParadasModule, RecorridoModule, PrismaModule, EstadoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
