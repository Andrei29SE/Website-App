import Pagination from "@mui/material/Pagination"
import Stack from "@mui/material/Stack"

export default function PagePagination(props) {
  const { count, page, onChange } = props
  return (
    <Stack sx={{ marginX: "auto" }} auto spacing={2}>
      <Pagination
        count={count}
        page={page}
        onChange={onChange}
        shape='rounded'
        size='large'
        showFirstButton
        showLastButton
      />
    </Stack>
  )
}
