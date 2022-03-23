import { makeAutoObservable } from "mobx";
import { instance, Axios } from "./HttpService";

export class Backend {
  constructor(public instance: Axios) {
    makeAutoObservable(this);
  }
  getForm(route: string, params: any = {}) {
    console.log('call a backend for get data ' + route);

    this.instance.data.result = [
      {
        id: 1,
        name: 'test',
        value: 'test',
      }
    ]

    return this.instance.get(route, {
      params
    });
  }
  save(route: string, data: any) {
    return this.instance.post(route, data);
  }
};

export default new Backend(instance);