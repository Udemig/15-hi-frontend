import type { FC } from "react";
import { INPUT_ARRAY } from "../../constants";
import FormField from "./form-field";
import { Form, Formik } from "formik";
import { PRODUCT_SCHEMA } from "../../constants/schemas";
import type { Product, ProductValues } from "../../types";

interface Props {
  mutate: (data: ProductValues) => void;
  isPending: boolean;
  data?: Product;
}

const ProductForm: FC<Props> = ({ mutate, isPending, data }) => {
  const initialValues = {
    name: data?.name || "",
    price: data?.price || 0,
    discount: data?.discount || 0,
    color: data?.color || "",
    size: data?.size || "",
    description: data?.description || "",
    isNew: data?.isNew || false,
    gender: data?.gender || "men",
  } as const;

  const handleSubmit = (values: ProductValues) => {
    mutate(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={PRODUCT_SCHEMA}>
      <Form className="flex flex-col gap-5 md:mb-10">
        {INPUT_ARRAY.map((input) => (
          <FormField {...input} />
        ))}

        <button
          disabled={isPending}
          className="bg-blue py-1 px-4 rounded-md text-white hover:bg-blue/80 w-full max-w-1/2 ms-auto"
        >
          Gönder
        </button>
      </Form>
    </Formik>
  );
};

export default ProductForm;
