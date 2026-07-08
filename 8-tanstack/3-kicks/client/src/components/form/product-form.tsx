import type { FC } from "react";
import { INPUT_ARRAY } from "../../constants";
import FormField from "./form-field";
import { Form, Formik } from "formik";

const ProductForm: FC = () => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form className="flex flex-col gap-5">
        {INPUT_ARRAY.map((input) => (
          <FormField {...input} />
        ))}

        <button className="bg-blue py-1 px-4 rounded-md text-white hover:bg-blue/80">Gönder</button>
      </Form>
    </Formik>
  );
};

export default ProductForm;
