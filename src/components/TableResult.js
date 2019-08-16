import React from "react";
import { Table } from "antd";
import PropTypes from "prop-types";

const TableResult = ({ result }) => {
  return (
    <div className="table-box">
      {console.log("sebelumResult", result)}
      {result && (result.length > 0 || result > 0) && (
        <div>
          {console.log("sesudahResult", result)}
          <Table
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
                  return <span>{result}</span>;
                }
              }
            ]}
          />
        </div>
      )}
    </div>
  );
};

TableResult.propTypes = {
  result: PropTypes.any
};

export default TableResult;
