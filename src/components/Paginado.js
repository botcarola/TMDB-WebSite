import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Paginado = () => {

    return (
        <>
            <Stack spacing={1}>
                <Pagination count={11} defaultPage={5} />
            </Stack>
        </>
    )
}

export default Paginado;