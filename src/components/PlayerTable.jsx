import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default class PlayerTable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      rows: this.props.rows
    }
  }

  render() {
    if (!this.state.rows) return

    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>First name</TableCell>
              <TableCell align="right">Last name</TableCell>
              <TableCell align="right">Position</TableCell>
              <TableCell align="right">Height</TableCell>
              <TableCell align="right">Team</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.first_name}
                </TableCell>
                <TableCell align="right">{row.last_name}</TableCell>
                <TableCell align="right">{row.position}</TableCell>
                <TableCell align="right">{
                  row.height_feet && row.height_inches
                  ? (Number(row.height_feet * 0.3048 + row.height_inches * 0.0254).toFixed(2))
                  : '-'
                }</TableCell>
                <TableCell align="right">{row.team.full_name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
