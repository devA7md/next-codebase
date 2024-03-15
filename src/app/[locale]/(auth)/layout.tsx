import { PropsWithChildren } from "react";

export default function Authlayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col items-center justify-start sm:justify-center py-12 sm:py-0  px-3 sm:px-0 min-h-screen overflow-auto">
      {children}
    </div>
  );
}
