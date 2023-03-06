import { Box } from "@mui/material";
import { apiUrl } from "App";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        src={`${apiUrl}/assets/${image}`}
        alt="user"
      />
    </Box>
  );
};

export default UserImage;
