import React, { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getData } from "../Redux/AppReducer/actions";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const itemData = useSelector((state) => state.AppReducer.Data);
  console.log(itemData);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  return (
    <>
      <div>Dashboard</div>
      <TableContainer>
        <Table variant="normal" colorScheme={'blue'}>
          <Thead>
            <Tr>
              <Th>S.No.</Th>
              <Th>item name</Th>
              <Th>Quantity</Th>
            </Tr>
          </Thead>
          {itemData?.map((el, index) => (
            <Tbody key={el._id}>
              <Tr>
                <Td>{index + 1}</Td>
                <Td>{el.itemName}</Td>
                <Td>{el.qty}</Td>
              </Tr>
            </Tbody>
          ))}
        </Table>
      </TableContainer>
    </>
  );
};

export default Dashboard;
