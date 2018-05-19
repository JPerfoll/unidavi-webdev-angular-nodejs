import { VeiculosModule } from './veiculos.module';

describe('VeiculosModule', () => {
  let veiculosModule: VeiculosModule;

  beforeEach(() => {
    veiculosModule = new VeiculosModule();
  });

  it('should create an instance', () => {
    expect(veiculosModule).toBeTruthy();
  });
});
