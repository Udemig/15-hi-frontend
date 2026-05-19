import PostForm from "../post-form";
import PostList from "../post-list";

const Main = ({ user }) => {
  return (
    <main className="border-x border-gray min-h-screen h-full">
      <header className="sticky top-0 z-10 bg-primary/70 backdrop-blur border-b border-gray p-4 font-bold">
        Anasayfa
      </header>

      <PostForm user={user} />

      <PostList />
    </main>
  );
};

export default Main;
