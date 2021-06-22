// npm install react-super-responsive-table
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const tableColor = (val) => {
  let color = "#329fff";

  if (val > 10 && val <= 20) {
    color = "#00c73c";
  } else if (val > 20 && val <= 28) {
    color = "#fd9b5a";
  } else if (val > 28) {
    color = "#ff5959";
  }

  return tableColor;
};

const transCityName = (data) => {};

const ResponsiveTable = ({ data }) => {
  console.log("--table data--");
  console.log(data[0]);

  return (
    // <Table >
    data.length > 0 && (
      <Table style={{ borderCollapse: "collapse" }}>
        <Thead>
          <Tr>
            {Object.keys(data[0]).map((key, index) => (
              <Th
                style={{
                  borderBottom: "1px solid rgba(224, 224, 224)",
                  lineHeight: "2rem",
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
              }}
            >
              {Object.keys(item).map((key, index) => (
                <Td
                  style={{
                    borderBottom: "1px solid rgba(224, 224, 224)",
                    lineHeight: "2rem",
                  }}
                  key={`td-${index}`}
                >
                  {["지역"].indexOf(key) > -1 ? (
                    <span
                      style={{
                        color: item.구분 === "#8884d8",
                      }}
                    >
                      {item[key]}
                    </span>
                  ) : (
                    <span
                      style={{
                        color: item.구분 === "PM10",
                        //  tableColor(item[key])
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
