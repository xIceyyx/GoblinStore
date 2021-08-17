// Styled Components
import styled from "styled-components";
//

// Material UI
import Skeleton from "@material-ui/lab/Skeleton";
//

const CardSkeleton = () => {
  return (
    <Wrapper>
      {Array.from(new Array(1)).map((item, index) => (
        <Skeleton
          animation="pulse"
          variant="rect"
          className="skeleton"
          key={Math.random().toString(16)}
        />
      ))}
    </Wrapper>
  );
};

export default CardSkeleton;

const Wrapper = styled.div`
  width: 100%;
  padding: 12px;

  //
  height: 400px;
  @media only screen and (max-width: 700px) {
    height: 350px;
  }
  //

  .skeleton {
    height: 100%;
    background-color: #cdcdcd;
  }
`;
