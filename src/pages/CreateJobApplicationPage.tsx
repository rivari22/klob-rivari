import {
  Alert,
  Button,
  Container,
  FormControl,
  Grid,
  OutlinedInput,
  Snackbar,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Title from "../components/Title/Title";
import { JobListContext, JobListType } from "../context/JobListContextProvider";
import generateStringRandom from "../helpers/generateStringRandom";

type FormInput = Omit<
  JobListType,
  | "jobVacancyCode"
  | "corporateId"
  | "applied"
  | "descriptions"
  | "salaryFrom"
  | "salaryTo"
> & {
  salaryFrom: number | string;
  salaryTo: number | string;
};

const initValueInput: FormInput = {
  corporateLogo: "",
  corporateName: "",
  positionName: "",
  postedDate: "",
  salaryFrom: "",
  salaryTo: "",
  status: "",
};

const CreateJobApplicationPage = () => {
  const { jobList, setJobList } = useContext(JobListContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInput>();

  // TODO: CREATE CUSTOM HOOKS
  const [openSnackbar, setOpenSnackbar] = useState<{
    open: boolean;
    message: string;
    type: "error" | "success";
  }>({
    open: false,
    message: "",
    type: "success",
  });

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    const payload = {
      ...data,
      jobVacancyCode: generateStringRandom(12),
      applied: false,
      descriptions: "",
      corporateId: generateStringRandom(6),
      salaryFrom: +data.salaryFrom,
      salaryTo: +data.salaryTo,
    };
    const newData = [...jobList, payload];
    setJobList(newData);
    setOpenSnackbar({
      open: true,
      message: "Berhasil membuat lowongan pekerjaan baru",
      type: "success",
    });
    reset(initValueInput);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar((prev) => ({
      ...prev,
      open: false,
      message: "",
    }));
  };

  useEffect(() => {
    const errorTemp = Object.values(errors);
    if (errors && errorTemp.length) {
      setOpenSnackbar({
        open: true,
        message: errorTemp.map((error) => error.message).join(", "),
        type: "error",
      });
    }
  }, [errors]);

  return (
    <Container>
      {/* TODO: CREATE TOAST TO GLOBAL COMPONENT */}
      <Snackbar
        open={openSnackbar.open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Note archived"
        key={"top right"}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity={openSnackbar.type}>{openSnackbar.message}</Alert>
      </Snackbar>
      <Title>Buat Lowongan Pekerjaan:</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl sx={{ width: "100%", margin: "16px 0px 8px 0px" }}>
          <Typography htmlFor="corporateLogo" component={"label"} zIndex={2}>
            Logo Perusahaan
          </Typography>
          <OutlinedInput
            {...register("corporateLogo", {
              required: "Logo perusahaan wajib diisi",
            })}
            error={Boolean(errors.corporateLogo)}
            style={{ height: "30px", color: "black" }}
            placeholder="Ketikan Logo Perusahaan"
          />
          {errors?.corporateLogo && (
            <Typography zIndex={2} color="red" fontSize="12px">
              {errors.corporateLogo.message}
            </Typography>
          )}
        </FormControl>
        <FormControl
          sx={{ width: "100%", marginBottom: "8px" }}
          variant="outlined"
        >
          <Typography htmlFor="corporateName" component={"label"} zIndex={2}>
            Nama Perusahaan
          </Typography>
          <OutlinedInput
            {...register("corporateName", {
              required: "Nama Perusahaan wajib diisi",
            })}
            error={Boolean(errors.corporateName)}
            style={{ height: "30px" }}
            placeholder="Ketikan Logo Perusahaan"
          />
          {errors?.corporateName && (
            <Typography zIndex={2} color="red" fontSize="12px">
              {errors.corporateName.message}
            </Typography>
          )}
        </FormControl>
        <FormControl
          sx={{ width: "100%", marginBottom: "8px" }}
          variant="outlined"
        >
          <Typography htmlFor="positionName" component={"label"} zIndex={2}>
            Nama Lowongan
          </Typography>
          <OutlinedInput
            {...register("positionName", {
              required: "Nama Lowongan wajib diisi",
            })}
            style={{ height: "30px" }}
            placeholder="Ketikan Nama Lowongan"
            error={Boolean(errors.positionName)}
          />
          {errors?.positionName && (
            <Typography zIndex={2} color="red" fontSize="12px">
              {errors.positionName.message}
            </Typography>
          )}
        </FormControl>
        <FormControl
          sx={{ width: "100%", marginBottom: "8px" }}
          variant="outlined"
        >
          <Typography htmlFor="status" component={"label"} zIndex={2}>
            Status Karyawan
          </Typography>
          <OutlinedInput
            {...register("status", { required: "Status Karyawan wajib diisi" })}
            style={{ height: "30px" }}
            placeholder="Ketikan Status Karyawan"
            error={Boolean(errors.status)}
          />
          {errors?.status && (
            <Typography zIndex={2} color="red" fontSize="12px">
              {errors.status.message}
            </Typography>
          )}
        </FormControl>
        <Typography zIndex={2}>Kisaran Gaji Karyawan</Typography>
        <Grid container mb={"8px"}>
          <Grid item xs={5}>
            <FormControl sx={{ width: "100%" }} variant="outlined">
              <OutlinedInput
                {...register("salaryFrom", {
                  required: "Kisaran mulai gaji karyawan wajib diisi",
                  valueAsNumber: true,
                })}
                style={{ height: "30px" }}
                placeholder="500000"
                type="number"
                error={Boolean(errors.salaryFrom)}
              />
              {errors?.salaryFrom && (
                <Typography zIndex={2} color="red" fontSize="12px">
                  {errors.salaryFrom.message}
                </Typography>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <Typography textAlign="center">sampai dengan</Typography>
          </Grid>
          <Grid item xs={5}>
            <FormControl sx={{ width: "100%" }} variant="outlined">
              <OutlinedInput
                {...register("salaryTo", {
                  required: "Kisaran maksimal gaji karyawan wajib diisi",
                  valueAsNumber: true,
                })}
                style={{ height: "30px" }}
                placeholder="10000000"
                type="number"
                error={Boolean(errors.salaryTo)}
              />
              {errors?.salaryTo && (
                <Typography zIndex={2} color="red" fontSize="12px">
                  {errors.salaryTo.message}
                </Typography>
              )}
            </FormControl>
          </Grid>
        </Grid>
        <FormControl
          sx={{ width: "100%", marginBottom: "12px" }}
          variant="outlined"
        >
          <Typography htmlFor="postedDate" component={"label"} zIndex={2}>
            Tanggal Posting
          </Typography>
          <OutlinedInput
            {...register("postedDate", {
              required: "Tanggal posting wajib diisi",
            })}
            style={{ height: "30px" }}
            type="date"
            error={Boolean(errors.postedDate)}
          />
          {errors?.postedDate && (
            <Typography zIndex={2} color="red" fontSize="12px">
              {errors.postedDate.message}
            </Typography>
          )}
        </FormControl>
        <Button variant="contained" type="submit">
          Simpan
        </Button>
      </form>
    </Container>
  );
};

export default CreateJobApplicationPage;
