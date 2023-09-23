import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
function BackArrow() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/");
      }}
      style={{ marginTop: "470px", marginLeft: "15px", cursor: "pointer" }}
    >
      <ArrowBackIosIcon />
    </div>
  );
}
export default BackArrow;
