import { Test, TestingModule } from '@nestjs/testing';
import { TrashController } from './trash.controller';

describe('Trash Controller', () => {
  let controller: TrashController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrashController],
    }).compile();

    controller = module.get<TrashController>(TrashController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
