import { makeStyles } from '@material-ui/core/styles';
<style>
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
</style>
export default makeStyles({
    container: {
        padding: '0 5%',
        width: '100%' ,
        margin: 0,
    },
    card:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        width:'100%',
        height:'100%',
        padding:'1rem',
        borderRadius: 10,
        color:'white'
    },
    infoCard:{
        display:'flex',
        flexDirection:'column',
        textAlign:'center'
    }
});