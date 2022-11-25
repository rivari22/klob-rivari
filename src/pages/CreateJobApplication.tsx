import {
  Container,
  FormControl,
  Grid,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React from "react";

type CreateJobApplicationProps = {};

const CreateJobApplication = (props: CreateJobApplicationProps) => {
  return (
    <Container>
      <Typography>Buat Lowongan Pekerjaan:</Typography>
      <FormControl sx={{ width: "100%" }} variant="outlined">
        <Typography htmlFor="" component={"label"}>
          Logo Perusahaan
        </Typography>
        <OutlinedInput
          // id="outlined-adornment-weight"
          value={""}
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
          value={""}
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
          value={""}
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
          value={""}
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
              value={""}
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
        </Grid>
        <Grid item xs={2}>
          <Typography textAlign="center">sampai dengan</Typography>
        </Grid>
        <Grid item xs={5}>
          <FormControl sx={{ width: "100%" }} variant="outlined">
            <OutlinedInput
              // id="outlined-adornment-weight"
              value={""}
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
        </Grid>
      </Grid>
      <FormControl sx={{ width: "100%" }} variant="outlined">
        <Typography htmlFor="" component={"label"}>
          Tanggal Posting
        </Typography>
        <OutlinedInput
          // id="outlined-adornment-weight"
        //   value={""}
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
    </Container>
  );
};

export default CreateJobApplication;
