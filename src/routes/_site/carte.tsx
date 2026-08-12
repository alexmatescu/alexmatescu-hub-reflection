import { createFileRoute } from "@tanstack/react-router";
import Book from "@/pages/Book";

export const Route = createFileRoute("/_site/carte")({
  component: Book,
});
