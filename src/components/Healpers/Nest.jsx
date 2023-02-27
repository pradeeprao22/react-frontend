import { cloneElement } from "react";

export const Nest = ({ element, children }) => 
    element.reduceRight(
        (out, element) => cloneElement(element, {}, out),
        <>{ children }</>
    );