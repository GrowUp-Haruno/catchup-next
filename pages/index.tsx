import Link from "next/link";
import { VFC } from "react";

const IndexPage: VFC = () => {
  return (
    <div>
      Hello World.{" "}
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
};
export default IndexPage;
