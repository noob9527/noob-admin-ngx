import { AbstractRestResource } from '../../na-core/na-utils/na-rest-request.domain';

export abstract class AbstractResource extends AbstractRestResource {
  id: Maybe<number>;
}

export abstract class AbstractAuditable extends AbstractResource {
  createAt: Maybe<number>;
  updateAt: Maybe<number>;
}
