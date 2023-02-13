import { Test, TestingModule } from '@nestjs/testing';
import { RecorridoService } from './recorrido.service';

describe('RecorridoService', () => {
  let service: RecorridoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecorridoService],
    }).compile();

    service = module.get<RecorridoService>(RecorridoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
