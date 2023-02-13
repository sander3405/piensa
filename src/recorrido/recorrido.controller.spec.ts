import { Test, TestingModule } from '@nestjs/testing';
import { RecorridoController } from './recorrido.controller';
import { RecorridoService } from './recorrido.service';

describe('RecorridoController', () => {
  let controller: RecorridoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecorridoController],
      providers: [RecorridoService],
    }).compile();

    controller = module.get<RecorridoController>(RecorridoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
