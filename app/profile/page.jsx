"use client"

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";

const MyProfile = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const { data: session } = useSession();

    const fetchPosts = async () => {
      const res = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await res.json();

      setPosts(data);
    };

    if (session?.user.id) fetchPosts();
  }, []);

  const handleEdit = () => {

  };

  const handleDelete = async () => {

  };

  return (
    <Profile
      name="My"
      desc="Wellcome to your personalized profile page"
      data={ posts }
      handleEdit={ handleEdit }
      handleDelete={ handleDelete }
    />
  );
};

export default MyProfile;
