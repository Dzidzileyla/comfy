import { HelloWorldApi } from './hello.api';

export class HelloWorldService implements HelloWorldApi {
  async greeting(name = 'World'): Promise<string> {
    return `Hello, ${name}!`;
  }
}
