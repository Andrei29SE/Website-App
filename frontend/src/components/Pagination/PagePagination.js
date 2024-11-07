import Pagination from "@mui/material/Pagination"
import Stack from "@mui/material/Stack"

export default function PagePagination(props) {
  const { count, onChange, page } = props
  return (
    <Stack sx={{ marginX: "auto" }} auto spacing={2}>
      <Pagination
        count={count}
        onChange={onChange}
        shape='rounded'
        defaultPage={page}
        size='large'
        showFirstButton
        showLastButton
      />
    </Stack>
  )
}
