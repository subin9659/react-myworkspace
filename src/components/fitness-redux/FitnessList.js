import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import FitnessItem from "./FitnessItem";
import LineChart from "./LineChart";
import FitnessPagination from "./FitnessPagination";

const FitnessList = () => {
  const data = useSelector((state) => state.fitness);
  console.log("-- fitness state in FitnessList Component --");
  console.log(data);
  const dispatch = useDispatch();

  const inbody = (data) => {
    if (data.length === 0) return [];
    let inbodyData = data.content;
    let inbodyLength = inbodyData.length;
    console.log(inbodyLength);
  };

  useEffect(() => {
    // 서버에서 데이터를 받아오는 action을 실행
    dispatch({ type: "FETCH_FITNESSLIST_PAGING" });
  }, [dispatch]);

  return (
    <>
      <tbody
        style={{
          height: "60vh",
          overflowY: "auto",
          display: "block",
        }}
      >
        {data.content.map((fitness) => (
          <FitnessItem key={fitness.id} fitness={fitness} />
        ))}
        <LineChart data={inbody(data)} />
      </tbody>
      <tfoot
        style={{
          height: "5vh",
        }}
      >
        <tr>
          <td>
            <FitnessPagination
              totalElements={data.totalElements}
              page={data.page}
              size={data.size}
            />
          </td>
        </tr>
      </tfoot>
    </>
  );
};

export default FitnessList;
