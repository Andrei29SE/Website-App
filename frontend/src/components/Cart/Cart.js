import Badge from "@mui/material/Badge"
import { styled } from "@mui/material/styles"
import IconButton from "@mui/material/IconButton"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

// styling Bage
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `1.5px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    background: "var(--green-color)",
  },
}))

//Cart component
function Cart() {
  return (
    <IconButton aria-label='cart'>
      <StyledBadge badgeContent={1} color='secondary'>
        <ShoppingCartIcon sx={{ color: "white" }} />
      </StyledBadge>
    </IconButton>
  )
}

export default Cart
