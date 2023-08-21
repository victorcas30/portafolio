import { Box, Typography } from "@mui/material";

export default function EmojiBullet(props) {
    const { emoji, text } = props;

    return (
        <Box
            component="div"
            fontSize="1rem"
            lineHeight={1.5}
            style={{ cursor: 'default', textAlign: 'left' }}
        >
            <Box
                component="span"
                aria-label="emoji"
                role="img"
                mr={{ xs: '0.5rem', md: '1rem' }}
                fontSize="1.5rem"
            >
                {emoji}
            </Box>
            <Typography variant="body1" component="span">{text}</Typography>
        </Box>
    );
}
