import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import { formatTimeStation } from '../../helpers';
import { useContentExpansionBodyStyles } from '../../styles';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export const ContentExpansionBody = ({ passList }) => {
  const classes = useContentExpansionBodyStyles();

  return (
    <TableContainer className={classes.table}>
      <Table aria-label="customized table">
        <TableBody>
          {passList.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell>
                {row.arrival ? formatTimeStation(row.arrival) : '??:??'}
              </StyledTableCell>
              <StyledTableCell>{row.station.name}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}