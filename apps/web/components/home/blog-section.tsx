import { blog_posts } from "@/const/fake-data";
import { BlogPost } from "./blog-post";
import { ViewAllBtn } from "./view-all-btn";

export default function BlogSection() {
  return (
    <section className="container py-12">
      <div>
        <div className="flex mb-6 justify-between items-center w-full">
          <h2 className="text-xl font-bold">Tin mới</h2>
          <ViewAllBtn href="article" />
        </div>

        <div className="grid gap-4">
          {/* Mobile: 1 post */}
          <div className="grid grid-cols-1 gap-4 sm:hidden">
            {blog_posts.slice(0, 2).map((post, index) => (
              <BlogPost key={index} {...post} />
            ))}
          </div>

          {/* Small: 2 posts */}
          <div className="hidden sm:grid lg:hidden grid-cols-2 gap-4">
            {blog_posts.slice(0, 2).map((post, index) => (
              <BlogPost key={index} {...post} />
            ))}
          </div>

          {/* Large: 3 posts */}
          <div className="hidden lg:grid 2xl:hidden grid-cols-3 gap-4">
            {blog_posts.slice(0, 3).map((post, index) => (
              <BlogPost key={index} {...post} />
            ))}
          </div>

          {/* 2XL: 5 posts */}
          <div className="hidden 2xl:grid grid-cols-5 gap-4">
            {blog_posts.slice(0, 5).map((post, index) => (
              <BlogPost key={index} {...post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
