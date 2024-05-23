'use client';
import { changeUserRole } from '@/actions';
import { IUser } from '@/interfaces';

interface Props {
  users: IUser[];
}
export const UserTable = ({ users }: Props) => {
  return (
    <table className="w-full text-left rtl:text-right">
      <thead className="uppercase  py-4 px-2 md:px-4 xl:px-6 border-b border-black bg-black text-white">
        <tr>
          <th scope="col" className="px-6 py-3">
            User ID
          </th>
          <th scope="col" className="px-6 py-3 whitespace-nowrap">
            Full Name
          </th>
          <th scope="col" className="px-6 py-3">
            Email
          </th>
          <th scope="col" className="px-6 py-3">
            Role
          </th>
          <th scope="col" className="px-6 py-3 whitespace-nowrap">
            Update role
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr className="bg-white border-b border-black" key={user.id}>
            <th scope="row" className="px-6 py-4 whitespace-nowrap font-normal">
              {user.id}
            </th>
            <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
            <td className={`px-6 py-4 whitespace-nowrap `}>{user.email}</td>
            <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <select
                className="p-3 col-span-2 outline-none"
                value={user.role}
                onChange={(e) => changeUserRole(user.id, e.target.value)}
              >
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
