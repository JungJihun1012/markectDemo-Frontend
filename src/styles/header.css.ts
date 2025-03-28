import { style } from "@vanilla-extract/css";
import { colorVars } from "./theme/color.css";

export const headerRoot = style({
    position: "fixed",
    color: colorVars.headerColor,
    height: '12%',
    borderBottomLeftRadius: 23,
    borderBottomRightRadius: 23,
    backgroundColor: colorVars.headerColor,
    width: '100%'
});