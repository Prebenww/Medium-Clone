import Link from "next/link"
// @ts-ignore
import {Post} from "../../typing";

interface Props {
    posts: [Post];
}

const Posts = ( { posts }: Props) => {
    return (
        <div>
            {posts.map((post) => (
                <Link key={post._id} href={`/post/${post.slug.current}`}>
                    <div>
                        <h1>Dette er en post</h1>
                    </div>

                </Link>
            ))}
        </div>
    )
}
export default Posts;