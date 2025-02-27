"use client";
import RecipeSearchForm from "./components/recipeSearchForm";
import WelcomeComponent from "./components/welcome";
import { useRouter } from "next/navigation";
import Image from "next/image"

export default function Home() {
  const router = useRouter(); 
  const handleSearchSubmit = (data: { query: string; cuisine: string; preparationTime: number }) => {
    const { query, cuisine, preparationTime } = data;
    const queryParams = new URLSearchParams({
      query: query || "",
      cuisine: cuisine || "",
      maxReadyTime: preparationTime ? preparationTime.toString() : "",
    });
    router.push(`/recipe?${queryParams.toString()}`);
  };

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
        <WelcomeComponent/>
        <div className="flex flex-row m-20">
          <Image src='/food.jpg' alt="food" width={600} height={300}>
          </Image>
          <RecipeSearchForm 
            onSearchSubmit={handleSearchSubmit}>
          </RecipeSearchForm>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}

