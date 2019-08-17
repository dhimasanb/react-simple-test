import React from "react";
import { Table, Divider } from "antd";
import PropTypes from "prop-types";

const TableResult = ({ result }) => {
  return (
    <React.Fragment>
      {result && (result.length > 0 || result > 0) && (
        <div>
          <Divider />
          <Table
            id="table-result"
            showHeader={false}
            pagination={false}
            dataSource={[
              {
                key: "Result",
                no: "Result",
                result: "Result"
              }
            ]}
            columns={[
              {
                title: "Result",
                dataIndex: "result",
                key: "result",
                width: 200,
                render: () => {
                  return <span>Result</span>;
                }
              },
              {
                title: null,
                dataIndex: null,
                key: null,
                width: 200,
                render: () => {
                  return <span id="result">{result}</span>;
                }
              }
            ]}
          />
        </div>
      )}
    </React.Fragment>
  );
};

TableResult.propTypes = {
  result: PropTypes.any
};

export default TableResult;
