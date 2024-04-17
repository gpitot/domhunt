import classNames from "classnames";
import { PropsWithChildren } from "react";

export const Layout: React.FC<PropsWithChildren & { classes?: string }> = ({
  children,
  classes,
}) => {
  return (
    <section
      className={classNames(
        "flex flex-col items-center space-y-8 max-w-screen w-[300px] h-full",
        classes
      )}
    >
      {children}
    </section>
  );
};
