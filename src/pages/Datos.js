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
    const [sintomas, setSintomas] = useState([])
    const [proteger, setProteger] = useState([])
    const datosAux = []

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
    
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await api.get('/getSintomas')
                setSintomas(response.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchData()
    },[])
    
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await api.get('/getProteger')
                setProteger(response.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchData()
    },[])
    
    const getSintomas = (id) => {
        for(var i = 0; i < sintomas.length; i++){
            if((id-1) === i){
                return sintomas[i].sintomas;
            }
        }
    }
    
    const getProteger = (id) => {
        for(var i = 0; i < proteger.length; i++){
            if((id-1) === i){
                return proteger[i].proteger;
            }
        }
    }

    return(
        <>
            <center>
                <h1>CIBERRIESGOS</h1>
                <Box sx={{ flexGrow: 3 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            datos.map(d =>
                                <Grid item xs={4}>
                                    <Card sx={{maxWidth: 400, maxHeight: 1000}} class="data_card">
                                        <img class="card-image" src={d.img} width="100" height="100"/>
                                        <b><Typography class="card-title" variant="h5" component="div">
                                            {d.name}
                                        </Typography></b>
                                        <CardContent>
                                            <Table sx={{ minWidth: 400}} size="small">
                                                <TableBody >
                                                    <TableRow >
                                                        <TableCell sx={{borderBottom: 0 }}>
                                                            <Typography variant="p" component="div">
                                                                <b>Definición:</b>
                                                            </Typography>
                                                        </TableCell>
                                                        <TableCell sx={{borderBottom: 0 }}>
                                                            <Typography variant="p" component="div">
                                                                {d.def}
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell sx={{borderBottom: 0 }}>
                                                            <Typography variant="p">
                                                                <b>Como reconocerlo:</b>
                                                            </Typography>
                                                        </TableCell>
                                                        <TableCell sx={{borderBottom: 0 }}>
                                                            <Typography variant="p" component="div">
                                                                {d.sintomas.map(p =>
                                                                    <p> - {getSintomas(p)}</p>    
                                                                )}
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell sx={{borderBottom: 0 }}>
                                                            <Typography variant="p" component="div">
                                                                <b>Como protegerlo:</b>
                                                            </Typography>
                                                        </TableCell>
                                                        <TableCell sx={{borderBottom: 0 }}>
                                                            <Typography variant="p" component="div">
                                                                {d.proteger.map(p =>
                                                                    <p>- {getProteger(p)}</p>    
                                                                )}
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </CardContent>
                                        <iframe width="400" height="250" src={d.video} title="YouTube video player" frameborder="0" allowfullscreen></iframe>
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