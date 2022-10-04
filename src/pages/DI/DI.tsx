import * as React from 'react';
import { useState } from 'react';
import { User } from './user.type';
import { container } from './container';
import { IRepository } from './IRepository.interface';
import { SERVICE_KEYS } from './service-keys.const';

function DI() {
  const [user, setUser] = useState<User | null>(null);
  const userService = container.get<IRepository<User>>(SERVICE_KEYS.USER_REPOSITORY);

  const onButtonClick = async () => {
    const res = await userService.get('12345');
    setUser(res);
  };

  return (
    <div className="App">
      {user && <code>{JSON.stringify(user)}</code>}
      <button onClick={onButtonClick}>Get user</button>
    </div>
  );
}

export default DI;
