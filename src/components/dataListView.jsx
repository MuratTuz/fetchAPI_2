import { Table } from "react-bootsrap";

/**
 * This component creates a table view of JSON data
 *
 * @param {[JSON]} params JSON array 
 * @returns Table view HTML codes
 */

const TableHeader = (params) => (
  <tr>
    <th>No</th>
    {/* Create header fields of the table using first JSON array of index 0. 
        Here is just used key of the first JSON array element */}
    {Object.keys(params.data[0]).map(({ objKey, objValue }, index) => (
      <th key={`th${index}`}>{objKey}</th>
    ))}
  </tr>
);

const TableBody = (params) =>
  params.data.map((element, index) => {
    return (
      <tr key={`tr${index}`}>
        <td>{index}</td>
        {/* Create table body values using whole JSON array. 
            Here is just used the values of the JSON array */}
        {Object.values(element).map(({ objKey, objValue }, index) => (
          <td key={`td${index}`}>{objValue}</td>
        ))}
      </tr>
    );
  });

const DataListView = (params) => {
  return (
    <Table responsive striped bordered hover>
      <thead>
        <TableHeader data={params.data} />
      </thead>
      <tbody>
        <TableBody data={params.data} />
      </tbody>
    </Table>
  );
};

export default DataListView;
