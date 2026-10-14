import { Box, styled, Typography } from "@mui/material";

export const AboutMeSectionWrapperStyled = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    scrollMarginTop: '100px',
    width: '100%',
}));

export const AboutMeSectionLabelStyled = styled(Typography)(({theme}) => ({
    fontFamily: 'var(--font-pixel)',
    fontSize: '1rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: theme.palette.text.primary,
    marginBottom: '16px',
}));

export const AboutMeWrapperStyled = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems:'center',
    gap: '40px',
    width: '80%',
    padding: '40px',
    backgroundColor: theme.palette.background.paper,
    border: `4px solid ${theme.palette.text.primary}`,
    boxShadow: `6px 6px 0 0 ${theme.palette.primary.main}`,
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        padding: '28px 20px',
    },
}));

export const AboutMePhotoFrameStyled = styled(Box)(({theme}) => ({
    position: 'relative',
    flexShrink: 0,
    width: '240px',
    aspectRatio: '694 / 1021',
    borderRadius: '8px',
    overflow: 'hidden',
    border: `3px solid ${theme.palette.common.black}`,
    boxShadow: `6px 6px 0 0 ${theme.palette.secondary.main}`,
    transform: 'rotate(-2deg)',
}));

export const AboutMeTextWrapperStyled = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    maxWidth: '480px',
}));

export const AboutMeLeadStyled = styled(Typography)(({theme}) => ({
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: '1.4rem',
    color: theme.palette.text.primary,
}));

export const AboutMeDescriptionStyled = styled(Typography)(({theme}) => ({
    color: theme.palette.text.secondary,
    fontFamily: 'var(--font-body)',
    fontSize: '1.05rem',
    lineHeight: 1.6,
    fontWeight: 400,
}));