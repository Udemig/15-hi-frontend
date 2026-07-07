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
