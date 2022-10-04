import { Container } from 'inversify';
import { SERVICE_KEYS } from './service-keys.const';
import { UserRepository } from './user.repository';
import { UserRepository2 } from './user.concrete2.repository';

const _container = new Container();

_container.bind(SERVICE_KEYS.USER_REPOSITORY).to(UserRepository2).inSingletonScope();

export const container = _container;
