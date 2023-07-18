import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function useQueryParams() {
  const { search } = useLocation();

  const onDecodeParams = useCallback((params) => {
    const replaceFirst = params.replace("?", "");
    const spliteString = replaceFirst.split("&");

    console.log(spliteString.map(query => {
    }))

  }, []);

  useEffect(() => {
    if (search.trim()) {
      onDecodeParams(search);
    }
  }, [onDecodeParams, search]);
}
