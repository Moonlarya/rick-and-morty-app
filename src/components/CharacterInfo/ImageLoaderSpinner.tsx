import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";

const ImageLoaderSpinner = () => {
  return (
    <Paper>
      <ClipLoader />
    </Paper>
  );
};

const Paper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export default ImageLoaderSpinner;
