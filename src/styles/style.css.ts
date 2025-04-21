import { style } from "@vanilla-extract/css";
import { varsObj } from "./theme/styleVar.css";
import { Header, alignItems, justifyContent } from "./StyleObj.css";

export const Container = style({
    backgroundColor: varsObj.color.white,
    width: '100%',
    height: '8.5%',
    display: 'flex',
    alignItems: alignItems.center,
    justifyContent: justifyContent.spaceEvenly,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    border: '1px solid black',
    position: 'fixed',
    bottom: 0,
    zIndex: 1
});

export const MainHeader = style([Header, {
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

export const Text = style([SignFont, { color: varsObj.color.headerColor, marginBottom: '10px', fontFamily: 'Interop', fontWeight: 'bold' }])

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
    marginTop: '10px'
});

export const InputContent = style({
    marginTop: 17,
});

export const RegisterContent = style({
    maxWidth: 600,
    margin: 'auto',
    padding: 20,
    border: '1px solid #ddd',
    borderRadius: 8
})

export const RegsiterContainer = style({
    height: 400,
    overflowY: 'auto',
    border: '1px solid #ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 4,
    backgroundColor: '#fafafa'
});
