import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import { StyledTableCell, StyledTableRow } from '../../theme-styles';
import { formatTimeStation } from '../../helpers';
import './Content.scss';

export const ContentExpansionBody = ({ passList }) => {
  return (
    <TableContainer className="table">
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
};
