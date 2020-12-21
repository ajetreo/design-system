import { createContext } from 'react';
import { breakpoint } from '../shared/styles';
export const defaultHeaderContext = {
    navBreakpoint: breakpoint,
    inverse: false,
};
export const HeaderContext = createContext(defaultHeaderContext);