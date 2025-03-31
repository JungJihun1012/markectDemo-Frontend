import { style } from "@vanilla-extract/css";
import { varsObj } from "./theme/styleVar.css";

export const Header = style({
    position: 'fixed',
    backgroundColor: varsObj.color.headerColor,
    width: '100%'
});


export const alignItems = {
    center: 'center',
    end: 'end',
    start: 'start',
    flexEnd: 'flex-end',
    flexStart: 'flex-start'
};

export const justifyContent = {
    center: 'center',
    end: 'end',
    spaceBetween: 'space-between',
    spaceAround: 'space-around',
    spaceEvenly: 'space-evenly',
    left: 'left',
    right: 'right',
    flexEnd: 'flex-end',
    flexStart: 'flex-start'
}