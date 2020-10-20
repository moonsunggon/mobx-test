import ViewStore from './ViewStore';

class  RootStore{
  constructor(){
    this.viewStore = new ViewStore(this);
  }
}

export default RootStore;