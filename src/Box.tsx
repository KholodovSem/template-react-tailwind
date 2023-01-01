import { PropsWithChildren, HTMLAttributes } from 'react';
import classNames from 'classnames';

interface BoxProps extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {
  flexDirection?: 'flex-row' | 'col';
  justifyContent?:
    | 'justify-start'
    | 'justify-end'
    | 'justify-center'
    | 'justify-between'
    | 'justify-around';
  alignItems?: 'align-baseline' | 'align-top' | 'align-middle' | 'align-bottom';
  gap?: string;
}

const Box = ({
  children,
  flexDirection,
  justifyContent,
  alignItems,
  gap,
  ...rest
}: BoxProps) => {
  const style = classNames(
    rest.className,
    'flex',
    'w-full',
    flexDirection,
    justifyContent,
    alignItems,
    gap
  );

  return (
    <div className={style} {...rest}>
      {children}
    </div>
  );
};

export default Box;
