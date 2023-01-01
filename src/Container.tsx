import { PropsWithChildren, HTMLAttributes } from 'react';
import classNames from 'classnames';

const Container = ({
  children,
  ...rest
}: PropsWithChildren & HTMLAttributes<HTMLDivElement>) => {
  const style = classNames(rest.className, 'mx-auto my-0');

  return (
    <div className={style} {...rest}>
      {children}
    </div>
  );
};

export default Container;
