import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import {UserList} from './users'

export const App = () => (
  <Admin dataProvider={dataProvider}>
    {/*追加*/}
    <Resource name="users" list={UserList} />
  </Admin>
);
