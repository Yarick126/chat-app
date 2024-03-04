import { ReactNode } from "react";
import { Form } from "react-bootstrap";
import { FieldError } from "react-hook-form";
import { nameFormat } from "../../core/utils/name-format";


function InputFieldForm(props: {name: string, errorMessage: FieldError | undefined, children: ReactNode}) {
  return <>
    <Form.Group className={props.name === 'age' ? 'w-25' : ''}>
        <Form.Label htmlFor={props.name}>{nameFormat(props.name)}</Form.Label>
        {props.children}
        {props.errorMessage && <Form.Text className='text-danger'>This field is required!</Form.Text>}
    </Form.Group>
  </>;
}

export default InputFieldForm;