import { redirect } from "next/navigation";

export default function NotFound() {
  // Redirect to home page
  redirect("/");
}
