import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <Suspense fallback={"loading..."}>
      <Outlet />
    </Suspense>
  );
}
