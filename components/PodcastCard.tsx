import { PodcastCardProps } from "@/types";
import Image from "next/image";
import React from "react";

const PodcastCard = ({
  description,
  title,
  imgUrl,
  podcastId,
}: PodcastCardProps) => {
  return (
    <div className="cursor-pointer">
      <figure className="flex flex-col gap-2">
        <Image
          src={imgUrl}
          alt={title}
          width={174}
          height={174}
          className="aspect-square h-fit w-full rounded-xl 2xl:size-[200px]"
          unoptimized
        />

        <div>
          <h1 className="text-16 truncate font-bold text-white"> {title}</h1>
          <h2 className="text-12 truncate font-normal capitalize text-white-1">
            {description}
          </h2>
        </div>
      </figure>
    </div>
  );
};

export default PodcastCard;
