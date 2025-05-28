import type { FC } from "react";
import { IconLogo } from "@/static";
import { Link } from "react-router-dom";

export const Logo: FC = () => {
  return (
    <Link to="/">
      <IconLogo />
    </Link>
  );
};
