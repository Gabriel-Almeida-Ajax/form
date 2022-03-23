import { makeAutoObservable } from "mobx";
import { instance, Axios } from "./HttpService";

export class Backend {
  constructor(public instance: Axios) {
    makeAutoObservable(this);
  }
  getForm() {
    console.log('call a backend for get data');

    this.instance.data.result = [
      {
        id: 1,
        name: 'test',
        value: 'test',
      }
    ]

    return this.instance.get();
  }
  save(route: string, data: any) {
    return this.instance.post(route, data);
  }
};

export default new Backend(instance);