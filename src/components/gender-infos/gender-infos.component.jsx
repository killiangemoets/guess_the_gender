import ResultElement from "../result-element/result-element.component";
import { GenderInfosContainer } from "./gender-infos.style";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPersonInfos } from "../../store/person/person.selector";
import { updatePersonInfos } from "../../store/person/person.action";

import Spinner from "../spinner/spinner.component";

import { getGenderObj } from "../../utils/genderize.utils";

const GenderInfos = () => {
  const [gender, setGender] = useState("");
  const [probability, setProbability] = useState("");

  const { firstname } = useSelector(selectPersonInfos);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    const getGender = async () => {
      const { gender: newGender, probability: newProbability } =
        await getGenderObj(firstname);

      setGender(newGender);
      setProbability(newProbability);

      dispatch(
        updatePersonInfos({
          probability: newProbability,
          gender: newGender,
        })
      );
      setIsLoading(false);
    };
    if (firstname.length) getGender();
  }, [dispatch, firstname]);
  return (
    <GenderInfosContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <ResultElement label={"Gender"} value={gender} />
          <ResultElement label={"Probability"} value={probability} />
        </>
      )}
    </GenderInfosContainer>
  );
};

export default GenderInfos;
