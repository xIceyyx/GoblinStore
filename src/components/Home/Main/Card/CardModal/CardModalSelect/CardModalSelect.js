// React
import { useState } from "react";
//

// Styled Components
import styled from "styled-components";
//

// Material UI
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
//

// Material UI Variables
const useStyles = makeStyles(() => ({
  MenuItem: {
    fontSize: "16.5px",
  },
  Select: {
    height: "40px",
  },
  DefaultMenuItem: {
    color: "#ccc",
    fontSize: "16.5px",
  },
}));
//

const CardModalSelect = (props) => {
  const [selectedSize, setSelectedSize] = useState(props.defaultOption);
  const classes = useStyles();

  const handleSizes = (e) => {
    setSelectedSize(e.target.value);
  };

  return (
    <Wrapper>
      <Select
        classes={{ root: `${classes.Select} dropdown` }}
        disableUnderline
        MenuProps={{
          disableScrollLock: true,
        }}
        value={selectedSize}
        onChange={handleSizes}
      >
        <MenuItem
          value={props.defaultOption}
          className={classes.DefaultMenuItem}
        >
          {props.defaultOption}
        </MenuItem>
        {props.options.map((option) => (
          <MenuItem value={option} className={classes.MenuItem}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </Wrapper>
  );
};

export default CardModalSelect;

const Wrapper = styled(FormControl)`
  && {
    width: 100%;
    height: 90px;
    border-radius: 4px;

    .dropdown {
      text-align: left;
      border: 2px solid #ccc;
      padding-left: 25px;

      &:hover {
        border: 2px solid #263238;
      }

      &:focus {
        border: 2px solid #38d178;
        background-color: transparent;
      }

      display: flex;
      align-items: center;

      border-radius: 4px;
      font-size: 16.5px;
      overflow: hidden;
      cursor: pointer;
    }
  }
`;
