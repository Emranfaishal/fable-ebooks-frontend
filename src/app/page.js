
import BlogData from "@/Component/home/BlogData";
import BookstorePromo from "@/Component/home/BookstorePromo";
import HeroBanner from "@/Component/home/HeroBanner";
import TestimonilsPage from "@/Component/home/TestimonialsPage";
import TopRatedBooks from "@/Component/home/TopRatedBooks";


export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <HeroBanner></HeroBanner>
      <TopRatedBooks></TopRatedBooks>
      <BlogData></BlogData>
      <TestimonilsPage></TestimonilsPage>
      <BookstorePromo></BookstorePromo>
    </div>
  );
}
