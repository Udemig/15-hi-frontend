import { categories, inputs } from "@/utils/constants";
import Link from "next/link";
import { FC } from "react";
import Field from "./Field";
import { handleProductForm } from "@/utils/action";

const ProductForm: FC = () => {
  return (
    <form action={handleProductForm}>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Sol */}
        <div className="space-y-6">
          {inputs.map((input, key) => (
            <Field key={key} htmlFor={input.name} label={input.label}>
              <input
                type={input.type}
                name={input.name}
                max={input.max}
                min={input.min}
                step={input.step}
                required
                className="input"
              />
            </Field>
          ))}

          {/* Kategori */}
          <Field htmlFor="category" label="Kategori">
            <select name="category" id="category" className="input">
              {categories.map((item) => (
                <option value={item.value}>{item.label}</option>
              ))}
            </select>
          </Field>
        </div>

        {/* Sağ */}
        <div className="space-y-6">
          <Field htmlFor="image_url" label="Resim URL">
            <input id="image_url" type="text" name="image_url" className="input" />
          </Field>

          {/* TODO: ÖNİZLEME */}

          <Field htmlFor="description" label="Açıklama">
            <textarea
              name="description"
              id="description"
              className="input sm:text-sm min-h-55"
            ></textarea>
          </Field>
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-6 mt-6 boder border-zinc-100">
        <Link
          href="/products"
          className="px-5 py-2.5 rounded-lg text-sm font-semibold text-zinc-700 bg-white hover:bg-zinc-50 border border-zinc-200 shadow-sm hover:shadow-md transition"
        >
          İptal
        </Link>
        <button
          type="submit"
          className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm hover:shadow-md transition"
        >
          Kaydet
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
