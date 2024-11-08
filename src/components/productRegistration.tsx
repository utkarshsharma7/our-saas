"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface RoomDetails {
  numberOfRooms: number;
  image: File | null;
}

interface ProductData {
  logo: File | null;
  description: string;
  title: string;
  area: string;
  stallQuantity: number;
  services: string;
  sittingCapacity: string;
  totalRooms: {
    acRoom: RoomDetails;
    nonAcRoom: RoomDetails;
    acHall: RoomDetails;
    nonAcHall: RoomDetails;
  };
  other: string;
}

const ProductRegistration: React.FC = () => {
  const [data, setData] = useState<ProductData>({
    logo: null,
    description: "",
    title: "",
    area: "",
    stallQuantity: 0,
    services: "",
    sittingCapacity: "",
    totalRooms: {
      acRoom: { numberOfRooms: 0, image: null },
      nonAcRoom: { numberOfRooms: 0, image: null },
      acHall: { numberOfRooms: 0, image: null },
      nonAcHall: { numberOfRooms: 0, image: null },
    },
    other: "",
  });

  const handleInputChange = (
    field: keyof ProductData,
    value: File | string | number | null
  ) => {
    setData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleRoomDetailsChange = (
    roomType: keyof ProductData["totalRooms"],
    key: keyof RoomDetails,
    value: number | File | null
  ) => {
    setData((prevData) => ({
      ...prevData,
      totalRooms: {
        ...prevData.totalRooms,
        [roomType]: {
          ...prevData.totalRooms[roomType],
          [key]: value,
        },
      },
    }));
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Product Registration</h1>

      <Label>Logo (Image Upload)</Label>
      <Input
        type="file"
        onChange={(e) =>
          handleInputChange("logo", e.target.files ? e.target.files[0] : null)
        }
      />

      <Label>Description</Label>
      <Textarea
        value={data.description}
        onChange={(e) => handleInputChange("description", e.target.value)}
      />

      <Label>Title</Label>
      <Input
        type="text"
        value={data.title}
        onChange={(e) => handleInputChange("title", e.target.value)}
      />

      <Label>Area (Location)</Label>
      <Input
        type="text"
        value={data.area}
        onChange={(e) => handleInputChange("area", e.target.value)}
      />

      <Label>Stall Quantity</Label>
      <Input
        type="number"
        value={data.stallQuantity}
        onChange={(e) => handleInputChange("stallQuantity", +e.target.value)}
      />

      <Label>Services</Label>
      <Input
        type="text"
        value={data.services}
        onChange={(e) => handleInputChange("services", e.target.value)}
      />

      <Label>Sitting Capacity</Label>
      <Input
        type="text"
        value={data.sittingCapacity}
        onChange={(e) => handleInputChange("sittingCapacity", e.target.value)}
      />

      <h2 className="text-xl font-semibold mt-4">Total Number of Rooms</h2>
      {Object.keys(data.totalRooms).map((roomType) => (
        <div key={roomType} className="mb-4">
          <Label>{roomType.replace(/([A-Z])/g, " $1")}</Label>
          <Input
            type="number"
            placeholder="Number of Rooms"
            value={
              data.totalRooms[roomType as keyof typeof data.totalRooms]
                .numberOfRooms
            }
            onChange={(e) =>
              handleRoomDetailsChange(
                roomType as keyof typeof data.totalRooms,
                "numberOfRooms",
                +e.target.value
              )
            }
          />
          <Input
            type="file"
            onChange={(e) =>
              handleRoomDetailsChange(
                roomType as keyof typeof data.totalRooms,
                "image",
                e.target.files ? e.target.files[0] : null
              )
            }
          />
        </div>
      ))}

      <Label>Other</Label>
      <Input
        type="text"
        value={data.other}
        onChange={(e) => handleInputChange("other", e.target.value)}
      />

      <Button className="mt-4">Submit</Button>
    </div>
  );
};

export default ProductRegistration;
