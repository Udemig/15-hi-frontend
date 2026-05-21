import UserAvatar from "../shared/user-avatar";
import Buttons from "./buttons";
import Content from "./content";
import Dropdown from "./dropdown";
import UserInfo from "./user-info";

const Post = ({ post }) => {
  console.log(post);

  return (
    <div className="border-b border-gray p-4 flex gap-2">
      <UserAvatar url={post.user.photo} name={post.user.name} />

      <div className="w-full flex flex-col gap-1">
        <div className="flex justify-between">
          <UserInfo post={post} />

          <Dropdown post={post} />
        </div>

        <Content content={post.content} />

        <Buttons post={post} />
      </div>
    </div>
  );
};

export default Post;
