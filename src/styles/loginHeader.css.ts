import { style } from "@vanilla-extract/css";
import { colorVars } from "./theme/color.css";


export const loginHeaderRoot = style({
    position: 'fixed',
    height: '6%',
    color: colorVars.headerColor,
    backgroundColor: colorVars.headerColor,
    width: '100%'
});