import {
  Button,
  Container,
  FormControl,
  Grid,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { JobListContext } from "../context/JobListContextProvider";
import generateStringRandom from "../helpers/generateStringRandom";

const CreateJobApplicationPage = () => {
  const { jobList, setJobList } = useContext(JobListContext);

  const [dataField, setDataField] = useState<any>({
    corporateLogo: "",
    corporateName: "",
    positionName: "",
    status: "",
    salaryFrom: "",
    salaryTo: "",
    postedDate: null,
  });

  const handleOnChangeInput = (e: any) => {
    setDataField((prev: any) => ({
      ...prev,
      [e.target?.name]: e.target?.value,
    }));
  };

  const handleSave = () => {
    const payload = {
      jobVacancyCode: generateStringRandom(12),
      ...dataField,
      applied: false,
      descriptions: "",
      corporateId: generateStringRandom(6),
      salaryFrom: +dataField.salaryFrom,
      salaryTo: +dataField.salaryTo,
    };

    const newData = [...jobList, payload];
    setJobList(newData);
  };

  return (
    <Container>
      <Typography>Buat Lowongan Pekerjaan:</Typography>
      <FormControl sx={{ width: "100%" }} variant="outlined">
        <Typography htmlFor="" component={"label"}>
          Logo Perusahaan
        </Typography>
        <OutlinedInput
          name="corporateLogo"
          onChange={handleOnChangeInput}
          value={dataField.corporateLogo}
          // id="outlined-adornment-weight"
          style={{ height: "30px" }}
          placeholder="Ketikan Logo Perusahaan"
          // onChange={handleChange("weight")}
          // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
          // aria-describedby="outlined-weight-helper-text"
          // inputProps={{
          //   "aria-label": "weight",
          // }}
        />
      </FormControl>
      <FormControl sx={{ width: "100%" }} variant="outlined">
        <Typography htmlFor="" component={"label"}>
          Nama Perusahaan
        </Typography>
        <OutlinedInput
          // id="outlined-adornment-weight"
          name="corporateName"
          onChange={handleOnChangeInput}
          value={dataField.corporateName}
          style={{ height: "30px" }}
          placeholder="Ketikan Logo Perusahaan"
          // onChange={handleChange("weight")}
          // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
          // aria-describedby="outlined-weight-helper-text"
          // inputProps={{
          //   "aria-label": "weight",
          // }}
        />
      </FormControl>
      <FormControl sx={{ width: "100%" }} variant="outlined">
        <Typography htmlFor="" component={"label"}>
          Nama Lowongan
        </Typography>
        <OutlinedInput
          // id="outlined-adornment-weight"
          name="positionName"
          onChange={handleOnChangeInput}
          value={dataField.positionName}
          style={{ height: "30px" }}
          placeholder="Ketikan Nama Lowongan"
          // onChange={handleChange("weight")}
          // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
          // aria-describedby="outlined-weight-helper-text"
          // inputProps={{
          //   "aria-label": "weight",
          // }}
        />
      </FormControl>
      <FormControl sx={{ width: "100%" }} variant="outlined">
        <Typography htmlFor="" component={"label"}>
          Status Karyawan
        </Typography>
        <OutlinedInput
          // id="outlined-adornment-weight"
          name="status"
          onChange={handleOnChangeInput}
          value={dataField.status}
          style={{ height: "30px" }}
          placeholder="Ketikan Status Karyawan"
          // onChange={handleChange("weight")}
          // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
          // aria-describedby="outlined-weight-helper-text"
          // inputProps={{
          //   "aria-label": "weight",
          // }}
        />
      </FormControl>
      <Typography>Kisaran Gaji Karyawan</Typography>
      <Grid container>
        <Grid item xs={5}>
          <FormControl sx={{ width: "100%" }} variant="outlined">
            <OutlinedInput
              // id="outlined-adornment-weight"
              name="salaryFrom"
              onChange={handleOnChangeInput}
              value={dataField.salaryFrom}
              style={{ height: "30px" }}
              placeholder="Ketikan Status Karyawan"
              type="number"
              // onChange={handleChange("weight")}
              // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
              // aria-describedby="outlined-weight-helper-text"
              // inputProps={{
              //   "aria-label": "weight",
              // }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <Typography textAlign="center">sampai dengan</Typography>
        </Grid>
        <Grid item xs={5}>
          <FormControl sx={{ width: "100%" }} variant="outlined">
            <OutlinedInput
              // id="outlined-adornment-weight"
              name="salaryTo"
              onChange={handleOnChangeInput}
              value={dataField.salaryTo}
              style={{ height: "30px" }}
              placeholder="Ketikan Status Karyawan"
              type="number"
              // onChange={handleChange("weight")}
              // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
              // aria-describedby="outlined-weight-helper-text"
              // inputProps={{
              //   "aria-label": "weight",
              // }}
            />
          </FormControl>
        </Grid>
      </Grid>
      <FormControl sx={{ width: "100%" }} variant="outlined">
        <Typography htmlFor="" component={"label"}>
          Tanggal Posting
        </Typography>
        <OutlinedInput
          // id="outlined-adornment-weight"
          //   value={""}
          name="postedDate"
          onChange={handleOnChangeInput}
          value={dataField.postedDate}
          style={{ height: "30px" }}
          placeholder="Ketikan Logo Perusahaan"
          type="date"
          // onChange={handleChange("weight")}
          // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
          // aria-describedby="outlined-weight-helper-text"
          // inputProps={{
          //   "aria-label": "weight",
          // }}
        />
      </FormControl>
      <Button onClick={handleSave} variant="contained">
        Simpan
      </Button>
    </Container>
  );
};

export default CreateJobApplicationPage;
