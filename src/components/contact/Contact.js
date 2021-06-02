
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
  formRoot: {
    display: "flex",
    height: theme.typography.fontSize * 2,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  container: {
    [theme.breakpoints.up("lg")]: {
      marginTop: "80px",
    },
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& > *": {
        margin: theme.spacing(1),
      },
    },

    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },

   
  },
}));





  const classes = useStyles();

  return (
    <>
      

      <table>
        <thead>
          <tr>
            <th></th>
            <th>이름</th>
            <th>전화번호</th>
            <th>이메일</th>
            <th></th>
          </tr>
        </thead>
        <tbody ref={t_body}>
          {" "}
          {inputvalue.map((value, index) => (
            <tr key={index}>
              <td>
                <ButtonGroup
                  color="primary"
                  aria-label="outlined primary button group"
                >
                  <Button
                    onClick={() => {
                      remove(index);
                    }}
                  >
                    DELETE
                  </Button>
                </ButtonGroup>
              </td>

              <td>
                {!value.isEdit && <span>{value.name}</span>}
                {value.isEdit && (
                  <input type="text" defaultValue={value.name}></input>
                )}
              </td>
              <td>
                {!value.isEdit && <span>{value.num}</span>}
                {value.isEdit && (
                  <input type="text" defaultValue={value.num}></input>
                )}
              </td>
              <td>
                {!value.isEdit && <span>{value.mail}</span>}
                {value.isEdit && (
                  <input type="text" defaultValue={value.mail}></input>
                )}
              </td>
              <td>
                <ButtonGroup
                  color="primary"
                  aria-label="outlined primary button group"
                >
                  {!value.isEdit && (
                    <Button
                      onClick={() => {
                        edit(index);
                      }}
                    >
                      edit
                    </Button>
                  )}
                  {value.isEdit && (
                    <Button
                      onClick={() => {
                        save(index);
                      }}
                    >
                      save
                    </Button>
                  )}
                  {value.isEdit && (
                    <Button
                      onClick={() => {
                        cancel(index);
                      }}
                    >
                      cancel
                    </Button>
                  )}
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Contact;
