"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";

import { columns } from "@/components/colections/CollectionColumns";
import { DataTable } from "@/components/custom ui/DataTable";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Spinner from "@/components/custom ui/Spinner";

const Collections = () => {
  const [loading, setLoading] = useState(true); // Set initial loading to true
  const [collections, setCollections] = useState([]);
  const route = useRouter();

  const getCollections = async () => {
    try {
      const res = await fetch("/api/collections", {
        method: "GET",
      });

      const data = await res.json();
      setCollections(data);
      setLoading(false);
    } catch (error) {
      console.log("[collections_GET]", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCollections();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="px-10 py-5">
      <div className="flex items-center justify-between">
        <h1 className="text-heading2-bold">Collections</h1>
        <Button
          className="bg-blue-1 text-white hover:bg-blue-600"
          onClick={() => route.push("/collections/new")}
        >
          <Plus className="h-4 w-4 mr-2" />
          Create Collection
        </Button>
      </div>
      <Separator className="bg-grey-1 my-4" />
      <DataTable columns={columns} data={collections} searchKey="title" />
    </div>
  );
};

export default Collections;
