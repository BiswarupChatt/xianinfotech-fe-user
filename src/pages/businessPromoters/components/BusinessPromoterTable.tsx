import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TextField,
  Paper,
  CircularProgress,
  Box,
  Typography,
} from "@mui/material";
import axios from "axios";

interface User {
  _id: string;
  name: string;
  phone: string;
  businessIncome: string;
  status: string;
}

export default function BusinessPromoterTable() {
  const [rows, setRows] = useState<User[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setPage(0);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://xianinfotech-be.onrender.com/api/promoter", {
          params: {
            search: searchQuery,
            page: page + 1,
            limit: rowsPerPage,
          },
        });
        console.log(response.data);
        setRows(response.data.promoters);
        setTotalCount(response.data.totalCount);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, rowsPerPage, searchQuery]);

  return (
    <div>
      <Typography variant="h5" sx={{ mt: 3 }}>
        Get Help
      </Typography>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchQuery}
        onChange={handleSearch}
      />

      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          minHeight="200px"
        >
          <CircularProgress />
          <Typography>It May take some time to load</Typography>
        </Box>
      ) : (
        <TableContainer component={Paper}>
          <Table aria-label="user table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row._id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell>₹{row.businessIncome}</TableCell>
                  <TableCell>{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={totalCount}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}
