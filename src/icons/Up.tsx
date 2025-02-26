import { ComponentPropsWithRef } from "react";

export default function Up(props: ComponentPropsWithRef<'svg'>) {
  return (
    <svg {...props} width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.5 21L16 12L7.5 21" stroke="#0500FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>


  )
}