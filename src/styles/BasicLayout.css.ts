import { style } from '@vanilla-extract/css';
import { RegisterContent, RegsiterContainer } from './style.css';

export const styledLayout = style({
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
});

export const styledContent = style({
    width: '90%',
    margin: '12px auto 0 auto',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '20px',
    lineHeight: '2.3rem',
});

export const labelStyle = style({
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: '6px',
    height: '33px',
    padding: '0 0 0 10px',
});

export const BasicMainContent = style([RegisterContent, {
    
}])

export const BasicMainContainer = style([RegsiterContainer, {
    width: 200
}])

export const inputStyle = style({
    fontSize: '12px',
    color: 'lightgray',
    paddingLeft: '10px',
    border: 'none'
});

export const styledText = style({
    textAlign: 'right',
    fontFamily: 'GowunDodum-Regular',
    color: '#fff',
});
