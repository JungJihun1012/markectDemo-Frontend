import { style } from "@vanilla-extract/css";
import { varsObj } from "./theme/styleVar.css";
import { Header, alignItems, justifyContent } from "./StyleObj.css";

export const MainHeader = style([Header ,{
    height: '12%',
    borderBottomLeftRadius: 23,
    borderBottomRightRadius: 23,
}]);

export const SecondHeader = style([Header, { height: '7%' }]);


export const SignFont = style({
    fontSize: varsObj.font.Title3,
    fontWeight: varsObj.font.Weight
})

export const SignText = style([SignFont, { 
    color: varsObj.color.white,
    display: 'flex',
    justifyContent: justifyContent.center,
    alignItems: alignItems.center,
    height: '100%',
}]);