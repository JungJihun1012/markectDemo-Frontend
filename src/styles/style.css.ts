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
    border: '1px solid #ccc',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    position: 'fixed',
    bottom: 0,
    zIndex: 99999
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

export const LoginFlexHeader = style([Header,{
    display: 'flex',
    flexDirection: 'row',
    alignItems: alignItems.center,
    height: 50,
    width: '100%',
}]);



export const SignFont = style({
    fontSize: varsObj.font.Title2,
    // fontWeight: varsObj.font.Weight
});

export const SignText = style([SignFont, {
    color: varsObj.color.white,
    display: 'flex',
    alignItems: alignItems.center,
    height: '30%',
    fontFamily: 'Interop',
    position: 'absolute',
    left: '40%'
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
    marginTop: 13,
    display: 'flex',
    gap: 20
});

export const SaveId = style({
    display: 'flex',
    alignItems: 'center',
    gap: 5
});

export const Check = style({
    display: 'none'
});
export const Label = style({
    display: 'inline-block',
    width: 20,
    height: 20,
    border: '2px solid #707070',
    position: 'relative',
    selectors: {
        'input[type="checkbox"]:checked + &::after': {
      content: '"✔"',
      fontSize: 16,
      color: '#000',
      position: 'absolute',
      top: 0,
      left: 0,
      width: 20,
      height: 20,
      textAlign: 'center',
      lineHeight: '20px',
      userSelect: 'none',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: 20,
      height: 20,
      textAlign: 'center',
      lineHeight: '20px',
      userSelect: 'none',
    },
    }
})

export const AutoLogin = style({
    display: 'flex',
    alignItems: 'center',
    gap: 5 
});

export const ButtonContent = style({
    paddingTop: 30,
    width: '80%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    height: 400
});

export const Button = style({
    border: 'none',
    padding: '8px 20px',
    borderRadius: 20,
    textAlign: 'center',
    width: '100%',
    fontSize: varsObj.font.Msg,
    fontWeight: varsObj.font.Weight,
});

export const RegisterContent = style({
    maxWidth: 600,
    margin: 'auto',
    borderRadius: 8
});


export const RegsiterContainer = style({
    height: 500,
    overflowY: 'auto',
    marginTop: 30,
    padding: 20,
    marginBottom: 10,
    backgroundColor: '#fafafa'
});

export const FormBox = style({
    height: 150,
    backgroundColor: varsObj.color.headerColor,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "fixed",
    bottom: 0,
    width: '100%'
});