import ResultElement from "../result-element/result-element.component";
import { GenderInfosContainer } from "./gender-infos.style";

const GenderInfos = () => {
  return (
    <GenderInfosContainer>
      <ResultElement label={"Gender"} value={"Male"} />
      <ResultElement label={"Probability"} value={"98.02%"} />
    </GenderInfosContainer>
  );
};

export default GenderInfos;
