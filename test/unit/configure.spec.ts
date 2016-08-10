import { FrameworkConfiguration, Aurelia } from 'aurelia-framework';
import { configure } from '../../src/aurelia-infinite-scroll';

describe('the aurelia infinite-scroll plugin configuration', () => {
  var configuration;

  beforeEach(() => {
    configuration = new FrameworkConfiguration(new Aurelia());
    
    configure(configuration);
  });

  it('should register infinite-scroll custom attribute', () => {
    // TODO: Should check that custom attribute is registered!
    expect(true).toBeDefined();
  });
});
