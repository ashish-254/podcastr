import { Suspense } from "react";
import LoaderSpinner from "@/components/LoaderSpinner";
import DiscoverContent from "./DiscoverContent";

export default function DiscoverPage() {
  return (
    <Suspense fallback={<LoaderSpinner />}>
      <DiscoverContent />
    </Suspense>
  );
}
