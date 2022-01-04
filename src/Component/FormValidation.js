import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
function FormValidation(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const book = {
      title: data.title,
      detail: data.detail,
    };
    props.onAddBook(book);
  };
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
          <label>Kitap Adı</label>
          <input
            placeholder="Kitap Adı"
            type="text"
            {...register("title", { required: false, maxLength: 60 })}
          />
        </Form.Field>
        {errors.title && <p>Bir kitap öner :)</p>}
        <Form.Field>
          <label>Detay</label>
          <input
            placeholder="Detay"
            type="text"
            {...register("detail", { required: false, maxLength: 100 })}
          />
        </Form.Field>

        <Button type="submit">Kitap Öner</Button>
      </Form>
    </div>
  );
}
export default FormValidation;
