import { MdAdd } from "react-icons/md";
import resolveConfig from "tailwindcss/resolveConfig";

import tailwindConfig from "../../tailwind.config";

const resolvedConfig = resolveConfig(tailwindConfig);

export function EmptyTaskList() {
  return (
    <div className="flex justify-center items-center">
      <h3 className="text-lg text-pampas-500">
        You have no tasks, create one in the plus button
      </h3>

      <MdAdd
        size={24}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        color={resolvedConfig.theme?.colors?.pampas[500]}
      />
    </div>
  );
}
