import { Id } from "@/convex/_generated/dataModel";
import React from "react";
import ProfileDetailsComponents from "./ProfileDetailsComponents";

const Profile = async ({ params }: { params: { profileId: string } }) => {
  const { profileId } = await params;
  return <ProfileDetailsComponents profileId={profileId} />;
};

export default Profile;
