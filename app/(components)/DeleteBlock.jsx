"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useRouter } from "next/navigation";

const DeleteBlock = ({ id }) => {
  const router = useRouter();
  const deleteTicket = async () => {
    const res = await fetch(`https://ticket-app-demo.netlify.app/api/Tickets/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
    }
  };
  return (
    <FontAwesomeIcon
      icon={faTimes}
      className="text-white hover:cursor-pointer hover:text-red-500 text-xl"
      onClick={deleteTicket}
    />
  );
};

export default DeleteBlock;
