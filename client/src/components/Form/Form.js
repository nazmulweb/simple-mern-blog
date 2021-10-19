import { Card, Grid, Box } from "@material-ui/core"
import usestyles from './styles'

const Form = () => {
    const classes = usestyles();

    return (
        <>
            <Grid container justifyContent="center">
                <Grid item item xs={6} md={8}>
                    <Card className={classes.cardStyle}>From</Card>
                </Grid>
            </Grid>
        </>
    )
}

export default Form
