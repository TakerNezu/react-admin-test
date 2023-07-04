import { useMediaQuery } from "@mui/material";
import {List, Datagrid, TextField, EmailField, SimpleList} from 'react-admin'

export const UserList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <List>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.username}
          tertiaryText={(record) => record.email}
        />
      ) : (
        <Datagrid rowClick="edit">
          <TextField source="id" label="ID"/>
          <TextField source="name" lable="指名"/>
          <TextField source="username" label="アカウント名"/>
          <EmailField source="email"/>
          <TextField source="address.street" label="住所"/>
          <TextField source="phone" label="電話番号"/>
          <TextField source="website" label="ウェブサイト"/>
          <TextField source="company.name" label="会社名"/>
        </Datagrid>
      )}
    </List>
  );
}
