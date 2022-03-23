import React from "react";
import { observer } from "mobx-react-lite";
import { TemplateForm } from "../store/forms/form";
import { Backend } from "../service/backend"

type Props = {
    formState: TemplateForm;
    backendService: Backend;
}
const CreateForm: React.FC<Props> = ({ formState, backendService, ...props }) => {
    formState.setCustomChange((field: string, value: any) => {
        return {
            field,
            value: `changed ${value}`
        }
    });

    formState.set(backendService.getForm());


    formState.change('name', 'name')
    formState.change('password', 'password')

    console.log('saveing', formState.save(backendService, '/forms/data/createForm'));
    return <></>
};
export default observer(CreateForm);