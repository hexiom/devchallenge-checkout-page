import React, { LabelHTMLAttributes, ReactElement, ReactNode } from 'react';

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  labelId: string,
  children: ReactNode
}

function WithLabel({labelId, children}: LabelProps) {
  const childrenArray = React.Children.toArray(children)

  return (
    <div>
      <label className='semi-bold text-secondary text-smaller' id={labelId}>
        {childrenArray[0]}
      </label>
      {childrenArray.map((child, index) => {
        if (index == 0 || !React.isValidElement(child)) {
          return null
        }
        return React.cloneElement(child as ReactElement<{'aria-labelledby'?: string}>, {})
      })}
    </div>
  );
}

export default WithLabel;