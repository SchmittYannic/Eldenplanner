import { SVGProps } from "react";

const MdArrowUpward = (props: SVGProps<SVGSVGElement>) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path fill="none" d="M0 0h24v24H0V0z"></path><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path>
    </svg>
);

export default MdArrowUpward;