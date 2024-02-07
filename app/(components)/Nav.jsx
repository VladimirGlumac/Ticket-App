import { faTicket, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center bg-nav p-4 px-8">
      <Link href="/">
        <FontAwesomeIcon icon={faHome} className="icon" size="xl" />
      </Link>

      <Link href="/TicketPage/new">
        <div className="flex items-center justify-center gap-4 bg-slate-500 p-2 rounded-xl hover:bg-slate-700">
          <p className="md:text-xl">Create Ticket</p>
          <FontAwesomeIcon icon={faTicket} className="icon" />
        </div>
      </Link>
    </nav>
  );
};

export default Nav;
