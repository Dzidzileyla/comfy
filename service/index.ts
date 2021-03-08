import { Container } from 'typescript-ioc';

export * from './hello.api';
export * from './hello.service';

import config from './ioc.config';

Container.configure(...config);
