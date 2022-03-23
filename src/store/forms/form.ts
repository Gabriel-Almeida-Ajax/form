import { Backend } from '../../service/backend';
import { makeAutoObservable } from "mobx";

type TChangeResponse = {
    field: string;
    value: any;
}

type TConstructor = {
    backendPath: string;
}
export class TemplateForm {
    data: any;
    customChange: null | ((...paramiters: any) => TChangeResponse);
    backendPath: string;
    constructor({ backendPath } = {} as TConstructor) {
        this.data = {};
        this.customChange = null;

        this.backendPath = backendPath;

        makeAutoObservable(this);

    }

    setCustomChange(customChange: any) {
        console.log('set custom change ' + this.backendPath);
        this.customChange = customChange;
    }

    change(field: string, value: any) {
        console.log(`${this.backendPath} changing field (${field})`, value);

        if (!this.customChange)
            return this.data[field] = value;

        const { field: _field, value: _value } = this.customChange(field, value);

        this.data[_field] = _value;
    }

    async save(backendInstance: Backend, route: string) {
        console.log('call a backend for save ' + this.backendPath);
        return backendInstance.save(route, {
            body: this.data,
        });
    }

    async set(promiseCall: (route: string, params: any) => Promise<any>) {
        this.data = await promiseCall(this.backendPath, {});
        console.log('seted data from promise ' + this.backendPath, this.data);
    }
}

export default new TemplateForm();