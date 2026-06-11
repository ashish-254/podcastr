import { Id } from "@/convex/_generated/dataModel";
import PodcastDetailsComponent from "./PodcastDetailsComponent";

const PodcastDetailsPage = async ({
  params,
}: {
  params: { podcastId: Id<"podcasts"> };
}) => {
  const { podcastId } = await params;
  return <PodcastDetailsComponent podcastId={podcastId} />;
};

export default PodcastDetailsPage;
