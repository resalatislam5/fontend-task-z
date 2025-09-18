import PostDetails from "./PostDetails";

interface postProps {
  slug: number;
}

const page = ({ params }: { params: postProps }) => {
  return <PostDetails slug={params.slug} />;
};

export default page;
