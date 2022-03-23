import Form from './pages/createForm'
import { TemplateForm } from './store/forms/form';

import backendService from "./service/backend"
const formState = new TemplateForm();

function RegisterMyForm() {
  return (
    <Form {...{ formState, backendService }} />
  )
}

export default RegisterMyForm;