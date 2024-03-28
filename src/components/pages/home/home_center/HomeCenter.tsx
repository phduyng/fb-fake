import { cn } from "@/lib/utils";
import HomeCenter1 from "./HomeCenter1";
import HomeCenter2 from "./HomeCenter2";
import { currentUser } from "@/lib/auth";
import { emojiUnitCount, getAllPosts } from "@/data/post";
import ImagePost from "@/components/shared/post/ImagePost";
import { emailExist } from "@/data/emoji";
import { getUserByEmail } from "@/data/user";
import { getAllComments } from "@/data/comment";

interface HomeCenterProps {
  children: React.ReactNode;
  className?: string;
}

const HomeCenter: React.FC<HomeCenterProps> = async ({
  children,
  className,
}) => {
  const posts = await getAllPosts();

  const user = await currentUser();

  return (
    <div
      className={cn(
        "flex w-full flex-col items-center space-y-[18px]",
        className,
      )}
    >
      <HomeCenter1>{children}</HomeCenter1>
      <HomeCenter2 />

      {posts?.map(async (item) => {
        const emojiCount = await emojiUnitCount(item.postId);

        const userPost = await getUserByEmail(item.email);

        const exist = await emailExist({
          email: user?.email ?? "",
          postId: item?.postId,
        });

        return (
          <>
            <ImagePost
              avt={userPost?.image ?? ""}
              author={userPost?.name ?? ""}
              email={userPost?.email ?? ""}
              emailExist={exist}
              emojiCount={emojiCount}
              key={item.postId}
              postId={item.postId}
              cap={item.caption}
              image={item.imageUrl}
              createAt={item?.createdAt}
            />
          </>
        );
      })}
    </div>
  );
};

export default HomeCenter;
