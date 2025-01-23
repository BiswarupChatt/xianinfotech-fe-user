import { Box, Button, MenuItem, Modal, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string()
    .length(10, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  refferedBy: Yup.string().required("Referred By is required"),
  businessPromoters: Yup.string().required("Business Promoters is required"),
  businessIncome: Yup.number().required("Business Income is required"),
  status: Yup.string()
    .oneOf(["active", "inactive"], "Invalid status")
    .required("Status is required"),
  receivePayment: Yup.string()
    .oneOf(["accept", "decline"], "Invalid payment status")
    .required("Payment receipt status is required"),
});

interface UserCreateModalProps {
  createModalOpen: boolean;
  handleCreateModalToggle: () => void;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "stretch",
};

export default function CreateUserModal({
  createModalOpen,
  handleCreateModalToggle,
}: UserCreateModalProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: any) => {
    (async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/promoter",
          data
        );
        console.log("created", response.data);
        alert("User Created Successfully");
        handleCreateModalToggle();
      } catch (error) {
        console.error("Error updating data:", error);
      }
    })();
    console.log(data);
  };

  return (
    <Modal
      open={createModalOpen}
      onClose={handleCreateModalToggle}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            position: "relative",
            top: "0px",
            left: "0px",
            backgroundColor: "#002855",
            color: "#fff",
          }}
        >
          <Typography sx={{ m: 2 }} textAlign="center" variant="h5">
            Create New User
          </Typography>
        </Box>
        <Box sx={{ p: 3 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Name"
                    variant="outlined"
                    error={!!errors.name}
                    helperText={errors.name?.message}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Email"
                    variant="outlined"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Phone"
                    variant="outlined"
                    error={!!errors.phone}
                    helperText={errors.phone?.message}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Controller
                name="refferedBy"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Referred By"
                    variant="outlined"
                    error={!!errors.refferedBy}
                    helperText={errors.refferedBy?.message}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Controller
                name="businessPromoters"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Business Promoters"
                    variant="outlined"
                    error={!!errors.businessPromoters}
                    helperText={errors.businessPromoters?.message}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Controller
                name="businessIncome"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Business Income"
                    variant="outlined"
                    error={!!errors.businessIncome}
                    helperText={errors.businessIncome?.message}
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Controller
                name="status"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    fullWidth
                    label="Status"
                    variant="outlined"
                    error={!!errors.status}
                    helperText={errors.status?.message}
                  >
                    <MenuItem value="active">Active</MenuItem>
                    <MenuItem value="inactive">Inactive</MenuItem>
                  </TextField>
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Controller
                name="receivePayment"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    fullWidth
                    label="Receive Payment"
                    variant="outlined"
                    error={!!errors.receivePayment}
                    helperText={errors.receivePayment?.message}
                  >
                    <MenuItem value="accept">Accept</MenuItem>
                    <MenuItem value="decline">Decline</MenuItem>
                  </TextField>
                )}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#002855" }}
            onClick={handleSubmit(onSubmit)}
          >
            Save Changes
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
