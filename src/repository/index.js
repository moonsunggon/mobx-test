import TestRepository from './TestRepository';


class RootRepository {
  constructor(app) {
      this.testRepository = new TestRepository(app);
  }
}

export default RootRepository;