import React from "react";
import { Link } from "react-router-dom";
import { MdBathroom, MdBed, MdLocationOn } from "react-icons/md";

const ListingCard = ({ listing }) => {
  return (
    <div className="bg-white border shadow-md hover:shadow-lg transition-shadow gap-4 overflow-hidden rounded-lg w-full sm:w-[330px]">
      <Link to={`/listing/${listing._id}`}>
        <img
          src={listing.imageUrls[0]}
          className="h-[320px] sm:[h-22px] w-full object-cover hover:scale-105 transition-scale duration-300"
          alt="listings"
        />
      </Link>
      <div className="p-3 flex flex-col gap-2 w-full">
        <p className="text-lg text-slate-700 font-semibold truncate">
          {listing.name}
        </p>
        <div className="flex items-center gap-1">
          <MdLocationOn className="text-green-700 h-4 w-4" />
          <p className="truncate text-gray-700 text-sm">{listing.address}</p>
        </div>
        <p className="truncate text-sm text-gray-600">{listing.description}</p>
        <p className="text-slate-500 mt-2 font-semibold">
          $ {listing.regularPrice}
          {listing.type === "rent" && "/month"}
        </p>
        <div className="flex gap-2">
          <div className="flex items-center gap-1">
            <MdBed className="text-slate-700 h-4 w-4" />
            <p className="truncate text-gray-700 text-sm font-semibold">
              {listing.bedrooms} Beds
            </p>
          </div>
          <div className="flex items-center gap-1">
            <MdBathroom className="text-slate-700 h-4 w-4" />
            <p className="truncate text-gray-700 text-sm font-semibold">
              {listing.bathrooms} Baths
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
