import { forwardRef, ImgHTMLAttributes } from "react";

export const Logo = forwardRef<HTMLImageElement, ImgHTMLAttributes<HTMLImageElement>>((props, ref) => {
  return (
    <img 
      ref={ref} 
      src="/logo.png" 
      alt="Winter Plum & Co. Logo" 
      referrerPolicy="no-referrer"
      {...props} 
    />
  );
});
