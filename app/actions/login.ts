import { redirect } from "next/navigation";

export async function login(prevState: any, formData: FormData) {
  const rawFormData = {
    username: formData.get("username"),
    password: formData.get("password"),
  };
  console.log(
    rawFormData,
    rawFormData.username == "admin" && rawFormData.password == "admin"
  );

  if (rawFormData.username == "admin" && rawFormData.password == "admin") {
    redirect("/");
  } else {
    return { message: "Username and password is not correct" };
  }
}
