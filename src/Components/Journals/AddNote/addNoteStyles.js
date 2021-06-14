import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
    },
    titleInput: {
        background: 'transparent',
        height: '28px',
        outline: 'none',
        border: 'none',
        borderBottom: '2px solid #42474E',
        color: 'white',
        fontSize: 'x-large',
    },
    descriptionInput: {
        background: 'transparent',
        outline: 'none',
        border: 'none',
        borderBottom: '2px solid #42474E',
        color: 'white',
        fontSize: 'large',
        width: '100%'
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        color: '#2D3A4D',
        fontWeight: 700,
        background: '#2BFEBA',
        height: '53px',
        borderRadius: '30px',
        width: 'inherit',
        '&:hover': {
            backgroundColor: '#2BFE6E',
        },
    },
}));

export default useStyles;