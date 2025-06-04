import {
  DECLARATIONS,
  formatDateShort,
  getDeclarationStatusColor,
} from "../utils";

export const Declaration = () => {
  return (
    <div className="overflow-hidden border border-gray-200 rounded-lg">
      <table className="min-w-full divide-y divide-gray-200 bg-white">
        <thead className="bg-gray-50 text-left text-sm text-gray-600">
          <tr>
            <th className="px-6 py-4 font-medium">Registration Date</th>
            <th className="px-6 py-4 font-medium">child Name</th>
            <th className="px-6 py-4 font-medium">First Parent Name</th>
            <th className="px-6 py-4 font-medium">Second Parent Name</th>
            <th className="px-6 py-4 font-medium">Birthdate</th>
            <th className="px-6 py-4 font-medium">Gender</th>
            <th className="px-6 py-4 font-medium">Status</th>
            <th className="px-6 py-4 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
          {DECLARATIONS.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 font-medium text-gray-900">
                {formatDateShort(item.registered.split(" ")[0] || "")}
              </td>
              <td className="px-6 py-4">{`${item.child.firstName} ${item.child.lastName}`}</td>
              <td className="px-6 py-4">{`${item.firstParent.firstName} ${item.firstParent.lastName}`}</td>
              <td className="px-6 py-4">{`${item.secondParent.firstName} ${item.secondParent.lastName}`}</td>
              <td className="px-6 py-4">
                {formatDateShort(item.child.birthDate.split(" ")[0] || "")}
              </td>
              <td className="px-6 py-4 uppercase">{item.child.gender}</td>
              <td
                className={`px-6 py-4 font-semibold ${
                  getDeclarationStatusColor(item.status).color
                }`}
              >
                {getDeclarationStatusColor(item.status).label}
              </td>
              <td className="px-6 py-4 text-indigo-600 hover:text-indigo-900 font-medium cursor-pointer">
                actions
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
