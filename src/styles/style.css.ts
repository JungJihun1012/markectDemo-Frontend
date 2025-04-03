import { style } from "@vanilla-extract/css";
import { varsObj } from "./theme/styleVar.css";
import { Header, alignItems, justifyContent } from "./StyleObj.css";

export const MainHeader = style([Header ,{
    height: '12vh',
    borderBottomLeftRadius: 23,
    borderBottomRightRadius: 23,
}]);

export const SecondHeader = style([Header, {
    height: '7vh',
    width: '100%'
}]);

export const LoginFlexHeader: any = style({
    display: 'flex',
    flexDirection: 'row',
    alignItems: alignItems.center,
    width: '57%',
    justifyContent: justifyContent.spaceBetween,
    height: '100%'
});

export const SignFont = style({
    fontSize: varsObj.font.Title2,
    fontWeight: varsObj.font.Weight
});

export const SignText = style([SignFont, { 
    color: varsObj.color.white,
    display: 'flex',
    alignItems: alignItems.center,
    height: '30%',
    fontFamily: 'Interop'
}]);

export const Text = style([SignFont, {color: varsObj.color.headerColor, marginBottom: '10px', fontFamily: 'Interop', fontWeight: 'bold'}])

export const InputContainer = style({
    paddingTop: '40px',
    width: '80%',
    margin: '0 auto'
});

export const Input = style({
    border: `2px solid ${varsObj.color.headerColor}`,
    padding: '18px 10px',
    textAlign: 'left',
    width: '100%',
    borderRadius: '8px',
    marginTop:'10px'
});

export const InputTypeCheckBox = style({
});