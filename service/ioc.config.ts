import { ContainerConfiguration, Scope } from 'typescript-ioc';
import { HelloWorldApi } from './hello.api';
import { HelloWorldService } from './hello.service';

const config: ContainerConfiguration[] = [
  {
    bind: HelloWorldApi,
    to: HelloWorldService,
    scope: Scope.Singleton,
  },
];

export default config;
