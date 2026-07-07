import { addCommentAction } from "@/actions/comments/addCommentAction";
import { getCommentsAction } from "@/actions/comments/getCommentsAction";

export default async function CommentSection({ bugId }) {
  const comments = await getCommentsAction(bugId);

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

      <h2 className="mb-8 text-2xl font-semibold text-white">
        Comments
      </h2>

      <div className="space-y-4">

        {comments.length === 0 ? (
          <p className="text-zinc-500">
            No comments yet.
          </p>
        ) : (
          comments.map((item) => (
            <div
              key={item._id}
              className="rounded-xl border border-zinc-800 bg-zinc-950 p-5"
            >
              <h3 className="font-semibold text-white">
                {item.userId?.name}
              </h3>

              <p className="mt-2 text-zinc-400">
                {item.comment}
              </p>
            </div>
          ))
        )}

      </div>

      <form action={addCommentAction} className="mt-8 space-y-4">

        <input
          type="hidden"
          name="bugId"
          value={bugId}
        />

        <textarea
          name="comment"
          rows={5}
          placeholder="Write a comment..."
          className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-4 text-white"
        />

        <button
          type="submit"
          className="rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Add Comment
        </button>

      </form>

    </div>
  );
}