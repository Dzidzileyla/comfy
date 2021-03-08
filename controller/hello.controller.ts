import { GET, Path } from 'typescript-rest';
import { Inject } from 'typescript-ioc';
import { HelloWorldApi } from '../service';

@Path('/hello')
export class HelloWorldController {
  
  @Inject
  private service!: HelloWorldApi;

  @GET
  async hello(): Promise<string> {
    return this.service.greeting();
  }
}
