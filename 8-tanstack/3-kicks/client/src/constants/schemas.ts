import * as yup from "yup";

// sayıları ve özel karakterleri kabul etmez
const nameRegex = /^[A-Za-zÇĞİÖŞÜçğıöşü\s]+$/;

// şifre alanı için en az 1 büyük, 1 küçük, 1 sayı, 1 özel karakter içerdiğini kontrol eder
const lowerCaseRegex = /[a-z]/;
const upperCaseRegex = /[A-Z]/;
const numberRegex = /[0-9]/;
const specialCharRegex = /[^\w\s]/;

export const REGISTER_SCHEMA = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "isim 2 karakterden kısa olamaz")
    .trim()
    .matches(nameRegex, "geçersiz karakter mevcut")
    .required("isim alanı zorunludur"),

  lastName: yup
    .string()
    .min(2, "soyad 2 karakterden kısa olamaz")
    .trim()
    .matches(nameRegex, "geçersiz karakter mevcut")
    .required("soyad alanı zorunludur"),

  email: yup
    .string()
    .email("geçerli bir e-posta adresi giriniz")
    .required("e-posta alanı zorunludur"),

  password: yup
    .string()
    .min(6, "şifre 6 karakterden kısa olamaz")
    .matches(lowerCaseRegex, "şifre en az 1 küçük harf içermeli")
    .matches(upperCaseRegex, "şifre en az 1 büyük harf içermeli")
    .matches(numberRegex, "şifre en az 1 sayı içermeli")
    .matches(specialCharRegex, "şifre en az 1 özel karakter içermeli")
    .required("şifre alanı zorunludur"),
});

export const PRODUCT_SCHEMA = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("isim alanı zorunludur")
    .min(2, "isim en az 2 karakter olmalıdır")
    .max(80, "isim en fazla 80 karakter olabilir"),

  price: yup.number().required("fiyat alanı zorunludur").moreThan(0, "fiyat 0'dan büyük olmalıdır"),

  discount: yup
    .number()
    .min(0, "indirim 0'dan küçük olamaz")
    .max(100, "indirim 100'den büyük olamaz")
    .default(0),

  color: yup
    .string()
    .trim()
    .required("renk alanı zorunludur")
    .min(2, "renk en az 2 karakter olmalıdır"),

  size: yup
    .string()
    .trim()
    .required("numara alanı zorunludur")
    .min(2, "numara en az 2 karakter olmalıdır"),

  description: yup
    .string()
    .trim()
    .required("açıkla alanı zorunludur")
    .min(10, "açıkla en az 2 karakter olmalıdır")
    .max(500, " açıklama en fazla 500 karakter olabilir"),

  isNew: yup.boolean().notRequired().default(false),

  gender: yup
    .string()
    .required("cinssiyet alanı zorunludur")
    .oneOf(["men", "women", "unisex"], "geçersiz cinsiyet seçimi"),
});
