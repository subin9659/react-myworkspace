// npm install react-super-responsive-table
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const tableColor = (val) => {
  let color = "#329fff";

  if (val > 10 && val <= 20) {
    color = "#0066CC";
  } else if (val > 20 && val <= 28) {
    color = "#999999";
  } else if (val > 28) {
    color = "#FF0033";
  }
  return color;
};

const ResponsiveTable = ({ data }) => {
  console.log("--table data--");
  //console.log(data);

  return (
    data.length > 0 && (
      <Table style={{ borderCollapse: "collapse" }}>
        <Thead>
          <Tr>
            {Object.keys(data[0]).map((key, index) => (
              <Th
                style={{
                  borderBottom: "1px solid rgba(224, 224, 224)",
                  fontsize: "0.5rem",
                  lineheight: "2rem",
                  fontWeight: "bold",
                }}
                key={`th-${index}`}
              >
                {key}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item) => (
            <Tr
              key={`tr-${item.지역}`}
              style={{
                border: "0px",
                borderBottom: "1px solid rgba(224, 224, 224)",
                fontsize: "0.5rem",
                lineheight: "1.5rem",
                color: "F000000",
              }}
            >
              {Object.keys(item).map((key, index) => (
                <Td
                  style={{
                    borderBottom: "1px solid rgba(224, 224, 224)",
                    fontsize: "0.5rem",
                    lineheight: "1.5rem",
                  }}
                  key={`td-${index}`}
                >
                  {["지역"].indexOf(key) > -1 ? (
                    <span
                      style={{
                        color:
                          item.지역 == "서울" ||
                          item.지역 == "인천" ||
                          item.지역 == "강원" ||
                          item.지역 == "전북" ||
                          item.지역 == "제주"
                            ? "#8884d8"
                            : "#82ca9d",
                      }}
                    >
                      {item[key]}
                    </span>
                  ) : (
                    <span
                      style={{
                        color: tableColor(item[key]),
                      }}
                    >
                      {item[key]}
                    </span>
                  )}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    )
  );
};

export default ResponsiveTable;
