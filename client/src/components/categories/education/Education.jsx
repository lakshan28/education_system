import React, { forwardRef } from "react";
import MaterialTable from "material-table";
import {
  ListItemText,
  Typography,
  Grid,
  Button,
  ListItem,
  ListItemIcon,
} from "@material-ui/core";

import AddBox from "@material-ui/icons/AddBoxOutlined";
import ArrowUpward from "@material-ui/icons/ArrowUpwardOutlined";
import Check from "@material-ui/icons/CheckOutlined";
import ChevronLeft from "@material-ui/icons/ChevronLeftOutlined";
import ChevronRight from "@material-ui/icons/ChevronRightOutlined";
import Clear from "@material-ui/icons/ClearOutlined";
import DeleteRounded from "@material-ui/icons/DeleteOutlined";
import LockOpenRounded from "@material-ui/icons/LockOpenOutlined";
import Edit from "@material-ui/icons/EditOutlined";
import FilterList from "@material-ui/icons/FilterListOutlined";
import FirstPage from "@material-ui/icons/FirstPageOutlined";
import LastPage from "@material-ui/icons/LastPageOutlined";
import Remove from "@material-ui/icons/RemoveOutlined";
import SaveAlt from "@material-ui/icons/SaveAltOutlined";
import Search from "@material-ui/icons/SearchOutlined";
import ViewColumn from "@material-ui/icons/ViewColumnOutlined";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import Refresh from "@material-ui/icons/RefreshOutlined";
import DevicesOtherOutlined from "@material-ui/icons/DevicesOtherOutlined";

import AddEducation from "./AddEducation";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteRounded {...props} ref={ref} />),
  Lock: forwardRef((props, ref) => <LockOpenRounded {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  Refresh: forwardRef((props, ref) => <Refresh {...props} ref={ref} />),
};

function Education(props) {
  const { classes } = props;

  let tableRef = React.createRef();

  const [message, setMessage] = React.useState("Loading");

  //add education Dialog open and close state
  const [dialogOpenState, setDialogOpenState] = React.useState(false);

  //add education close Dialog
  const handleDialogClose = React.useCallback(() => {
    setDialogOpenState(false);
  }, []);

  let state = {
    columns: [
      {
        title: "Institute",
        field: "institute",
        editable: "never",
      },
      {
        title: "Duration",
        field: "duration",
        editable: "never",
      },
    ],
  };
  // table refresh
  const refreshTable = () => {
    tableRef.current && tableRef.current.onQueryChange();
  };

  return (
    <>
      <AddEducation
        classes={classes}
        dialogOpenState={dialogOpenState}
        handleDialogClose={handleDialogClose}
        refreshTable={refreshTable}
      />

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" noWrap>
            Education
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" noWrap>
            Add your education
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Button
            onClick={() => setDialogOpenState(true)}
            variant="contained"
            className={classes.addBtn}
            startIcon={<AddCircleIcon />}
          >
            Add Education
          </Button>
        </Grid>
        <Grid
          container
          item
          xs={12}
          style={{ marginTop: "2rem", width: "100%" }}
        >
          <MaterialTable
            style={{
              opacity: "0.8",
              borderRadius: " 20px 20px 20px 20px",
              width: "100%",
            }}
            tableRef={tableRef}
            title={
              <ListItem disableGutters={true}>
                <ListItemIcon style={{ margin: "30px 10px 30px 10px" }}>
                  <DevicesOtherOutlined
                    style={{
                      color: "#383E47",
                      width: "35px",
                      height: "35px",
                    }}
                  />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="h6">Education Details</Typography>
                </ListItemText>
              </ListItem>
            }
            columns={state.columns}
            // data={data}
            data={(query) =>
              new Promise((resolve, reject) => {
                const urlget = "/api/education";
                fetch(urlget)
                  .then((response) => response.json())
                  .then(async (result) => {
                    console.log(result);
                    if (result.length > 0) {
                      resolve({
                        data: result,
                        page: result.page,
                        totalCount: result.total + 1,
                      });
                    } else {
                      await setMessage("Could not reach the server");
                      resolve({
                        data: [],
                        page: 0,
                        totalCount: 1,
                      });
                    }
                  });
              }).catch((err) => console.log(err))
            }
            icons={tableIcons}
            editable={{
              onRowDelete: (oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(async () => {
                    const packet = {
                      method: "DELETE",
                    };

                    const url = `/api/education/${oldData._id}`;
                    await fetch(url, packet)
                      .then((response) => response.json())
                      .then((result) => {
                        console.log(result);
                      })
                      .catch((err) => console.log(err));

                    resolve();
                  }, 1000);
                }),
            }}
            options={{
              actionsColumnIndex: -1,
              headerStyle: {
                fontSize: "1rem",
                backgroundColor: "#595E65",
                opacity: "80%",
                color: "#FFFFFF",
              },
              sorting: true,
              rowStyle: {
                padding: "5rem",
                height: "4rem",
              },
              columnsButton: true,
              exportButton: true,
              exportAllData: true,
              loadingType: "linear",
              paginationType: "stepped",
              search: true,
            }}
            localization={{
              body: {
                editRow: {
                  deleteText: "Are you sure delete this Education?",
                },
                emptyDataSourceMessage: message,
              },
            }}
          />
        </Grid>
        <Grid container item xs={12} justify="space-between">
          <Button variant="contained" className={classes.nextbtn}>
            Back
          </Button>
          <Button variant="contained" className={classes.nextbtn}>
            Next
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Education;
