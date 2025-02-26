import { ComponentPropsWithRef } from "react";

export default function Down(props: ComponentPropsWithRef<'svg'>) {
  return (
    <svg {...props} width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.5 12L16 21L24.5 12" stroke="#0500FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>


  )
}