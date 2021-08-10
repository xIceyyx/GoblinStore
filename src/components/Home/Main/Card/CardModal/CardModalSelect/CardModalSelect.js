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

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
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
    fontSize: "16.5px",
  },

  icon: {
    fill: "#546e7a",
    width: "40px",
    height: "40px",
    position: "absolute",
    top: "0",
    bottom: "0",
    right: "2.5px",
    margin: "auto",
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
      <p className="label">{props.label}</p>
      <Select
        classes={{
          root: classes.root,
          select: `${classes.Select} dropdown`,
          icon: classes.icon,
        }}
        disableUnderline
        MenuProps={{
          disableScrollLock: true,
        }}
        value={selectedSize}
        onChange={handleSizes}
        IconComponent={ExpandMoreIcon}
      >
        <MenuItem
          value={props.defaultOption}
          className={classes.DefaultMenuItem}
          style={{ color: "#546e7a" }}
        >
          {props.defaultOption}
        </MenuItem>
        {props.options.map((option) => (
          <MenuItem
            value={option}
            className={classes.MenuItem}
            key={Math.random().toString(16)}
          >
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
    border-radius: 4px;
    margin-bottom: 17.5px;
    
    //
    display: grid;
    justify-content: space-between;
    align-items: center;
    grid-template-columns: max-content 300px;
    @media only screen and (max-width: 960px) {
      grid-template-columns: max-content 75%;
    }
    //

    .label {
      //
      font-size: 16px;
      @media only screen and (min-width: 600px) {
        font-size: 17px;
      }

      @media only screen and (min-width: 960px) {
        font-size: 18px;
      }

      @media only screen and (min-width: 1280px) {
        font-size: 19px;
      }
      //

      font-style: normal;
      font-weight: 500;
      line-height: 28px;
      letter-spacing: -0.06px;
      color: #546e7a;
    }

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
