/* store/viewStore.js */
import { autobind } from 'core-decorators';
import { observable, computed, action, toJS } from "mobx";
import {asyncAction} from "mobx-utils"
import RootRepository from '../repository';

@autobind
class ViewStore {
  constructor(root) {
    this.root = root;
    this.Repository = new RootRepository(root);
    this.testRepository = this.Repository.testRepository;
  }

  @action callAjax() {
    this.testRepository.test();
  }
}

export default ViewStore;