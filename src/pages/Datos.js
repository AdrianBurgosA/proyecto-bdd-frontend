import React, {useEffect, useState} from 'react'
import api from '../api/Axios'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import '../css/data.css';

const Datos = () => {
    const [datos, setDatos] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await api.get('/getData')
                setDatos(response.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchData()
    },[])

    return(
        <>
            <center>
                <h1>CIBERRIESGOS</h1>

                <Box sx={{ flexGrow: 3 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            datos.map(d =>
                                <Grid item xs={4}>
                                    <Card sx={{maxWidth: 500, maxHeight: 500}} class="data_card">
                                        <img class="card-image" src={d.link} width="300"/>
                                        <b><Typography class="card-title" variant="h5" component="div">
                                            {d.titulo}
                                        </Typography></b>
                                        <CardContent>
                                            <Table sx={{ minWidth: 400}} size="small">
                                                <TableBody >
                                                    <TableRow >
                                                        <TableCell sx={{borderBottom: 0 }}>
                                                            <Typography variant="p" component="div">
                                                                Definición:
                                                            </Typography>
                                                        </TableCell>
                                                        <TableCell sx={{borderBottom: 0 }}>
                                                            <Typography variant="p" component="div">
                                                                {d.definicion}
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell sx={{borderBottom: 0 }}>
                                                            <Typography variant="p">
                                                                Como reconocerlo:
                                                            </Typography>
                                                        </TableCell>
                                                        <TableCell sx={{borderBottom: 0 }}>
                                                            <Typography variant="p" component="div">
                                                                {d.reconocer}
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell sx={{borderBottom: 0 }}>
                                                            <Typography variant="p" component="div">
                                                                Como protegerlo:
                                                            </Typography>
                                                        </TableCell>
                                                        <TableCell sx={{borderBottom: 0 }}>
                                                            <Typography variant="p" component="div">
                                                                {d.proteger}
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </CardContent>
                                        <iframe width="350" height="200" src={d.link_video} title="YouTube video player" frameborder="0" allowfullscreen></iframe>
                                    </Card>
                                </Grid>
                            )
                        }
                    </Grid>
                </Box><br/><br/>
                <Button variant="contained" class="back-button" onClick={()=>{window.location="/"}}>
                    Regresar
                </Button>
            </center>
        </>
    )
}

export default Datos