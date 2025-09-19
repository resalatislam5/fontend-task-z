"use client";

import Heading from "@/components/base/Heading";
import Section from "@/components/base/Section";
import useFetch from "@/hooks/useFetch";
import { UserTypes } from "@/types";
import UserModal from "./UserModal";
import { useState } from "react";

const Users = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<UserTypes | null>(null);
  const { state: users } = useFetch<UserTypes[]>("users");

  return (
    <Section>
      <UserModal isOpen={isOpen} setIsOpen={setIsOpen} item={user} />
      <Heading>ALL Users ({users ? users.length : 0})</Heading>

      <div className="overflow-x-auto mt-10">
        <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                Email
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                Company
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users?.map((e) => (
              <tr
                onClick={() => {
                  setIsOpen(true);
                  setUser(e);
                }}
                key={e.id}
                className="hover:bg-gray-50 hover:cursor-pointer"
              >
                <td className="px-4 py-2 text-sm text-gray-800">{e.name}</td>
                <td className="px-4 py-2 text-sm text-gray-800">{e.email}</td>
                <td className="px-4 py-2 text-sm text-gray-800">
                  {e.company.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
};

export default Users;
