import ResultElement from "../result-element/result-element.component";
import Spinner from "../spinner/spinner.component";

import { GenderInfosContainer } from "./gender-infos.style";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectPersonInfos } from "../../store/person/person.selector";
import { updatePersonInfos } from "../../store/person/person.action";

import { getGenderObj } from "../../utils/genderize.utils";

const GenderInfos = () => {
  const dispatch = useDispatch();

  const [gender, setGender] = useState("");
  const [probability, setProbability] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { firstname } = useSelector(selectPersonInfos);

  useEffect(() => {
    const getGender = async () => {
      setIsLoading(true);

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

    getGender();
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
