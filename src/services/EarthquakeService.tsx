import * as React from "react";

export const getDataSource = (dataSource: string) => {
  return fetch(dataSource, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      }
  ).then(function (response) {
    return response.json();
  });
}

