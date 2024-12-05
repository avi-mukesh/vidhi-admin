import { createDiscussion } from "@/lib/discussion/actions";
import React from "react";
import { createClient } from "@/utils/supabase/server";

export const PostDiscussionTopic = async () => {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  if (data.user) {
    return (
      <form action={createDiscussion}>
        <input name="authorId" hidden value={data.user.id} readOnly />
        <label htmlFor="topic">Topic of Discussion</label>
        <input
          type="text"
          id="topic"
          name="topic"
          required
          className="bg-slate-100"
        />
        <button type="submit">Create</button>
      </form>
    );
  } else {
    return <p>Loading...</p>;
  }
};
